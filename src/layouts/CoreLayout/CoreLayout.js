import React from 'react'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

const CoreLayout = ({ children }) => (
  <div>
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default CoreLayout
