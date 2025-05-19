// Components
import Nav from "./components/sections/nav";
import Hero from "./components/sections/hero";
import Overview from "./components/sections/overview";
import Width from "./components/width";

function App() {
  return (
    <main className="w-full h-auto flex flex-col items-center px-4 mb-10">
      <Nav />
      <Hero />
      <Width className="flex flex-col gap-8 px-4">
        <Overview />
      </Width>
    </main>
  );
}

export default App;
