import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = ({cart, setCart}) => {
  const incqty = (product) =>
  {
    const exist = cart.find((x)=>
  {
    return x.id === product.id 
  })
  setCart(cart.map((curElm)=> 
  {
    return curElm.id === product.id ? {...exist, qty: exist.qty + 1} : curElm
  }))
  }
  const decqty = (product) =>
  {
    const exist = cart.find((x)=>
  {
    return x.id === product.id 
  })
  setCart(cart.map((curElm)=> 
  {
    return curElm.id === product.id ? {...exist, qty: exist.qty - 1} : curElm
  }))
  }

  const removeproduct =(product) =>
  {
    const exist = cart.find((x) =>
    {
      return x.id === product.id
    })
    if(exist.qty> 0)
    {
      setCart(cart.filter((curElm)=>
      {
        return curElm.id !== product.id 
      }))
    }
  }
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <>
    <div className="cart">
      <h3>#cart</h3>
      {
        cart.length === 0 && 
        <>
        <div className="empty_cart">
          <h2> your shopping Cart is Empty</h2>
          <Link to="/shop"><button>Buy now</button></Link>
        </div>
        </>
      }
      <div className="container">
        {
          cart.map((curElm)=>
        {
          return(
            <>
            <div className="box">
              <div className="img_box">
                <img src={curElm.img} alt=""></img>
              </div>
              <div className="detail">
                <div className="info">
                <h4>{curElm.cat}</h4>
                <h3>{curElm.Name}</h3>
                <p>Price: ${curElm.price}</p>
                <p>Total:${curElm.price * curElm.qty}</p>
                </div>
                <div className="quantity">
                  <button onClick={()=>incqty(curElm)}>+</button>
                  <input type="number" value={curElm.qty}></input>
                  <button onClick={()=> decqty(curElm)}>-</button>
                </div>
                <div className="icon">
                  <li onClick={()=> removeproduct(curElm)}><RiDeleteBin6Line/></li>
                </div>
              </div>
            </div>
            </>
          )
        })
        }
      </div>
      <div className="bottom">
        {
          cart.length > 0 &&
          <>
          <div className="Total">
            <h4>Total: ${total}</h4>
          </div>
          <button>checkout</button>
          </>
        }
      </div>
    </div>
    </>
  );
};

export default Cart;