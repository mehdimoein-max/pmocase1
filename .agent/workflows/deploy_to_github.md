---
description: How to upload the project to GitHub and enable GitHub Pages
---

# Deploying Simorgh Sanat to GitHub

Follow these steps to upload your project and make it live on the internet.

## Prerequisites
- You must have [Git](https://git-scm.com/downloads) installed.
- You must have a [GitHub Account](https://github.com/).

## Step 1: Initialize Git
Open your terminal in the project folder `c:\Z-MY APP\pmo-case\case-1\` and run:

```bash
git init
git add .
git commit -m "Initial commit: Simorgh Sanat Website"
```

## Step 2: Create a Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Repository name: `simorgh-pmo` (or any name you like).
3. Make it **Public**.
4. Click **Create repository**.

## Step 3: Connect and Push
Copy the commands shown on GitHub under "…or push an existing repository from the command line" and run them. They will look like this (replace `YOUR-USERNAME` with your actual GitHub username):

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/simorgh-pmo.git
git push -u origin main
```

## Step 4: Enable GitHub Pages (Public Link)
1. Go to your repository page on GitHub.
2. Click on **Settings** (top right tab).
3. On the left sidebar, click **Pages**.
4. Under **Build and deployment** > **Branch**, select `main` and click **Save**.
5. Wait about 1-2 minutes. Refresh the page.
6. You will see a link like: `https://YOUR-USERNAME.github.io/simorgh-pmo/`

**Congratulations! Your website is now online.**
