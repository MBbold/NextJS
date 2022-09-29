import axios from "axios";
import { useEffect, useState } from "react";

const [isLoading, setIsLoading] = useState();
const [blogData, setBlogData] = useState();

useEffect(() => {
  const getDummyData = async () => {

    setIsLoading(true);
    try {
      const result = await axios.get("https://dummyapi.io/data/v1/post", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // use your own app-id of dummy api
          "app-id": "63350ae2b3ea36a85acba45f",
        },
      });
      console.log("result.data.data", result.data.data);
      setBlogData(result.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  getDummyData();
}, []);
