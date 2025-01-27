import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const VideoSlide = ({ src, videoType = "video/mp4", youtube, vimeo, title = "Video", onLoadedData }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', onLoadedData);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', onLoadedData);
        }
      };
    }
  }, [onLoadedData]);

  // ... other iframe conditions stay the same ...

  // Local video file
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <video 
        ref={videoRef}
        controls 
        width="100%" 
        height="100%"
        style={{ 
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain'
        }}
        preload="metadata"
        playsInline
      >
        <source src={src} type={videoType} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default function MyCarousel({
  slides = [],
  width = 800,
  height = 400,
  autoPlay = false,
}) {
  const renderThumbnail = (slide) => {
    if (slide.type === 'video') {
      // Return a default video thumbnail icon or the first frame of the video
      return '/video-thumbnail-icon.png'; // You can create and add this default image to your public folder
    }
    return slide.src;
  };

  return (
    <div style={{ maxWidth: `${width}px`, margin: "1rem auto" }}>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        useKeyboardArrows={true}
        showThumbs={true}
        thumbWidth={80}
        selectedItem={0}
        renderThumbs={() => 
          slides.map((slide, idx) => (
            <div 
              key={idx} 
              style={{
                width: '80px',
                height: '60px',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #ddd'
              }}
            >
              {slide.type === 'video' ? (
                <div style={{
                  fontSize: '12px',
                  textAlign: 'center',
                  color: '#666'
                }}>
                  Video
                </div>
              ) : (
                <img 
                  src={slide.src}
                  alt={slide.caption || `Thumbnail ${idx}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              )}
            </div>
          ))
        }
      >
        {slides.map((slide, idx) => {
          const { type } = slide;
          const slideStyle = height ? {
            height: `${height}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          } : {};

          return (
            <div key={idx} style={slideStyle}>
              {type === 'video' ? (
                <VideoSlide {...slide} />
              ) : (
                <>
                  <img 
                    src={slide.src} 
                    alt={slide.caption || `Slide ${idx}`} 
                    style={height ? {
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    } : {}}
                  />
                  {slide.caption && <p className="legend">{slide.caption}</p>}
                </>
              )}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}