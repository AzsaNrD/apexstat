import { useState } from "react"
import axios from "axios"
import PC from "./Pc"
import PS4 from "./Ps"
import XBOX from "./Xbox"
import DataLoading from "./DataLoading"
import DataError from "./DataError"
import ApexLogo from "./ApexLogo"

const PlayerStatistic = () => {
  const [nickName, setNickName] = useState("")
  const [active, setActive] = useState("PC")
  const [errorReason, setErrorReason] = useState("")
  const [errorCode, setErrorCode] = useState("")
  const [search, setSearch] = useState("")
  const [global, setGlobal] = useState([])
  const [realtime, setRealtime] = useState([])
  const [legends, setLegends] = useState([])
  const [club, setClub] = useState([])
  const [isDataFound, setIsDataFound] = useState(false)
  const [isDataError, setIsDataError] = useState(false)
  const [isDataLoading, setIsDataLoading] = useState(false)

  const getData = () => {
    axios
      .get(
        `https://api.mozambiquehe.re/bridge?auth=${process.env.REACT_APP_API_KEY}&player=${nickName}&platform=${active}&enableClubsBeta`
      )
      .then((response) => {
        if (response.data.global === undefined) {
          setIsDataFound(false)
          setIsDataError(true)
        } else {
          setGlobal(response.data.global)
          setRealtime(response.data.realtime)
          setLegends(response.data.legends)
          setClub(response.data.club)
          setIsDataFound(true)
        }
      })
      .catch((error) => {
        setIsDataError(true)
        setErrorReason(Object.values(error.response.data)[0])
        console.log(Object.values(error.response.data)[0])
        setErrorCode(error.response.status.toString())
        console.log(error.response.status.toString())
      })
      .finally(() => {
        setIsDataLoading(false)
        setNickName("")
        setActive("PC")
        document.getElementById("searchButton").removeAttribute("disabled")
      })
  }

  const searchDataPlayer = (event) => {
    event.preventDefault()
    if (nickName !== "") {
      setSearch(`Searching data for ${nickName} platform ${active}`)
      setIsDataLoading(true)
      setIsDataError(false)
      setIsDataFound(false)
      document.getElementById("searchButton").setAttribute("disabled", "")
      setTimeout(getData, 5000)
    }
    return
  }

  const Legendary = {
    color: "#fbbf24",
  }

  const Rare = {
    color: "#93c5fd",
  }

  const Epic = {
    color: "#a855f7",
  }

  const Common = {
    color: "#d1d5db",
  }

  return (
    <div className="text-center mt-40 md:mt-60">
      <div>
        <h1 className="text-[#F8F8F8] text-2xl font-semibold md:text-3xl">
          Find's Player Statistic
        </h1>
      </div>

      <div className="bg-[#D9D9D9] max-w-xs sm:max-w-lg m-auto mt-5 py-3 md:py-1 px-5 md:px-1 rounded-full relative shadow-md">
        <form onSubmit={searchDataPlayer}>
          <div className="flex gap-2 justify-between items-center">
            <div className="basis-10/12 md:basis-5/12">
              <input
                type="text"
                placeholder="Apex Legends Username..."
                value={nickName}
                onChange={(x) => {
                  setNickName(x.target.value)
                }}
                className="outline-none w-full bg-transparent ml-0 md:ml-8 block"
              />
            </div>
            <div className="flex items-center gap-5">
              <div className="flex gap-2 cursor-pointer">
                <div onClick={() => setActive("PC")}>
                  <PC active={active} />
                </div>
                <div onClick={() => setActive("PS4")}>
                  <PS4 active={active} />
                </div>
                <div onClick={() => setActive("X1")}>
                  <XBOX active={active} />
                </div>
              </div>
              <button
                type="submit"
                id="searchButton"
                className="absolute md:relative left-0 bg-orange-500 hover:bg-orange-600 transition duration-300 w-full md:w-auto md:top-0 top-16 py-3 px-0 md:px-10 rounded-full border-none shadow-sm md:shadow-none text-white disabled:bg-orange-300 disabled:hover:bg-orange-300"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      {isDataLoading && <DataLoading search={search} />}

      {isDataError && (
        <DataError
          isDataError={isDataError}
          errorReason={errorReason}
          errorCode={errorCode}
        />
      )}

      {isDataFound === true && (
        <div className="flex flex-col gap-10 lg:gap-7 lg:flex-row mt-44">
          <div className="bg-[#2B2B2B] border border-[#646464] rounded-md  py-7 px-5 text-[#C0C0C0] lg:basis-4/12 h-fit">
            <div className="flex items-center justify-center gap-7">
              <div>
                <ApexLogo />
              </div>
              <div className="flex flex-col text-start">
                <h5 className="font-bold text-lg">{global.name}</h5>
                <p className="text-sm text-[#929090]">
                  {realtime.currentState}
                </p>
              </div>
            </div>
            <div className="text-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 mt-6 font-bold divide-y lg:divide-y sm:divide-y-0 divide-[#646464] border-y lg:border-y sm:border-y-0 border-[#646464] gap-0 sm:gap-5 lg:gap-0">
              <div className="py-4 lg:py-4 sm:py-0 sm:border-l lg:border-l-0 sm:px-2 border-[#646464] h-fit">
                <h6 className="text-[#8C8C8C]">UID</h6>
                <p className="text-[#C0C0C0]">{global.uid}</p>
              </div>
              <div className="py-4 lg:py-4 sm:py-0 sm:border-l lg:border-l-0 sm:px-2 h-fit">
                <h6 className="text-[#8C8C8C]">LEGENDS SELECTED</h6>
                <p className="text-[#C0C0C0]">
                  {legends.selected.LegendName.toUpperCase()}
                </p>
                <p className="font-light text-[#a09d9d] text-sm">
                  Skin:
                  {legends.selected.gameInfo.skin &&
                  legends.selected.gameInfo.skinRarity !== "None" ? (
                    <span
                      className="pl-1"
                      style={
                        (legends.selected.gameInfo.skinRarity === "Legendary" &&
                          Legendary) ||
                        (legends.selected.gameInfo.skinRarity === "Epic" &&
                          Epic) ||
                        (legends.selected.gameInfo.skinRarity === "Rare" &&
                          Rare) ||
                        (legends.selected.gameInfo.skinRarity === "Common" &&
                          Common)
                      }
                    >
                      {legends.selected.gameInfo.skin}
                    </span>
                  ) : (
                    <span className="pl-1 text-[#d1d5db]">None</span>
                  )}
                  , Frame:
                  {legends.selected.gameInfo.frame &&
                  legends.selected.gameInfo.frameRarity !== "None" ? (
                    <span
                      className="pl-1"
                      style={
                        (legends.selected.gameInfo.frameRarity ===
                          "Legendary" &&
                          Legendary) ||
                        (legends.selected.gameInfo.frameRarity === "Epic" &&
                          Epic) ||
                        (legends.selected.gameInfo.frameRarity === "Rare" &&
                          Rare) ||
                        (legends.selected.gameInfo.frameRarity === "Common" &&
                          Common)
                      }
                    >
                      {legends.selected.gameInfo.frame}
                    </span>
                  ) : (
                    <span className="pl-1 text-[#d1d5db]">None</span>
                  )}
                  , Pose:
                  {legends.selected.gameInfo.pose &&
                  legends.selected.gameInfo.poseRarity !== "None" ? (
                    <span
                      className="pl-1"
                      style={
                        (legends.selected.gameInfo.poseRarity === "Legendary" &&
                          Legendary) ||
                        (legends.selected.gameInfo.poseRarity === "Epic" &&
                          Epic) ||
                        (legends.selected.gameInfo.poseRarity === "Rare" &&
                          Rare) ||
                        (legends.selected.gameInfo.poseRarity === "Common" &&
                          Common)
                      }
                    >
                      {legends.selected.gameInfo.pose}
                    </span>
                  ) : (
                    <span className="pl-1 text-[#d1d5db]">None</span>
                  )}
                  , Intro:
                  {legends.selected.gameInfo.intro &&
                  legends.selected.gameInfo.introRarity !== "None" ? (
                    <span
                      className="pl-1"
                      style={
                        (legends.selected.gameInfo.introRarity ===
                          "Legendary" &&
                          Legendary) ||
                        (legends.selected.gameInfo.introRarity === "Epic" &&
                          Epic) ||
                        (legends.selected.gameInfo.introRarity === "Rare" &&
                          Rare) ||
                        (legends.selected.gameInfo.introRarity === "Common" &&
                          Common)
                      }
                    >
                      {legends.selected.gameInfo.intro}
                    </span>
                  ) : (
                    <span className="pl-1 text-[#d1d5db]">None</span>
                  )}
                </p>
              </div>
              <div className="py-4 lg:py-4 sm:py-0 sm:border-l lg:border-l-0 sm:px-2 h-fit">
                <div>
                  <h6 className="text-[#8C8C8C]">
                    LEVEL{" "}
                    {global.levelPrestige !== undefined &&
                      `[PRESTIGE ${global.levelPrestige}]`}
                  </h6>
                </div>
                <div className="flex items-center">
                  <p className="text-[#C0C0C0]">{global.level}</p>
                  <div className="relative basis-5/12 mx-2">
                    <div
                      className={`absolute h-3 bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-500 loading-animation`}
                      style={{ width: `${global.toNextLevelPercent}%` }}
                    ></div>
                    <div className="h-3 bg-zinc-300 w-[100%]"></div>
                  </div>
                  <p>{global.level + 1}</p>
                </div>
              </div>
              <div className="py-4 lg:py-4 sm:py-0 sm:border-l lg:border-l-0 sm:px-2 h-fit">
                <h6 className="text-[#8C8C8C]">BR RANK</h6>
                <p className="text-[#C0C0C0]">{`${global.rank.rankName} ${global.rank.rankDiv} - ${global.rank.rankScore} RP`}</p>
              </div>
              <div className="py-4 lg:py-4 sm:py-0 sm:border-l lg:border-l-0 sm:px-2 h-fit">
                <h6 className="text-[#8C8C8C]">ARENA RANK</h6>
                <p className="text-[#C0C0C0]">{`${global.arena.rankName} ${global.arena.rankDiv} - ${global.arena.rankScore} RP`}</p>
              </div>
              {club && club.id !== null && (
                <div className="py-4 lg:py-4 sm:py-0 sm:border-l lg:border-l-0 sm:px-2 h-fit">
                  <h6 className="text-[#8C8C8C]">{`CLUB [CREATED BY ${club.members[0].name}]`}</h6>
                  <p className="text-[#C0C0C0]">{club.name}</p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-0 lg:basis-8/12 xl:basis-10/12">
            <div className="bg-[#2B2B2B] border border-[#646464] rounded-md py-7 px-5 text-[#C0C0C0] text-left">
              <div>
                <h5 className="font-bold text-2xl">Legends Statistic</h5>
              </div>
              <div className="text-left mt-6 flex flex-col gap-5">
                {Object.values(legends.all).map(
                  (result, index) =>
                    Object.keys(legends.all)[index] !== "Global" && (
                      <div
                        className="bg-gradient-to-tr from-[#3F3F3F] to-[#474747] rounded-sm p-6 shadow-md"
                        key={index.toString()}
                      >
                        <h6 className="font-bold text-lg">
                          {Object.keys(legends.all)[index].toUpperCase()}
                        </h6>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-5 mt-5 divide-y sm:divide-y-0 divide-[#646464] border-y sm:border-y-0 border-[#646464]">
                          {result.data !== undefined ? (
                            Object.values(result.data).map(
                              (dataGame, index) => (
                                <div
                                  className="font-semibold px-2 sm:px-3 sm:py-0 py-2 sm:border-l border-[#646464] h-fit"
                                  key={index.toString()}
                                >
                                  <p className="text-[#9c9a9a]">
                                    {dataGame.name.toUpperCase()}
                                  </p>
                                  <p>{dataGame.value}</p>
                                </div>
                              )
                            )
                          ) : (
                            <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 border-y border-[#646464]">
                              <p className="text-center py-10 ">
                                Swap to{" "}
                                <b>{Object.keys(legends.all)[index]} </b>
                                and try again
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                )}

                <div>
                  <p className="font-thin text-sm">
                    Data from
                    <a
                      className="font-normal ml-1 hover:text-slate-100 transition duration-300"
                      href="https://portal.apexlegendsapi.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      apex legends status
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PlayerStatistic
