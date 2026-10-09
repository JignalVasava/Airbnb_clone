import React from "react";
import styles from "./HeroGallery.module.css";
import { LayoutGrid } from "../../components/common/Icons";






//te 5 potos on te allery 

export const HeroGallery = ({
  photos,
  onOpenPhotoTour,//sow all potos par clcik lkari ae tyare
  onOpenLightbox //Open the particular photo in the large photo viewe
}) => {
  // We need 5 photos for the hero grid
  const heroPhotos = photos.slice(0, 5);

  return (
    <section className={styles.galleryContainer} aria-label="Photo gallery">
      <div className={styles.grid}>
        {/* Main Large Image (Index 0) */}
        {heroPhotos[0] &&
        <div
          className={styles.mainImageWrapper}
          onClick={() => onOpenLightbox(0)}
          role="button"
          tabIndex={0}
          aria-label={`View photo 1: ${heroPhotos[0].caption}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpenLightbox(0);
            }
          }}>
          
            <img
            src={heroPhotos[0].url}
            alt={heroPhotos[0].caption}
            className={styles.image} />
          
            <div className={styles.overlay} />
          </div>
        }

        {/* 4 Small Images in 2x2 Grid */}
        <div className={styles.subGrid}>
          {heroPhotos.slice(1, 5).map((photo, idx) => {
            const globalIndex = idx + 1;
            return (
              <div
                key={photo.id}
                className={`${styles.smallImageWrapper} ${
                styles[`subImage_${idx}`]}`
                }
                onClick={() => onOpenLightbox(globalIndex)}
                role="button"
                tabIndex={0}
                aria-label={`View photo ${globalIndex + 1}: ${photo.caption}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onOpenLightbox(globalIndex);
                  }
                }}>
                
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className={styles.image} />
                
                <div className={styles.overlay} />
              </div>);

          })}
        </div>

        {/* "Show all photos" Button */}
        <button
          type="button"
          className={styles.showAllBtn}
          onClick={onOpenPhotoTour}
          aria-label="Show all photos">
          
          <LayoutGrid size={16} />
          <span>Show all photos</span>
        </button>
      </div>
    </section>);

};

export default HeroGallery;