import PricingHandle from "@/components/PricingHandle";
import UserDetails from "@/components/UserDetails";
import { getData } from "@/functions/FatchFunction";
import Image from "next/image";

const page = async ({ params }) => {
  const { product } = await params ?? { product: "" };
  const data = await getData(`product/${product}`);
  const { CategoryName, name, img, options, description } = data ?? {
    CategoryName: "",
    name: "",
    img: "",
    options: [],
    description: "",
  };
  return (
    
      data.name ? (<div className="dark:bg-[#152433] dark:text-white py-3 bg-[#f5f5f5]">
      <div className="my-3 dark:bg-[#192c3f] bg-[#ececec] shadow-sm w-[90%] md:w-[80%] mx-auto">
        <div className="py-2">
          Category : product{">"}
          {CategoryName}
          {">"}
          {name}
        </div>
        <div className="bg-white dark:bg-[#162839] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_3fr_2fr] gap-2">
          <div>
            {img && <Image  loading="eager" 
            alt="no img"
              height={500}
              width={500}
              src={img}
              className="object-cover aspect-square"
            />}
          </div>
          <div className="px-1 md:px-2 lg:px-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl py-5">
              {name}
            </h1>
            <div className="text-slate-500">{description}</div>
            <div className="pb-4">Brand: {"Our product"}</div>
            <hr />
            <div>
              {options.length > 0 && <PricingHandle options={options} fullProductData={data}/>}
            </div>
          </div>
          <div className="bg-[#f3f3f3] dark:bg-[#192c3f] py-5">
            <UserDetails/>
          </div>
        </div>
      </div>
    </div>) : (
      <div className="flex items-center justify-center w-full h-screen dark:bg-slate-700 dark:text-white">{data}</div>
    )
    
  );
};

export default page;
