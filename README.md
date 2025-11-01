# Fun Cat 🏠

A simple and fun React web application that displays beautiful cat images. Built with ReactJS and powered by The Cat API.

## Overview

Fun Cat is a lightweight web app designed for cat lovers. It fetches and displays a collection of cat images in an easy-to-browse interface with a clean, modern design.

## Features

- **Cat Image Gallery**: Display 15 random cat images
- **Refresh Button**: Load a new set of cat images with one click
- **Info Modal**: Learn about the app and contact the developer
- **Responsive Design**: Works well on different screen sizes
- **Clean UI**: Modern, dark-themed interface

## Tech Stack

- **Framework**: React.js
- **HTTP Client**: Axios
- **Icons**: React Icons (Bootstrap icons)
- **Modals**: React Modal
- **API**: The Cat API (api.thecatapi.com)

## Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd fun-cat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── App.js          # Main app component
│   ├── Header.js       # Header with navigation and modal
│   ├── ShowCat.js      # Cat image display component
│   └── Resource.js     # Data fetching wrapper component
├── App.css             # Styling
├── index.css           # Global styles
├── index.js            # React DOM render
└── public/
    └── index.html      # HTML entry point
```

## How It Works

1. **App.js**: Main component that renders the Header and ShowCat components
2. **Header.js**: Contains the title, navigation buttons (Refresh and Info), and a modal popup with app details
3. **ShowCat.js**: Fetches cat images from The Cat API and renders them as a grid
4. **Resource.js**: A reusable component that handles API calls and manages loading/error states

## Usage

- **View Cats**: Launch the app to see 15 random cat images
- **Refresh**: Click the "refresh" button to load a new set of cat images
- **Info**: Click the "info" button to see details about the app and the developer's contact information

## API Reference

The app uses The Cat API endpoint:

```
https://api.thecatapi.com/v1/images/search/?limit=15&page=100&order=DESC
```

**Parameters:**
- `limit`: Number of images to fetch (set to 15)
- `page`: Page number for pagination (set to 100)
- `order`: Sort order (DESC for descending)

## Author

**Emre Ozgen**
- Email: emre-ozgen@live.co.uk

## Version

- **Version**: 1.0
- **Release Date**: August 2020

## Credits

- Cat images provided by [The Cat API](https://api.thecatapi.com)
- Icons by React Icons

## License

This project is free to use and modify. Please credit the original author when sharing or redistributing.

## Contact & Support

Have suggestions or improvements? Feel free to reach out to the author at emre-ozgen@live.co.uk

Interested in learning ReactJS? The author is available for mentoring and consulting.

---

**Enjoy the cats! 🐱**
