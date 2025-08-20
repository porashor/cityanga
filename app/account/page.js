"use client";
import { jwtDecode } from "jwt-decode";
import React, { useState, useEffect } from "react";

const page = () => {
  const [accountdata, setAccountData] = useState({});
  useEffect(() => {
    const data = localStorage.getItem("token");
    const structuredData = jwtDecode(data);
    if (data) {
      setAccountData(structuredData);
    }
  }, []);
  console.log(accountdata);
  return Object.keys(accountdata).length > 0 ? <div>
    <h1>name: {accountdata.name}</h1>
  </div> : "loading...";
};

export default page;
