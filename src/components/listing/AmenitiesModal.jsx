import React, { useEffect, useRef } from "react";
import styles from "./AmenitiesModal.module.css";
import { X } from "../../components/common/Icons";
import { categorizedAmenities } from "../../data/amenities";





export const AmenitiesModal = ({ onClose }) => {

  //react can put whole DOM into modelRef
  const modalRef = useRef(null); //use : right now has no use, later can be used for detecting clicks and when clicked on the photo then redirect to another page , it's used for it 

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown); //any key pressed all the method
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]); //escape key / X icon ne listen kare che 

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="amenities-modal-title"> {/*outer div : aana par click thai toh close kari toh ae page ne*/ }
      
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}>
        
        <div className={styles.header}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close amenities modal">
            
            <X size={18} />
          </button>
          <h2 id="amenities-modal-title" className={styles.headerTitle}>
            What this place offers
          </h2>
        </div>

        <div className={styles.body}>
          {categorizedAmenities.map((group) =>
          <div key={group.categoryName} className={styles.categorySection}>
              <h3 className={styles.categoryTitle}>{group.categoryName}</h3>
              <div className={styles.itemsList}>
                {group.items.map((item) =>
              <div key={item.id} className={styles.amenityRow}>
                    <div className={styles.itemInfo}>
                      <span
                    className={`${styles.itemName} ${ //kem styles.itemName ${} ma che
                    !item.available ? styles.unavailable : ""}`
                    }>
                    
                        {item.name}
                      </span>
                      {item.explanation &&
                  <p className={styles.itemExplanation}>
                          {item.explanation}
                        </p>
                  }
                    </div>
                  </div>
              )}
              </div>
              <div className={styles.divider} />
            </div>
          )}
        </div>
      </div>
    </div>);

};

export default AmenitiesModal;

//je pop up create kari ae che inorder to see,  all the services/room it's(hotel) poviding (see all photos par click kari ne je khule te )