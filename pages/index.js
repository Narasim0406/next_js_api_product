
import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
import axios from "axios";

export default function Home() {
  const url = "https://dummyjson.com/products";

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProductList(response.data);
        console.log(respose);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(productList);
  return (
    <div className={styles.container}>

<h1>Product List</h1>
      <table>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Thumbnile</th>
        </tr>
        {productList?.products?.map((data, index) => {
          return (
            <tr key={"product_" + index}>
              <td>{data.title}</td>
              <td>{data.price}</td>
              <td>
                <img width="64" src={data.thumbnail} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  )
}
