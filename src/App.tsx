import Carousel from "./components/Carousel"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import WorkSection from "./components/WorkSection"
import './App.css'
import Quote from "./components/Quote"
import Pricing from "./components/Pricing"

function App() {

  return (
        <>
        <div className="bg-[#d3d3d3] bg-[url(./assets/Gradient.png)] bg-center bg-no-repeat bg-cover relative h-screen">
          <div className=" w-full bg-gradient-to-t from-white via-white to-transparent z-10 pb-[80px]">
            <Navbar />
            <Hero />
          </div>
          <Carousel />
          <WorkSection />
          <Quote />
          <Pricing/>
          
        </div>
        </>
        )
}

export default App
