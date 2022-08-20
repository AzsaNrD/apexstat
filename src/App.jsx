import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Triangle } from "react-loader-spinner"
import NavBar from "./components/NavBar"
import PlayerStatistic from "./components/PlayerStatistic"
import MapRotation from "./components/MapRotation"
import News from "./components/News"
import Vtol from "./components/Vtol"
import "./index.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 10000)
  }, [])

  return loading ? (
    <div className="h-screen relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y- animate-pulse">
        <Triangle color="#f8fafc" />
      </div>
    </div>
  ) : (
    <div className="font-rubik mx-auto px-5 lg:px-12 py-5">
      <Vtol />
      <div className="absolute bg-[url('./assets/valk.svg')] background-position-vk bg-right-top lg:bg-center bg-no-repeat bg-cover w-full h-screen left-0 top-0 -z-50"></div>
      <div className="z-50">
        <NavBar />
      </div>
      <Routes>
        <Route path="/apexstat" element={<PlayerStatistic />} />
        <Route path="/map-rotation" element={<MapRotation />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  )
}

export default App
