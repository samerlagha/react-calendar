import React  from 'react';
import CreateButton from './CreateButton'
import './header.scss';

// header build

const Headr =() =>{

    return(

        <div className='header'>
            <div className='navigation'>
                <CreateButton/>
            </div>
        </div>
    )
}

export default Headr;