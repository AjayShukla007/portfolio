import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);

  const handleError = (error) => {
    setError(error);
  };

  useEffect(() => {
    // Attach error handler during component mount
    window.onerror = handleError;

    // Detach error handler during component cleanup (optional)
    return () => {
      window.onerror = null;
    };
  }, []);

  if (error) {
    // Redirect to error route on error
    return <h1>error</h1>;
  }

  return children;
};
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
}
export default ErrorBoundary;