import React from "react";
import axios from "axios";

async function useGetDashboard(address) {

  const res = await axios.get(`https://veritty-backend.herokuapp.com/users/${address}`);
  return res.data;
}

export default useGetDashboard;