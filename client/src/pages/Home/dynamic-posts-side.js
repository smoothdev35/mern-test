import React, { useState, useEffect } from "react";
import { getFeedListing } from "../../services/rss";

//Import base url for server requests
import api from "../../services/api";

export default function DynamicPostsSide() {
  

  const [data,setData] = useState([]);
  const url = "https://www.abcbourse.com/rss/displaynewsrss";


  useEffect(() => {
    
    const getListings = async (url) => {
        try {
          const response = await getFeedListing(url);
          response.data.items.forEach((item, index) => {
            setData(data => [...data, item])
          });
          console.log(response.data.items);
        } catch (ex) {
          console.log(ex);
        }
      };

    getListings(url);
  }, []);

  const loadedPosts = data.map((item, index) => {
  return <article key={index} className='sidefeed-item'>
  <a href={item.link}>{item.title}</a>
  </article>;
  });

  return (loadedPosts);
}
