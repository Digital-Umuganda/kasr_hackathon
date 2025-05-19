// Components
import Width from "./components/width";
import Nav from "./components/sections/nav";
import Hero from "./components/sections/hero";
import Rules from "./components/sections/rules";
import Tracks from "./components/sections/tracks";
import Overview from "./components/sections/overview";
import Structure from "./components/sections/structure";
import Motivation from "./components/sections/motivation";
import EvaluationAndLeaderboard from "./components/sections/evaluation";

function App() {
  return (
    <main className="w-full h-auto flex flex-col items-center px-4 mb-10">
      <Nav />
      <Hero />
      <Width className="flex flex-col gap-10 px-4">
        <Overview />
        <Motivation />
        <Tracks />
        <Structure />
        <EvaluationAndLeaderboard />
        <Rules />
      </Width>
    </main>
  );
}

export default App;
