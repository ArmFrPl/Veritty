import React from "react";
import axios from "axios";

async function useGetLeaders() {

  const res = await axios.get(`https://veritty-backend.herokuapp.com/leaderboard`);
  return res.data;
}

export default useGetLeaders;