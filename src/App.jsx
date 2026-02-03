import About from "./components/about";
import Expertise from "./components/expertise";
import Footer from "./components/footer";
import Home from "./components/home";
import MordernTect from "./components/mordernTect";
import Navigation from "./components/navigation";
import Projects from "./components/projects";

import './app.css'


function App() {
  return (
    <div className="relative min-h-screen">
      {/* FIXED BACKGROUND */}
      <video
        className="fixed inset-0 -z-10 h-full w-full object-cover"
        src="/videos/bg-video-2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional overlay */}
      <div className="fixed inset-0 -z-10 bg-black/40"></div>

      {/* WEBSITE CONTENT (scrolls normally) */}
      <main className="relative z-10 text-white">

        <Navigation />
        <Home />
        <About />
        <Expertise />
        <Projects />
        <MordernTect />
        <Footer />

      </main>
    </div>
  );
}

export default App;
