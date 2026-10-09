import React, { useEffect } from "react";
import styles from "./PhotoTourModal.module.css";
import { ChevronLeft, ShareIcon, HeartIcon } from "../../components/common/Icons";
import { groupedPhotos } from "../../data/photos";


//PhotoTourModal.jsx is the component that opens the full “Photo tour” page/modal,
//where all property photos are grouped by category such as bedroom, living room, bathroom, etc.



export const PhotoTourModal = ({
  onClose,
  onSelectPhoto,
  allPhotos
}) => {
  // Lock body scroll and handle browser back button
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.location.hash = "photos"; {/*changes the URL from example.com/listing to example.com/listing#photos*/}

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    const handlePopState = () => {
      //jyare history ma pacha jai ae Ex #photo thi normal first page par pacha jai ae tyare it's used   
      onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState); {/* if we don't remove listener then when ever call is made then another listener is added and like that multiple instances of the listener runs */}
    };
  }, [onClose]);

  return (
    <div className={styles.modalBackdrop} role="dialog" aria-modal="true" aria-label="Photo tour">
      <header className={styles.modalHeader}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={() => {
            if (window.location.hash === "#photos") {
              window.history.back(); {/* this triggers  popstate listener and then it calls onClose()*/}
            } else {
              onClose();
            }
          }}
          aria-label="Back to listing">
          
          <ChevronLeft size={22} />
        </button>

        <div className={styles.headerActions}>
          <button
            type="button"
            className={styles.actionBtn}
            onClick={() => alert("Share link copied to clipboard!")}>
            
            <ShareIcon size={16} />
            <span>Share</span>
          </button>
          <button
            type="button"
            className={styles.actionBtn}
            onClick={() => alert("Saved to wishlist")}>
            
            <HeartIcon size={16} /> 
            <span>Save</span>
          </button>
        </div>
      </header>

      <main className={styles.tourContent}>
        <div className={styles.tourHeaderSection}>
          <h2 className={styles.tourTitle}>Photo tour</h2>
        </div>
        {groupedPhotos.map((group) => {
          if (group.photos.length === 0) return null;
          const isSingle = group.photos.length === 1;
          return (
            <section key={group.category} className={styles.categoryGroup}>
              <h3 className={styles.categoryTitle}>{group.categoryTitle}</h3>
              <div className={`${styles.photosGrid} ${isSingle ? styles.singlePhotoGrid : ""}`}>
                {group.photos.map((photo) => {
                  const globalIdx = allPhotos.findIndex((p) => p.id === photo.id); {/* allPhotos ma global indexes stored hoi che ane ae photos mathi jema photo.id match thai ae return thai che , here used indexes causes Lightbox component uses indexes as id, id == key value*/}
                  return (
                    <div
                      key={photo.id}
                      className={styles.photoCard}
                      onClick={() => onSelectPhoto(globalIdx >= 0 ? globalIdx : 0)} 
                      role="button"
                      tabIndex={0}
                      aria-label={photo.caption}>

                        {/* when globalIndex is not found then it return -1 , so index 0 is used but if found then globalIndex is used only */}
                      
                      <div className={styles.imageWrapper}>
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className={styles.photoImg} />
                        
                      </div>
                      <p className={styles.photoCaption}>{photo.caption}</p>
                    </div>);

                })}
              </div>
            </section>);

        })}
      </main>
    </div>);

};

export default PhotoTourModal;