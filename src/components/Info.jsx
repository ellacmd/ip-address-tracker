import React from 'react';
import './Info.css';

const Info = ({children}) => {
  return (
    <div className='info'>
      {children}
    </div>
  );
};

export default Info;
