import React, { useEffect, useCallback } from "react";
import styles from "./LightboxModal.module.css";
import { X, ChevronLeft, ChevronRight, ShareIcon, HeartIcon } from "../../components/common/Icons";




//role : particular poto lare /fullscreen view ma jovu oi tyare its used 

//functionality : close te viewer , can o to prev pot, next poto save/share te photo 


//useEffect : perform side effects like wen te lare pae is opened ten we are unable to scroll te main website , listens for keyword presses and removes it when modal closes

//useCallback : memorizes functions Ex: handlePrev, handleNext 

export const LightboxModal = ({
  photos,
  currentIndex,
  onClose,
  onChangeIndex //current poto ne cane karva its used
}) => {
  const currentPhoto = photos[currentIndex] || photos[0];

  const handlePrev = useCallback(() => {
    //here handlePrev and handleNext is written inside the useCallback cause w/o it on every render the new function is created even if the function as no change but we want ke jyare  currentIndex, photos.length, onChangeIndex change thai tyare j function change thai jyare and navu create thai as it is the dependency of the useEffect      
    onChangeIndex((currentIndex - 1 + photos.length) % photos.length);
  }, [currentIndex, photos.length, onChangeIndex]);

  const handleNext = useCallback(() => {
    onChangeIndex((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, onChangeIndex]);

  useEffect(() => {
    document.body.style.overflow = "hidden"; //wen fullscreen photo is open, then scrollin is not allowed
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <div className={styles.lightboxBackdrop} role="dialog" aria-modal="true" aria-label="Fullscreen photo view">
      {/* Top Bar */}
      <div className={styles.topBar}>
        <button
          type="button"
          className={styles.iconBtn}
          onClick={onClose}
          aria-label="Close photo view">
          
          <X size={22} />
        </button>

        <span className={styles.counter}>
          {currentIndex + 1} / {photos.length}
        </span>

        <div className={styles.rightControls}>
          <button
            type="button"
            className={styles.iconBtn}
            onClick={() => alert("Photo link copied!")}
            aria-label="Share photo">
            
            <ShareIcon size={18} />
          </button>
          <button
            type="button"
            className={styles.iconBtn}
            onClick={() => alert("Photo saved to wishlist")}
            aria-label="Save photo">
            
            <HeartIcon size={18} />
          </button>
        </div>
      </div>

      {/* Stage Area */}
      <div className={styles.stage}>
        <button
          type="button"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={handlePrev}
          aria-label="Previous photo">
          
          <ChevronLeft size={28} />
        </button>

        <div className={styles.imageContainer}>
          <img
            src={currentPhoto.url}
            alt={currentPhoto.caption}
            className={styles.activeImage} />
          
        </div>

        <button
          type="button"
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={handleNext}
          aria-label="Next photo">
          
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Caption Bar */}
      <div className={styles.captionBar}>
        <p className={styles.captionText}>{currentPhoto.caption}</p>
      </div>
    </div>);

};

export default LightboxModal;