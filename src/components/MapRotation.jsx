import { useState, useEffect } from "react"
import { Triangle } from "react-loader-spinner"
import CountdownTimer from "./CountdownTimer"
import axios from "axios"

const MapRotation = () => {
  const [br, setBr] = useState(null)
  const [brRanked, setBrRanked] = useState(null)
  const [arenas, setArenas] = useState(null)
  const [arenasRanked, setArenasRanked] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isDataFound, setIsDataFound] = useState(false)

  useEffect(() => {
    axios
      .get(
        `https://api.mozambiquehe.re/maprotation?version=2&auth=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setBr(response.data.battle_royale)
        setBrRanked(response.data.ranked)
        setArenas(response.data.arenas)
        setArenasRanked(response.data.arenas)
        setIsDataFound(true)
        setTimeout(() => {
          setLoading(false)
        }, 3000)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return loading ? (
    <div className="h-screen relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y- animate-pulse">
        <Triangle color="#f8fafc" />
      </div>
    </div>
  ) : (
    isDataFound && (
      <div className="mt-40 md:mt-44 mb-10">
        <div className="text-center flex justify-center">
          <h1 className="text-[#F8F8F8] text-xl px-20 py-3 font-semibold sm:text-3xl shadow-sm shadow-stone-800 bg-gradient-to-tr from-[#3F3F3F] to-[#474747]">
            Map Rotation
          </h1>
        </div>
        <div>
          {isDataFound && (
            <div className="mt-10 text-slate-300 text-center grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="h-60 rounded-sm shadow-md shadow-neutral-800 overflow-hidden bg-gradient-to-tr from-[#3F3F3F] to-[#474747]">
                  <img
                    className="object-cover h-60 w-full group-hover:scale-105 transition duration-300"
                    src={brRanked.current.asset}
                    alt={brRanked.current.map}
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none drop-shadow-sm shadow-black">
                  <p className="uppercase">Battle Royale Ranked</p>
                  <p className="uppercase text-xl font-bold">
                    {brRanked.current.map}
                  </p>
                  <CountdownTimer
                    countdownTimesMs={brRanked.current.end * 1000}
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="h-60 rounded-sm shadow-md shadow-neutral-800 overflow-hidden bg-gradient-to-tr from-[#3F3F3F] to-[#474747]">
                  <img
                    className="object-cover h-60 w-full group-hover:scale-105 transition duration-300"
                    src={br.current.asset}
                    alt={br.current.map}
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none drop-shadow-sm shadow-black">
                  <p className="uppercase">Battle Royale</p>
                  <p className="uppercase text-xl font-bold">
                    {br.current.map}
                  </p>
                  <CountdownTimer countdownTimesMs={br.current.end * 1000} />
                </div>
              </div>
              <div className="relative group">
                <div className="h-60 rounded-sm shadow-md shadow-neutral-800 overflow-hidden bg-gradient-to-tr from-[#3F3F3F] to-[#474747]">
                  <img
                    className="object-cover h-60 w-full group-hover:scale-105 transition duration-300"
                    src={arenas.current.asset}
                    alt={arenas.current.map}
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none drop-shadow-sm shadow-black">
                  <p className="uppercase">Arenas</p>
                  <p className="uppercase text-xl font-bold">
                    {arenas.current.map}
                  </p>
                  <CountdownTimer
                    countdownTimesMs={arenas.current.end * 1000}
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="h-60 rounded-sm shadow-md shadow-neutral-800 overflow-hidden bg-gradient-to-tr from-[#3F3F3F] to-[#474747]">
                  <img
                    className="object-cover h-60 w-full group-hover:scale-105 transition duration-300"
                    src={arenasRanked.current.asset}
                    alt={arenasRanked.current.map}
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none drop-shadow-sm shadow-black">
                  <p className="uppercase">Arenas Ranked</p>
                  <p className="uppercase text-xl font-bold">
                    {arenasRanked.current.map}
                  </p>
                  <CountdownTimer
                    countdownTimesMs={arenasRanked.current.end * 1000}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  )
}

export default MapRotation
