export const getData = async (params) => {
    try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${params}`)
    const data = await res.json()
    return data
  }catch(err){
    console.log(err);
  }
};