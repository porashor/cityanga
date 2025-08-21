import { data } from "autoprefixer";

export const getData = async (params) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${params}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const userInitialState = {
  name: "",
  email: "",
  location: "",
  password: "",
};

export function userReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export const handleFunction = (e, dispatch) => {
  dispatch({
    type: "SET_FIELD",
    field: e.target.name,
    value: e.target.value,
  });
};

export const createUser = async (e, formData) => {
  e.preventDefault();
  try {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const newUser = await user.json();
    console.log(newUser);
    alert("user cerated");
  } catch {
    console.log("user not cerated");
    alert("user not cerated");
  }
};

export const logUser = async (e, formData, router) => {
  e.preventDefault();
  try {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/loguser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });
    const newUser = await user.json();
    localStorage.setItem("token", newUser.token);
    console.log(newUser);
    alert("user loged in");
  } catch {
    alert("user not loged in");
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

export const cartInitState = [];

export const cartReducer = (state, action) => {
  //
};

export const LocationChange = async (data, email) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location: data }),
      }
    );
    const datam = await res.json();
    console.log(datam);
  } catch (err) {
    console.log(err);
    console.log("location not changed");
  }
};

export const cartFunction = async (name, email, price, product) => {
  console.log(name, email, price, product)
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${email}`);
    const datam = await res.json();
    console.log(datam)
    if (datam?.email == email) {
      const mainProduct = [...datam.product, product];
      const mainPrice = datam.price + price;
      try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${email}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ price: mainPrice, product : mainProduct }),
        })
        const datam1 = await res.json();
        console.log(datam1)
      }catch(err){
        console.log(err)
        console.log("cart not updated")
      }
    } else {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, price, product }),
        });
        const datam2 = await res.json();
        console.log(datam2);
      } catch (err) {
        console.log(err);
        console.log("cart not set");
      }
    }
  } catch (err) {
    console.log(err);
    console.log("has problem");
  }
};
