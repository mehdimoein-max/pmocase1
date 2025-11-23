# Simorgh Sanat Project Management System

A responsive, single-page web application designed for **Simorgh Sanat** to facilitate project planning, organizational analysis, and strategic decision-making.

## 🚀 Features

- **Interactive Single-Page Design**: Smooth scrolling navigation for a seamless user experience.
- **Meeting Dialogue Simulation**: Visual representation of the planning meeting with a chat-like interface.
- **Interactive Questions**: Users can answer key strategic questions directly in the browser.
- **Local Persistence**: All answers are saved automatically to the browser's LocalStorage.
- **PDF Export**: Generate high-quality PDF reports of the user's answers.
- **Admin Panel**: A secure (client-side) admin panel to edit site content and import text from DOCX files.

## 📂 Project Structure

- `index.html`: The main landing page containing the organization info, meeting dialogue, and questions.
- `admin.html`: The dedicated admin panel for content management.
- `style.css`: Custom CSS with a modern, responsive design (RTL support).
- `script.js`: Core logic for rendering, state management, and exports.

## 🛠️ Technologies Used

- **HTML5 & CSS3**: Pure, semantic markup and custom styling (Flexbox/Grid).
- **JavaScript (ES6+)**: Vanilla JS for logic and DOM manipulation.
- **Libraries**:
  - `mammoth.js`: For importing .docx files.
  - `html2pdf.js`: For exporting reports to PDF.
  - `Vazirmatn Font`: For professional Persian typography.

## 📖 How to Use

1. **View the Site**: Open `index.html` in any modern web browser.
2. **Answer Questions**: Scroll down to the "Questions" section and type your answers. They are saved automatically.
3. **Export**: Click the "Download PDF" button to save your work.
4. **Admin Access**:
   - Open `admin.html`.
   - Enter the password: **`admin`**.
   - Edit text or upload a Word file to update the site content.

## 🌐 Deployment

This project is ready to be hosted on **GitHub Pages**.
1. Upload the files to a GitHub repository.
2. Go to **Settings** > **Pages**.
3. Select `main` branch and save.
4. Your site will be live at `https://your-username.github.io/repo-name/`.
