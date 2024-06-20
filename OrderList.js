

export function OrderList ({orders, minusOrder, plusOrder, removeOrder}){

    const total = orders.reduce((sum, el)=> sum + el.price*el.quantity, 0);

    return <div className="OrderList fixed top-16 right-0 bg-gray-200 w-[700px]">
        {
            orders.map(el=> <div className=" bg-pink-100 m-4" key={el.id}>
                <span>{el.title}</span>
                <button onClick={()=> minusOrder(el.id)}> - </button>
                <span> {el.quantity} </span>
                <button onClick={()=> plusOrder(el.id)}> + </button>
                <span> = </span>
                <span> {el.price * el.quantity}$ </span>
                <button onClick={()=>removeOrder(el.id)}> x </button>
            </div>)
        }
         <div>Total {total.toFixed(2)}</div>
    </div>
}