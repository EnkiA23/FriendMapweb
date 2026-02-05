# FriendMap website (friendsmap.ca)

Static website for the FriendMap app. Upload this folder to your Hostinger `public_html` (or equivalent) and point the domain **friendsmap.ca** to it.

## Screenshots

Until you add real app screenshots, the site uses a fallback placeholder. To use your own images:

1. Add these files into the `images/` folder:
   - `hero.png` – main hero image (e.g. map view)
   - `map-view.png` – map with friends
   - `convoy.png` – convoy mode
   - `events.png` – events list
   - `ar-tagging.png` – AR tagging

2. Keep the same filenames so the home page and gallery display them automatically. No code changes needed.

## Legal pages

- **Privacy** and **Terms**: Replace `[Add date]` with the actual last-updated date.
- **Copyright**: Update the contact email (`contact@friendsmap.ca`) if you use a different address.

## Favicon

To add a favicon, copy your app icon (e.g. from the FriendMap-Icon folder) as `favicon.ico` or `favicon.png` into this folder and add `<link rel="icon" href="favicon.ico">` (or `.png`) in the `<head>` of each HTML file.
