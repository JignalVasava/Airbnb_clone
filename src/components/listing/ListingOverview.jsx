import React from "react";
import styles from "./ListingOverview.module.css";
import {
  LaurelLeft,
  LaurelRight,

  OutdoorEntertainmentIcon,
  CeilingFanIcon,
  DoorCheckInIcon } from
"../../components/common/Icons";


//is the section that shows the basic information about 
// the property: subtitle, guest/bedroom statistics, guest-favourite badge, host information, and a few highlights.



export const ListingOverview = ({ listing }) => {
  return (
    <div className={styles.overviewContainer}>
      {/* Title & Stats */}
      <div className={styles.headerInfo}>
        <h2 className={styles.propertySubtitle}>
          {listing.subtitle}
        </h2>
        <p className={styles.stats}>
          {listing.stats.guests} guests · {listing.stats.bedrooms} bedroom · {listing.stats.beds} bed · {listing.stats.baths} bathroom
        </p>
      </div>

      {/* Guest Favourite Card */}
      {listing.rating.isGuestFavourite &&
      <div className={styles.guestFavouriteCard}>
          <div className={styles.laurelGroup}>
            <LaurelLeft size={36} />
            <div className={styles.laurelTextCol}>
              <span className={styles.laurelText}>Guest<br />favourite</span>
            </div>
            <LaurelRight size={36} />
          </div>

          <div className={styles.badgeDivider} />

          <div className={styles.favouriteDescCol}>
            <p className={styles.favouriteDesc}>
              One of the most loved homes on<br />Airbnb, according to guests
            </p>
          </div>

          <div className={styles.badgeDivider} />

          <div className={styles.ratingBox}>
            <span className={styles.ratingNumber}>
              {listing.rating.score.toFixed(2)}
            </span>
            <div className={styles.starsRow}>★★★★★</div>
          </div>

          <div className={styles.badgeDivider} />

          <div className={styles.reviewsBox}>
            <span className={styles.reviewsCount}>
              {listing.rating.reviewCount}
            </span>
            <span className={styles.reviewsLabel}>Reviews</span>
          </div>
        </div>
      }

      {/* Host Brief */}
      <div className={styles.hostBrief}>
        <img
          src={listing.host.avatarUrl}
          alt={listing.host.name}
          className={styles.hostAvatar} />
        
        <div className={styles.hostText}>
          <h3 className={styles.hostName}>Hosted by {listing.host.name}</h3>
          <p className={styles.hostTenure}>{listing.host.yearsHosting} years hosting</p>
        </div>
      </div>

      <div className={styles.sectionDivider} />

      {/* Highlights List */}
      <div className={styles.highlightsList}>
        <div className={styles.highlightItem}>
          <div className={styles.highlightIcon}>
            <OutdoorEntertainmentIcon size={24} />
          </div>
          <div className={styles.highlightContent}>
            <h4 className={styles.highlightTitle}>Outdoor entertainment</h4>
            <p className={styles.highlightDesc}>
              The pool and alfresco dining are great for summer trips.
            </p>
          </div>
        </div>

        <div className={styles.highlightItem}>
          <div className={styles.highlightIcon}>
            <CeilingFanIcon size={24} />
          </div>
          <div className={styles.highlightContent}>
            <h4 className={styles.highlightTitle}>Designed for staying cool</h4>
            <p className={styles.highlightDesc}>
              Beat the heat with the A/C and ceiling fan.
            </p>
          </div>
        </div>

        <div className={styles.highlightItem}>
          <div className={styles.highlightIcon}>
            <DoorCheckInIcon size={24} />
          </div>
          <div className={styles.highlightContent}>
            <h4 className={styles.highlightTitle}>Self check-in</h4>
            <p className={styles.highlightDesc}>
              You can check in with the building staff.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sectionDivider} />
    </div>);

};

export default ListingOverview;