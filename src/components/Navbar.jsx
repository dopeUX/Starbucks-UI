import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const navBarItems=[
           "Home",
           "Trending",
           "Reward",
           "Gift Cards",
           "Responsibility",
           "About"
];

const activeItem=[
         true,
         false,
         false,
         false,
         false,
         false
];




function Navbar(){

   const [currentIndex, setCurrentIndex] = useState(0);
  
   return (
       <ul>
          {  
            navBarItems.map((navBarItem, index)=>{
            return <li className={activeItem[index]===true? "selectedIndex": null}
             onClick={(e)=>{
              setCurrentIndex(index)
              activeItem.fill(false)
              activeItem[index]=true;
              console.log(index);
              console.log(activeItem); 

             }}>{navBarItem}</li>
          })
        }
      </ul>
   );
}

export default Navbar;