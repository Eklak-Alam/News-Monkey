//Class based component

// import React, { Component } from 'react'
// import Loading from './Loading.gif'

// export class Spinner extends Component {
//   render() {
//     return (
//         <>
//              <div className='flex items-center justify-center w-full z-10 mt-5'>
//                 <img className='img text-3xl my-3 size-10' src={Loading} alt="" />
//              </div>

//         </>
//     )
//   }
// }

// export default Spinner



// function based component

import React from 'react';
import Loading from './Loading.gif';

const Spinner = () => {
  return (
    <div className='flex items-center justify-center w-full z-10 mt-5'>
      <img className='img text-3xl my-3 size-10' src={Loading} alt="Loading..." />
    </div>
  );
};

export default Spinner;
