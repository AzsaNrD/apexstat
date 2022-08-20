import ApexLogo from "./ApexLogo"

const DataError = ({ isDataError, errorReason, errorCode }) => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row mt-36 md:mt-20 gap-3">
      <div>
        <ApexLogo isDataError={isDataError} />
      </div>
      {errorReason && errorCode !== "" ? (
        <div>
          <span className="text-red-400 font-light mr-1">{errorCode}.</span>
          <span className="text-red-400 font-light">{errorReason}</span>
        </div>
      ) : (
        <div>
          <p className="text-red-400 font-light">Data Not Found. Try Again?</p>
        </div>
      )}
    </div>
  )
}

export default DataError
