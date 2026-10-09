import React, { useState, useEffect } from "react";
import styles from "./AmenitiesSection.module.css";
import { featuredAmenities } from "../../data/amenities";
import AmenitiesModal from "./AmenitiesModal";
import {
  KitchenUtensilsIcon,
  Wifi,
  DedicatedWorkspaceIcon,
  FreeParkingIcon,
  PoolLadderIcon,
  HotTubIcon,
  PawPrint,
  SecurityCameraIcon,
  CarbonMonoxideCrossedIcon,
  SmokeAlarmCrossedIcon } from
"../../components/common/Icons";

const renderAmenityIcon = (id, iconName) => {
  switch (id) {
    case "amenity-kitchen":
      return <KitchenUtensilsIcon size={24} />;
    case "amenity-wifi":
      return <Wifi size={24} />;
    case "amenity-workspace":
      return <DedicatedWorkspaceIcon size={24} />;
    case "amenity-parking":
      return <FreeParkingIcon size={24} />;
    case "amenity-pool":
      return <PoolLadderIcon size={24} />;
    case "amenity-hottub":
      return <HotTubIcon size={24} />;
    case "amenity-pets":
      return <PawPrint size={24} />;
    case "amenity-cameras":
      return <SecurityCameraIcon size={24} />;
    case "amenity-co-alarm":
      return <CarbonMonoxideCrossedIcon size={24} />;
    case "amenity-smoke-alarm":
      return <SmokeAlarmCrossedIcon size={24} />;
    default:
      return <KitchenUtensilsIcon size={24} />;
  }
};

export const AmenitiesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  //when modal /pop up is opened then main webpage does not scroll and after interacting with it only main page is enabled to scroll
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    }; //clean up function , when component is cleaned up then page gets to it's normal scrolling
  }, [isModalOpen]);

  return (
    <section className={styles.amenitiesSection} id="amenities" aria-labelledby="amenities-title">
      <h3 id="amenities-title" className={styles.sectionTitle}>
        What this place offers
      </h3>

      <div className={styles.grid}>
        {featuredAmenities.map((amenity) =>
        <div key={amenity.id} className={styles.amenityItem}>
            <div className={styles.iconWrapper}>
              {renderAmenityIcon(amenity.id, amenity.icon)}
            </div>
            <span
            className={`${styles.amenityName} ${
            !amenity.available ? styles.unavailable : ""}`
            }>
            
              {amenity.name}
            </span>
          </div>
        )}
      </div> 

      <button
        type="button"
        className={styles.showAllBtn}
        onClick={() => setIsModalOpen(true)}>
        
        Show all 50 amenities
      </button> 

      <div className={styles.sectionDivider} />

      {/* Full Amenities Modal */}
      {isModalOpen &&
      <AmenitiesModal onClose={() => setIsModalOpen(false)} />
      }
    </section>);

};

export default AmenitiesSection;

//the photo gallery : this page is visible on the main Airbnb page 