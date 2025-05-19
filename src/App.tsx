// Components
import Width from "./components/width";
import Nav from "./components/sections/nav";
import Hero from "./components/sections/hero";
import Overview from "./components/sections/overview";
import Motivation from "./components/sections/motivation";
import Tracks from "./components/sections/tracks";

function App() {
  return (
    <main className="w-full h-auto flex flex-col items-center px-4 mb-10">
      <Nav />
      <Hero />
      <Width className="flex flex-col gap-10 px-4">
        <Overview />
        <Motivation />
        <Tracks />
      </Width>
    </main>
  );
}

export default App;
