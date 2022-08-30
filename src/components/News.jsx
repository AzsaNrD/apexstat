import { useEffect, useState } from "react"
import NewsCard from "./NewsCard"
import axios from "axios"
import Loaders from "./Loaders"

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [isDataFound, setIsDataFound] = useState(false)

  useEffect(() => {
    let isFetching = false
    setTimeout(() => {
      if (isFetching === false) {
        setLoading(true)
        axios({
          method: "GET",
          url: `https://api.mozambiquehe.re/news?auth=${process.env.REACT_APP_API_KEY}`,
        })
          .then((response) => {
            setNews(response.data)
            setIsDataFound(true)
          })
          .catch((err) => console.log("error", err))
          .finally(() => {
            setLoading(false)
          })
      }
    }, 2000)

    return () => {
      isFetching = true
    }
  }, [])

  return loading ? (
    <Loaders />
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
