import { NavLink } from "react-router-dom"

const NavBar = () => {
  const buttonHandler = () => {
    const hamburger = document.querySelector("#hamburger")
    const navBar = document.querySelector("#nav-menu")
    hamburger.classList.toggle("hamburger-active")
    navBar.classList.toggle("hidden")
  }

  return (
    <div className="flex justify-between relative">
      <h1 className="font-bold text-white text-2xl md:text-3xl select-none">
        APEXSTAT
      </h1>
      <div className="block">
        <button
          id="hamburger"
          onClick={buttonHandler}
          className="transition block md:hidden duration-300 absolute right-1"
          type="button"
        >
          <span className="hamburger-line transition duration-300 origin-top-left"></span>
          <span className="hamburger-line transition duration-300"></span>
          <span className="hamburger-line transition duration-300 origin-bottom-left"></span>
        </button>
        <nav
          id="nav-menu"
          className="hidden md:block absolute bg-[#646464] md:bg-transparent shadow md:shadow-none top-10 md:top-0 md:right-0 right-6 px-7 py-2 rounded"
        >
          <ul className="block md:flex">
            <li className="group py-2 md:py-0 md:px-5">
              <NavLink
                to="apexstat"
                className="text-[#cbc8c8] hover:text-[#f8fafc] transition duration-300"
              >
                PLAYER STATISTIC
              </NavLink>
            </li>
            <li className="group py-2 md:py-0 md:px-5">
              <NavLink
                to="apexstat/map-rotation"
                className="text-[#cbc8c8] hover:text-[#f8fafc] transition duration-300"
              >
                MAP ROTATION
              </NavLink>
            </li>
            <li className="group py-2 md:py-0 md:px-5">
              <NavLink
                to="apexstat/news"
                className="text-[#cbc8c8] hover:text-[#f8fafc] transition duration-300"
              >
                NEWS
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
