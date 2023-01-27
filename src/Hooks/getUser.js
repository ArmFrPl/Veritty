import React from "react";
import axios from "axios";

async function useGetDashboard(address) {

  const res = await axios.get(`http://localhost:5001/users/${address}`);
  return res.data;
}

export default useGetDashboard;