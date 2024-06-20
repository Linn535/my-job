import { useState } from "react";

export function ProductItem({item, addOrders}){

    const [isDetailShow, setDetailShow] = useState(false);




    return <div className=" shadow-md p-4">
            <img src={item.image} alt={item.title} className=" h-96 mx-auto" /> 
            <div className=" font-bold">{item.title}</div>
            <div className=" italic text-center uppercase">{item.category}</div>
            <div>{
                item.description.length > 200 ? <span>{item.description.slice(0, 200)}   <button onClick={()=> setDetailShow(true)}>......</button> </span> : <span>{item.description}</span>
            }</div>
            <button className=" text-green-600 font-bold" onClick={()=> addOrders(item)}>{item.price} $</button>

       

            {
                isDetailShow && <div className=" fixed top-0 right-0 bg-black/70 w-full h-[100vh] text-white flex justify-center items-center">
                    <img src={item.image} />
                    <div>
                        <div>{item.title}</div>
                        <div>{item.category}</div>
                        <div>{item.description}</div>
                        <div>{item.price.toFixed(2)}</div>
                    </div>
                    <button onClick={()=> setDetailShow(false)}>X</button>
                </div>
            }

        </div>
}