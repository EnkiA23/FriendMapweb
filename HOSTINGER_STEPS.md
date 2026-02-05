# How to Host FriendMap on Hostinger (Step by Step)

Use this guide to put your **friendsmap.ca** website online with Hostinger.

---

## What you need before you start

- A **Hostinger account** (sign up at [hostinger.com](https://www.hostinger.com) if you don’t have one).
- Your domain **friendsmap.ca** connected to Hostinger (either registered with Hostinger or pointed to Hostinger’s nameservers).
- The website folder on your PC: **D:\Friendsmap.ca** (all the HTML, CSS, JS, and images).

---

## Step 1: Log in to Hostinger

1. Go to [https://www.hostinger.com](https://www.hostinger.com).
2. Click **Log in** (top right).
3. Enter your email and password, then log in.
4. You should see the **hPanel** (Hostinger control panel).

---

## Step 2: Open your hosting and File Manager

1. In hPanel, find the **Hosting** section and click your plan (e.g. “Web Hosting” or your domain name).
2. Click **Manage** (or **Open**) next to that hosting.
3. In the left menu, find **Files** → **File Manager** (or **File Manager** under “Advanced”).
4. Click **File Manager**.
5. You’ll see folders like `public_html`, `domains`, etc. The main folder for your website is usually **`public_html`**.

---

## Step 3: Prepare the folder where the site will live

**If friendsmap.ca is your main domain (the one that opens when people go to your hosting):**

- Upload everything **inside** `public_html`.
- Clear old files in `public_html` first if this is a new site (optional): select files/folders you don’t need → Delete. Keep a backup if you had something there before.

**If friendsmap.ca is an add-on domain or subdomain:**

- You might have a folder like `public_html/friendsmap.ca` or `public_html/friendsmap.ca/public_html`. Use that folder as “your site root” in the next step instead of `public_html`.

For the rest of the steps we’ll call this folder **“your site root”** (either `public_html` or the friendsmap.ca folder).

---

## Step 4: Upload your website files

1. In File Manager, **go into your site root** (e.g. double‑click `public_html`).
2. Click **Upload** (or **Upload files**).
3. On your PC, open **D:\Friendsmap.ca**.
4. Upload **all** of these into the site root:
   - **Files:** `index.html`, `about.html`, `privacy.html`, `terms.html`, `copyright.html`, `README.md`, `HOSTINGER_STEPS.md` (optional).
   - **Folders:** `css`, `js`, `images` (with everything inside them).
5. You can:
   - **Drag and drop** the files and folders from your PC into the browser upload area, or  
   - **Select files** and choose the whole contents of `D:\Friendsmap.ca`.
6. Wait until every file and folder has finished uploading.
7. Check that the structure looks like this inside your site root:

   ```
   public_html/          (or friendsmap.ca folder)
   ├── index.html
   ├── about.html
   ├── privacy.html
   ├── terms.html
   ├── copyright.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── main.js
   └── images/
       ├── icon.png
       ├── hero.jpg
       ├── 1.jpg, 3.jpg, … 13.jpg
       └── placeholder.svg
   ```

---

## Step 5: Set the domain to use this hosting (if needed)

**If you already added friendsmap.ca to this hosting in Hostinger:**

- Often nothing else is needed. Skip to Step 6.

**If friendsmap.ca is not yet connected:**

1. In hPanel, go to **Domains** (or **Websites** / **Domains**).
2. Click **Add domain** or **Connect domain**.
3. Enter **friendsmap.ca** and follow the steps (either register it with Hostinger or connect an existing domain).
4. When asked where the site should point, choose the **same hosting** where you uploaded the files (e.g. “Same hosting as …” or the `public_html` for that hosting).
5. If you registered the domain elsewhere, the wizard will show **nameservers**. Copy them and set them at your domain registrar (where you bought friendsmap.ca) so they point to Hostinger. Save and wait 5–60 minutes (sometimes up to 24–48 hours).

---

## Step 6: Turn on SSL (HTTPS) – recommended

1. In hPanel, open your hosting → **SSL** or **Security** → **SSL**.
2. Find **Free SSL** (e.g. Let’s Encrypt) and click **Install** or **Enable** for **friendsmap.ca**.
3. Wait a few minutes. Hostinger will issue a certificate and usually force HTTPS (so `https://friendsmap.ca` works and `http://` redirects to it).

---

## Step 7: Test your site

1. Open a new browser tab.
2. Go to **https://friendsmap.ca** (or the URL Hostinger gave you, e.g. a temporary URL before DNS propagates).
3. Check:
   - Home page loads.
   - Navigation: About, Privacy, Terms, Copyright work.
   - Hero gallery and images load (click a picture to open the lightbox).
   - No broken images or 404 errors.

If something is broken:

- Double-check that **all** files and folders (including `css`, `js`, `images`) are in the correct site root and that names match exactly (e.g. `style.css` not `Style.css`).

---

## Quick checklist

- [ ] Logged into Hostinger hPanel  
- [ ] Opened File Manager for the right hosting  
- [ ] Uploaded all files and folders from **D:\Friendsmap.ca** into the site root (`public_html` or friendsmap.ca folder)  
- [ ] Domain friendsmap.ca is added and points to this hosting  
- [ ] Free SSL enabled for friendsmap.ca  
- [ ] Tested https://friendsmap.ca in the browser  

---

## Using FTP instead of File Manager (optional)

If you prefer FTP (e.g. FileZilla):

1. In hPanel, go to **Files** → **FTP Accounts** (or **FTP**).
2. Note your **FTP host** (e.g. `ftp.friendsmap.ca` or the hostname Hostinger shows), **username**, and **password**. Create an FTP user if needed.
3. In FileZilla: **File → Site Manager → New site**. Enter host, username, password, port **21**.
4. Connect. On the **remote** side, go to `public_html` (or the friendsmap.ca folder).
5. On the **local** side, go to **D:\Friendsmap.ca**.
6. Select all files and folders on the left and drag them to the right (remote) to upload.

Result: same as uploading via File Manager.

---

You’re done. Your FriendMap site should now be live at **https://friendsmap.ca**.
