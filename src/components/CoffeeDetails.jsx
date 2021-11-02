import React, { useState }  from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';
import Notifications from './Notifications';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

function CoffeeDetails(props){
  const [quantity, setquantity] = useState(1);
  
  function decreaseQuantity(){
    if(quantity>1){
      setquantity(quantity-1);
    }
  }


  function setNotification(){
    store.addNotification({
      title: "StarBucks",
      message: quantity+" "+props.coffeeName+" added to your cart",
      type: "success",
      insert: "top",
      container: "bottom-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1300,
        onScreen: false
      },
    });
  }

  return <section className="coffee-details">
     
    <div className="left-col">
      <h1>{props.coffeeName}</h1>
      <div className="ratingandprice" >
          {/* <ReactStars
          style={{width:"fit-content", height:"fit-content"}}
          count={5}
          size={24}
          value={props.rating}
          edit={false}
          isHalf={true}>
          </ReactStars> */}
          {/* <RatingView
          style={{width:"fit-content", height:"fit-content"}}
          stars={5}
          ratingValue={props.rating}
          transition={false}
          >
          </RatingView> */}
          <ReactStarsRating
          style={{width:"fit-content", height:"fit-content",
           marginTop:"2em"}}
          count={5}
          starGap={2}
          isEdit={false}
          value={props.rating}
          >
          </ReactStarsRating>
        
          <h2>{props.price}</h2>
      </div>  
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <h3>Serve with</h3>
      <div className="serve-icons">
        <div className="serve-icon-temp">
        <img src="./images/donut.png"></img>
        <p>Donut</p>
        </div>
        <div className="serve-icon-temp">
        <img src="./images/yogurt.png"></img>
        <p>Yogurt</p>
        </div>
        <div className="serve-icon-temp">
        <img src="./images/cookie.png"></img>
        <p>Cookies</p>
        </div>

      </div>

     <div className="quantity-and-cart">
      <div className="quantity-button">
        <button className="quantity" onClick={()=>decreaseQuantity()}>-</button>
        <p>{quantity}</p>
        <button className="quantity" onClick={()=>{setquantity(quantity+1)}}>+</button>
      </div>

      <button className = "add-to-cart-btn" onClick={()=>{setNotification()}}>Add to cart</button>
    </div>

    </div>

    <div className="right-col">
        <img src={props.coffeeImage}></img>
    </div>


  </section>

}

export default CoffeeDetails;
