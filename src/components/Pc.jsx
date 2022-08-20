const Pc = ({ active }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={active === "PC" ? "svg svg__active" : "svg"}
    >
      <path d="M8.19375 1.71875L0 2.79625V9.60875H8.19375V1.71875ZM0 17.2437L8.19375 18.41V10.3912H0V17.2437ZM9.0975 10.4938L9.13 18.4662L20 20V10.4938H9.0975ZM20 0L9.1625 1.555V9.5725H20V0Z" />
    </svg>
  )
}
export default Pc
