import React from "react";
import styles from "./SleepingArrangements.module.css";





export const SleepingArrangements = ({
  onSelectRoom
}) => {
  return (
    <section className={styles.sleepingSection} aria-labelledby="sleeping-title">
      <h3 id="sleeping-title" className={styles.sectionTitle}>
        Where you&apos;ll sleep
      </h3>

      <div className={styles.cardsGrid}>
        {/* Bedroom Card */}
        <div
          className={styles.card}
          onClick={() => onSelectRoom?.("Bedroom")}
          role="button"
          tabIndex={0}
          aria-label="View bedroom sleeping arrangement"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelectRoom?.("Bedroom");
            }
          }}>
          
          <div className={styles.imageWrapper}>
            <img
              src="/images/bedroom/bedroom-1.jpg"
              alt="Bedroom with double bed"
              className={styles.roomImage} />
            
          </div>
          <div className={styles.cardContent}>
            <h4 className={styles.roomName}>Bedroom</h4>
            <p className={styles.bedType}>1 double bed</p>
          </div>
        </div>

        {/* Living Room Card */}
        <div
          className={styles.card}
          onClick={() => onSelectRoom?.("Living room")}
          role="button"
          tabIndex={0}
          aria-label="View living room sleeping arrangement"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelectRoom?.("Living room");
            }
          }}>
          
          <div className={styles.imageWrapper}>
            <img
              src="/images/living-room-1/living-1.jpg"
              alt="Living room with sofa"
              className={styles.roomImage} />
            
          </div>
          <div className={styles.cardContent}>
            <h4 className={styles.roomName}>Living room</h4>
            <p className={styles.bedType}>1 sofa</p>
          </div>
        </div>
      </div>

      <div className={styles.sectionDivider} />
    </section>);

};

export default SleepingArrangements;