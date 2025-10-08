import { useState, useEffect } from "react";
import Experience from "./components/Experience";
import Menu from "./components/Menu";
import Diamond from "./components/Diamond";
import RoughDiamondViewer from "./components/RoughDiamondViewer";
import LandscapeViewer from "./components/LandscapeViewer";

// A helper component for our story chapters
function Chapter({ children, progress, start, end }) {
  // Calculate opacity based on scroll progress
  const isActive = progress >= start && progress < end;
  const opacity = isActive ? 1 : 0.2; // Active chapter is fully visible, others are faded

  return (
    <div
      style={{
        height: "100vh",
        paddingTop: "40vh",
        textAlign: "center",
        opacity: opacity,
        transition: "opacity 0.5s ease-in-out", // Smooth fade transition
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [view, setView] = useState("main");
  const [weather, setWeather] = useState(null); // New state for weather
  const [windspeed, setWindspeed] = useState(0); // New state for windspeed

  // New useEffect for fetching weather data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        let latitude, longitude;
        // --- New logic for city or IP override ---
        let config = {};
        try {
          const response = await fetch(
            `/season.config.json?t=${new Date().getTime()}`
          );
          if (response.ok) config = await response.json();
        } catch (error) {
          console.log("No season.config.json found, using system IP.");
        }

        if (config.city && config.city.trim() !== "") {
          // Step 1a: Geocode city name to get coordinates
          console.log(`Using city from config: ${config.city}`);
          // --- NEW: Using OpenWeatherMap Geocoding API ---
          const openWeatherApiKey =
            config.openWeatherApiKey ||
            import.meta.env.VITE_OPENWEATHER_API_KEY;
          const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
            config.city
          )}&limit=1&appid=${openWeatherApiKey}`;
          const geocodeResponse = await fetch(geocodeUrl);
          if (!geocodeResponse.ok)
            throw new Error("Geocoding API request failed");
          const geocodeData = await geocodeResponse.json();

          if (geocodeData && geocodeData.length > 0) {
            latitude = geocodeData[0].lat;
            longitude = geocodeData[0].lon;
          } else {
            console.warn(
              `Could not find location for city: "${config.city}". Falling back to IP-based location.`
            );
          }
        }

        if (latitude === undefined || longitude === undefined) {
          // Step 1b: Fallback to IP-based geolocation
          console.log("Using IP-based geolocation.");
          const geoResponse = await fetch(
            "https://get.geojs.io/v1/ip/geo.json"
          );
          if (!geoResponse.ok)
            throw new Error("Geolocation API request failed");
          const geoData = await geoResponse.json();
          latitude = geoData.latitude;
          longitude = geoData.longitude;
        }

        // Step 2: Use the location to get the weather
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&current=weather_code&timezone=auto`
        );
        if (!weatherResponse.ok) throw new Error("Weather API request failed");
        const data = await weatherResponse.json();
        const weatherCode = data.current_weather.weathercode;
        setWindspeed(data.current_weather.windspeed);

        // Simple mapping from weather code to condition
        if (weatherCode >= 0 && weatherCode <= 1) {
          setWeather("Sunny"); // Clear sky
        } else if (weatherCode >= 2 && weatherCode <= 48) {
          setWeather("Cloudy");
        } else if (
          (weatherCode >= 51 && weatherCode <= 67) || // Drizzle and Rain
          (weatherCode >= 80 && weatherCode <= 82) ||
          (weatherCode >= 95 && weatherCode <= 99)
        ) {
          setWeather("Rain");
        } else if (weatherCode >= 71 && weatherCode <= 86) {
          setWeather("Snow");
        } else {
          setWeather("Sunny"); // Default
        }
      } catch (error) {
        console.error("Failed to fetch weather:", error);
        setWeather("Sunny"); // Default on error
      }
    };

    fetchWeather();

    // Set up polling to re-fetch weather periodically and on window focus
    // This makes testing different locations in the config file much easier.
    const intervalId = setInterval(fetchWeather, 10 * 60 * 1000); // every 10 minutes
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchWeather();
      }
    };
    window.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []); // This effect should still only run once to set up the polling

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, "");
      const validViews = [
        "about",
        "contact",
        "polished_diamond",
        "rough_diamond",
        "landscape",
      ];
      if (validViews.includes(hash)) {
        setView(hash);
      } else {
        setView("main");
      }
    };

    window.addEventListener("hashchange", handleHashChange, false);
    handleHashChange(); // Check hash on initial load

    return () => {
      window.removeEventListener("hashchange", handleHashChange, false);
    };
  }, []);

  useEffect(() => {
    // Only add scroll listener for the main experience
    if (view !== "main") return;

    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const progress = window.scrollY / maxScroll;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [view]);

  // Render full-page viewers based on the URL hash
  if (view === "polished_diamond") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          background: "#151515",
        }}
      >
        <div
          style={{
            width: "500px",
            height: "500px",
            transform: "rotate(-90deg)",
          }}
        >
          <Diamond />
        </div>
      </div>
    );
  }
  if (view === "rough_diamond") {
    return <RoughDiamondViewer />;
  }
  if (view === "landscape") {
    return <LandscapeViewer weather={weather} />;
  }
  // Simple pages for about/contact
  if (view === "about" || view === "contact") {
    return (
      <div
        style={{ padding: "20px", color: "white", fontFamily: "sans-serif" }}
      >
        <h1>{view === "about" ? "About Us" : "Contact"}</h1>
        <p>This is the {view} page content.</p>
        <a href="/#" style={{ color: "cyan" }}>
          Back to main experience
        </a>
      </div>
    );
  }

  // --- NEW: Loading State ---
  // Don't render the main experience until the weather data is loaded.
  if (!weather) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#111",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <h1>Loading Environment...</h1>
      </div>
    );
  }

  // Calculate glow intensity based on scroll progress
  // Starts glowing after 80%, full glow at 100%
  const glowIntensity = Math.max(0, (scrollProgress - 0.8) / 0.2);

  return (
    <>
      <Menu />

      {/* Diamond Container - appears at the end of the scroll */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: Math.max(0, (scrollProgress - 0.6) * 5), // Fade in after 60% scroll
          pointerEvents: "none", // Allow clicks to pass through
        }}
      >
        <div
          style={{
            width: "500px",
            height: "500px",
            transform: "rotate(-90deg)",
            pointerEvents: "auto", // Re-enable pointer events for the diamond
          }}
        >
          <Diamond
            scrollProgress={scrollProgress}
            glowIntensity={glowIntensity}
          />
        </div>
      </div>

      {/* Fixed container for the 3D canvas */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#111",
        }}
      >
        <Experience
          scrollProgress={scrollProgress}
          weather={weather}
          windspeed={windspeed}
        />
      </div>

      {/* Scrollable text content */}
      <div
        style={{
          position: "relative",
          height: "1500vh", // Make the page even longer
          color: "white",
        }}
      >
        {/* Each chapter is active within a certain scroll progress range */}
        <Chapter progress={scrollProgress} start={0} end={0.2}>
          <h2>For centuries, the search has been on</h2>
        </Chapter>

        <Chapter progress={scrollProgress} start={0.2} end={0.4}>
          <h2>To unearth dreams</h2>
          <h2>To find hidden beauty</h2>
          <h2>To seek perfection</h2>
        </Chapter>

        <Chapter progress={scrollProgress} start={0.4} end={0.6}>
          <h2>To create works of wonder</h2>
        </Chapter>

        <Chapter progress={scrollProgress} start={0.6} end={0.8}>
          <h2>Only dreamers become diamonds</h2>
        </Chapter>

        <Chapter progress={scrollProgress} start={0.8} end={1.0}>
          <h2>Diacore</h2>
        </Chapter>
      </div>
    </>
  );
}
