import React, { useState, useEffect } from "react";
import { getFeedListing } from "../../services/rss";

//Import base url for server requests
import api from "../../services/api";

export default function DynamicPostsSide() {
  

  const [data,setData] = useState([]);



  useEffect(() => {
    const url = "https://www.abcbourse.com/rss/displaynewsrss";
    const getListings = async (url) => {
        try {
          const response = await getFeedListing(url);
          response.data.items.forEach((item, index) => {
            setData(data => [...data, item])
          });
        } catch (ex) {
          console.log(ex);
        }
      };
    getListings(url);
  }, []);

  const loadedPosts = data.map((item, index) => {
  return <h1>{item.title}</h1>;
  });

  return (loadedPosts);
}
