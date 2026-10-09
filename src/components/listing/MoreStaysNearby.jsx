import React, { useState } from "react";
import styles from "./MoreStaysNearby.module.css";
import { ChevronLeft, ChevronRight, Star, HeartIcon } from "../../components/common/Icons";






export const MoreStaysNearby = ({ stays }) => {
  const [currentPage, setCurrentPage] = useState(1); //re-render whhen pae is changed
  const [savedStays, setSavedStays] = useState({});

  const itemsPerPage = 5;
  const totalPages = Math.ceil(stays.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStays = stays.slice(startIndex, startIndex + itemsPerPage);

  const toggleSaveStay = (id, e) => {
    e.stopPropagation(); //2 type a clicks che : heart vadu and card par click karta alert aave che , toh if heart click kari ae toh card par ae propogate na thai aeni mate aano use thai che
    e.preventDefault(); //not major use as the button's type is not submit but type="button"
    setSavedStays((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className={styles.nearbySection} id="nearby-stays" aria-labelledby="nearby-title">
      <div className={styles.headerRow}>
        <h3 id="nearby-title" className={styles.sectionTitle}>
          More stays nearby
        </h3>

        <div className={styles.paginationControls}>
          <span className={styles.pageIndicator}>
            {currentPage} / {totalPages}
          </span>
          <div className={styles.navArrows}>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              aria-label="Previous page of nearby stays">
              
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              aria-label="Next page of nearby stays">
              
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.cardsGrid}>
        {currentStays.map((stay) => {
          const isSaved = savedStays[stay.id] || false;
          return (
            <div
              key={stay.id}
              className={styles.stayCard}
              onClick={() => alert(`Selected stay: ${stay.title}`)}
              role="button"
              tabIndex={0}
              aria-label={`View ${stay.title}`}>
              
              <div className={styles.imageWrapper}>
                <img
                  src={stay.images[0] || "/images/hero/hero-1.jpg"}
                  alt={stay.title}
                  className={styles.stayImage} />
                
                <button
                  type="button"
                  className={styles.heartBtn}
                  onClick={(e) => toggleSaveStay(stay.id, e)}
                  aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}>
                  
                  <HeartIcon size={18} filled={isSaved} />
                </button>
              </div>

              <div className={styles.stayInfo}>
                <h4 className={styles.stayTitle} title={stay.title}>
                  {stay.title}
                </h4>
                <div className={styles.priceRatingRow}>
                  <span className={styles.priceBold}>
                    ₹{stay.totalPrice ? stay.totalPrice.toLocaleString("en-IN") : stay.pricePerNight.toLocaleString("en-IN")}
                  </span>
                  <div className={styles.ratingGroup}>
                    <Star size={11} fill="#222222" color="#222222" />
                    <span className={styles.ratingNumber}>{stay.rating.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>);

        })}
      </div>

      <div className={styles.sectionDivider} />
    </section>);

};

export default MoreStaysNearby;