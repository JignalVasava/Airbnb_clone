





//this is javascript object , not json data jso data's key has "" associated wit it

export const heroPhotos = [
{
  id: "hero-1",
  url: "/images/hero/hero-1.jpg",
  caption: "Private patio with jacuzzi, warm accent wall lighting and plush wicker seating",
  category: "living-room-1",
  categoryTitle: "Living room 1"
},
{
  id: "hero-2",
  url: "/images/hero/hero-2.jpg",
  caption: "Outdoor alfresco lounge area with cushioned sofa set and coffee table",
  category: "living-room-2",
  categoryTitle: "Living room 2"
},
{
  id: "hero-3",
  url: "/images/hero/hero-3.jpg",
  caption: "Spacious bedroom with queen double bed, wardrobe, full-length mirror, and large window",
  category: "bedroom",
  categoryTitle: "Bedroom"
},
{
  id: "hero-4",
  url: "/images/hero/hero-4.jpg",
  caption: "Private hot tub / jacuzzi tub with wooden deck surround",
  category: "bathroom",
  categoryTitle: "Full bathroom"
},
{
  id: "hero-5",
  url: "/images/hero/hero-5.jpg",
  caption: "Exterior view of Amor de Goa residential building in Candolim",
  category: "exterior",
  categoryTitle: "Exterior"
}];


export const allListingPhotos = [
// 1. Living room 1
{
  id: "lr1-1",
  url: "/images/living-room-1/living-1.jpg",
  caption: "Living room with comfortable sofa, center table, dining area, and open kitchen",
  category: "living-room-1",
  categoryTitle: "Living room 1"
},
{
  id: "lr1-2",
  url: "/images/hero/hero-1.jpg",
  caption: "Private open-air patio living space with stone accent wall and lighting",
  category: "living-room-1",
  categoryTitle: "Living room 1"
},

// 2. Living room 2
{
  id: "lr2-1",
  url: "/images/hero/hero-2.jpg",
  caption: "Cozy outdoor sitting corner with coffee table and armchairs",
  category: "living-room-2",
  categoryTitle: "Living room 2"
},

// 3. Full kitchen
{
  id: "kt-1",
  url: "/images/living-room-1/living-1.jpg",
  caption: "Equipped kitchen area with cabinets, induction stovetop, sink, and dining table",
  category: "kitchen",
  categoryTitle: "Full kitchen"
},

// 4. Bedroom
{
  id: "bd-1",
  url: "/images/bedroom/bedroom-1.jpg",
  caption: "Cozy air-conditioned bedroom with clean linen and ambient lighting",
  category: "bedroom",
  categoryTitle: "Bedroom"
},
{
  id: "bd-2",
  url: "/images/hero/hero-3.jpg",
  caption: "Bedroom view towards the private outdoor patio and vanity mirror",
  category: "bedroom",
  categoryTitle: "Bedroom"
},

// 5. Full bathroom
{
  id: "ba-1",
  url: "/images/hero/hero-4.jpg",
  caption: "Private jacuzzi tub on wooden platform with headrests and jet controls",
  category: "bathroom",
  categoryTitle: "Full bathroom"
},

// 6. Gym
{
  id: "gym-1",
  url: "/images/hero/hero-2.jpg",
  caption: "Community fitness center available for resident and guest use",
  category: "gym",
  categoryTitle: "Gym"
},

// 7. Exterior
{
  id: "ext-1",
  url: "/images/hero/hero-5.jpg",
  caption: "Amor de Goa modern architectural facade amidst tropical palm trees",
  category: "exterior",
  categoryTitle: "Exterior"
},

// 8. Pool
{
  id: "pool-1",
  url: "/images/hero/hero-1.jpg",
  caption: "Shared swimming pool with lounge area in Candolim",
  category: "pool",
  categoryTitle: "Pool"
},

// 9. Additional photos
{
  id: "add-1",
  url: "/images/hero/hero-4.jpg",
  caption: "Jacuzzi water jets and wooden trim craftsmanship",
  category: "additional",
  categoryTitle: "Additional photos"
},
{
  id: "add-2",
  url: "/images/hero/hero-2.jpg",
  caption: "Patio details and quiet evening ambience",
  category: "additional",
  categoryTitle: "Additional photos"
}];


export const photoTourCategories = [
{ category: "living-room-1", title: "Living room 1" },
{ category: "living-room-2", title: "Living room 2" },
{ category: "kitchen", title: "Full kitchen" },
{ category: "bedroom", title: "Bedroom" },
{ category: "bathroom", title: "Full bathroom" },
{ category: "gym", title: "Gym" },
{ category: "exterior", title: "Exterior" },
{ category: "pool", title: "Pool" },
{ category: "additional", title: "Additional photos" }];


export const groupedPhotos = photoTourCategories.map((cat) => ({
  category: cat.category,
  categoryTitle: cat.title,
  photos: allListingPhotos.filter((p) => p.category === cat.category)
}));