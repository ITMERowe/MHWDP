import { Fragment } from "react";
import "./Style.css";
import CardMonster from '../component/CardMonster'
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios({
      method: "get",
      url: "https://mhw-db.com/monsters",
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
      <p id="judulprofil">Monsters</p>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <div>
          <CardMonster 
            id={item.id}
            name={item.name}
            type={item.type}
            species={item.species}
            descriptions={item.description}
            onClick={() => alert("item id = " + item.id)}
          />
          </div>
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}