






export const featuredAmenities = [
{
  id: "amenity-kitchen",
  name: "Kitchen",
  icon: "CookingPot",
  available: true,
  category: "Kitchen & dining"
},
{
  id: "amenity-wifi",
  name: "Wifi",
  icon: "Wifi",
  available: true,
  category: "Internet & office"
},
{
  id: "amenity-workspace",
  name: "Dedicated workspace",
  icon: "Briefcase",
  available: true,
  category: "Internet & office"
},
{
  id: "amenity-parking",
  name: "Free parking on premises",
  icon: "Car",
  available: true,
  category: "Parking & facilities"
},
{
  id: "amenity-pool",
  name: "Pool",
  icon: "Waves",
  available: true,
  category: "Outdoor"
},
{
  id: "amenity-hottub",
  name: "Hot tub",
  icon: "Bath",
  available: true,
  category: "Bathroom"
},
{
  id: "amenity-pets",
  name: "Pets allowed",
  icon: "PawPrint",
  available: true,
  category: "Services"
},
{
  id: "amenity-cameras",
  name: "Exterior security cameras on property",
  icon: "Camera",
  available: true,
  category: "Home safety"
},
{
  id: "amenity-co-alarm",
  name: "Carbon monoxide alarm",
  icon: "BellOff",
  available: false,
  explanation: "This host hasn't reported a carbon monoxide alarm on the property.",
  category: "Not included"
},
{
  id: "amenity-smoke-alarm",
  name: "Smoke alarm",
  icon: "BellOff",
  available: false,
  explanation: "This host hasn't reported a smoke alarm on the property.",
  category: "Not included"
}];

