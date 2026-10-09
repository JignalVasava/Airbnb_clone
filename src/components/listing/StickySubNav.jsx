import React, { useState, useEffect } from "react";
import styles from "./StickySubNav.module.css";
import { Star } from "../../components/common/Icons";



//StickySubNav.jsx creates the sticky navigation bar that appears after you scroll down the listing page.

//It does three main things:

//Shows the bar only after scrolling past the hero section.
//Tracks which section is currently visible: Photos, Amenities, Reviews, or Location.
//Lets the user click a tab to smoothly scroll to that section.

//It also shows the price, rating, review count, and a Reserve button





export const StickySubNav = ({
  totalPrice,
  nights,
  rating,
  reviewCount,
  onReserveClick
}) => {
  const [isVisible, setIsVisible] = useState(false); {/* tells wheather sticky bar sow show or not, initially that bar is shown and later as we scroll down then that image is shown  */}
  const [activeTab, setActiveTab] = useState("photos"); {/* kayu navigation tab currently open che , potos, amenities , reviews , location */}

  useEffect(() => {
    const handleScroll = () => {
      // Show subnav once scrolled past hero (approx 520px)
      if (window.scrollY > 520) { {/* whenever the user has scrolled more than 520 pixel then set setIsVisible=true */}
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Track active section
      const sections = ["photos", "amenities", "reviews", "location"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId); {/* return the DOM element and if there is no element like that then it return null */}
        if (el) {
          const rect = el.getBoundingClientRect(); {/* rect info ne contain kare : rect.top, rect.bottom etc , ae pacrticular el ketlo lambo che ae aana thi decide thai*/}
          if (rect.top <= 160 && rect.bottom >= 160) { {/* means that 160 px(reference line to decide which section is currently active) is currently inside this section , set that section as active */}
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true }); {/* it tells browser that the handler won't call event.preventDefault() , handler only reads the scroll position and updates state and passive: true is appropriate and help browser to handle scrolling smoothly */}
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 140; // account for top header + sticky subnav , if we directly write element position in top , then sticky nav might be on the section , to prevent that b/w section and sticky nav gap is created of 140
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth"
      }); //top: scroll kare che aa top position sudhi : 1600 - 140 : 1460

    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.stickyBar}>
      <div className={styles.inner}>
        {/* Navigation Tabs */}
        <nav className={styles.tabs} aria-label="Listing sections">
          <button
            type="button"
            className={`${styles.tabBtn} ${
            activeTab === "photos" ? styles.activeTab : ""}`
            }
            onClick={() => scrollToSection("photos")}>
            
            Photos
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${
            activeTab === "amenities" ? styles.activeTab : ""}`
            }
            onClick={() => scrollToSection("amenities")}>
            
            Amenities
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${
            activeTab === "reviews" ? styles.activeTab : ""}`
            }
            onClick={() => scrollToSection("reviews")}>
            
            Reviews
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${
            activeTab === "location" ? styles.activeTab : ""}`
            }
            onClick={() => scrollToSection("location")}>
            
            Location
          </button>
        </nav>

        {/* Right: Quick Price and Reserve Button */}
        <div className={styles.rightActions}>
          <div className={styles.priceInfo}>
            <div className={styles.priceRow}>
              <span className={styles.priceAmount}>
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>
              <span className={styles.priceNights}>for {nights} nights</span>
            </div>
            <div className={styles.ratingRow}>
              <Star size={10} fill="#222222" color="#222222" />
              <span className={styles.ratingScore}>{rating.toFixed(2)}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.reviewsText}>{reviewCount} reviews</span>
            </div>
          </div>

          <button
            type="button"
            className={styles.reserveBtn}
            onClick={onReserveClick}>
            
            Reserve
          </button>
        </div>
      </div>
    </div>);

};

export default StickySubNav;