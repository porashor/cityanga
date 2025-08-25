import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { cartItemdelete, clearCart } from '@/functions/FatchFunction';



const CartTable = ({ cartData }) => {
    const { product, price, email, delivery } = cartData ?? { product: [], totalPrice: 0, email: "", delivery: 0 };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-center">
        <thead className="">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Size</th>
            <th className="px-4 py-2 border">Quantity</th>
            <th className="px-4 py-2 border">Price (৳)</th>
            {delivery > 0 ? "" : <th className="px-4 py-2 border">Delete</th>}
          </tr>
        </thead>
        <tbody>
          {
            product?.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.size}</td>
                <td className="px-4 py-2 border">{item.quantity}</td>
                <td className="px-4 py-2 border">৳{item?.totalPrice}</td>
                {delivery > 0 ? "" : <td className="px-4 py-2 flex items-center justify-center"><BiTrash onClick={()=>cartItemdelete(email, item.id)} className='cursor pointer hover:text-red-600'/></td>}
              </tr>
            ))
          }
          <tr className=" font-semibold">
            <td className="px-4 py-2 border" colSpan={3}>Total Price{delivery > 0 ? `(price + delivery: ${delivery})` : ""}:</td>
            <td className="px-4 py-2 border">৳{delivery > 0 ? price+delivery : price}</td>
            {delivery > 0 ? "" : <td className="px-4 py-2 border"><button onClick={()=>clearCart(email)} className='hover:text-red-600'>Delete All</button></td>}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
