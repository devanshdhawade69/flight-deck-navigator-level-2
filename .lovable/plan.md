

# Commercial Pilot Portfolio Website
## "Aviation Classic" Design with Interactive Flight Routes

### Overview
A professional portfolio website for a commercial pilot featuring an aviation-inspired design with classic blues, whites, and gold accents. The site will include an interactive 3D globe showing flight routes, professional galleries, and both services and resume sections.

---

### Page 1: Home ("The Cockpit")
**Hero Section**
- Full-width stock video background showing cockpit sunset view
- Bold headline: "Precision. Safety. Perspective."
- Subtitle with type ratings (B737, A320) and flight hours
- Two CTA buttons: "View Flight Log" (primary) and "Contact Me" (secondary)

**Interactive Route Globe**
- 3D spinning globe using React Three Fiber
- Highlighted flight routes connecting major airports
- Clickable routes that reveal flight details (destination, aircraft type, date range)
- Smooth rotation animation with user interaction to pause/explore

**Bio Teaser Section**
- 2-3 sentence professional introduction
- Link to full About page

**Trust Signals**
- Airline logos (placeholder airline badges)
- Certification badges (FAA, EASA, ATPL icons)
- Flight school affiliations

---

### Page 2: About Me ("The Manifest")
**The Story Section**
- Narrative format covering the pilot's journey into aviation
- Philosophy on safety, precision, and the love of flight

**Stats Grid**
- Total Flight Hours
- PIC (Pilot in Command) Hours
- Aircraft Types Flown
- Countries Visited
- Each stat with an aviation-themed icon

**Certifications List**
- ATPL, CPL, Instrument Rating, Multi-Engine
- Visual credential display

**Photo Gallery Carousel**
- "Life on the Tarmac" professional photos
- Uniform shots, pre-flight inspections, cockpit photos
- Placeholder images in aviation classic style

---

### Page 3: The Logbook (Portfolio/Gallery)
**Tabbed/Filtered Gallery**

*Category 1: "The Views"*
- High-altitude photography (sunsets, cloud formations, city lights)
- Lightbox for full-screen viewing

*Category 2: "The Machine"*
- Aircraft photography (engines, wings, flight deck details)
- Technical beauty shots

*Category 3: "Destinations"*
- Travel blog-style cards
- Each showing a layover destination (e.g., "48 Hours in Tokyo")
- Brief description and photo collection per destination
- Placeholder entries for 4-6 destinations

---

### Page 4: Services & Resume (Combined Page)
**Toggle or Tabs: "Hire Me" vs "Employment"**

*Services Tab (For Charter/Freelance)*
- **Ferry Flights**: Aircraft relocation services
- **Private Charter**: VIP transport description
- **Flight Instruction**: Training and mentorship offerings
- Each service with icon, description, and inquiry CTA

*Resume Tab (For Airline Employment)*
- Professional summary
- Type ratings and certifications grid
- Career timeline (airlines, roles, dates)
- Downloadable PDF resume button

---

### Page 5: Contact ("The Tower")
**Contact Form**
- Fields: Name, Company, Email, Inquiry Type (dropdown), Message
- Form validation with clear error states
- Static for now (no backend submission)

**Base Location**
- Airport code display (e.g., "Currently based in KJFK")
- Optional: Small embedded map

**Social Links**
- LinkedIn (professional networking)
- Instagram (visual portfolio)
- Professional icons with hover effects

---

### Design System
**Colors**
- Primary: Deep aviation blue (#1E3A5F)
- Secondary: Sky blue (#87CEEB)
- Accent: Gold (#D4AF37)
- Background: Clean white/light gray
- Text: Dark navy for readability

**Typography**
- Headers: Montserrat (bold, geometric - like aircraft markings)
- Body: Roboto or Lato (clean, readable)

**Visual Elements**
- Subtle aviation iconography throughout
- Altitude lines, compass roses, runway markers as design accents
- Smooth page transitions
- Responsive design for all devices

---

### Technical Approach
- Interactive 3D globe using `@react-three/fiber` and `@react-three/drei`
- Placeholder stock video from a free source for hero
- Image galleries with lightbox functionality
- Smooth scroll navigation between sections
- Mobile-optimized responsive design
- All content easily replaceable with real pilot data

