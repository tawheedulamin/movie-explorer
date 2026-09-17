# 🎬 Foundation Program Assignment 2 — Movie Explorer

This repository contains my solution for **Foundation Program Assignment 2**, focused on building a responsive Movie Explorer application using **React**, JavaScript, CSS, and a free movie/TV show API.

**Assignment Requirements:**
https://github.com/Apollo-Level2-Web-Dev/Foundation-Program-Assignment-2

---

## 📚 Assignment Overview

The objective of this assignment is to build a responsive **Movie Explorer Application** where users can:

* Explore movies and TV shows
* Search for specific titles
* View movie/show information
* Open detailed information in an interactive modal
* Navigate between the Home Page and Movie Listing Page

The application uses the **TVMaze API** to fetch movie and TV show data.

---

## ✨ Features

### 🏠 Home Page

* Application logo/brand name
* Navigation links
* Movie Listing navigation
* Attractive hero banner
* Movie-related background image
* Application title and description
* "Explore Now" Call-To-Action button
* Responsive footer

### 🎬 Movie Listing Page

* Browse available movies and TV shows
* View movie/show posters
* View movie/show titles
* View release year/date
* View ratings
* Open detailed information
* Responsive movie grid

### 🔍 Search Functionality

Users can:

* Search movies and TV shows by title
* Enter a search query in the search bar
* Get dynamically updated search results
* View matching results from the TVMaze API

### 🎞️ Movie Details Modal

Clicking the **See Details** button opens an interactive modal containing information such as:

* Movie/show poster
* Movie/show title
* Summary/overview
* Rating
* Release date/year
* Genre and other available information

The modal can be closed using the close button.

### 📱 Responsive Design

The application is designed to work across:

* 📱 Mobile
* 📟 Tablet
* 💻 Laptop
* 🖥️ Desktop

---

## 🛠️ Technologies Used

| Technology   | Purpose                          |
| ------------ | -------------------------------- |
| React        | Frontend application development |
| JavaScript   | Application logic                |
| CSS          | Styling and responsive design    |
| Vite         | Development and build tool       |
| TVMaze API   | Movie and TV show data           |
| ESLint       | Code quality and linting         |
| Git & GitHub | Version control                  |
| VS Code      | Development environment          |

---

## 🔌 API Integration

This project uses the **TVMaze API** to retrieve movie and TV show information.

### 📺 Get All Shows

```text
https://api.tvmaze.com/shows
```

### 🔍 Search Shows

```text
https://api.tvmaze.com/search/shows?q={query}
```

Example:

```text
https://api.tvmaze.com/search/shows?q=girls
```

---

## 📂 Project Structure

```text
movie-explorer/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   │
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   └── MovieModal.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Movies.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🧩 Main Components

### `Navbar.jsx`

Responsible for:

* Application branding
* Navigation
* Moving between Home and Movies pages

### `Footer.jsx`

Responsible for:

* Application name
* Copyright information
* Footer content

### `MovieCard.jsx`

Responsible for displaying:

* Movie/show poster
* Title
* Release information
* Rating
* See Details button

### `MovieModal.jsx`

Responsible for displaying detailed information about the selected movie/show.

### `Home.jsx`

Contains:

* Hero section
* Application introduction
* Call-To-Action button

### `Movies.jsx`

Handles:

* Fetching shows
* Searching shows
* Loading state
* Error state
* Movie cards
* Movie details modal

---

## 🧠 React Concepts Used

This project demonstrates several fundamental React concepts.

### Components

The application is divided into reusable components:

```text
Navbar
Footer
MovieCard
MovieModal
Home
Movies
```

### `useState`

Used to manage application state including:

* Movies
* Search query
* Selected movie
* Loading state
* Error state

### `useEffect`

Used for:

* Fetching movie/show data
* Running searches when the search query changes

### Props

Components communicate with each other using props.

Example:

```jsx
<MovieCard
  movie={movie}
  onDetails={setSelectedMovie}
/>
```

---

## 🔄 Application Flow

```text
User
 │
 ▼
Home Page
 │
 │ Click "Explore Now"
 ▼
Movies Page
 │
 ├── Fetch Shows
 ├── Display Movie Cards
 └── Search Movies/Shows
          │
          ▼
      Search Results
          │
          ▼
      Movie Card
          │
          │ Click "See Details"
          ▼
      Movie Modal
          │
          ▼
    Detailed Information
```

---

## ⚡ Loading & Error Handling

The application provides appropriate feedback during API requests.

### Loading State

```text
Loading movies...
```

### API Error

```text
Unable to load movies. Please try again.
```

### Search Error

```text
Unable to search movies. Please try again.
```

### Empty Search Result

```text
No movies found.
```

---

## 🎨 UI & Design

The application uses a modern movie-themed interface featuring:

* Dark visual design
* Movie-themed hero section
* Responsive movie grid
* Search interface
* Interactive movie cards
* Details modal
* Responsive navigation
* Mobile-friendly layout

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/tawheedulamin/movie-explorer.git
```

### 2. Navigate to the Project

```bash
cd movie-explorer
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173/
```

---

## 📦 Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

---

## 🌐 Deployment

### Live Demo

🔗 **Live Website:**
https://movie-explorer-eight-rust.vercel.app/

### GitHub Repository

🔗 **Repository:**
https://github.com/tawheedulamin/movie-explorer

---

## 🐛 Known Limitations

* Movie/show information depends on the TVMaze API.
* Internet access is required to retrieve data.
* API availability may affect search and movie loading.
* Some shows may have missing poster images or information depending on the API response.

---

## 🔮 Future Improvements

Possible future improvements include:

* ⭐ Favorite/watchlist functionality
* 🔐 User authentication
* 🎭 Genre filtering
* 📅 Release-date filtering
* 📑 Pagination
* 🎞️ Movie trailers
* ⭐ User ratings and reviews
* 🌙 Theme switching
* 💾 Local storage for favorites
* ⚡ API caching and optimization

---

## 👨‍💻 Author

**Md Tawheedul Amin Siam**

CSE Undergraduate Student
International Islamic University Chittagong

### Connect With Me

* 🐙 GitHub: https://github.com/tawheedulamin
* 💼 LinkedIn: https://www.linkedin.com/in/md-tawheedul-amin-siam/

---

## 🙏 Acknowledgements

* **TVMaze** — For providing the movie and TV show API
* **React** — For the frontend library
* **Vite** — For the development environment
* **Programming Hero** — For the Foundation Program assignment

---

## 📄 License

This project was created for educational purposes as part of **Foundation Program Assignment 2**.

---

⭐ This repository was created as part of my **JavaScript Foundation Program learning journey with Programming Hero, Bangladesh's largest web-based learning platform.**
