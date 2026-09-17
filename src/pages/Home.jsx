import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home({ onNavigate }) {
  return (
    <div className="app">
      <Navbar onNavigate={onNavigate} />

      <main>
        <section className="hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <p className="hero-small-title">
                WELCOME TO MOVIEEXPLORER
              </p>

              <h1>Discover Movies</h1>

              <p>
                Explore and discover your favorite movies
                and shows from around the world.
              </p>

              <button
                className="hero-button"
                onClick={() => onNavigate("movies")}
              >
                Explore Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;