import PropTypes from 'prop-types';

const SpacielPage = (props) => {
  const refreshPage = () => {
    if (props.goTo === "Refresh") {
      window.location.reload();
      if (window.location.pathname === "/error") {
        window.location.pathname = "/"
      }
    } else {
      window.location.pathname = "/"
    }
    // console.log(window.location); //this is for debugging purpos
  }
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1>:(</h1><button onClick={refreshPage}>{props.goTo}</button>
      <h1 className="text-3xl font-bold text-red-600 mb-4">{props.header}</h1>
      <p className="text-gray-600 mb-4">{props.code}</p>
      <p className="text-gray-500">{props.info}</p>
    </div>
  )
}
SpacielPage.propTypes = {
  goTo: PropTypes.string,
  header: PropTypes.string,
  code: PropTypes.string,
  info: PropTypes.string
}
export default SpacielPage