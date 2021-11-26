import { Fragment } from "react";
import "./Style.css";
import CardLocation from '../component/CardLocation'
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from "react";


export default function Profile() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios({
      method: "get",
      url: "https://mhw-db.com/locations",
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
      <p id="judulprofil">Locations</p>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardLocation
            id={item.id}
            name={item.name}
            zoneCount={item.zoneCount}
            //onClick={() => alert("item id = " + item.id)}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}