SHIVA & SATHYA WEBSITE - CLEAN REBUILD
JSVisuals

FILES INCLUDED
- index.html : Page sections, content, form and gallery.
- style.css  : Styling, responsive layouts, image crop and animations.
- script.js  : Intro timing, menu, wish count, validation, WhatsApp.
- images/shiva-sathya.jpg : The uploaded couple photo, included.

RUN LOCALLY
1. Extract the ZIP.
2. Open the extracted folder in VS Code.
3. Run index.html using Live Server (recommended).

HOMEPAGE PHOTO (main requirement)
The provided photo is already placed in images/shiva-sathya.jpg.
The hero image is a real img element with object-fit: cover, and the
crop position is tuned to top-biased framing for the wide-screen look
in your reference. The faces are kept toward the visible upper area.

If you need a tiny crop adjustment, in style.css search for:
.hero-photo img
Desktop: object-position: center 0%;
Tablet: object-position: center 5%;
Mobile: object-position: center 12%;
Only change the percentage if you need to tune the framing.

Replace the homepage photo:
Replace images/shiva-sathya.jpg with a different photo using the same
filename, or update the image src in index.html and hero-blur URL in CSS.

Replace gallery photos:
In index.html find gallery-grid and replace the four src URLs.
For local photos, add files to images/ and use paths such as
images/gallery-1.jpg etc.

Default wish:
In index.html search id="wishMessage". Edit the text inside textarea.

WhatsApp phone number:
In script.js find whatsappNumber. Use country code + phone digits,
without plus, spaces or dashes. Current number is 916301865012.

JSVisuals intro:
Edit intro-brand and intro-tagline text in index.html.
Duration is 2400 ms in script.js (2.4 seconds).

Palette:
At the beginning of style.css edit CSS variables in :root.

Screenshot and recording:
No normal website can reliably block operating-system screenshots,
screen recording or external cameras. This website cannot promise that.

The wishes form opens a prepared WhatsApp message. Visitors still
need to press Send in WhatsApp. The site does not store form entries.
