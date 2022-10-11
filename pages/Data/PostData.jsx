import axios from "axios";
import { useEffect, useState } from "react";

export const PostData = () => {
  // const [isLoading, setIsLoading] = useState();
  // const [blogData, setBlogData] = useState();
  console.log("================================");
  useEffect(() => {
    axios
    .get("http://localhost:8000/users", {
      headers: { "Access-Control-Allow-Origin": "*" },
      // responseType: "json",
    })
    .then((response) => {
      console.log(response)
    });
  }, []);
};
