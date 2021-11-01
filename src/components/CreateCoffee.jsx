import React from 'react';
import ListOfCoffees from '../ListOfCoffees';
import { useState } from 'react';



function CreateCoffee(props){
   return <div className="coffee-div">
   <img className="coffee" src={props.image} alt="" onClick={props.onClick}>
   </img> 
   <p>{props.rating}</p>

   </div>;      
}

function AllCoffees(props){

  return (
     <section className="all-coffees-section">
     { ListOfCoffees.map((ListOfCoffee, index) => {
            {/* return <div className="coffee-div">
            <img className="coffee" alt="" src={ListOfCoffee.image} 
            onClick={()=>{props.onChange(index)}}>
            </img> 
            <p>{ListOfCoffee.rating}</p>
            
            </div>;  */}
            return <CreateCoffee
            image = {ListOfCoffee.image}
            rating = {ListOfCoffee.rating}
            onClick = {(e)=>{props.onChange(index); 
            e.preventDefault();} }
            ></CreateCoffee>
       }
      )}

     </section>
 );
}



export default AllCoffees;