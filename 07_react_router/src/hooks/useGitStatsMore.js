import { useEffect, useState } from "react";
import axios from "axios";

function useGitStatsMore(username,delay=500) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!username) return;

    const timer = setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => setData(res.data));
    },delay);

    return ()=>clearTimeout(timer)
  }, [username,delay]);
  return data;
}

export default useGitStatsMore;
