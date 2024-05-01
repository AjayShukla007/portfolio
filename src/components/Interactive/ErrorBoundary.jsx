import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Error from '../../pages/utility/Error';

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);

  const handleError = (error) => {
    setError(error);
    console.log(error);
  };

  useEffect(() => {
    window.onerror = handleError;

    return () => {
      window.onerror = null;
    };
  }, []);

  if (error) {
    return <Error errorCode={error}/>;
  }

  return children;
};
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
}
export default ErrorBoundary;