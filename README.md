ReactCat House 🐱
A playful and responsive React web application for cat lovers. Browse a endless gallery of adorable cats fetched from a public API. This project demonstrates clean React fundamentals, efficient data fetching, and a modern UI.
🚀 Features
Dynamic Cat Gallery: Fetches and displays a grid of 15 random cat images from TheCatAPI.

Responsive Design: Fully responsive layout that looks great on desktop, tablet, and mobile devices using CSS Grid.

Custom Data Fetching Hook: Implements a reusable Resource component to handle API calls, loading states, and error handling, showcasing advanced component design.

Interactive UI: Features a modal for app information and a refresh button to load a new set of cats.

Clean & Modern Styling: Uses CSS custom properties (variables) and keyframe animations for a polished user experience.
🛠️ Technology Stack
Frontend Library: React

Language: JavaScript (ES6+)

HTTP Client: Axios

API: TheCatAPI (REST)

Icons: React Icons (BsHouse)

Modal: react-modal

Build Tool: Likely Create React App (based on file structure)
src/
├── components/
│   ├── App.js          # Main application component
│   ├── App.css         # Global styles and variables
│   ├── Header.js       # Navigation bar with logo and buttons
│   ├── ShowCat.js      # Component that orchestrates data fetching and rendering
│   └── Resource.js     # Reusable component for handling API data fetching
├── index.js            # Application entry point
└── index.css           # Base styles

🔍 Key Code Highlights
Custom Data Fetching Component (Resource.js)
This project goes beyond basic fetch or useEffect calls. The Resource component is a sophisticated pattern for handling data fetching, making it reusable and keeping the main components clean.
// A simplified look at the powerful pattern used
<Resource
  path={"https://api.thecatapi.com/v1/images/search/?limit=15"}
  render={(data) => {
    if (data.loading) return <p>Loading...</p>;
    return data.trans.map((cat) => <img key={cat.id} src={cat.url} alt="cat" />);
  }}
/>
