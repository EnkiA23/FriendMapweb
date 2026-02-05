# Turn FriendMapweb into a live website with GitHub Pages

Your site code is in: **https://github.com/EnkiA23/FriendMapweb**

To make it a **live website** (so you can send people a link), enable **GitHub Pages**.

---

## Step 1: Open the repo on GitHub

1. Go to **https://github.com/EnkiA23/FriendMapweb**
2. Make sure you’re logged in as **EnkiA23**.

---

## Step 2: Open Settings

1. Click the **Settings** tab (top of the repo, next to Code / Issues / Pull requests).
2. In the left sidebar, under **“Code and automation”**, click **Pages**.

---

## Step 3: Enable GitHub Pages

1. Under **“Build and deployment”**:
   - **Source:** choose **Deploy from a branch**.
   - **Branch:** choose **main** (or **master** if that’s what you have).
   - **Folder:** choose **/ (root)**.
2. Click **Save**.
3. Wait 1–2 minutes. The page will show a message like: *“Your site is live at …”*.

---

## Step 4: Your live website URL

Your site will be at:

**https://enkia23.github.io/FriendMapweb/**

(GitHub uses your username in lowercase: **enkia23**.)

You can share this link (e.g. for TestFlight, App Store, or support).

---

## If the URL doesn’t work right away

- GitHub can take **1–5 minutes** (sometimes longer) to publish.
- Refresh the URL. If you get a 404, wait a bit and try again.
- Make sure **index.html** is in the **root** of the repo (it is in your current setup).

---

## Optional: Use your own domain (e.g. friendsmap.ca)

1. In **Settings → Pages**, scroll to **“Custom domain”**.
2. Enter **friendsmap.ca** and save.
3. At your domain registrar, add a **CNAME** record (or the records GitHub shows) pointing to **enkia23.github.io**.
4. GitHub will then serve your site at **https://friendsmap.ca** (you may need to turn on **Enforce HTTPS** in Pages settings).

---

## Quick checklist

- [ ] Repo **EnkiA23/FriendMapweb** has the website files (done)
- [ ] **Settings → Pages** → Source: **Deploy from a branch**
- [ ] Branch: **main**, Folder: **/ (root)** → **Save**
- [ ] Wait 1–2 minutes, then open **https://enkia23.github.io/FriendMapweb/**
