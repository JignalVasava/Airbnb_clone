import React, { useState } from "react";
import styles from "./CalendarSection.module.css";
import { ChevronLeft, ChevronRight } from "../../components/common/Icons";








export const CalendarSection = ({
  checkInDate,
  checkOutDate,
  onSelectDates,
  city
}) => {
  // Base month is October 2026
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(9); // 0-indexed: 9 = October
  const [hoverDate, setHoverDate] = useState(null);

  const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];


  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (date) => {
    if (!checkInDate || checkInDate && checkOutDate) {
      // Start new selection
      onSelectDates(date, null);
    } else if (checkInDate && !checkOutDate) {
      if (date < checkInDate) {
        onSelectDates(date, null);
      } else if (date.getTime() === checkInDate.getTime()) {
        onSelectDates(null, null);
      } else {
        onSelectDates(checkInDate, date);
      }
    }
  };

  const clearDates = () => {
    onSelectDates(null, null);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };//Day 0 of november : last day of october

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay(); // 0 = Sunday
  };

  const isSameDay = (d1, d2) => {
    if (!d1 || !d2) return false;
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate());

  };

  const isInRange = (d) => { //This determines whether a calendar date should receive the inRange CSS class
    //calendar ni date par black circle , so ae date mate we use it   
    
    const targetTime = d.getTime();
    if (checkInDate && checkOutDate) {
      return targetTime > checkInDate.getTime() && targetTime < checkOutDate.getTime(); //because the start and end dates have their own styling. and middle element as diff stylin
    }
    if (checkInDate && !checkOutDate && hoverDate) {

      //getTime() converts a JavaScript Date into a number representing the date/time in milliseconds since January 1, 1970 (UTC
      const minTime = Math.min(checkInDate.getTime(), hoverDate.getTime());
      const maxTime = Math.max(checkInDate.getTime(), hoverDate.getTime());
      return targetTime > minTime && targetTime < maxTime;

    }
    return false;
  };

  const renderMonth = (year, month, isLeft) => { //Generate the entire calendar UI for one month.
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const dayCells = [];

    // Empty cells before day 1
    for (let i = 0; i < firstDay; i++) {
      dayCells.push(<div key={`empty-${i}`} className={styles.emptyCell} />);
    }

    // Days 1..N
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isStart = isSameDay(date, checkInDate);
      const isEnd = isSameDay(date, checkOutDate);
      const inRange = isInRange(date);

      dayCells.push(
        <button
          key={`day-${day}`}
          type="button"
          className={`${styles.dayBtn} ${isStart ? styles.startDay : ""} ${
          isEnd ? styles.endDay : ""} ${
          inRange ? styles.inRange : ""}`}
          onClick={() => handleDateClick(date)}
          onMouseEnter={() => setHoverDate(date)}
          onMouseLeave={() => setHoverDate(null)}
          aria-label={`${day} ${months[month]} ${year}`}>
          
          <span className={styles.dayNumber}>{day}</span>
        </button>
      );
    }

    return (
      <div className={styles.monthCalendar}>
        <div className={styles.monthHeader}>
          {isLeft ?
          <button
            type="button"
            className={styles.navArrow}
            onClick={handlePrevMonth}
            aria-label="Previous month">
            
              <ChevronLeft size={18} />
            </button> :

          <div className={styles.navPlaceholder} />
          }

          <h4 className={styles.monthTitle}>
            {months[month]} {year}
          </h4>

          {!isLeft ?
          <button
            type="button"
            className={styles.navArrow}
            onClick={handleNextMonth}
            aria-label="Next month">
            
              <ChevronRight size={18} />
            </button> :

          <div className={styles.navPlaceholder} />
          }
        </div>

        <div className={styles.weekdaysRow}>
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>

        <div className={styles.daysGrid}>{dayCells}</div>
      </div>);

  };

  // Right month calculation
  const nextMonthNum = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;

  // Nights count calculation
  const nights =
  checkInDate && checkOutDate ?
  Math.round(
    (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
  ) :
  0;

  const formatDateRangeText = () => {
    if (checkInDate && checkOutDate) {
      const d1 = `${checkInDate.getDate()} ${months[checkInDate.getMonth()].slice(0, 3)} ${checkInDate.getFullYear()}`;
      const d2 = `${checkOutDate.getDate()} ${months[checkOutDate.getMonth()].slice(0, 3)} ${checkOutDate.getFullYear()}`;
      return `${d1} - ${d2}`;
    }
    if (checkInDate) {
      return `Check-in: ${checkInDate.getDate()} ${months[checkInDate.getMonth()]}, select checkout`;
    }
    return "Select check-in date";
  };

  return (
    <section className={styles.calendarSection} id="calendar" aria-labelledby="calendar-title">
      <div className={styles.headerArea}>
        <h3 id="calendar-title" className={styles.sectionTitle}>
          {nights > 0 ? `${nights} nights in ${city}` : `Add dates for your stay in ${city}`}
        </h3>
        <p className={styles.dateRangeText}>{formatDateRangeText()}</p>
      </div>

      <div className={styles.dualMonthContainer}>
        {renderMonth(currentYear, currentMonth, true)}
        {renderMonth(nextMonthYear, nextMonthNum, false)}
      </div>

      <div className={styles.calendarFooter}>
        <div className={styles.keyboardPill} title="Keyboard accessible calendar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8" />
          </svg>
        </div>

        <button
          type="button"
          className={styles.clearDatesBtn}
          onClick={clearDates}>
          
          Clear dates
        </button>
      </div>

      <div className={styles.sectionDivider} />
    </section>);

};

export default CalendarSection;