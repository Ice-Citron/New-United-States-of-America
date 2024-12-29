import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

/**
 * MyCarousel
 * A simple React component that displays a list of images in a responsive carousel.
 * 
 * Props:
 *   images = [{ src, caption }, ...]
 *   width = number (px)
 *   height = number (px)
 */
export default function MyCarousel({
  images = [],
  width = 800,
  height = 400,
  autoPlay = false,
}) 

{
  console.log("[MyCarousel] rendering with images:", images);

  const containerStyle = {
    maxWidth: `${width}px`,
    margin: "1rem auto",
  };

  return (
    <div style={containerStyle}>
      <Carousel
        showArrows
        showStatus={false}
        showIndicators
        infiniteLoop
        useKeyboardArrows
        dynamicHeight={!height}
        autoPlay={autoPlay}
      >
        {images.map((img, idx) => {
          const slideStyle = height
            ? {
                height: `${height}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }
            : {};

          const imgStyle = height
            ? {
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }
            : {};

          return (
            <div key={idx} style={slideStyle}>
              <img src={img.src} alt={img.caption || `Slide ${idx}`} style={imgStyle} />
              {img.caption && <p className="legend">{img.caption}</p>}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
