import React from "react";









/**
 * Airbnb Brand Logo (Bélo)
 */
export const AirbnbLogo = ({
  size = 32,
  color = "#FF385C",
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="currentColor"
  style={{ color }}
  className={className}
  aria-hidden="true"
  {...props}>
  
    <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.25-3.085 7.806-7.3 7.806-2.585 0-4.836-1.378-6.2-3.483-1.364 2.105-3.615 3.483-6.2 3.483-4.215 0-7.3-3.556-7.3-7.806 0-.962.247-1.895.845-3.328l.271-.624c1.077-2.457 5.253-11.206 7.155-14.992l.624-1.209C12.392 2.062 13.916 1 16 1zm0 2.2c-1.258 0-2.298.718-3.376 2.645l-.462.894C10.3 10.457 6.16 19.124 5.097 21.554l-.234.542c-.528 1.267-.704 1.996-.704 2.782 0 3.123 2.194 5.606 5.341 5.606 2.41 0 4.457-1.742 5.152-4.244l.118-.495c.196-.926.685-1.748 1.23-2.316.545.568 1.034 1.39 1.23 2.316l.118.495c.695 2.502 2.742 4.244 5.152 4.244 3.147 0 5.341-2.483 5.341-5.606 0-.786-.176-1.515-.704-2.782l-.234-.542C25.84 19.124 21.7 10.457 19.838 6.739l-.462-.894C18.298 3.918 17.258 3.2 16 3.2zm0 10.3c2.32 0 4.2 1.93 4.2 4.31 0 2.122-1.464 4.095-3.415 4.364l-.285.026c-.22 0-.44-.01-.66-.038-1.956-.246-3.44-2.227-3.44-4.352 0-2.38 1.88-4.31 4.2-4.31zm0 2.2c-1.127 0-2 1.002-2 2.11 0 1.15.82 2.062 1.855 2.144l.145.006c.075 0 .15-.004.223-.012.985-.116 1.777-1.02 1.777-2.138 0-1.108-.873-2.11-2-2.11z" />
  </svg>;


/**
 * Left Laurel Wreath for "Guest favourite" badge in overview card
 */
export const LaurelLeft = ({
  size = 32,
  className = "",
  ...props
}) =>
<svg
  viewBox="0 0 20 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  height={size}
  className={className}
  aria-hidden="true"
  role="presentation"
  focusable="false"
  {...props}>
  
    <g clipPath="url(#clip0_laurel_left)">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4895 25.417L14.8276 24.4547L16.5303 23.6492L17.1923 24.6116L16.3409 25.0143L17.1923 24.6116C18.6638 26.751 17.9509 29.3868 15.5999 30.4989C14.8548 30.8513 14.0005 31.0196 13.1221 30.987L12.8044 30.9752L12.7297 29.2305L13.0474 29.2423C13.5744 29.2618 14.0871 29.1608 14.5341 28.9494C15.9447 28.2821 16.3725 26.7007 15.4895 25.417Z" fill="#222222" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8.32441 10.235C10.0819 8.96204 10.9247 7.4878 10.853 5.81232C10.7813 4.13685 9.80929 2.59524 7.93708 1.18749C6.17964 2.46049 5.33678 3.93473 5.40851 5.6102C5.48024 7.28568 6.45221 8.82729 8.32441 10.235Z" fill="#F7F7F7" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7.19425 0.489275C7.55718 0.226387 8.10753 0.246818 8.49416 0.537533C10.5385 2.07473 11.7071 3.84975 11.7923 5.84026C11.8775 7.83076 10.8574 9.52453 8.93841 10.9146C8.57548 11.1775 8.02513 11.157 7.6385 10.8663C5.59415 9.32914 4.4256 7.55411 4.34039 5.56361C4.25517 3.57311 5.27521 1.87933 7.19425 0.489275ZM7.92362 2.3684C6.77985 3.38355 6.29788 4.47199 6.3478 5.63813C6.39772 6.80428 6.97457 7.93203 8.20904 9.03547C9.35281 8.02032 9.83478 6.93187 9.78486 5.76573C9.73493 4.59959 9.15809 3.47184 7.92362 2.3684Z" fill="#222222" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15.6806 24.0529C14.1314 22.353 12.4326 21.4688 10.5842 21.4001C8.73575 21.3315 7.10737 22.0923 5.69905 23.6824C7.24822 25.3823 8.94702 26.2666 10.7955 26.3352C12.6439 26.4038 14.2723 25.6431 15.6806 24.0529Z" fill="#F7F7F7" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.90529 24.1787C4.60807 23.8526 4.58911 23.4097 4.8593 23.1046C6.38985 21.3765 8.27538 20.4331 10.521 20.5164C12.7666 20.5998 14.7391 21.6864 16.4227 23.5339C16.7199 23.86 16.7389 24.303 16.4687 24.608C14.9381 26.3361 13.0526 27.2795 10.807 27.1962C8.56134 27.1128 6.5889 26.0262 4.90529 24.1787ZM6.98781 23.7198C8.22307 24.8808 9.46778 25.4045 10.7323 25.4515C11.9968 25.4984 13.2005 25.0656 14.3402 23.9928C13.1049 22.8318 11.8602 22.3081 10.5957 22.2611C9.3312 22.2142 8.12744 22.6471 6.98781 23.7198Z" fill="#222222" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6766 20.7043C10.2137 18.5957 9.16392 17.0928 7.52727 16.1956C5.89062 15.2984 3.99442 15.1864 1.83867 15.8596C2.30157 17.9683 3.35135 19.4712 4.988 20.3684C6.62465 21.2656 8.52085 21.3775 10.6766 20.7043Z" fill="#F7F7F7" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0.791956 15.9443C0.703053 15.5393 0.94431 15.1569 1.37329 15.023C3.7337 14.2859 5.9714 14.3695 7.95247 15.4554C9.92449 16.5364 11.1013 18.3139 11.6022 20.5956C11.6911 21.0006 11.4499 21.3829 11.0209 21.5169C8.66048 22.254 6.42277 22.1704 4.4417 21.0844C2.46969 20.0034 1.29285 18.226 0.791956 15.9443ZM2.95349 16.4656C3.43375 17.9951 4.27991 19.007 5.41321 19.6282C6.5306 20.2407 7.84423 20.4286 9.44069 20.0743C8.96043 18.5448 8.11427 17.5329 6.98097 16.9116C5.86358 16.2991 4.54995 16.1113 2.95349 16.4656Z" fill="#222222" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7.90911 15.6267C8.65652 13.6743 8.53705 11.9555 7.55072 10.4702C6.56438 8.98484 4.90844 8.03014 2.58291 7.60605C1.8355 9.55846 1.95497 11.2773 2.9413 12.7626C3.92764 14.2479 5.58357 15.2026 7.90911 15.6267Z" fill="#F7F7F7" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1.66037 7.28295C1.80927 6.89397 2.26578 6.67525 2.74598 6.76282C5.29848 7.22831 7.26368 8.31371 8.44396 10.0911C9.61955 11.8614 9.70866 13.854 8.89805 15.9715C8.74915 16.3605 8.29264 16.5792 7.81244 16.4916C5.25994 16.0261 3.29474 14.9407 2.11446 13.1634C0.938866 11.393 0.849755 9.40048 1.66037 7.28295ZM3.3385 8.6613C2.94038 10.1267 3.14588 11.3465 3.83454 12.3835C4.51397 13.4067 5.60091 14.1584 7.21992 14.5931C7.61804 13.1278 7.41254 11.9079 6.72388 10.8709C6.04445 9.84774 4.95751 9.09607 3.3385 8.6613Z" fill="#222222" />
    </g>
    <defs>
      <clipPath id="clip0_laurel_left">
        <rect width="18.8235" height="32" fill="white" transform="translate(0.453125 0.000488281)" />
      </clipPath>
    </defs>
  </svg>;


export const LaurelRight = ({
  size = 32,
  className = "",
  ...props
}) =>
<svg
  viewBox="0 0 20 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  height={size}
  className={className}
  aria-hidden="true"
  role="presentation"
  focusable="false"
  {...props}>
  
    <g clipPath="url(#clip0_laurel_right)">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.06516 25.417L4.72713 24.4547L3.02437 23.6492L2.3624 24.6116L3.21378 25.0143L2.3624 24.6116C0.890857 26.751 1.60381 29.3868 3.95483 30.4989C4.69986 30.8513 5.55423 31.0196 6.43257 30.987L6.75025 30.9752L6.82494 29.2305L6.50726 29.2423C5.98026 29.2618 5.46764 29.1608 5.02062 28.9494C3.61001 28.2821 3.18223 26.7007 4.06516 25.417Z" fill="#222222" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.2303 10.235C9.47283 8.96204 8.62998 7.4878 8.70171 5.81232C8.77344 4.13685 9.7454 2.59524 11.6176 1.18749C13.375 2.46049 14.2179 3.93473 14.1462 5.6102C14.0744 7.28568 13.1025 8.82729 11.2303 10.235Z" fill="#F7F7F7" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.3604 0.489275C11.9975 0.226387 11.4472 0.246818 11.0605 0.537533C9.01618 2.07473 7.84763 3.84975 7.76242 5.84026C7.6772 7.83076 8.69724 9.52453 10.6163 10.9146C10.9792 11.1775 11.5296 11.157 11.9162 10.8663C13.9605 9.32914 15.1291 7.55411 15.2143 5.56361C15.2995 3.57311 14.2795 1.87933 12.3604 0.489275ZM11.6311 2.3684C12.7748 3.38355 13.2568 4.47199 13.2069 5.63813C13.157 6.80428 12.5801 7.93203 11.3456 9.03547C10.2019 8.02032 9.71991 6.93187 9.76983 5.76573C9.81975 4.59959 10.3966 3.47184 11.6311 2.3684Z" fill="#222222" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3.87411 24.0529C5.42328 22.353 7.12208 21.4688 8.97051 21.4001C10.8189 21.3315 12.4473 22.0923 13.8556 23.6824C12.3065 25.3823 10.6077 26.2666 8.75924 26.3352C6.9108 26.4038 5.28243 25.6431 3.87411 24.0529Z" fill="#F7F7F7" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14.6494 24.1787C14.9466 23.8526 14.9656 23.4097 14.6954 23.1046C13.1648 21.3765 11.2793 20.4331 9.03368 20.5164C6.78805 20.5998 4.81561 21.6864 3.13199 23.5339C2.83478 23.86 2.81582 24.303 3.08601 24.608C4.61655 26.3361 6.50208 27.2795 8.74771 27.1962C10.9933 27.1128 12.9658 26.0262 14.6494 24.1787ZM12.5669 23.7198C11.3316 24.8808 10.0869 25.4045 8.82241 25.4515C7.55791 25.4984 6.35415 25.0656 5.21452 23.9928C6.44977 22.8318 7.69449 22.3081 8.95899 22.2611C10.2235 22.2142 11.4272 22.6471 12.5669 23.7198Z" fill="#222222" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8.87809 20.7043C9.34099 18.5957 10.3908 17.0928 12.0274 16.1956C13.6641 15.2984 15.5603 15.1864 17.716 15.8596C17.2531 17.9683 16.2033 19.4712 14.5667 20.3684C12.93 21.2656 11.0338 21.3775 8.87809 20.7043Z" fill="#F7F7F7" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18.7627 15.9443C18.8516 15.5393 18.6104 15.1569 18.1814 15.023C15.821 14.2859 13.5833 14.3695 11.6022 15.4554C9.6302 16.5364 8.45336 18.3139 7.95247 20.5956C7.86356 21.0006 8.10482 21.3829 8.5338 21.5169C10.8942 22.254 13.1319 22.1704 15.113 21.0844C17.085 20.0034 18.2618 18.226 18.7627 15.9443ZM16.6012 16.4656C16.1209 17.9951 15.2748 19.007 14.1415 19.6282C13.0241 20.2407 11.7105 20.4286 10.114 20.0743C10.5943 18.5448 11.4404 17.5329 12.5737 16.9116C13.6911 16.2991 15.0047 16.1113 16.6012 16.4656Z" fill="#222222" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.6456 15.6267C10.8982 13.6743 11.0176 11.9555 12.004 10.4702C12.9903 8.98484 14.6462 8.03014 16.9718 7.60605C17.7192 9.55846 17.5997 11.2773 16.6134 12.7626C15.6271 14.2479 13.9711 15.2026 11.6456 15.6267Z" fill="#F7F7F7" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17.8943 7.28295C17.7454 6.89397 17.2889 6.67525 16.8087 6.76282C14.2562 7.22831 12.291 8.31371 11.1107 10.0911C9.93513 11.8614 9.84602 13.854 10.6566 15.9715C10.8055 16.3605 11.262 16.5792 11.7422 16.4916C14.2947 16.0261 16.26 14.9407 17.4402 13.1634C18.6158 11.393 18.7049 9.40048 17.8943 7.28295ZM16.2162 8.6613C16.6143 10.1267 16.4088 11.3465 15.7201 12.3835C15.0407 13.4067 13.9538 14.1584 12.3348 14.5931C11.9366 13.1278 12.1421 11.9079 12.8308 10.8709C13.5102 9.84774 14.5972 9.09607 16.2162 8.6613Z" fill="#222222" />
    </g>
    <defs>
      <clipPath id="clip0_laurel_right">
        <rect width="18.8235" height="32" fill="white" transform="matrix(-1 0 0 1 19.1016 0.000488281)" />
      </clipPath>
    </defs>
  </svg>;


/**
 * Wishlist Heart (Outline & Filled)
 */
export const HeartIcon = ({
  size = 18,
  color = "currentColor",
  filled = false,
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill={filled ? "#FF385C" : "rgba(0, 0, 0, 0.45)"}
  stroke={filled ? "#FF385C" : "#FFFFFF"}
  strokeWidth="2.2"
  className={className}
  aria-hidden="true"
  {...props}>
  
    <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05A6.98 6.98 0 0 0 9 4a6.98 6.98 0 0 0-7 7c0 7 7 12.27 14 17z" />
  </svg>;


/**
 * Share Icon
 */
export const ShareIcon = ({
  size = 16,
  color = "currentColor",
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="none"
  stroke={color}
  strokeWidth="2.5"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={className}
  aria-hidden="true"
  {...props}>
  
    <path d="M27 20v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6M16 4v16M8 11l8-7 8 7" />
  </svg>;


/* -------------------------------------------------------------
 * EXACT REFERENCE ICONS (HIGHLIGHTS & AMENITIES)
 * ------------------------------------------------------------- */

/**
 * Outdoor entertainment: Barbecue / Firepit with flames
 */
export const OutdoorEntertainmentIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="none"
  stroke={color}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={className}
  aria-hidden="true"
  {...props}>
  
    {/* Base firepit tray */}
    <rect x="4" y="20" width="24" height="6" rx="1" />
    <line x1="8" y1="26" x2="6" y2="30" />
    <line x1="24" y1="26" x2="26" y2="30" />
    {/* Fire flames */}
    <path d="M16 6 C13 10 11 14 12 18 C14 17 15 15 16 13 C17 16 19 18 20 18 C22 15 20 10 16 6 Z" />
    <path d="M10 16 C9 18 10 19 11 20" />
  </svg>;


/**
 * Designed for staying cool: 4-blade Ceiling fan
 */
export const CeilingFanIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="none"
  stroke={color}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={className}
  aria-hidden="true"
  {...props}>
  
    {/* Center hub */}
    <circle cx="16" cy="16" r="3" />
    {/* 4 Fan blades */}
    <path d="M16 13 C16 8 13 4 10 4 C9 7 12 12 14 14" />
    <path d="M19 16 C24 16 28 13 28 10 C25 9 20 12 18 14" />
    <path d="M16 19 C16 24 19 28 22 28 C23 25 20 20 18 18" />
    <path d="M13 16 C8 16 4 19 4 22 C7 23 12 20 14 18" />
  </svg>;


/**
 * Self check-in: Door with frame and knob
 */
export const DoorCheckInIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="none"
  stroke={color}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={className}
  aria-hidden="true"
  {...props}>
  
    {/* Frame */}
    <path d="M5 28 L5 4 L27 4 L27 28" />
    {/* Door */}
    <rect x="9" y="4" width="14" height="24" />
    {/* Knob */}
    <circle cx="13" cy="16" r="1" fill={color} />
    {/* Ground line */}
    <line x1="3" y1="28" x2="29" y2="28" />
  </svg>;


/**
 * Kitchen: Utensils (Fork, Knife, Spoon)
 */
export const KitchenUtensilsIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="none"
  stroke={color}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={className}
  aria-hidden="true"
  {...props}>
  
    {/* Fork on left */}
    <path d="M6 4 L6 11 C6 13 8 14 9 14 L9 28 M6 4 L9 4 M9 4 L9 11 M12 4 L12 11 C12 13 10 14 9 14" />
    {/* Knife in middle */}
    <path d="M17 4 C19 6 19 12 19 15 L17 15 L17 28" />
    {/* Spoon on right */}
    <path d="M25 4 C23 4 21 7 21 11 C21 14 23 15 25 15 L25 28 M25 4 C27 4 29 7 29 11 C29 14 27 15 25 15" />
  </svg>;


/**
 * Dedicated workspace: Desk with lamp and laptop
 */
export const DedicatedWorkspaceIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="none"
  stroke={color}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={className}
  aria-hidden="true"
  {...props}>
  
    {/* Table surface */}
    <line x1="4" y1="20" x2="28" y2="20" />
    {/* Legs */}
    <line x1="6" y1="20" x2="6" y2="29" />
    <line x1="26" y1="20" x2="26" y2="29" />
    {/* Laptop */}
    <path d="M12 16 L20 16 M10 20 L22 20" />
    {/* Lamp on left */}
    <path d="M7 20 L7 10 L10 12" />
    <path d="M8 8 L12 10" />
  </svg>;


/**
 * Pool: Swimming pool ladder & water ripples
 */
export const PoolLadderIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="none"
  stroke={color}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={className}
  aria-hidden="true"
  {...props}>
  
    {/* Ladder rails */}
    <path d="M10 4 C8 4 6 6 6 9 L6 20" />
    <path d="M16 4 C14 4 12 6 12 9 L12 20" />
    {/* Rungs */}
    <line x1="6" y1="10" x2="12" y2="10" />
    <line x1="6" y1="14" x2="12" y2="14" />
    <line x1="6" y1="18" x2="12" y2="18" />
    {/* Water wave 1 */}
    <path d="M4 23 C7 21 9 25 12 23 C15 21 17 25 20 23 C23 21 25 25 28 23" />
    {/* Water wave 2 */}
    <path d="M4 27 C7 25 9 29 12 27 C15 25 17 29 20 27 C23 25 25 29 28 27" />
  </svg>;


/**
 * Hot tub: Tub with steam
 */
export const HotTubIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="none"
  stroke={color}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={className}
  aria-hidden="true"
  {...props}>
  
    {/* Tub box */}
    <rect x="4" y="14" width="24" height="14" rx="2" />
    {/* Steam line 1 */}
    <path d="M10 10 C9 8 11 6 10 4" />
    {/* Steam line 2 */}
    <path d="M16 10 C15 8 17 6 16 4" />
    {/* Steam line 3 */}
    <path d="M22 10 C21 8 23 6 22 4" />
  </svg>;


/**
 * Free parking: Front of car
 */
export const FreeParkingIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="none"
  stroke={color}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={className}
  aria-hidden="true"
  {...props}>
  
    {/* Windshield and roof */}
    <path d="M7 16 L9 8 C10 6 11 6 16 6 C21 6 22 6 23 8 L25 16" />
    {/* Body */}
    <rect x="4" y="16" width="24" height="10" rx="3" />
    {/* Headlights */}
    <circle cx="8" cy="21" r="1.5" fill={color} />
    <circle cx="24" cy="21" r="1.5" fill={color} />
    {/* Tires */}
    <line x1="6" y1="26" x2="6" y2="29" />
    <line x1="26" y1="26" x2="26" y2="29" />
  </svg>;


/**
 * Security Camera Mounted
 */
export const SecurityCameraIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="none"
  stroke={color}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={className}
  aria-hidden="true"
  {...props}>
  
    {/* Mount plate */}
    <line x1="5" y1="8" x2="5" y2="24" />
    <path d="M5 16 L12 16" />
    {/* Camera cylinder pointing down-right */}
    <path d="M12 11 L25 14 L23 22 L10 19 Z" />
    <path d="M25 14 L29 12 L28 24 L23 22" />
  </svg>;


/**
 * Carbon Monoxide Alarm Crossed
 */
export const CarbonMonoxideCrossedIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="none"
  stroke={color}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={className}
  aria-hidden="true"
  {...props}>
  
    {/* Square detector */}
    <rect x="5" y="6" width="22" height="20" rx="4" />
    {/* Inner detail */}
    <line x1="10" y1="12" x2="16" y2="12" />
    <line x1="10" y1="16" x2="14" y2="16" />
    {/* Strikethrough diagonal line */}
    <line x1="3" y1="28" x2="29" y2="4" strokeWidth="2.2" />
  </svg>;


/**
 * Smoke Alarm Crossed
 */
export const SmokeAlarmCrossedIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="none"
  stroke={color}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={className}
  aria-hidden="true"
  {...props}>
  
    {/* Circle detector */}
    <circle cx="16" cy="16" r="11" />
    <circle cx="16" cy="16" r="5" />
    {/* Strikethrough diagonal line */}
    <line x1="4" y1="28" x2="28" y2="4" strokeWidth="2.2" />
  </svg>;


// Re-export Lucide Icons used across the application
export {
  Search,
  Globe,
  Menu,
  User,
  Star,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  X,
  Plus,
  Minus,
  Check,
  CheckCircle,
  Award,
  Sparkles,
  Wifi,
  Tv,
  Car,
  Wind,
  CookingPot,
  Utensils,
  Waves,
  Dumbbell,
  Shield,
  ShieldCheck,
  Calendar,
  Clock,
  Key,
  MapPin,
  Flag,
  Info,
  Bath,
  Briefcase,
  PawPrint,
  Camera,
  BellOff,
  LayoutGrid,
  SprayCan,
  MessageSquare,
  Compass,
  Tag,
  GraduationCap,
  Bed,
  Sofa,
  Copy,
  SlidersHorizontal,
  Home,
  Heart,
  Share2 } from
"lucide-react"; //here Globe is imported from lucide react and that is used in the Footer.jsx , it's re-exported there again 

//1. Why not directly import from lucide-react  ? 
//cause the application gives central place for all icons , so those icons can be extracted from that central place

//2. react component -> props/ default props  -> SVG (now, custom icon is created) 