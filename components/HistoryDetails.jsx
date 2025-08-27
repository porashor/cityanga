import React from "react";
import html2pdf from 'html2pdf.js';

const HistoryDetails = ({ open, setOpen, data, name, email, datefixed }) => {
  console.log(data, name, email);
  const delivery = 60;
  const totalPrice = data.order.reduce((acc, item) => acc + item.totalPrice, 0);
  const handleDownload = () => {
    const element = document.getElementById('invoice');
    const opt = {
      margin:       0.5,
      filename:     'invoice.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };
  return (
    <div
      className={` w-full sm:pl-28 lg:pl-0 border border-slate-300 py-3 px-2 min-h-5 ${
        open ? "block" : "hidden"
      }`}>
      <div
      id="invoice"
      onClick={() => setOpen(!open)}
    >
      {/* header section  */}
      <div className="flex flex-col items-center justify-between">
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
            {data.order?.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border hidden md:block">
                  {item.size}
                </td>
                <td className="px-4 py-2 border">{item.quantity}</td>
                <td className="px-4 py-2 border">৳{item?.totalPrice}</td>
              </tr>
            ))}
            <tr className=" font-semibold">
              <td className="px-4 py-2 border " colSpan={2}>
                Total Price:
              </td>
              <td className="hidden md:block"></td>
              <td className="px-4 py-2 border">৳{totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 mx-2" onClick={handleDownload}>Download Invoice</button>
    </div>
  );
};

export default HistoryDetails;
