//class based component 

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export class Navbar extends Component {
//   render() {
//     return (
//       <>
//         <nav className="bg-black p-3 sticky top-0 z-10 shadow-md">
//           <div className="container mx-auto flex items-center">
//             <Link to="/" className="text-white text-xl font-bold font-sans">News Monkey</Link>
//             <div className="space-x-4 ml-5">
//               <Link to="/" className="text-white hover:text-gray-500 mr-2">Home</Link>
//               <Link to="/general" className="text-white hover:text-gray-500 mr-2">General</Link>
//               <Link to="/business" className="text-white hover:text-gray-500 mr-2">Business</Link>
//               <Link to="/entertainment" className="text-white hover:text-gray-500 mr-2">Entertainment</Link>
//               <Link to="/health" className="text-white hover:text-gray-500 mr-2">Health</Link>
//               <Link to="/science" className="text-white hover:text-gray-500 mr-2">Science</Link>
//               <Link to="/sports" className="text-white hover:text-gray-500 mr-2">Sports</Link>
//               <Link to="/technology" className="text-white hover:text-gray-500 mr-2">Technology</Link>
//             </div>
//           </div>
//         </nav>
//       </>
//     );
//   }
// }

// export default Navbar;


// function based component


import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-3 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold font-sans">News Monkey</Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="text-white hover:text-gray-500 mr-2">Home</Link>
          <Link to="/general" className="text-white hover:text-gray-500 mr-2">General</Link>
          <Link to="/business" className="text-white hover:text-gray-500 mr-2">Business</Link>
          <Link to="/entertainment" className="text-white hover:text-gray-500 mr-2">Entertainment</Link>
          <Link to="/health" className="text-white hover:text-gray-500 mr-2">Health</Link>
          <Link to="/science" className="text-white hover:text-gray-500 mr-2">Science</Link>
          <Link to="/sports" className="text-white hover:text-gray-500 mr-2">Sports</Link>
          <Link to="/technology" className="text-white hover:text-gray-500 mr-2">Technology</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
