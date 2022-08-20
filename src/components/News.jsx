import NewsCard from "./NewsCard"
import axios from "axios"
import { useEffect, useState } from "react"

const News = () => {
  const [news, setNews] = useState([])
  const [isDataFound, setIsDataFound] = useState(false)

  useEffect(() => {
    axios
      .get(
        `https://api.mozambiquehe.re/news?auth=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setNews(response.data)
        setIsLoading(true)
        setIsDataFound(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
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
