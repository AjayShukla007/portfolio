import SpacielPage from '../../components/extraPages/ExtraPage'
import PropTypes from 'prop-types';

const Error = (props) => {
  return (
    <div>
        <SpacielPage
        goTo={"Refresh"}
        header="Error"
        code={props.errorCode || 'Some Unknown Error Occured'}
        info={"This may not mean anything. \n \nI'm probably working on something that has blown up"}/>
    </div>
  )
}
Error.propTypes = {
  errorCode: PropTypes.string,
}
export default Error