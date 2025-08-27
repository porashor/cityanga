import React from 'react'

const HistoryDetails = ({open, setOpen, data, name, email, datefixed}) => {
    console.log(data, name, email);
    const delivery = 60
    const totalPrice = data.order.reduce((acc, item) => acc + item.totalPrice, 0);
  return (
    <div className={` w-full sm:pl-28 lg:pl-0 border border-slate-300 py-3 px-2 min-h-5 ${open ? "block" : "hidden"}`} onClick={() => setOpen(!open)}>
        {/* header section  */}
        <div className='flex flex-col items-center justify-between'>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Status: {data.status}</div>
            <div>Delivery or Cancel Date: {datefixed}</div>
        </div>
        {/* order details section  */}
        <div>
            <table className="w-full border border-gray-300 text-center">
                    <thead className="">
                      <tr>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border hidden md:block">Size</th>
                        <th className="px-4 py-2 border">Quantity</th>
                        <th className="px-4 py-2 border">Price (৳)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.order?.map((item, index) => (
                          <tr key={index}>
                            <td className="px-4 py-2 border">{item.name}</td>
                            <td className="px-4 py-2 border hidden md:block">{item.size}</td>
                            <td className="px-4 py-2 border">{item.quantity}</td>
                            <td className="px-4 py-2 border">৳{item?.totalPrice}</td>
                          </tr>
                        ))
                      }
                      <tr className=" font-semibold">
                        <td className="px-4 py-2 border " colSpan={2} >Total Price:</td>
                        <td className='hidden md:block'></td>
                        <td className="px-4 py-2 border">৳{totalPrice}</td>
                      </tr>
                    </tbody>
                  </table>
        </div>
    </div>
  )
}

export default HistoryDetails
