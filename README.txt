SMART ENGINEERING — rebuilt static site
=======================================

WHAT THIS IS
Every page is a single, self-contained HTML file. All CSS and JavaScript is
inline. The only external references are Google Fonts (Poppins + Inter) and
the relative image paths under wp-content/uploads/2025/09/.

There are no WordPress or Elementor files, no plugin CSS/JS, no Swiper, no
emoji scripts, no speculation-rules scripts and no hotline widget. All icons
are inline SVG.

HOW TO DEPLOY
Upload the contents of this folder to your web root. index.html is the home
page. No build step, no server-side code, no database.

PAGES
  index.html              Home
  about.html              About
  mission-vision.html     Our Mission & Vision
  product.html            Product Gallery (with category filter)
  diesel-generator.html   Diesel Generator
  sub-station.html        Sub-Station
  solar-system.html       Solar System
  services.html           Services
  faqs.html               FAQs (accordion)
  contact.html            Contact (form + office maps)

MISSING IMAGES — ACTION NEEDED
Six images referenced by the original site were NOT in the export you gave me.
The original paths have been kept, so simply copy these files into
wp-content/uploads/2025/09/ and they will appear:

  Brand-Representing-01.jpg   (used on solar-system.html and services.html)
  Brand-Representing-02.jpg   (solar-system.html)
  Brand-Representing-03.jpg   (solar-system.html)
  Brand-Representing-04.jpg   (solar-system.html)
  Brand-Representing-05.jpg   (solar-system.html)
  Brand-Representing-06.jpg   (solar-system.html)

Until then, the "Our Brand" grid on solar-system.html will show six empty
tiles. Every other image (31 of 37) is included and working.

CONTACT DETAILS USED SITE-WIDE
  Phone:    +88 01840-490226  /  01759-902142
  Email:    smartengineering226@gmail.com
  Dhaka:    Bosilha, Mohammadpur, Dhaka
  Faridpur: 1st Floor, 24/1, Main Road, Faridpur Sadar, Faridpur

CONTACT FORM
contact.html validates the fields and opens the visitor's email client with a
pre-filled message to smartengineering226@gmail.com. If you would rather have
submissions land in an inbox without the visitor's mail app opening, point the
form at a service such as Formspree or a small PHP handler.

DESIGN SYSTEM
  navy        #0f2540    headings, body accents
  navy-deep   #0a1b30    topbar, header-on-dark, footer, hero overlays
  amber       #f2a71b    primary action colour
  Poppins     headings
  Inter       body text
