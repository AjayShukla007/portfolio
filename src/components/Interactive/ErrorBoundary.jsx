import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useNavigate } from 'react-router-dom'; // Import Redirect
const useNaviagte = ()=>{
  const navigate = useNavigate();
  return navigate;
}
// Higher-order component (HOC)
function withMyHook(Component) {
  return function WrappedComponent(props) {
    const myHookValue = useNaviagte();
    return <Component {...props} myHookValue={myHookValue} />;
  };
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error or send it to an error reporting service
    console.error('Error caught:', error, errorInfo);
  }
  render() {
  // eslint-disable-next-line react/prop-types
  const {navigate} = this.props
    if (this.state.hasError) {
      console.log('this is in the boundary');
      // Redirect to the '/error' route
      navigate('/error');
    }
    return this.props.children;
  }
}

// Define prop types
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node, // Children can be a single node
    PropTypes.arrayOf(PropTypes.node), // Or an array of nodes
  ]).isRequired,
};

export default withMyHook(ErrorBoundary);
