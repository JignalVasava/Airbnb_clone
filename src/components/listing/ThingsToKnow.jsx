import React, { useState } from "react";
import styles from "./ThingsToKnow.module.css";
import { Calendar, Clock, ShieldCheck, X } from "../../components/common/Icons";






export const ThingsToKnow = ({ data }) => {
  const [activeModal, setActiveModal] = useState(null);

  const getModalTitle = () => {
    switch (activeModal) {
      case "cancellation":
        return data.cancellation.title;
      case "houseRules":
        return data.houseRules.title;
      case "safety":
        return data.safety.title;
      default:
        return "";
    }
  };

  const getModalDetails = () => {
    switch (activeModal) {
      case "cancellation":
        return data.cancellation.modalDetails || [];
      case "houseRules":
        return data.houseRules.modalDetails || [];
      case "safety":
        return data.safety.modalDetails || [];
      default:
        return [];
    }
  };

  return (
    <section className={styles.thingsSection} id="things-to-know" aria-labelledby="things-title">
      <h3 id="things-title" className={styles.sectionTitle}>
        Things to know
      </h3>

      <div className={styles.columnsGrid}>
        {/* Cancellation Policy */}
        <div className={styles.column}>
          <div className={styles.iconWrapper}>
            <Calendar size={24} />
          </div>
          <h4 className={styles.colTitle}>{data.cancellation.title}</h4>
          <ul className={styles.itemsList}>
            {data.cancellation.items.map((item, idx) =>
            <li key={idx} className={styles.itemText}>{item}</li>
            )}
          </ul>
          <button
            type="button"
            className={styles.learnMoreBtn}
            onClick={() => setActiveModal("cancellation")}>
            
            {data.cancellation.learnMoreText}
          </button>
        </div>

        {/* House Rules */}
        <div className={styles.column}>
          <div className={styles.iconWrapper}>
            <Clock size={24} />
          </div>
          <h4 className={styles.colTitle}>{data.houseRules.title}</h4>
          <ul className={styles.itemsList}>
            {data.houseRules.items.map((item, idx) =>
            <li key={idx} className={styles.itemText}>{item}</li>
            )}
          </ul>
          <button
            type="button"
            className={styles.learnMoreBtn}
            onClick={() => setActiveModal("houseRules")}>
            
            {data.houseRules.learnMoreText}
          </button>
        </div>

        {/* Safety & Property */}
        <div className={styles.column}>
          <div className={styles.iconWrapper}>
            <ShieldCheck size={24} />
          </div>
          <h4 className={styles.colTitle}>{data.safety.title}</h4>
          <ul className={styles.itemsList}>
            {data.safety.items.map((item, idx) =>
            <li key={idx} className={styles.itemText}>{item}</li>
            )}
          </ul>
          <button
            type="button"
            className={styles.learnMoreBtn}
            onClick={() => setActiveModal("safety")}>
            
            {data.safety.learnMoreText}
          </button>
        </div>
      </div>

      <div className={styles.sectionDivider} />

      {/* Details Modal */}
      {activeModal &&
      <div
        className="modalBackdrop"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: "var(--z-modal)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        onClick={() => setActiveModal(null)}>
        
          <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            padding: "32px",
            width: "100%",
            maxWidth: "560px",
            maxHeight: "85vh",
            overflowY: "auto",
            boxShadow: "var(--shadow-modal)"
          }}
          onClick={(e) => e.stopPropagation()}> {/* clickin on dark backDROP closes te modal but wen we click inside tat wite modal te modal sould not et closed , so e.stopPropoation() is used */}
          
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "22px", fontWeight: "600" }}>{getModalTitle()}</h3>
              <button
              type="button"
              onClick={() => setActiveModal(null)}
              style={{ background: "none", border: "none", cursor: "pointer" }}>
              
                <X size={20} />
              </button>
            </div>

            <ul style={{ listStyle: "disc", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {getModalDetails().map((detail, i) =>
            <li key={i} style={{ fontSize: "15px", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                  {detail}
                </li>
            )}
            </ul>
          </div>
        </div>
      }
    </section>);

};

export default ThingsToKnow;