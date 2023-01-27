import React from "react";
import axios from "axios";

async function useGetLeaders() {

  const res = await axios.get(`http://localhost:5001/leaderboard`);
  return res.data;
}

export default useGetLeaders;