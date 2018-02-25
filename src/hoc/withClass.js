import React from 'react';

const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      {/* Pass props param through to the wrapped component */}
      <WrappedComponent {...props} />
    </div>
  )
}

export default withClass;
