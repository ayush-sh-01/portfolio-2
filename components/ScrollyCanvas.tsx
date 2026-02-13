"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Track scroll progress relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });



  // Configuration
  const frameCount = 90; // 0 to 89
  
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises: Promise<void>[] = [];

      for (let i = 0; i < frameCount; i++) {
        const promise = new Promise<void>((resolve, reject) => {
          const img = new Image();
          const paddedIndex = i.toString().padStart(2, "0");
          img.src = `/sequence/${paddedIndex}.png`;
          img.onload = () => {
            loadedImages[i] = img;
            resolve();
          };
          img.onerror = (e) => {
             console.error(`Failed to load image ${i}`, e);
             resolve();
          };
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const img = images[index];
    
    // Object-fit: cover logic
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded || images.length === 0) return;
    
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(latest * frameCount)
    );
    
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  useEffect(() => {
    if (isLoaded && images.length > 0) {
      renderFrame(0);
    }
  }, [isLoaded]);

  return (
    <div ref={containerRef} className="h-[500vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover bg-[#121212]"
        />
        
        {/* Overlay Content */}
        <Overlay scrollYProgress={scrollYProgress} />

        {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center text-white/20 z-20">
                Loading Sequence...
            </div>
        )}
      </div>
    </div>
  );
}
