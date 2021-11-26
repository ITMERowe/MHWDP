import { Fragment } from "react";
import "./Style.css";
import CardAS from '../component/CardAS'
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from "react";


export default function Profile() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios({
      method: "get",
      url: "https://mhw-db.com/armor/sets",
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        setData(data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <p id="judulprofil">Armor Sets</p>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardAS
            id={item.id}
            name={item.name}
            rank={item.rank}
            //onClick={() => alert("item id = " + item.id)}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}