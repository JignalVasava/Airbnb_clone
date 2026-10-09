import React, { useState } from "react";
import styles from "./BookingCard.module.css";
import { ChevronDown, ChevronUp, Flag, Tag, Plus, Minus, X } from "../../components/common/Icons";

export const BookingCard = ({
  checkInDate,
  checkOutDate,
  onDatesClick,
  guestCount,
  setGuestCount,
  pricePerNight,
  totalNights
}) => {
  const [isClaimed, setIsClaimed] = useState(false);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [isReservedModalOpen, setIsReservedModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false); //reserve button par click karya pachi , popup jevu open thai che ke tamaru reservation successful thai gayu

  const totalGuests = guestCount.adults + guestCount.children;
  const maxGuests = 3;

  const formatDateShort = (d) => {
    if (!d) return "Add date";
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const nights = Math.max(1, totalNights);
  const rawBase = pricePerNight * nights;
  const discountAmount = isClaimed ? Math.round(rawBase * 0.1) : 0;
  const basePrice = rawBase - discountAmount;
  const cleaningFee = 1200;
  const serviceFee = Math.round(basePrice * 0.12);
  const taxes = Math.round(basePrice * 0.08);
  const grandTotal = basePrice + cleaningFee + serviceFee + taxes;

  const updateGuest = (type, delta) => { //"adults",1 => delta specifies the number of guests
    setGuestCount((prev) => {
      const next = { ...prev };
      if (type === "adults") {
        const val = Math.max(1, Math.min(maxGuests - prev.children, prev.adults + delta));
        next.adults = val;
      } else if (type === "children") {
        const val = Math.max(0, Math.min(maxGuests - prev.adults, prev.children + delta));
        next.children = val;
      } else if (type === "infants") {
        next.infants = Math.max(0, Math.min(5, prev.infants + delta)); //infants do not count in 3 person limit , so it can be 5
      } else if (type === "pets") { 
        next.pets = Math.max(0, Math.min(2, prev.pets + delta));
      }
      return next;
    });
  };

  return (
    <aside className={styles.bookingWrapper} aria-label="Reservation card">
      {/* Promotional Claim Banner */}
      <div className={styles.promoBanner}>
        <div className={styles.promoLeft}>
          <Tag size={18} color="var(--color-success)" />
          <div className={styles.promoText}>
            <span className={styles.promoTitle}>Get 10% off your next stay.</span>
            <a href="#terms" className={styles.termsLink}>Terms apply</a>
          </div>
        </div>
        <button
          type="button"
          className={`${styles.claimBtn} ${isClaimed ? styles.claimed : ""}`}
          onClick={() => setIsClaimed(!isClaimed)}>
          
          {isClaimed ? "Applied" : "Claim"}
        </button>
      </div>

      {/* Main Reservation Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.priceRow}>
            {isClaimed &&
            <span className={styles.strikethroughPrice}>
                ₹{rawBase.toLocaleString("en-IN")}
              </span>
            }
            <span className={styles.priceBold}>
              ₹{grandTotal.toLocaleString("en-IN")}
            </span>
            <span className={styles.priceUnit}>for {nights} nights</span>
          </div>
        </div>

        {/* Date & Guest Input Matrix */}
        <div className={styles.inputMatrix}>
          <div className={styles.datesRow} onClick={onDatesClick} role="button" tabIndex={0}>
            <div className={styles.dateCell}>
              <span className={styles.cellLabel}>CHECK-IN</span>
              <span className={styles.cellValue}>{formatDateShort(checkInDate)}</span>
            </div>
            <div className={styles.dateCellDivider} />
            <div className={styles.dateCell}>
              <span className={styles.cellLabel}>CHECKOUT</span>
              <span className={styles.cellValue}>{formatDateShort(checkOutDate)}</span>
            </div>
          </div>

          <div
            className={styles.guestRow}
            onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
            role="button"
            tabIndex={0}
            aria-expanded={isGuestDropdownOpen}>
            
            <div className={styles.guestInfo}>
              <span className={styles.cellLabel}>GUESTS</span>
              <span className={styles.cellValue}>
                {totalGuests} {totalGuests === 1 ? "guest" : "guests"}
                {guestCount.infants > 0 && `, ${guestCount.infants} infant`}
                {guestCount.pets > 0 && `, ${guestCount.pets} pet`}
              </span>
            </div>
            <div className={styles.guestChevron}>
              {isGuestDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>
        </div>

        {/* Guest Selector Dropdown */}
        {isGuestDropdownOpen &&
        <div className={styles.guestDropdown}>
            {/* Adults */}
            <div className={styles.dropdownRow}>
              <div>
                <p className={styles.guestType}>Adults</p>
                <p className={styles.guestAge}>Age 13+</p>
              </div>
              <div className={styles.counterGroup}>
                <button
                type="button"
                className={styles.counterBtn}
                disabled={guestCount.adults <= 1}
                onClick={() => updateGuest("adults", -1)} //decrease the guest by 1 
                aria-label="Decrease adults">
                
                  <Minus size={14} />
                </button>
                <span className={styles.counterValue}>{guestCount.adults}</span>
                <button
                type="button"
                className={styles.counterBtn}
                disabled={totalGuests >= maxGuests}
                onClick={() => updateGuest("adults", 1)} //increase the adult by one
                aria-label="Increase adults">
                
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Children */}
            <div className={styles.dropdownRow}>
              <div>
                <p className={styles.guestType}>Children</p>
                <p className={styles.guestAge}>Ages 2–12</p>
              </div>
              <div className={styles.counterGroup}>
                <button
                type="button"
                className={styles.counterBtn}
                disabled={guestCount.children <= 0}
                onClick={() => updateGuest("children", -1)}
                aria-label="Decrease children">
                
                  <Minus size={14} />
                </button>
                <span className={styles.counterValue}>{guestCount.children}</span>
                <button
                type="button"
                className={styles.counterBtn}
                disabled={totalGuests >= maxGuests}
                onClick={() => updateGuest("children", 1)}
                aria-label="Increase children">
                
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Infants */}
            <div className={styles.dropdownRow}>
              <div>
                <p className={styles.guestType}>Infants</p>
                <p className={styles.guestAge}>Under 2</p>
              </div>
              <div className={styles.counterGroup}>
                <button
                type="button"
                className={styles.counterBtn}
                disabled={guestCount.infants <= 0}
                onClick={() => updateGuest("infants", -1)}
                aria-label="Decrease infants">
                
                  <Minus size={14} />
                </button>
                <span className={styles.counterValue}>{guestCount.infants}</span>
                <button
                type="button"
                className={styles.counterBtn}
                disabled={guestCount.infants >= 5}
                onClick={() => updateGuest("infants", 1)}
                aria-label="Increase infants">
                
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Pets */}
            <div className={styles.dropdownRow}>
              <div>
                <p className={styles.guestType}>Pets</p>
                <p className={styles.guestAge}>Bringing a service animal?</p>
              </div>
              <div className={styles.counterGroup}>
                <button
                type="button"
                className={styles.counterBtn}
                disabled={guestCount.pets <= 0}
                onClick={() => updateGuest("pets", -1)}
                aria-label="Decrease pets">
                
                  <Minus size={14} />
                </button>
                <span className={styles.counterValue}>{guestCount.pets}</span>
                <button
                type="button"
                className={styles.counterBtn}
                disabled={guestCount.pets >= 2}
                onClick={() => updateGuest("pets", 1)}
                aria-label="Increase pets">
                
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <p className={styles.dropdownDisclaimer}>
              This place has a maximum of 3 guests, not including infants. Pets are allowed with prior notice.
            </p>

            <button
            type="button"
            className={styles.closeDropdownBtn}
            onClick={() => setIsGuestDropdownOpen(false)}>
            
              Close
            </button>
          </div>
        }

        {/* Free Cancellation Notice */}
        <div className={styles.cancellationNotice}>
          <span>Free cancellation before <strong>17 October</strong></span>
        </div>

        {/* Reserve Button */}
        <button
          type="button"
          className={styles.reserveButton}
          onClick={() => setIsReservedModalOpen(true)}>
          
          Reserve
        </button>

        <p className={styles.notChargedNote}>You won&apos;t be charged yet</p>

        {/* Price Breakdown */}
        <div className={styles.breakdownList}>
          <div className={styles.breakdownRow}>
            <span className={styles.breakdownLabel}>
              ₹{pricePerNight.toLocaleString("en-IN")} x {nights} nights
            </span>
            <span className={styles.breakdownValue}>
              ₹{rawBase.toLocaleString("en-IN")}
            </span>
          </div>

          {isClaimed &&
          <div className={`${styles.breakdownRow} ${styles.discountText}`}>
              <span>10% promotional discount</span>
              <span>-₹{discountAmount.toLocaleString("en-IN")}</span>
            </div>
          }

          <div className={styles.breakdownRow}>
            <span className={styles.breakdownLabel}>Cleaning fee</span>
            <span className={styles.breakdownValue}>
              ₹{cleaningFee.toLocaleString("en-IN")}
            </span>
          </div>

          <div className={styles.breakdownRow}>
            <span className={styles.breakdownLabel}>Airbnb service fee</span>
            <span className={styles.breakdownValue}>
              ₹{serviceFee.toLocaleString("en-IN")}
            </span>
          </div>

          <div className={styles.breakdownRow}>
            <span className={styles.breakdownLabel}>Taxes</span>
            <span className={styles.breakdownValue}>
              ₹{taxes.toLocaleString("en-IN")}
            </span>
          </div>

          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total before taxes</span>
            <span className={styles.totalValue}>
              ₹{grandTotal.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>

      {/* Report this listing */}
      <button
        type="button"
        className={styles.reportBtn}
        onClick={() => setIsReportModalOpen(true)}>
        
        <Flag size={14} />
        <span>Report this listing</span>
      </button>

      {/* Reservation Confirmation Modal */}
      {isReservedModalOpen &&
      <div className={styles.modalBackdrop} onClick={() => setIsReservedModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setIsReservedModalOpen(false)}>
              
                <X size={18} />
              </button>
              <h3 className={styles.modalTitle}>Reservation Request</h3>
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalSuccessText}>
                🎉 Great choice! Your dates are available:
              </p>
              <div className={styles.reservationSummary}>
                <p><strong>Property:</strong> Romantic Jacuzzi 1BHK Candolim</p>
                <p><strong>Dates:</strong> {formatDateShort(checkInDate)} – {formatDateShort(checkOutDate)} ({nights} nights)</p>
                <p><strong>Guests:</strong> {totalGuests} guests</p>
                <p><strong>Total:</strong> ₹{grandTotal.toLocaleString("en-IN")}</p>
              </div>
              <button
              type="button"
              className={styles.confirmBtn}
              onClick={() => setIsReservedModalOpen(false)}>
              
                Done
              </button>
            </div>
          </div>
        </div>
      }

      {/* Report Listing Modal */}
      {isReportModalOpen &&
      <div className={styles.modalBackdrop} onClick={() => setIsReportModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setIsReportModalOpen(false)}>
              
                <X size={18} />
              </button>
              <h3 className={styles.modalTitle}>Report this listing</h3>
            </div>
            <div className={styles.modalBody}>
              <p>Thank you for keeping our community safe. Please select a reason:</p>
              <div className={styles.reportReasons}>
                <label className={styles.reportOption}>
                  <input type="radio" name="report" defaultChecked /> It&apos;s inaccurate or incorrect
                </label>
                <label className={styles.reportOption}>
                  <input type="radio" name="report" /> It&apos;s not a real place to stay
                </label>
                <label className={styles.reportOption}>
                  <input type="radio" name="report" /> It&apos;s a scam or fraudulent
                </label>
              </div>
              <button
              type="button"
              className={styles.confirmBtn}
              onClick={() => {
                alert("Report submitted. Thank you for your feedback.");
                setIsReportModalOpen(false);
              }}>
              
                Submit Report
              </button>
            </div>
          </div>
        </div>
      }
    </aside>);

};

export default BookingCard;