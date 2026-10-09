import React, { useState } from "react";
import styles from "./ListingDescription.module.css";
import { ChevronRight, ChevronUp } from "../../components/common/Icons";






export const ListingDescription = ({ listing }) => {
  const [isExpanded, setIsExpanded] = useState(false); //show more par click kari ae 
  const [showOriginal, setShowOriginal] = useState(false); //translation mate it's used

  const translatedText = listing.description.overview[0]; //not hard coded
  //hard coded
  const originalText =
  "🌴 Planeje suas férias relaxantes no Amor De Goa da Mirashya Homes! ✨ Fique neste aconchegante 1BHK no coração de Candolim, com jacuzzi privativa 🛁 para relaxar perfeitamente. Desfrute de Wi-Fi de alta velocidade 💻, Smart TV 📺, conforto aceita animais de estimação 🐾 e interiores elegantes. A poucos minutos da Praia de Candolim 🏖️, cafés famosos, restaurantes e vida noturna 🍹, é ideal para casais que buscam romance, relaxamento e um toque de luxo no norte de Goa. ❤️ 🌴";

  return (
    <div className={styles.descriptionSection}>
      {/* Automatic Translation Notice */}
      <div className={styles.translationBox}>
        <span className={styles.translationText}>
          {showOriginal ?
          "Original (Portuguese) description shown." :
          "Some info has been automatically translated."}
        </span>
        <button
          type="button"
          className={styles.translationToggle}
          onClick={() => setShowOriginal(!showOriginal)}>
          
          {showOriginal ? "Show translation" : "Show original"}
        </button>
      </div>

      {/* Main Description Paragraph */}
      <div className={styles.mainParagraph}>
        <p>{showOriginal ? originalText : translatedText}</p>
      </div>

      {/* Expanded Content */}
      {isExpanded &&
      <div className={styles.expandedDetails}>
          <div className={styles.detailBlock}>
            <h4 className={styles.blockTitle}>The space</h4>
            {listing.description.space.map((p, i) =>
          <p key={i} className={styles.blockParagraph}>{p}</p>
          )}
          </div> {/*space section che aetle listing.description.space lakhyu*/}

          <div className={styles.detailBlock}>
            <h4 className={styles.blockTitle}>Guest access</h4>
            {listing.description.guestAccess.map((p, i) =>
          <p key={i} className={styles.blockParagraph}>{p}</p>
          )}
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.blockTitle}>Other things to note</h4>
            {listing.description.otherThings.map((p, i) =>
          <p key={i} className={styles.blockParagraph}>{p}</p>
          )}
          </div>
        </div>
      }

      {/* Expand / Collapse Button */}
      <button
        type="button"
        className={styles.showMoreBtn}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}>
        
        <span>{isExpanded ? "Show less" : "Show more"}</span>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronRight size={16} />}
      </button>

      <div className={styles.sectionDivider} />
    </div>);

};

export default ListingDescription;