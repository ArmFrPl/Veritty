import React from "react";
import axios from "axios";

async function useGetResults() {

  const res = await axios.get(`https://veritty-backend.herokuapp.com/sums`);
  return res.data;
}

export default useGetResults;