import movieCover from "../../src/assets/projects/movie_explorer/cover.jpeg";
import restaurantCover from "../../src/assets/projects/divine_dining/cover.png";
import dooCover from "../../src/assets/projects/doo/cover.png";
import reconnectCover from "../../src/assets/projects/reconnect/cover.jpeg";
import agricultureCover from "../../src/assets/projects/agriculture/cover.png";
import halalCover from "../../src/assets/projects/scan4halal/cover.png"
import depressionCover from "../../src/assets/projects/depression_predictor/cover.png"


const projects = [
  {
    id: 1,     
    name: "Divine Dining",
    title: "Restaurant Management System",
    description: "A full-stack restaurant management web application built for the Advanced Programming assignment, facilitating seamless interaction between customers and restaurant services",
    primaryTechnology: "Next.js",
    technologies: ["react", "nodejs", "mongodb", "express", "docker"],
    "cover": restaurantCover,
    image: "https://via.placeholder.com/300x200",
    link: "https://website.gthub.io",
    features: [
      "Feature 1: User authentication and authorization.",
      "Feature 2: Real-time data updates with WebSockets.", 
        "Feature 3: Responsive design for mobile and desktop."
    ],
    status: "Completed",
    type: "Affiliated to Cardiff Metropolitan University",
    date: "May 2024",
    isFeatured: 1

  },
 
  
    {
  "id": 2,
  "name": "MovieHub",
  "title": "TMDb Movie Discovery App",
  "description": "A modern movie discovery web application that allows users to search, explore trending films, and view detailed movie information using the TMDb API. Designed with a clean UI and enhanced user experience features.",
  "primaryTechnology": "React",
  "technologies": [
    "react",
    "javascript",
    "material-ui",
    "axios",
    "react-router",
    "tmdb-api"
  ],
  "category": "Frontend Application",
  "cover": movieCover,
  "image": "https://via.placeholder.com/300x200",
  "link": "https://movie-explorer-app-three-azure.vercel.app/",
  "github": "https://github.com/FathimaMazeena/movie-explorer-app",
  "features": [
    "Real-time movie search with infinite scrolling",
    "Trending movies section powered by TMDb API",
    "Detailed movie view with overview, genres, and ratings",
    "YouTube trailer integration",
    "Favorites system using local storage",
    "Persistent last search functionality",
    "Light/Dark mode toggle",
    "Responsive mobile-first UI design"
  ],
  "status": "Completed",
  "type": "Personal Project",
  "date": "May 2025",
  "highlights": [
    "Integrated third-party API (TMDb) for real-time data",
    "Implemented global state management using Context API",
    "Focused on UX with modern UI patterns and responsiveness"
  ],
  isFeatured: 1
},





   {
  id: 3,
  name: "Sustainable Agriculture Portal",
  title: "Full-Stack Agriculture Service Platform",
  description: "A full-stack web application simulating a public-sector agriculture platform that enables users to access services, submit queries, and engage with sustainable farming resources.",
  primaryTechnology: "PHP",
  technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  cover: agricultureCover,
  image: "https://via.placeholder.com/300x200",
  link: "https://fathimamazeena.github.io/sustainable-agriculture-portal/",
  features: [
    "User registration and login system for accessing agricultural services.",
    "Query submission and response system for user-admin interaction.",
    "Admin dashboard to manage users, services, and requests efficiently.",
    "Structured database system for handling user data and service records.",
    "Responsive interface for accessibility across devices."
  ],
  status: "Completed",
  type: "Academic Project",
  date: "Oct 2023",
  isFeatured: 1
},

      {  
    id: 4,     
    name: "Doo",
    title: "Task Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    primaryTechnology: "HTML",
    technologies: ["React", "Node.js", "MongoDB"],
    "cover": dooCover,
    image: "https://via.placeholder.com/300x200",
    link: "https://fathimamazeena.github.io/doo-task-manager-app/",
    features: [
      "Feature 1: User authentication and authorization.",
      "Feature 2: Real-time data updates with WebSockets.", 
        "Feature 3: Responsive design for mobile and desktop."
    ],
    status: "Completed",
    type: "Personal Project",
    date: "May 2024",
    isFeatured: 1

    },

     {  
    id: 5,     
    name: "Reconnect",
    title: "Digital Detox Event Landing Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    primaryTechnology: "Tailwind CSS",
    technologies: ["React", "Node.js", "MongoDB"],
    "cover": reconnectCover,
    image: "https://via.placeholder.com/300x200",
    link: "https://reconnect-digital-detox-landing-pag.vercel.app/",
    features: [
      "Feature 1: User authentication and authorization.",
      "Feature 2: Real-time data updates with WebSockets.", 
        "Feature 3: Responsive design for mobile and desktop."
    ],
    status: "Ongoing",
    type: "Personal Project",
    date: "May 2024",
    isFeatured: 1

    },

    {  
    id: 6,     
    name: "Scan4Halal",
    title: "Digital Detox Event Landing Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    primaryTechnology: "Next.js",
    technologies: ["React", "Node.js", "MongoDB"],
    "cover": halalCover,
    image: "https://via.placeholder.com/300x200",
    link: "https://reconnect-digital-detox-landing-pag.vercel.app/",
    features: [
      "Feature 1: User authentication and authorization.",
      "Feature 2: Real-time data updates with WebSockets.", 
        "Feature 3: Responsive design for mobile and desktop."
    ],
    status: "Completed",
    type: "Personal Project",
    date: "May 2024",
    isFeatured: 1

    },

    {  
    id: 7,     
    name: "Depression Risk Analyzer",
    title: "Machine Learning-Based Depression Risk Prediction App",
    description: "An interactive web application that predicts depression risk using a trained ensemble machine learning model based on user lifestyle and behavioral inputs.",
    primaryTechnology: "Python",
    technologies: [
    "Python",
    "Streamlit",
    "Scikit-learn",
    "XGBoost",
    "Pandas",
    "NumPy",
    "Hugging Face Hub"
  ],
    "cover": depressionCover,
    image: "https://via.placeholder.com/300x200",
    link: "https://depression-risk-prediction-app.streamlit.app/",
    features: [
    "Real-time depression risk prediction using an ensemble stacking model.",
    "Advanced data preprocessing including missing value handling, encoding, and feature scaling.",
    "Integration with Hugging Face to host and dynamically load large ML models.",
    "User-friendly interface for non-technical users to input lifestyle and mental health data.",
    "Robust model built using Logistic Regression, Random Forest, and XGBoost with hyperparameter tuning."
  ],

    status: "Completed",
    type: "Academic Project",
    date: "March 2025",
    isFeatured: 1

    },

  


  

] 

export default projects;
