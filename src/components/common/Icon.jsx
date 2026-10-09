import React from "react";
import * as Icons from "./Icons";










































export const Icon = ({
  name,
  size = 20,
  color,
  filled,
  className,
  ...props
}) => {
  switch (name) {
    case "AirbnbLogo":
      return <Icons.AirbnbLogo size={size} color={color} className={className} {...props} />;
    case "LaurelLeft":
      return <Icons.LaurelLeft size={size} color={color} className={className} {...props} />;
    case "LaurelRight":
      return <Icons.LaurelRight size={size} color={color} className={className} {...props} />;
    case "Heart":
      return <Icons.HeartIcon size={size} color={color} filled={filled} className={className} {...props} />;
    case "Share":
      return <Icons.ShareIcon size={size} color={color} className={className} {...props} />;
    case "Search":
      return <Icons.Search size={size} color={color} className={className} {...props} />;
    case "Globe":
      return <Icons.Globe size={size} color={color} className={className} {...props} />;
    case "Menu":
      return <Icons.Menu size={size} color={color} className={className} {...props} />;
    case "User":
      return <Icons.User size={size} color={color} className={className} {...props} />;
    case "Star":
      return <Icons.Star size={size} color={color} className={className} {...props} />;
    case "ChevronRight":
      return <Icons.ChevronRight size={size} color={color} className={className} {...props} />;
    case "ChevronLeft":
      return <Icons.ChevronLeft size={size} color={color} className={className} {...props} />;
    case "ChevronDown":
      return <Icons.ChevronDown size={size} color={color} className={className} {...props} />;
    case "X":
      return <Icons.X size={size} color={color} className={className} {...props} />;
    case "Plus":
      return <Icons.Plus size={size} color={color} className={className} {...props} />;
    case "Minus":
      return <Icons.Minus size={size} color={color} className={className} {...props} />;
    case "Check":
      return <Icons.Check size={size} color={color} className={className} {...props} />;
    case "Award":
      return <Icons.Award size={size} color={color} className={className} {...props} />;
    case "Sparkles":
      return <Icons.Sparkles size={size} color={color} className={className} {...props} />;
    case "Wifi":
      return <Icons.Wifi size={size} color={color} className={className} {...props} />;
    case "Tv":
      return <Icons.Tv size={size} color={color} className={className} {...props} />;
    case "Car":
      return <Icons.Car size={size} color={color} className={className} {...props} />;
    case "Wind":
      return <Icons.Wind size={size} color={color} className={className} {...props} />;
    case "CookingPot":
      return <Icons.CookingPot size={size} color={color} className={className} {...props} />;
    case "Waves":
      return <Icons.Waves size={size} color={color} className={className} {...props} />;
    case "Dumbbell":
      return <Icons.Dumbbell size={size} color={color} className={className} {...props} />;
    case "ShieldCheck":
      return <Icons.ShieldCheck size={size} color={color} className={className} {...props} />;
    case "Calendar":
      return <Icons.Calendar size={size} color={color} className={className} {...props} />;
    case "Clock":
      return <Icons.Clock size={size} color={color} className={className} {...props} />;
    case "Key":
      return <Icons.Key size={size} color={color} className={className} {...props} />;
    case "MapPin":
      return <Icons.MapPin size={size} color={color} className={className} {...props} />;
    case "Flag":
      return <Icons.Flag size={size} color={color} className={className} {...props} />;
    case "Info":
      return <Icons.Info size={size} color={color} className={className} {...props} />;
    default:
      return null;
  }
};

export default Icon;