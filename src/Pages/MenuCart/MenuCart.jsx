import React from "react";
import {useSelector} from 'react-redux'
import "./MenuCart.css"
import { keyLocalStorage } from "../../App";
import { Link } from "react-router-dom";

export default function MenuCart({styleMenuCart,setStyleMenuCart}) {
    const listItems = useSelector(state => state.product.listItems);
    function CloseMenuCart() {
      setStyleMenuCart(preStyleMenuCart => {
          const styleMenuCart = {...preStyleMenuCart, right: "-400px"}
          return styleMenuCart
      })
  }
    // function RemoveItem(e) {
    //     let item = getItem(e.target)
    //     setListItems(preListItems => {
    //         let listItems = [...preListItems]
    //         // find index element from array when click remove by id
    //         const idx = listItems.findIndex(([key,value]) => {
    //             return key.id == item.getAttribute("id")
    //         })
    //         listItems.splice(idx,1) 
    //         localStorage.setItem(keyLocalStorage,JSON.stringify(listItems)) // add item to storage
    //         return listItems
    //     })
    // }
    // function IncreaseItem(e) {
    //     let item = getItem(e.target)
    //     setListItems(preListItems => {
    //         let listItems = [...preListItems]
    //         // find index element from array when click increase by id
    //         const idx = listItems.findIndex(([key,value]) => {
    //             return key.id == item.getAttribute("id")
    //         })
    //         listItems[idx][1] ++;
    //         localStorage.setItem(keyLocalStorage,JSON.stringify(listItems)) // add item to storage
    //         return listItems
    //     })
    // }
    // function DecreaseItem(e) {
    //     let item = getItem(e.target)
    //     setListItems(preListItems => {
    //         let listItems = [...preListItems]
    //         // find index element from array when click increase by id
    //         const idx = listItems.findIndex(([key,value]) => {
    //             return key.id == item.getAttribute("id")
    //         })
    //         listItems[idx][1] --;
    //         localStorage.setItem(keyLocalStorage,JSON.stringify(listItems)) // add item to storage
    //         return listItems
    //     })
    // }
    console.log(listItems)
      return (
        <React.Fragment>
            <div className="background-wrap-menu-cart" style={{width: window.innerWidth, height: window.innerWidth,
            display: `${(styleMenuCart.right == "-400px")?("none"):("block")}`}} onClick = {CloseMenuCart}>
            </div>
            <div className="menu-cart-wrap" style={{right: styleMenuCart.right, height: "100%"}}>
                <div className="menu-cart">
                    <div className="menu-cart__header">
                        <div className="menu-cart__header-title">
                            Cart:  Items 
                        </div>
                        <div className="menu-cart__header-close" onClick={CloseMenuCart}>
                        <i className ="fa-solid fa-xmark btnclose"></i>
                        </div>
                    </div>
                    <div className = "menu-cart__body">
                    {
                        (
                        listItems.length > 0 && 
                        listItems.map((items) => {
                            return (
                                <div className="menu-cart-item">
                                    <div className="product-quantity">
                                        <button className ="quantity-btn quantity-btn--active" >
                                            <i className ="fa-solid fa-plus"></i>
                                        </button>
                                        <span>{0}</span>
                                        {
                                            // (    
                                            //     value == 1 && 
                                            //     <button className = "quantity-btn">
                                            //         <i className ="fa-solid fa-minus"></i>
                                            //     </button>
                                            // )
                                            // ||
                                            (
                                                <button className ="quantity-btn quantity-btn--active" >
                                                    <i className ="fa-solid fa-minus"></i>
                                                </button>
                                            )
                                        }
                                    </div>
                                    <div className="product-info">
                                        <div className="product-img" style={{backgroundImage: `url(https://petsla-api.herokuapp.com${items.images})`}}></div>
                                        <div className="product-description">
                                            <div className = "product-name"> {items.product_name}</div>
                                            <div className = "product-price"> {items.price.toLocaleString('vi')}đ x {0}</div>
                                            <div className = "product-total-price">{(items.price).toLocaleString('vi')}đ</div>
                                        </div>
                                    </div>
                                    <div className="product-button-close" >
                                        <i className ="fa-solid fa-xmark btnclose"></i>
                                    </div>
                                </div>
                            )
                        }) 
                        )
                        || 
                        (
                            <div className="no-products">
                                <img className="no-products-img" src = "https://www.leoasher.dev/static/media/sadCat.2335333f.png" />
                                <h3 className="no-products-title"> There's no item in cart! </h3>
                            </div>
                        )
                    }
                    </div>
                    <div className="menu-cart__footer">
                        <button type = "button" className="menu-cart-btn btn-primary">Checkout ()</button>
                        <button type = "button" className="menu-cart-btn btn-view-cart">View Cart</button>
                    </div>
                </div> 
            </div>
        </React.Fragment>
        )
}
