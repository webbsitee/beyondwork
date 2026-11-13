BEYOND WORK — READY-TO-UPLOAD STATIC WEBSITE
Domain: https://beyondwork.services/

DEPLOYMENT
1. Back up the existing website first.
2. Extract the ZIP locally.
3. Upload ALL CONTENTS of the beyondwork-website folder (not the folder itself) to the website document root, usually public_html/ in cPanel. Keep assets/ and all filenames in place.
4. Enable HTTPS/SSL for beyondwork.services and redirect HTTP to HTTPS in your hosting panel.
5. Ensure the domain points to the correct hosting account and index.html is the default page.
6. Test the site on desktop and mobile. Test the Book a Call link from a device with an email app configured.
7. Submit https://beyondwork.services/sitemap.xml to Google Search Console and run https://pagespeed.web.dev/ after deployment.

TECHNOLOGY
Plain HTML, CSS and tiny vanilla JavaScript. No framework, no external fonts, no CDN, no third-party scripts, no build step, no database, no server-side processing.

CONTENT
Based on the supplied Beyond Work Overview service deck. Pages 1-4 and 6 represented in five single-page sections; page 5 hiring comparison intentionally excluded. The customer names and results appear as in the deck. The outreach demo is labeled illustrative.

BOOK A CALL
Uses a mailto: link to contact@beyondwork.services. This opens the visitor's configured email application. It does not create an on-site email form or guarantee a compose window for visitors who have no mail handler configured. The mailbox must exist and accept mail; hosting does not create it automatically.

PERFORMANCE / SEO
Designed to minimize network requests, avoid render-blocking JavaScript and support reduced motion. Exact PageSpeed scores, rankings, load times and global performance cannot be guaranteed before live testing. Hosting, server location, caching and network conditions affect results. Consider CDN/caching if your host supports it.

LOGO
The uploaded file named logo_svg was actually a JPG. A compressed transparent WebP was prepared from it for fast loading; no true vector SVG of the company logo was provided. favicon.svg is a simplified custom mark, not an exact reproduction of the logo.

SOURCE-FAITHFULNESS NOTE
The service deck states: 'Reps spend only 30% of their week selling (Salesforce, State of Sales 2024).' This has been reproduced as requested; independently verify the cited statistic and all customer performance claims before publication. Customer logos were not extracted from the deck, so client names are shown typographically rather than as official brand assets.

FILE LIST
index.html, styles.css, script.js, assets/beyond-work-logo.webp, favicon.svg, robots.txt, sitemap.xml, .htaccess, README-DEPLOY.txt
