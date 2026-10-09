import React from "react";
import styles from "./Header.module.css";
import { AirbnbLogo, Search, Globe, Menu, User } from "./Icons";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Left: Brand Logo */}
        <div className={styles.brand} aria-label="Airbnb Homepage" role="banner">
          <AirbnbLogo size={34} />
          <span className={styles.brandText}>airbnb</span>
        </div>

        {/* Center: Search Pill Shell */}
        <div className={styles.searchBar} role="search" aria-label="Search places to stay">
          <div className={styles.searchHouseIcon}>
            <span role="img" aria-label="stay">🏠</span>
          </div>
          <button type="button" className={styles.searchSegment}>
            Anywhere
          </button>
          <span className={styles.searchDivider} aria-hidden="true" />
          <button type="button" className={styles.searchSegment}>
            Anytime
          </button>
          <span className={styles.searchDivider} aria-hidden="true" />
          <button type="button" className={styles.searchSegmentMuted}>
            Add guests
          </button>
          <div className={styles.searchBtn} aria-label="Submit search">
            <Search size={13} strokeWidth={3} />
          </div>
        </div>

        {/* Right: User Actions */}
        <div className={styles.userActions}>
          <button type="button" className={styles.hostLink}>
            Become a host
          </button>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Choose a language and currency">
            
            <Globe size={18} />
          </button>
          <button
            type="button"
            className={styles.userMenuBtn}
            aria-label="Main navigation menu">
            
            <Menu size={16} strokeWidth={2.5} />
            <div className={styles.userAvatar}>
              <User size={18} />
            </div>
          </button>
        </div>
      </div>
    </header>);

};

export default Header;