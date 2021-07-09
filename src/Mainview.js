import React from 'react';
import LeftSideImage from './leftbox/LeftSideImage'
import LoginForm from './loginform/LoginForm'
import './MainView.css';

function MainView() {
    return (
        <div className="big-container">
            <div className='left-box'>
                <LeftSideImage />
            </div>
            
           <div className='right-box'>
                <LoginForm />
              
           </div>
        </div>
    )
}

export default MainView;