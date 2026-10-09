import React, { useState } from "react";
import Shell from "./components/layout/Shell";
import styles from "./page.module.css";

// Structured Mock Data
import { listingData } from "./data/listing";
import { heroPhotos, allListingPhotos } from "./data/photos";
import { reviewsData } from "./data/reviews";
import { nearbyStays } from "./data/nearbyStays";

// Listing Components
import StickySubNav from "./components/listing/StickySubNav";
import ListingHeader from "./components/listing/ListingHeader";
import HeroGallery from "./components/listing/HeroGallery";
import ListingOverview from "./components/listing/ListingOverview";
import ListingDescription from "./components/listing/ListingDescription";
import SleepingArrangements from "./components/listing/SleepingArrangements";
import AmenitiesSection from "./components/listing/AmenitiesSection";
import BookingCard from "./components/listing/BookingCard";
import CalendarSection from "./components/listing/CalendarSection";
import ReviewsSection from "./components/listing/ReviewsSection";
import LocationMap from "./components/listing/LocationMap";
import MeetYourHost from "./components/listing/MeetYourHost";
import ThingsToKnow from "./components/listing/ThingsToKnow";
import MoreStaysNearby from "./components/listing/MoreStaysNearby";

// Modals
import PhotoTourModal from "./components/listing/PhotoTourModal";
import LightboxModal from "./components/listing/LightboxModal";

export default function Home() {
  // Dates state: Default Oct 18, 2026 to Oct 23, 2026 (5 nights)
  const [checkInDate, setCheckInDate] = useState(
    new Date(2026, 9, 18)
  );
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(2026, 9, 23)
  );

  // Guests count state: Default 2 adults
  const [guestCount, setGuestCount] = useState({
    adults: 2,
    children: 0,
    infants: 0,
    pets: 0
  });

  // Modal states
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Calculate nights
  const totalNights =
  checkInDate && checkOutDate ?
  Math.max(
    1,
    Math.round(
      (checkOutDate.getTime() - checkInDate.getTime()) / (
      1000 * 60 * 60 * 24)
    )
  ) :
  5;

  // Calculate pricing
  const basePricePerNight = listingData.pricing.basePricePerNight;
  const totalPrice = basePricePerNight * totalNights;

  const handleSelectDates = (start, end) => {
    setCheckInDate(start);
    setCheckOutDate(end);
  };

  //after clicking on reserve in sticky navbar , te project scrolls to calendar
  const scrollToCalendar = () => {
    const el = document.getElementById("calendar");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleOpenPhotoTour = () => {
    setIsPhotoTourOpen(true);
  };

  const handleClosePhotoTour = () => {
    setIsPhotoTourOpen(false);
  };

  return (
    <Shell>
      {/* Sticky Sub Nav (Fixed when scrolling) */}
      <StickySubNav
        totalPrice={totalPrice}
        nights={totalNights}
        rating={listingData.rating.score}
        reviewCount={listingData.rating.reviewCount}
        onReserveClick={scrollToCalendar} />
      

      <div className={styles.pageContainer}>
        {/* Photos & Header Section */}
        <div className={styles.heroSection} id="photos">
          <ListingHeader title={listingData.title} />
          <HeroGallery
            photos={heroPhotos}
            onOpenPhotoTour={handleOpenPhotoTour}
            onOpenLightbox={handleOpenLightbox} />
          
        </div>

        {/* Two-column Layout: Left Content & Right Sticky Booking Card */}
        <div className={styles.mainContentGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <ListingOverview listing={listingData} />
            <ListingDescription listing={listingData} />
            <SleepingArrangements
              onSelectRoom={() => handleOpenLightbox(2)} />
            
            <AmenitiesSection />
            <CalendarSection
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              onSelectDates={handleSelectDates}
              city={listingData.location.city} />
            
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className={styles.rightColumn}>
            <BookingCard
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              onDatesClick={scrollToCalendar}
              guestCount={guestCount}
              setGuestCount={setGuestCount}
              pricePerNight={basePricePerNight}
              totalNights={totalNights} />
            
          </div>
        </div>

        {/* Full Width Sections Below */}
        <div className={styles.fullWidthSections}>
          <ReviewsSection
            score={listingData.rating.score}
            reviewCount={listingData.rating.reviewCount}
            reviews={reviewsData} />
          

          <LocationMap location={listingData.location} />

          <MeetYourHost host={listingData.host} />

          <ThingsToKnow data={listingData.thingsToKnow} />

          <MoreStaysNearby stays={nearbyStays} />
        </div>
      </div>

      {/* Photo Tour Modal */}
      {isPhotoTourOpen &&
      <PhotoTourModal
        onClose={handleClosePhotoTour}
        onSelectPhoto={(idx) => {
          setIsPhotoTourOpen(false);
          setLightboxIndex(idx);
        }}
        allPhotos={allListingPhotos} />

      }

      {/* Lightbox Modal */}
      {lightboxIndex !== null &&
      <LightboxModal
        photos={allListingPhotos}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onChangeIndex={(idx) => setLightboxIndex(idx)} />

      }
    </Shell>);

}