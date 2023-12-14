import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
        <>
        <div className="bg-[#d3d3d3] bg-[url(./assets/Gradient.png)] bg-center bg-no-repeat bg-cover relative h-screen">
          <div className=" w-full bg-gradient-to-t from-white via-white to-transparent z-10">
            <Navbar />
            <Hero />
          </div>
        </div>
        </>
        )
}

export default App
