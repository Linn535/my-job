import { useState, useEffect } from "react";
import { Products } from "./Products";
import { OrderList } from "./OrderList";


export function App(){

    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [isShowBasket, setShowBasket] = useState(false);


    const addOrders = (product)=>{
        const index = orders.findIndex(el => el.id === product.id); // -1
        
        if(index === -1){

            const order = {
                ...product,
                quantity: 1
            }
            setOrders([...orders, order])

        }else{

            const newOrders = orders.map(el=>{
                if(el.id === product.id) el.quantity = el.quantity+1;                  
                return el
            })

            setOrders(newOrders);
        }
    }   


    const removeOrder = (id)=>{ // id = 3
        const newOrders = orders.filter(el=> el.id !== id);
        setOrders(newOrders);
    }

    
    const plusOrder = (id)=>{
        const newOrders = orders.map(el=>{
            if(el.id === id) el.quantity = el.quantity+1;
            return el;
        })
        setOrders(newOrders);
    }

    const minusOrder = (id)=>{
        const newOrders = orders.map(el=>{
            if(el.id === id) el.quantity = el.quantity>1 ? el.quantity-1 : 1;
            return el;
        })
        setOrders(newOrders);
    }




    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                setProducts(json);
            })
    }, []);

    return <div className=" container mx-auto">
        <i className="fa-solid fa-basket-shopping fixed top-4 right-4 text-[36px] cursor-pointer" onClick={()=> setShowBasket(!isShowBasket)}></i>
        <Products  products={products} addOrders={addOrders} />
        {
          isShowBasket &&  <OrderList orders={orders} plusOrder={plusOrder} minusOrder={minusOrder} removeOrder={removeOrder} />
        }
    </div>
}





