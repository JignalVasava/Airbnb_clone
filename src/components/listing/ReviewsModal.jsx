import React, { useState, useEffect } from "react";
import styles from "./ReviewsModal.module.css";
import { X, Search, Star } from "../../components/common/Icons";

import { reviewCategoryScores } from "../../data/reviews";



//te section tat appears wen we click on sow all 19 reviews




export const ReviewsModal = ({
  reviews,
  score,
  reviewCount,
  onClose
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const filteredReviews = reviews.filter(
    (r) =>
    r.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.authorName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}> {/* wen we click inside te modal ten if we dont use stopPropoation ten backdrops click would be clicked and it would eventually lead to close te window*/}
        <div className={styles.header}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close reviews modal">
            
            <X size={18} />
          </button>
          <div className={styles.titleArea}>
            <Star size={16} fill="#222222" color="#222222" />
            <span className={styles.titleScore}>{score.toFixed(2)}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.titleCount}>{reviewCount} reviews</span>
          </div>
        </div>

        <div className={styles.body}>
          {/* Left Column: Category Scores */}
          <div className={styles.sidebarCol}>
            <div className={styles.searchBox}>
              <Search size={16} color="var(--color-text-secondary)" />
              <input
                type="text"
                placeholder="Search reviews"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput} />
              
            </div>

            <div className={styles.scoresList}>
              {reviewCategoryScores.map((cat) =>
              <div key={cat.name} className={styles.scoreRow}>
                  <span className={styles.catLabel}>{cat.name}</span>
                  <div className={styles.catBarWrapper}>
                    <div className={styles.catBarTrack}>
                      <div
                      className={styles.catBarFill}
                      style={{ width: `${cat.score / 5.0 * 100}%` }} /> {/* Tis score is counted out of 5 , score/5 * 100 => 4.5 /5 *100 = 90% so accordin to te ratin bar is sown*/}
                    
                    </div>
                    <span className={styles.catScoreVal}>{cat.score.toFixed(1)}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Reviews */}
          <div className={styles.reviewsCol}>
            {filteredReviews.length === 0 ?
            <p className={styles.noResults}>No reviews match &quot;{searchQuery}&quot;</p> :

            filteredReviews.map((rev) =>
            <div key={rev.id} className={styles.modalReviewCard}>
                  <div className={styles.authorHeader}>
                    {rev.authorAvatar ?
                <img
                  src={rev.authorAvatar}
                  alt={rev.authorName}
                  className={styles.authorAvatar} /> :


                <div className={styles.authorAvatarPlaceholder}>
                        {rev.authorName.charAt(0).toUpperCase()}
                      </div>
                }
                    <div>
                      <h4 className={styles.authorName}>{rev.authorName}</h4>
                      <p className={styles.stayDuration}>{rev.stayDuration}</p>
                    </div>
                  </div>

                  <div className={styles.ratingDateRow}>
                    <div className={styles.stars}>
                      {[...Array(rev.rating)].map((_, i) =>
                  <Star key={i} size={11} fill="#222222" color="#222222" />
                  )}
                    </div>
                    <span className={styles.dot}>·</span>
                    <span className={styles.reviewDate}>{rev.date}</span>
                  </div>

                  <p className={styles.reviewContent}>{rev.content}</p>
                </div>
            )
            }
          </div>
        </div>
      </div>
    </div>);

};

export default ReviewsModal;