import PropTypes from 'prop-types';

const SpacielPage = (props) => {
  return (
    <div>
        <div className="header">{props.header}</div>
        <div className="code">{props.code}</div>
        <div className="info">{props.info}</div>
    </div>
  )
}
SpacielPage.propTypes = {
    header: PropTypes.string,
    code: PropTypes.string,
    info: PropTypes.string
}
export default SpacielPage