import React, { useState } from "react";
import styles from "./ReviewsSection.module.css";
import {


  Star,
  SprayCan,
  CheckCircle,
  Key,
  MessageSquare,
  Compass,
  Tag } from
"../../components/common/Icons";

import { reviewChips, reviewCategoryScores } from "../../data/reviews";
import ReviewsModal from "./ReviewsModal";


//overall ratin , ratin break down , review filteration, first 6 reviews, sow more option and sow all review option




const renderCategoryIcon = (iconName) => {
  switch (iconName) {
    case "SprayCan":
      return <SprayCan size={24} />;
    case "CheckCircle":
      return <CheckCircle size={24} />;
    case "Key":
      return <Key size={24} />;
    case "MessageSquare":
      return <MessageSquare size={24} />;
    case "Compass":
      return <Compass size={24} />;
    case "Tag":
      return <Tag size={24} />;
    default:
      return <Star size={24} />;
  }
};

//ere score: overall score
export const ReviewsSection = ({
  score,
  reviewCount,
  reviews
}) => {
  const [selectedChip, setSelectedChip] = useState(null);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); {/* wheater clicked on sow all 19 reviews or not */}

  const toggleExpand = (id) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  }; {/* expandedReview ma pehla {101:true, 102: false } aevu store che toh in id we get that and do !prev[id] and value is changed and rest others are same , [id] : [] is used to access the value inside that id */}

  const filteredReviews = selectedChip ?
  reviews.filter((r) => r.tags?.includes(selectedChip)) :
  reviews;

  // Visible reviews on the page: first 6
  const visibleReviews = filteredReviews.slice(0, 6);

  return (
    <section className={styles.reviewsSection} id="reviews" aria-labelledby="reviews-title">
      {/* Big Rating Banner */}
      <div className={styles.ratingHero}>
        <div className={styles.laurelHeroGroup}>
          <img
            src="/images/laurel_3d_left.png"
            alt=""
            className={styles.laurel3d}
            aria-hidden="true" />
          
          <span className={styles.bigScore}>{score.toFixed(2)}</span>
          <img
            src="/images/laurel_3d_right.png"
            alt=""
            className={styles.laurel3d}
            aria-hidden="true" />
          
        </div>

        <h3 id="reviews-title" className={styles.guestFavouriteTitle}>
          Guest favourite
        </h3>
        <p className={styles.guestFavouriteDesc}>
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button
          type="button"
          className={styles.howReviewsWorkBtn}
          onClick={() => alert("Airbnb reviews are submitted by guests who have booked and stayed at the property.")}>
          
          How reviews work
        </button>
      </div>

      {/* Breakdown Matrix */}
      <div className={styles.breakdownMatrix}>
        {/* Overall Rating Rating Bar */}
        <div className={styles.overallBarCol}>
          <p className={styles.matrixColTitle}>Overall rating</p>
          <div className={styles.barsList}>
            {[5, 4, 3, 2, 1].map((ratingLevel) =>
            <div key={ratingLevel} className={styles.barRow}>
                <span className={styles.barLabel}>{ratingLevel}</span>
                <div className={styles.barTrack}>
                  <div
                  className={styles.barFill}
                  style={{ width: ratingLevel === 5 ? "95%" : ratingLevel === 4 ? "5%" : "0%" }} />
                
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 6 Category Scores */}
        <div className={styles.categoryScoresRow}>
          {reviewCategoryScores.map((cat) =>
          <div key={cat.name} className={styles.categoryScoreCell}>
              <span className={styles.catName}>{cat.name}</span>
              <span className={styles.catScore}>{cat.score.toFixed(1)}</span>
              <div className={styles.catIcon}>
                {renderCategoryIcon(cat.icon)}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filter Chips */}
      <div className={styles.chipsRow} role="region" aria-label="Review tag filters">
        {reviewChips.map((chip) => {
          const isSelected = selectedChip === chip.id;
          return (
            <button
              key={chip.id}
              type="button"
              className={`${styles.chip} ${isSelected ? styles.chipSelected : ""}`}
              onClick={() => setSelectedChip(isSelected ? null : chip.id)}
              aria-pressed={isSelected}>
              
              <span className={styles.chipEmoji}>{chip.icon}</span>
              <span className={styles.chipLabel}>{chip.label}</span>
              <span className={styles.chipCount}>{chip.count}</span>
            </button>);

        })}
      </div>

      {/* Reviews Grid (2 columns on desktop) */}
      <div className={styles.reviewsGrid}>
        {visibleReviews.map((rev) => {
          const isLong = rev.content.length > 140;
          const isExpanded = expandedReviews[rev.id] || false;
          const displayText =
          isLong && !isExpanded ?
          rev.content.slice(0, 140) + "..." :
          rev.content;

          return (
            <div key={rev.id} className={styles.reviewCard}>
              <div className={styles.authorHeader}>
                {rev.authorAvatar ?
                <img
                  src={rev.authorAvatar}
                  alt={rev.authorName}
                  className={styles.authorAvatarImg} /> :


                <div
                  className={`${styles.authorAvatarPlaceholder} ${
                  rev.authorName === "Vedant" ?
                  styles.vedantPlaceholder :
                  rev.authorName === "Amit" ?
                  styles.amitPlaceholder :
                  ""}`
                  }>
                  
                    {rev.authorName.charAt(0).toUpperCase()}
                  </div>
                }
                <div className={styles.authorInfo}>
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

              <p className={styles.reviewContent}>{displayText}</p>

              {isLong &&
              <button
                type="button"
                className={styles.showMoreReviewBtn}
                onClick={() => toggleExpand(rev.id)}>
                
                  {isExpanded ? "Show less" : "Show more"}
                </button>
              }
            </div>);

        })}
      </div>

      {/* Show all reviews button */}
      <button
        type="button"
        className={styles.showAllReviewsBtn}
        onClick={() => setIsModalOpen(true)}>
        
        Show all {reviewCount} reviews
      </button>

      <div className={styles.sectionDivider} />

      {/* Full Reviews Modal */}
      {isModalOpen &&
      <ReviewsModal
        reviews={reviews}
        score={score}
        reviewCount={reviewCount}
        onClose={() => setIsModalOpen(false)} />

      }
    </section>);

};

export default ReviewsSection;