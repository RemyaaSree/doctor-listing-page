# 🩺 Doctor Listing Page

A responsive and fully-functional Doctor Listing Page built using **React.js**. This web application allows users to **search**, **filter**, and **sort** doctors based on various parameters. It is part of the SRM Campus Hiring Process assignment dated **25th April 2025**.

## 🔗 Deployment Link

[👉 Click here to view the deployed app](https://your-deployment-url.com)

## 📌 Features

- 🔍 **Search by Doctor Name** with autocomplete functionality.
- 🎛️ **Filtering Options**:
  - **Consultation Mode**: Video or In-Clinic (single select)
  - **Specialties**: Multi-select from 25+ specialties
- ↕️ **Sorting**:
  - By Experience (High to Low)
  - By Fees (Low to High)
- 🌐 **Client-side filtering**: All data is filtered and sorted on the frontend post-API fetch.
- 🔗 **URL Query Parameters**: All filters and search states are synced with the URL to support back/forward browser navigation.
- 🧪 **Testing Ready**: Uses strict `data-testid` attributes for easy unit/integration testing.

## 🛠️ Tech Stack

- **Frontend**: React.js, HTML5, CSS3, JavaScript
- **Routing**: React Router DOM (for URL-based filters)
- **Deployment**: Netlify / Vercel / GitHub Pages
- **Mock API**: JSON data from a static endpoint

## 📡 API Used

All doctor data is fetched from the following endpoint:

https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json

The application loads all doctors at once and then performs local filtering, searching, and sorting.

## 🚀 Getting Started

To run the project locally:

### 1. Clone the Repository

git clone https://github.com/your-username/doctor-listing-app.git
cd doctor-listing-app
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Development Server
bash
Copy
Edit
npm start
4. Build for Production
bash
Copy
Edit
npm run build
##📂 Folder Structure

-doctor-listing-app/
-├── public/
-│   └── index.html
-├── src/
-│   ├── components/
-│   │   ├── DoctorCard.js
-│   │   ├── SearchBar.js
-│   │   ├── FilterPanel.js
-│   ├── App.js
-│   ├── App.css
-│   ├── index.js
-│   └── utils/
-│       └── helpers.js
-├── README.md
-├── package.json
-└── .gitignore

## 🧪 Testing Support

-All testable elements are equipped with data-testid attributes.

- To run tests (if implemented):

-npm test

Submitted By

Name: Remyaa Sree 

Roll Number: RA2211008020111

College Email ID: ss0675@srmist.edu.in

GitHub Link: https://github.com/RemyaaSree

Deployment Link: https://your-deployment-url.com
