import React, { useState, useEffect } from "react";
import styles from "./ListingHeader.module.css";
import { ShareIcon, HeartIcon, X, Check, Copy } from "../../components/common/Icons";


//listing title , share button , wislist button , share modal


export const ListingHeader = ({ title }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("airbnb_wishlist_saved"); //togglesave function : suppose we stored this named varible true before and here we are extracting it 
      if (saved === "true") {
        setIsSaved(true);
      }
    } catch {

      // LocalStorage might be disabled or unavailable
    }}, []);

  const toggleSave = () => {
    const nextState = !isSaved;
    setIsSaved(nextState);
    try {
      localStorage.setItem("airbnb_wishlist_saved", String(nextState));
    } catch {

      // ignore
    }};

  const handleCopyLink = () => {
    if (typeof window !== "undefined") { //server side rendering ma window object na hoi aetle aa condition check karvi pade
      navigator.clipboard?.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500); //after 2500 miliseconds , set the isCopied back to false
    }
  };

  // Close share modal on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isShareOpen) {
        setIsShareOpen(false);
      }
    };
    if (isShareOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isShareOpen]);

  return (
    <div className={styles.headerSection}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
      </div>

      <div className={styles.actionsContainer}>
        <button
          type="button"
          className={styles.actionBtn}
          onClick={() => setIsShareOpen(true)}
          aria-label="Share this listing">
          
          <ShareIcon size={16} />
          <span className={styles.actionText}>Share</span>
        </button>

        <button
          type="button"
          className={`${styles.actionBtn} ${isSaved ? styles.savedBtn : ""}`}
          onClick={toggleSave}
          aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}>
          
          <HeartIcon size={16} filled={isSaved} />
          <span className={styles.actionText}>{isSaved ? "Saved" : "Save"}</span>
        </button>
      </div>

      {/* Share Modal Dialog */}
      {isShareOpen &&
      <div
        className={styles.modalBackdrop}
        onClick={() => setIsShareOpen(false)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-modal-title">
        
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setIsShareOpen(false)}
              aria-label="Close share dialog">
              
                <X size={18} />
              </button>
              <h2 id="share-modal-title" className={styles.modalTitle}>
                Share this place
              </h2>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.shareListingPreview}>
                <img
                src="/images/hero/hero-1.jpg"
                alt="Listing preview"
                className={styles.sharePreviewImg} />
              
                <div className={styles.sharePreviewInfo}>
                  <p className={styles.sharePreviewTitle}>{title}</p>
                  <p className={styles.sharePreviewMeta}>Candolim, Goa · ★ 4.95</p>
                </div>
              </div>

              <div className={styles.shareActions}>
                <button
                type="button"
                className={styles.copyLinkBtn}
                onClick={handleCopyLink}>
                
                  {isCopied ? <Check size={18} color="var(--color-success)" /> : <Copy size={18} />}
                  <span>{isCopied ? "Link copied to clipboard!" : "Copy Link"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>);

};

export default ListingHeader;