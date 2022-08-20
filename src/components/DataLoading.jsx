import ApexLogo from "./ApexLogo"

const DataLoading = ({ search }) => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row mt-36 md:mt-20 gap-3 animate-pulse">
      <div>
        <ApexLogo />
      </div>
      <div>
        <p className="text-[#C0C0C0] font-light">{search}</p>
      </div>
    </div>
  )
}

export default DataLoading
