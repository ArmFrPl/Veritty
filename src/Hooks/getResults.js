import React from "react";
import axios from "axios";

async function useGetResults() {

  const res = await axios.get(`http://localhost:5001/sums`);
  return res.data;
}

export default useGetResults;