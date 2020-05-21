import React from 'react';
import './detail-button.styles.scss';

const DetailButton = ({children}) => (
    <button className="detail-button"> 
        {children}
    </button>
);

export default DetailButton;