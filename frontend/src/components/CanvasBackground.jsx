import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);

  // Load Images
  useEffect(() => {
    fetch('/frames-optimized.json')
      .then((res) => res.json())
      .then((frameFiles) => {
        const loadedImages = [];
        let count = 0;
        
        frameFiles.forEach((file, index) => {
          const img = new Image();
          img.src = `/frames-optimized/${file}`;
          img.onload = () => {
            count++;
            setLoadedCount(count);
            // Render first frame as soon as it loads to prevent blank screen
            if (count === 1 && index === 0) {
              drawFrame(img);
            }
          };
          loadedImages[index] = img;
        });
        
        setImages(loadedImages);
      })
      .catch((err) => console.error('Failed to load frames:', err));
  }, []);

  const drawFrame = (img, scaleOverride) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    
    // ----------------------------------------------------------------
    // High-DPI / Retina Rendering
    // ----------------------------------------------------------------
    // devicePixelRatio tells us how many physical pixels per CSS pixel.
    // By scaling the internal canvas dimensions up, but keeping the CSS width/height
    // at 100%, we achieve razor-sharp rendering on modern dense displays.
    const dpr = window.devicePixelRatio || 1;
    
    // Set actual internal size in memory to match device resolution
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    
    // Scale all drawing operations by dpr so we don't have to manually multiply coordinates
    ctx.scale(dpr, dpr);
    
    // Calculate aspect ratios using the logical window size
    const logicalWidth = window.innerWidth;
    const logicalHeight = window.innerHeight;

    // Apply scaling. Since watermarks are removed, we use 1.0 (no crop) for maximum quality.
    const SCALE_FACTOR = scaleOverride ?? 1.0;
    
    const canvasRatio = logicalWidth / logicalHeight;
    const imageRatio = img.width / img.height;
    
    let drawWidth, drawHeight;
    
    if (canvasRatio > imageRatio) {
      // Widescreen
      drawWidth = logicalWidth * SCALE_FACTOR;
      drawHeight = (logicalWidth / imageRatio) * SCALE_FACTOR;
    } else {
      // Tallscreen / Mobile
      drawHeight = logicalHeight * SCALE_FACTOR;
      drawWidth = (logicalHeight * imageRatio) * SCALE_FACTOR;
    }
    
    // Center the image
    const x = (logicalWidth - drawWidth) / 2;
    const y = (logicalHeight - drawHeight) / 2;

    // High Quality Image Processing flag
    ctx.imageSmoothingQuality = "high";
    ctx.clearRect(0, 0, logicalWidth, logicalHeight);
    ctx.drawImage(img, x, y, drawWidth, drawHeight);
  };

  // GSAP ScrollTrigger Setup
  useEffect(() => {
    if (images.length === 0) return;

    // We store the frame index context in an object so GSAP can animate the value
    const frameObj = { frame: 0 };
    const maxFrames = images.length - 1;

    // Ensure first frame is drawn immediately upon GSAP mount
    if (images[0] && images[0].complete) {
       drawFrame(images[0]);
    }

    const scrollTrigger = ScrollTrigger.create({
      trigger: document.documentElement, // Map to entire scrollable page
      start: 'top top',
      end: 'bottom bottom', // Ends precisely when the user reaches the footer
      scrub: 0.5, // Lerping/Easing! Adds buttery smoothness to the scrub
      animation: gsap.to(frameObj, {
        frame: maxFrames,
        snap: "frame", // Snap to whole numbers for frame index
        ease: "none",  // Linear progression tied strictly to scroll length
        onUpdate: () => {
          const img = images[Math.round(frameObj.frame)];
          if (img && img.complete) {
            // Optional: You can dynamically change scale across frames to simulate camera pushes!
            // E.g., deeper zoom towards the end. For now, static 1.08.
            drawFrame(img, 1.08);
          }
        }
      })
    });

    // Handle Window Resize via GSAP standard refresh
    const handleResize = () => {
      ScrollTrigger.refresh();
      const img = images[Math.round(frameObj.frame)];
      if (img && img.complete) drawFrame(img);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scrollTrigger.kill();
    };
  }, [images]);

  return (
    <div ref={containerRef} className="canvas-container">
      <canvas
        ref={canvasRef}
        style={{
          width: '100vw',
          height: '100vh',
          display: 'block',
          objectFit: 'cover'
        }}
        className="main-canvas"
      />
      {loadedCount < 200 && (
        <div className="loader-overlay">
          <div className="loader-text">
            <span>Loading Experience... {Math.floor((loadedCount / 200) * 100)}%</span>
            <div className="loader-bar" style={{ width: `${(loadedCount / 200) * 100}%`}}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CanvasBackground;
