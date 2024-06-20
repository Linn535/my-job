import { ProductItem } from "./ProductItem";


export function Products({products, addOrders}){


    return <div className=" grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {
            products.map(el=> <ProductItem item={el} addOrders={addOrders} key={el.id} />)
        }
    </div>
}