import Page1 from "./pages/Page1";
import Page2 from "./pages/page2";

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/galaxy.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/40 -z-10"></div>

      {/* Website Content */}
      <div className="relative z-10">
        <Page1 />
        <Page2 />
      </div>

    </div>
  );
};

export default App;