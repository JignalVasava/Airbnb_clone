import React, { useState } from "react";
import styles from "./LocationMap.module.css";
import { Search, Plus, Minus, ChevronRight, X } from "../../components/common/Icons";






export const LocationMap = ({ location }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); //location detail : show more options 

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  return (
    <section className={styles.locationSection} id="location" aria-labelledby="location-title">
      <h3 id="location-title" className={styles.sectionTitle}>
        Where you&apos;ll be
      </h3>
      <p className={styles.locationSubtitle}>
        {location.city}, {location.state}, {location.country}
      </p>

      {/* Styled Interactive SVG Map */}
      <div className={styles.mapContainer} role="region" aria-label="Interactive map of property area">
        {/* Top Left Search */}
        <div className={styles.mapControlsTopLeft}>
          <button
            type="button"
            className={styles.controlBtn}
            onClick={() => alert(`Centering on ${location.city}, ${location.state}`)}
            aria-label="Search map location">
            
            <Search size={18} />
          </button>
        </div>

        {/* Top Right Zoom Controls */}
        <div className={styles.mapControlsTopRight}>
          <button
            type="button"
            className={styles.zoomBtn}
            onClick={handleZoomIn}
            aria-label="Zoom in">
            
            <Plus size={16} />
          </button>
          <div className={styles.zoomDivider} />
          <button
            type="button"
            className={styles.zoomBtn}
            onClick={handleZoomOut}
            aria-label="Zoom out">
            
            <Minus size={16} />
          </button>
        </div>

        {/* SVG Map Graphics matching reference screenshot img_9.png */}
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: `scale(${zoomLevel})`,
            transformOrigin: "center center",
            transition: "transform 0.3s ease"
          }}>
          
          {/*This is not Google Maps or an external map API , The developer is drawing a simplified map manually using SVG shapes*/}
          <svg
            className={styles.mapSvg}
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"> {/*what is preserveAspectRatio and xmlns*/}
            
            {/* Background Land */}
            <rect width="1000" height="500" fill="#EDF3ED" />

            {/* Ocean / Coastal Water on West (Left side) */}
            <path
              d="M 0 0 L 430 0 L 280 500 L 0 500 Z"
              fill="#A2C8E2" />
            

            {/* Sandy Beach Coastline */}
            <path
              d="M 430 0 L 442 0 L 292 500 L 280 500 Z"
              fill="#F2E6C9" />
            

            {/* Grid / Street Guidelines ,g : group all of them together  */}
            <g stroke="#E0EBE0" strokeWidth="1">
              <line x1="0" y1="100" x2="1000" y2="100" />
              <line x1="0" y1="200" x2="1000" y2="200" />
              <line x1="0" y1="300" x2="1000" y2="300" />
              <line x1="0" y1="400" x2="1000" y2="400" />
              <line x1="200" y1="0" x2="200" y2="500" />
              <line x1="400" y1="0" x2="400" y2="500" />
              <line x1="600" y1="0" x2="600" y2="500" />
              <line x1="800" y1="0" x2="800" y2="500" />
            </g>

            {/* Pale Green Parks / Natural Reserves */}
            <circle cx="350" cy="260" r="45" fill="#D3E4CE" opacity="0.9" />
            <circle cx="640" cy="320" r="60" fill="#D3E4CE" opacity="0.9" />
            <circle cx="780" cy="140" r="40" fill="#D3E4CE" opacity="0.8" />

            {/* Main Road Lines */}
            <path
              d="M 320 0 Q 380 200 420 500"
              stroke="#FFFFFF"
              strokeWidth="6"
              fill="none" />
            
            <path
              d="M 420 280 Q 560 260 1000 240"
              stroke="#FFFFFF"
              strokeWidth="6"
              fill="none" />
            
            <path
              d="M 495 0 Q 505 270 510 500"
              stroke="#FFFFFF"
              strokeWidth="4"
              fill="none" />
            

            {/* Property Marker (Black circle with white house icon) */}
            <g
              transform="translate(495, 270)"
              className={styles.markerContainer}
              onClick={() => alert(`Location: ${location.fullAddress}`)}>
              
              {/* Outer soft shadow */}
              <circle cx="0" cy="0" r="28" fill="#000000" opacity="0.15" />
              {/* Black Pin Circle */}
              <circle cx="0" cy="0" r="22" fill="#222222" />
              {/* White House Icon inside */}
              <g transform="translate(-10, -10)">
                <path
                  d="M10 2.5L2 9.5V18.5H7V13.5H13V18.5H18V9.5L10 2.5Z"
                  fill="#FFFFFF" />
                
              </g>
            </g>
          </svg>
        </div>
      </div>

      <p className={styles.exactLocationNotice}>
        Exact location will be provided after booking.
      </p>

      {/* Neighbourhood highlights */}
      <div className={styles.neighbourhoodArea}>
        <h4 className={styles.neighbourhoodTitle}>Neighbourhood highlights</h4>
        <p className={styles.neighbourhoodText}>
          {location.neighborhoodDescription}
        </p>
        <button
          type="button"
          className={styles.showMoreBtn}
          onClick={() => setIsModalOpen(true)}>
          
          <span>Show more</span>
          <ChevronRight size={16} />
        </button>
      </div>

      <div className={styles.sectionDivider} />

      {/* Location Details Modal */}
      {isModalOpen &&
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
        onClick={() => setIsModalOpen(false)}>
        
          <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            padding: "32px",
            width: "100%",
            maxWidth: "640px",
            maxHeight: "85vh",
            overflowY: "auto",
            boxShadow: "var(--shadow-modal)"
          }}
          onClick={(e) => e.stopPropagation()}>
          
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "22px", fontWeight: "600" }}>Where you&apos;ll be</h3>
              <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer" }}>
              
                <X size={20} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>Candolim, Goa, India</h4>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--color-text-secondary)" }}>
                  {location.neighborhoodDescription}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>Getting around</h4>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--color-text-secondary)" }}>
                  {location.gettingAround}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>Full Address</h4>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--color-text-secondary)" }}>
                  {location.fullAddress}
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </section>);

};

export default LocationMap;