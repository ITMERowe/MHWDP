import { Fragment } from "react";
import "./Style.css";
import CardWeapon from '../component/CardWeapon'
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from "react";


export default function Profile() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios({
      method: "get",
      url: "https://mhw-db.com/weapons",
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
      <p id="judulprofil">Weapons</p>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardWeapon
            id={item.id}
            name={item.name}
            type={item.type}
            rarity={item.rarity}
            damageType={item.damageType}
            //onClick={() => alert("item id = " + item.id)}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}