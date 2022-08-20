import { useState, useEffect } from "react"
import VtolImage from "../assets/VTOL_Jets.png"

const Vtol = () => {
  const [scrolled, setScrolled] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true)
        document.getElementById("vtoltotop").removeAttribute("disabled")
      } else {
        setScrolled(false)
        document.getElementById("vtoltotop").setAttribute("disabled", "")
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <div className="relative z-[99999]">
      <div
        className={
          scrolled
            ? "bottom-5 right-5 fixed opacity-100 transition duration-300 ease-in-out scale-100"
            : "bottom-5 right-5 fixed opacity-0 transition duration-300 ease-in-out scale-50"
        }
      >
        <button
          id="vtoltotop"
          type="button"
          onClick={scrollToTop}
          className="z-[99] block w-10 h-10 bg-stone-300 shadow-sm shadow-zinc-500 p-1 rounded-full relative"
        >
          <img src={VtolImage} alt="vtol jets valk" />
        </button>
      </div>
    </div>
  )
}

export default Vtol
