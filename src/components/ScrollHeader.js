import React from 'react';
import './styles/headerStyles.css';

export const ScrollHeader = () => {
    return (
        <div className='header-component'>
            <div className='header'>Property Axis</div>
            <div className='scroll-circle'>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li className='selected'>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                </ul>
                <div className='line'></div>
            </div>
        </div>
    );
};
