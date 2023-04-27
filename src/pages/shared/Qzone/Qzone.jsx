import React from 'react';
import Qzone1 from '/qZone1.png';
import Qzone2 from '/qZone2.png';
import Qzone3 from '/qZone3.png';

const Qzone = () => {
    return (
        <div className='bg-light py-3 px-3'>
            <h3>Q-Zone</h3>
            <div className='text-center'>
                <img className='w-100' src={Qzone1} alt="" />
                <img className='w-100' src={Qzone2} alt="" />
                <img className='w-100' src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;