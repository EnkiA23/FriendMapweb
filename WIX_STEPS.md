# Hosting FriendMap on Wix (Free) – Step by Step

## Is Wix free?

**Yes.** Wix has a **free plan** you can use with no time limit. On the free plan you get:

- A site at **yoursite.wixsite.com** (e.g. friendmap.wixsite.com)
- Wix ads on your site
- The Wix editor and templates
- **No custom domain** (friendsmap.ca) on the free plan – that needs a paid plan

**Important:** You **cannot upload** the HTML/CSS/JS site we built (the folder in D:\Friendsmap.ca). Wix is a **website builder**: you create the site inside Wix with their editor. So you’ll be **recreating** the same idea (home, about, privacy, gallery, etc.) inside Wix, not uploading our files.

If you want to keep our **exact** design and code, use **Netlify** or **GitHub Pages** (both free and allow uploading our folder). Steps for those are at the end of this file.

---

## Step-by-step: Build your FriendMap-style site on Wix (free)

### Step 1: Sign up and create a site

1. Go to **https://www.wix.com**
2. Click **Get Started** or **Sign up** (use email or Google).
3. When asked “What do you want to create?”, choose **Website** (or **Business** if you prefer).
4. Click **Start from scratch** or pick a **blank** / **minimal** template so you can shape it yourself.
5. Wix will open the **Editor** with your new site.

---

### Step 2: Choose your free subdomain

1. Click **Publish** (top right) or the **Site** menu.
2. When asked for a domain, choose **Continue with Wix subdomain** (free).
3. Enter a name, e.g. **friendmap** → your site will be **friendmap.wixsite.com**
4. Confirm. You can publish now or keep editing.

---

### Step 3: Build the Home page

1. You’re in the **Editor**. The main area is your **Home** page.
2. **Add a header / title:**
   - Click **Add** (+) → **Text** → **Heading**. Add a big title: **FriendMap**.
   - Style it (font, size, color – e.g. dark blue to match our theme).
3. **Add a tagline:**
   - Add another **Text** block under the title: *“Stay connected with friends on the map…”*
4. **Add a gallery (app screens):**
   - Click **Add** (+) → **Image** → **Gallery** (or **Strip** / **Grid**).
   - Upload the pictures from **D:\Friendsmap.ca\images** (1.jpg, hero.jpg, 3–13.jpg).
   - Resize and position the gallery so it looks good.
5. **Add sections for “How it works” and “Features”:**
   - Add **Text** headings and short paragraphs (same content as on our site).
6. **Add a header/nav bar:**
   - **Add** → **Menu** (or use the top **Header**). Add links: Home, About, Privacy, Terms, Copyright (you’ll create those pages next).

---

### Step 4: Create the other pages

1. In the left **Pages** panel, click the **+** to add a new page.
2. Create:
   - **About** – mission, what we do, who it’s for, safety (SOS, age verification).
   - **Privacy** – copy the text from **D:\Friendsmap.ca\privacy.html** (copy/paste into Wix text blocks).
   - **Terms** – copy from **terms.html**.
   - **Copyright** – copy from **copyright.html** (and add your contact email).
3. For each page, add a **Menu** or use the same header so every page has links to Home, About, Privacy, Terms, Copyright.
4. Paste the content into **Text** elements and style headings/body text.

---

### Step 5: Use a dark blue + white look (like our site)

1. Go to **Design** (or **Theme** / **Colors**) in the editor.
2. Set **primary** / **accent** to dark blue (e.g. **#0d3b66** or **#0078D4**).
3. Use **white** or very light grey for backgrounds.
4. Apply the same colors to your header and buttons so it feels consistent.

---

### Step 6: Publish and share

1. Click **Publish** (top right).
2. Choose **Publish to Web** (free).
3. Your site will go live at **friendmap.wixsite.com** (or the name you chose).
4. Share that link (e.g. for TestFlight or App Store).

---

## Quick checklist (Wix free)

- [ ] Signed up at wix.com  
- [ ] Created a new site (from scratch or blank template)  
- [ ] Chose a free Wix subdomain (e.g. friendmap.wixsite.com)  
- [ ] Built Home: title, tagline, gallery (uploaded our images), How it works, Features  
- [ ] Added pages: About, Privacy, Terms, Copyright (pasted content from our HTML files)  
- [ ] Set colors to dark blue + white  
- [ ] Published to the web  

---

## If you want our exact site (same design + code) for free

Wix cannot host the **exact** site from **D:\Friendsmap.ca** (the HTML/CSS/JS we built). To keep that site and host it for free:

1. **Netlify (easiest)**  
   - Go to **https://app.netlify.com** → Sign up (free).  
   - Drag and drop the **D:\Friendsmap.ca** folder onto Netlify.  
   - You get a free URL like **random-name.netlify.app**.  
   - Later you can connect **friendsmap.ca** in Netlify (domain is still yours at your registrar).

2. **GitHub Pages**  
   - Create a GitHub account, create a repo, upload the contents of D:\Friendsmap.ca, enable GitHub Pages in Settings.  
   - Free URL: **yourusername.github.io/repo-name**.

Both are free and host our exact files; Wix is free but you rebuild the content inside their editor.
