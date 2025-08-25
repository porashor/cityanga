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
  console.log(name, email, price, product);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${email}`);
    const datam = await res.json();
    if (datam?.email == email) {
      const otherProduct = datam.product.filter(
        (item) => item.id != product.id
      );
      const mainProduct = [...otherProduct, product];
      const mainPrice = datam.price + price;
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/cart/${email}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ price: mainPrice, product: mainProduct }),
          }
        );
        const datam1 = await res.json();
        if (datam1) {
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
        console.log("cart not updated");
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
        if (datam2) {
          window.location.reload();
        }
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

export const cartItemdelete = async (email, productId) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${email}`);
    const result = await res.json();
    console.log("result", result);
    if (result?.email == email) {
      const filterResult = result.product.filter(
        (item) => item.id != productId
      );
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/cart/${email}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              price: result.price,
              product: filterResult,
            }),
          }
        );
        const datam1 = await res.json();
        if (datam1) {
          window.location.reload();
        }
        console.log("data", datam1);
      } catch (err) {
        console.log(err);
        console.log("cart not updated");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const clearCart = async (email) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cart/${email}`,
      {
        method: "DELETE",
      }
    );
    const datam1 = await res.json();
    if (datam1) {
      window.location.reload();
    }
    console.log("data", datam1);
  } catch (err) {
    console.log(err);
    console.log("cart not updated");
  }
};

export const getCartData = async (email) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${email}`);
    const datam1 = await res.json();
    return datam1;
  } catch (err) {
    console.log(err);
    console.log("cart data not get");
  }
};

export const orderNow = async (data, location) => {
  const { name, email, price, product } = data ?? {
    name: "",
    email: "",
    price: 0,
    product: [],
  };
  const sendData = {
    name,
    email,
    location,
    delivery: 60,
    price,
    product,
  };
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });
    const datam1 = await res.json();
    if (datam1) {
      window.location.reload();
    }
    console.log("data", datam1);
  } catch (err) {
    console.log(err);
    console.log("not ordered");
  }
};

export const getOrderData = async (email) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/order/${email}`
    );
    const datam1 = await res.json();
    return datam1;
  } catch (err) {
    console.log(err);
    console.log("order data not get");
  }
};

export const cencelOrder = async (name, email, status, after) => {
  const afterData = {
    name,
    email,
    status,
    after,
  };

  try {
    const res1 = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/after/${email}`,
    )
    const result1 = await res1.json();
    if (result1) {
      const buildData1 = {
        status: afterData.status,
        date: new Date(),
        order: afterData.after,
      }
      const updatedObject = [...result1.after, buildData1]
      try {
        const res2 = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/after/${email}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({after: updatedObject}),
          }
        )
        const result2 = await res2.json();
        if(result2){
          const res4 = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/order/${email}`,
      {
        method: "DELETE",
      }
    );
    const result4 = await res4.json();
    if(result4){
      window.location.href = "/";
    }
        }
      } catch (error) {
        console.log("after data not updated");
      }
    }else{
      const buildData = {
        status: afterData.status,
        date: new Date(),
        order: afterData.after,
      }
      const pushData = {
        name: afterData.name,
        email: afterData.email,
        after: [buildData]
      }
      try {
        const res3 = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/after`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(pushData),
          }
        )
        const result3 = await res3.json();
        if(result3){
          const res5 = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/order/${email}`,
      {
        method: "DELETE",
      }
    );
    const result5 = await res5.json();
    if(result4){
      window.location.href = "/";
    }
        }
      } catch (error) {
        console.log(error)
      }
      //post
    }
  } catch (error) {
    console.log("after data not get", error);
  }
  
};


