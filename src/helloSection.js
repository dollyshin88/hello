import React from 'react';

const HelloSection = () => {

    return (
        <div className='colorBlockDiv'>
            <div className='introText'>
                <div>Hello, I am </div>
                <div className='posRel introText__placeholder flexContainerRow flexCenterAlign'>
                    <div className='introText__static scriptType'>Dolly Shin</div>
                    <div className='introText__animated scriptType'>A CREATOR</div>
                    <div className='introText__animated scriptType'>AN EXPLORER</div>
                    <div className='introText__animated scriptType'>AN ENGINEER</div>
                    <div className='introText__animated scriptType emphTextLarge'>
                        <div>A SOFTWARE</div>
                        <div className='marginBuffer'>DEVELOPER.</div>
                    </div>
                </div>
            </div>
            <i class="fas fa-chevron-down"></i>
        </div>
    );
}

export default HelloSection;