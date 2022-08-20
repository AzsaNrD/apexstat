const SvgApexLogo = ({ isDataError }) => {
  return (
    <svg
      width="35"
      height="36"
      viewBox="0 0 30 31"
      xmlns="http://www.w3.org/2000/svg"
      className={isDataError ? "fill-red-500" : "fill-[#C0C0C0]"}
    >
      <g clipPath="url(#clip0_54_951)">
        <path d="M0 26.0046L15.0137 -3.8147e-06L30 25.957L25.7707 30.2716L16.8268 24.141L16.8361 24.114H22.1847C19.7862 19.9583 17.399 15.8237 15 11.6685L7.81771 24.1096H13.1129C13.0972 24.1336 13.1129 24.1126 13.1129 24.1307C13.1132 24.1329 13.1131 24.1351 13.1125 24.1372C13.1119 24.1393 13.1109 24.1413 13.1094 24.143L4.51902 30.2746L0 26.0046Z" />
      </g>
      <defs>
        <clipPath id="clip0_54_951">
          <rect width="30" height="30.2751" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgApexLogo
