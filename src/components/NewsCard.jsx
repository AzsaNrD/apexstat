const NewsCard = ({ data }) => {
  return (
    <div className="bg-gradient-to-tr from-[#3F3F3F] to-[#474747] rounded-sm overflow-hidden shadow-md flex flex-col">
      <div>
        <img src={data.img} alt={data.title} />
      </div>
      <div className="p-3 grow shrink">
        <div className="font-bold text-xl text-[#C0C0C0]">
          <h3>{data.title}</h3>
        </div>
        <div className="text-[#979797]">
          <p>{data.short_desc}</p>
        </div>
      </div>
      <div className="mt-2">
        <a
          className="text-neutral-700 transition duration-300 justify-between px-3 py-2 m-3 bg-neutral-400 hover:bg-[#afabab] text-center block w-5/12"
          href={data.link}
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default NewsCard