//in allAmenitiesList : all te amenities are present toether and in cateorizedAmenities : same amenities but tey are grouped by category
export const allAmenitiesList = [
// Bathroom
{ id: "b1", name: "Hot tub / Private Jacuzzi", icon: "Bath", available: true, category: "Bathroom" },
{ id: "b2", name: "Hair dryer", icon: "Wind", available: true, category: "Bathroom" },
{ id: "b3", name: "Cleaning products", icon: "Sparkles", available: true, category: "Bathroom" },
{ id: "b4", name: "Shampoo & conditioner", icon: "Sparkles", available: true, category: "Bathroom" },
{ id: "b5", name: "Hot water", icon: "Waves", available: true, category: "Bathroom" },
{ id: "b6", name: "Shower gel", icon: "Sparkles", available: true, category: "Bathroom" },

// Bedroom & laundry
{ id: "bl1", name: "Washing machine", icon: "Sparkles", available: true, category: "Bedroom & laundry" },
{ id: "bl2", name: "Essentials (towels, bed sheets, soap, toilet paper)", icon: "Check", available: true, category: "Bedroom & laundry" },
{ id: "bl3", name: "Hangers", icon: "Check", available: true, category: "Bedroom & laundry" },
{ id: "bl4", name: "Bed linen", icon: "Check", available: true, category: "Bedroom & laundry" },
{ id: "bl5", name: "Extra pillows and blankets", icon: "Check", available: true, category: "Bedroom & laundry" },
{ id: "bl6", name: "Iron & ironing board", icon: "Check", available: true, category: "Bedroom & laundry" },
{ id: "bl7", name: "Wardrobe & clothes storage", icon: "Check", available: true, category: "Bedroom & laundry" },

// Entertainment
{ id: "e1", name: "Smart TV with standard cable/satellite", icon: "Tv", available: true, category: "Entertainment" },
{ id: "e2", name: "Sound system", icon: "Sparkles", available: true, category: "Entertainment" },
{ id: "e3", name: "Books and reading material", icon: "Check", available: true, category: "Entertainment" },

// Heating and cooling
{ id: "hc1", name: "Air conditioning", icon: "Wind", available: true, category: "Heating & cooling" },
{ id: "hc2", name: "Ceiling fan", icon: "Wind", available: true, category: "Heating & cooling" },

// Home safety
{ id: "hs1", name: "Exterior security cameras on property", icon: "Camera", available: true, category: "Home safety" },
{ id: "hs2", name: "Fire extinguisher", icon: "ShieldCheck", available: true, category: "Home safety" },
{ id: "hs3", name: "First aid kit", icon: "ShieldCheck", available: true, category: "Home safety" },

// Internet and office
{ id: "io1", name: "Fast wifi – 100 Mbps", icon: "Wifi", available: true, category: "Internet & office" },
{ id: "io2", name: "Dedicated workspace with desk and ergonomic chair", icon: "Briefcase", available: true, category: "Internet & office" },

// Kitchen and dining
{ id: "kd1", name: "Kitchen", icon: "CookingPot", available: true, category: "Kitchen & dining" },
{ id: "kd2", name: "Refrigerator", icon: "CookingPot", available: true, category: "Kitchen & dining" },
{ id: "kd3", name: "Microwave", icon: "CookingPot", available: true, category: "Kitchen & dining" },
{ id: "kd4", name: "Cooking basics (pots, pans, oil, salt, pepper)", icon: "CookingPot", available: true, category: "Kitchen & dining" },
{ id: "kd5", name: "Dishes and silverware", icon: "CookingPot", available: true, category: "Kitchen & dining" },
{ id: "kd6", name: "Induction stove", icon: "CookingPot", available: true, category: "Kitchen & dining" },
{ id: "kd7", name: "Electric kettle", icon: "CookingPot", available: true, category: "Kitchen & dining" },
{ id: "kd8", name: "Toaster", icon: "CookingPot", available: true, category: "Kitchen & dining" },
{ id: "kd9", name: "Dining table for 4", icon: "CookingPot", available: true, category: "Kitchen & dining" },

// Location features
{ id: "lf1", name: "Private entrance", icon: "Key", available: true, category: "Location features" },
{ id: "lf2", name: "Resort access", icon: "Waves", available: true, category: "Location features" },

// Outdoor
{ id: "od1", name: "Private patio or balcony", icon: "Waves", available: true, category: "Outdoor" },
{ id: "od2", name: "Shared outdoor swimming pool", icon: "Waves", available: true, category: "Outdoor" },
{ id: "od3", name: "Outdoor furniture & dining area", icon: "Waves", available: true, category: "Outdoor" },
{ id: "od4", name: "Sun loungers", icon: "Waves", available: true, category: "Outdoor" },

// Parking and facilities
{ id: "pf1", name: "Free parking on premises", icon: "Car", available: true, category: "Parking & facilities" },
{ id: "pf2", name: "Free street parking", icon: "Car", available: true, category: "Parking & facilities" },
{ id: "pf3", name: "Shared gym on premises", icon: "Dumbbell", available: true, category: "Parking & facilities" },
{ id: "pf4", name: "Elevator in building", icon: "Check", available: true, category: "Parking & facilities" },

// Services
{ id: "sv1", name: "Pets allowed", icon: "PawPrint", available: true, category: "Services" },
{ id: "sv2", name: "Self check-in with building staff", icon: "Key", available: true, category: "Services" },
{ id: "sv3", name: "Luggage drop-off allowed", icon: "Clock", available: true, category: "Services" },
{ id: "sv4", name: "Long-term stays allowed (28 days+)", icon: "Calendar", available: true, category: "Services" },
{ id: "sv5", name: "Cleaning available during stay", icon: "Sparkles", available: true, category: "Services" },

// Not included
{ id: "ni1", name: "Carbon monoxide alarm", icon: "BellOff", available: false, explanation: "This host hasn't reported a carbon monoxide alarm on the property.", category: "Not included" },
{ id: "ni2", name: "Smoke alarm", icon: "BellOff", available: false, explanation: "This host hasn't reported a smoke alarm on the property.", category: "Not included" },
{ id: "ni3", name: "Central heating", icon: "BellOff", available: false, explanation: "Heating is not necessary in tropical Goa.", category: "Not included" }];


export const categorizedAmenities = [
{
  categoryName: "Bathroom",
  items: allAmenitiesList.filter((a) => a.category === "Bathroom")
},
{
  categoryName: "Bedroom & laundry",
  items: allAmenitiesList.filter((a) => a.category === "Bedroom & laundry")
},
{
  categoryName: "Entertainment",
  items: allAmenitiesList.filter((a) => a.category === "Entertainment")
},
{
  categoryName: "Heating & cooling",
  items: allAmenitiesList.filter((a) => a.category === "Heating & cooling")
},
{
  categoryName: "Home safety",
  items: allAmenitiesList.filter((a) => a.category === "Home safety")
},
{
  categoryName: "Internet & office",
  items: allAmenitiesList.filter((a) => a.category === "Internet & office")
},
{
  categoryName: "Kitchen & dining",
  items: allAmenitiesList.filter((a) => a.category === "Kitchen & dining")
},
{
  categoryName: "Location features",
  items: allAmenitiesList.filter((a) => a.category === "Location features")
},
{
  categoryName: "Outdoor",
  items: allAmenitiesList.filter((a) => a.category === "Outdoor")
},
{
  categoryName: "Parking & facilities",
  items: allAmenitiesList.filter((a) => a.category === "Parking & facilities")
},
{
  categoryName: "Services",
  items: allAmenitiesList.filter((a) => a.category === "Services")
},
{
  categoryName: "Not included",
  items: allAmenitiesList.filter((a) => a.category === "Not included")
}];