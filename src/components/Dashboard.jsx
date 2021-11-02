import React from 'react';
import AllCoffees from './CreateCoffee';
import CoffeeDetails from './CoffeeDetails';
import ListOfCoffee from '../ListOfCoffees';
import { useState }  from 'react';

let currentIndex = 1;


function Dashboard(){
  const [index, setIndex] = useState(0);
 

  return <div className="dashboard-page">
   <img className="logo-big" src="/images/logobig.png"></img>

   <AllCoffees
    onChange={setIndex}
    >
    
   </AllCoffees>
   
   <CoffeeDetails
    coffeeName = {ListOfCoffee[index].name}
    rating = {ListOfCoffee[index].rating}
    price = {ListOfCoffee[index].price}
    coffeeImage = {ListOfCoffee[index].image}
   ></CoffeeDetails>

  </div>
}

export default Dashboard;
