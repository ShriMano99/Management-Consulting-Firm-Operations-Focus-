# Installation and customization

## Structure
`index.html` is the root home entry. `pages/` contains full pages. `assets/css/` contains Bootstrap plus custom readable and minified styles. `assets/js/main.js` holds shared interactions. `assets/images/` contains 26 distinct optimized photos and the SVG favicon. `documentation/` contains this guide, credits, changelog, and QA notes.

## Visual tokens
Edit :root in style.css: --bg, --surface, --ink, --muted, --accent, --line. Dark overrides are in dark-mode.css. Use 8px increments for spacing. Typography is DM Sans plus Manrope. Regenerate corresponding .min.css after edits or point HTML links to readable CSS during development. Avoid reducing focus contrast or button targets below 44px.

## Content and SEO
Edit shared navigation/footer consistently across HTML files; this buildless package intentionally keeps page markup standalone. The root home mirrors pages/index.html. Replace titles (max 60 characters), descriptions (150–160 characters), canonicals, JSON-LD, sitemap.xml and robots.txt with your real business domain. For clean URLs configure host rewrites or deploy pages as directory index files and update links/sitemap together.

## Forms: Formspree
Add `data-endpoint="https://formspree.io/f/YOUR_FORM_ID"` to the appropriate form. JavaScript validates and POSTs FormData only when configured. Test both success and failed responses. Enable provider anti-spam and update your privacy notice.

## Netlify Forms
On Netlify add `name="contact" data-netlify="true"` and a hidden input `name="form-name" value="contact"`. Adapt the submit handler to POST URL-encoded fields to `/`, or use native submission after validation. Netlify detection must be tested on a Netlify deployment; the current host is not Netlify.

## Newsletter
Create a Mailchimp or ConvertKit embedded form. Replace newsletter markup/action or connect an endpoint that accepts AJAX. Provider embed scripts may be needed. Never expose secret API keys in frontend files.

## Maps
Replace the map placeholder with `<iframe title="Office location" src="YOUR_GOOGLE_MAPS_EMBED_URL" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="width:100%;height:300px;border:0"></iframe>`. Use the real office address and any required consent. Restrict a Google Maps API key to your domain if using the JavaScript API.

## Calendar
Replace the booking request form with your Calendly or booking-provider embed, or set its form endpoint to receive scheduling requests. The existing form requests a date/time in UTC; it does not check availability or reserve an appointment. Add availability and timezone conversion through your provider.

## Payment integration point
This consulting template does not collect payments. If offering a paid diagnostic, insert your Stripe Payment Link or PayPal hosted checkout URL as an anchor button on booking.html. Example: `<a class="btn" href="YOUR_HOSTED_PAYMENT_URL">Pay for a diagnostic</a>`. Add pricing and terms before enabling. Do not collect card information in these static forms.

## Images
Each content section uses a distinct contextual WebP photo. Thumbnail and detailed case photos differ. Home, listing, and detail pages use separate photos; every canonical page has unique photos. Replace them with owned/licensed imagery for a marketplace release; never copy the office hero to other sections. Specify width/height; lazy-load below the fold. Prefer image variants/srcset when tailoring for very slow mobile connections.

## Theme, RTL, accessibility
Theme and direction are saved locally. The first visit uses system color preference. Language remains English when direction changes; add translated content and set lang for Arabic/Hebrew production versions. CSS logical properties preserve spacing. Use the keyboard to test menus, filters, forms, and details elements; check both themes and both directions. Icons use accessible parent labels. Form errors are linked and announced.

## Performance and compatibility
Bootstrap CSS is locally bundled. Custom CSS is minified; main.js is readable ES6; main.min.js removes comments and formatting for the release. Google Fonts is optional and falls back to sans-serif. Run Lighthouse after deploying on the final domain. Current performance metrics use INP in place of the older FID target. Do not promise a score without measurement.

## Support
Use README.md and the integration sections first. For further help provide the page name, browser, steps to reproduce, and expected behavior to your template maintainer. No external support service is included.

## Login page
The login UI validates locally and never authenticates a user in this static demo. Integrate a trusted authentication service and server-side session handling before using it. Never send passwords through the generic contact/newsletter endpoint.
