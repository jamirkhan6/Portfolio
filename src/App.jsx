import About from "./components/about";
import Expertise from "./components/expertise";
import Home from "./components/home";
import Navigation from "./components/navigation";


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

      </main>
    </div>
  );
}

export default App;
