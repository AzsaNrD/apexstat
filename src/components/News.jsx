import { useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import NewsCard from "./NewsCard"
import axios from "axios"

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [isDataFound, setIsDataFound] = useState(false)

  useEffect(() => {
    axios
      .get(
        `https://api.mozambiquehe.re/news?auth=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setNews(response.data)
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
        <ThreeDots color="#f8fafc" />
      </div>
    </div>
  ) : (
    isDataFound && (
      <div className="mt-40 md:mt-44 mb-10">
        <div className="text-center flex justify-center">
          <h1 className="text-[#F8F8F8] text-xl px-10 py-3 font-semibold sm:text-3xl shadow-sm shadow-stone-800 bg-gradient-to-tr from-[#3F3F3F] to-[#474747]">
            Apex Legends News
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mt-10">
          {news.map((data) => (
            <NewsCard data={data} key={data.title} />
          ))}
        </div>
      </div>
    )
  )
}

export default News
