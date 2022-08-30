import { ThreeDots } from "react-loader-spinner"

const Loaders = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y- animate-pulse">
        <ThreeDots color="#f8fafc" />
      </div>
    </div>
  )
}

export default Loaders
