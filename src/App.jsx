import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import PlayerStatistic from "./components/PlayerStatistic"
import MapRotation from "./components/MapRotation"
import News from "./components/News"
import Vtol from "./components/Vtol"
import "./index.css"

function App() {
  return (
    <div className="font-rubik mx-auto px-5 lg:px-12 py-5">
      <Vtol />
      <div className="absolute bg-[url('./assets/valk.svg')] background-position-vk bg-right-top lg:bg-center bg-no-repeat bg-cover w-full h-screen left-0 top-0 -z-50"></div>
      <div className="z-50">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<PlayerStatistic />} />
        <Route path="news" element={<News />} />
        <Route path="map-rotation" element={<MapRotation />} />
      </Routes>
    </div>
  )
}

export default App
