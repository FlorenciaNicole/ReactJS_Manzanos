import React, { useState, useEffect } from "react";
import { getSingleItem } from "../Service/mockAPI";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
  let [data, setData] = useState({});


  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((respuestaDatos) => setData(respuestaDatos));
  }, [id]);

  return (
    <div>
      <div className="mainContainer">
        <ItemDetail course={data} />
        <ItemDetail item={data} />
      </div>
    </div>
  );}

export default ItemDetailContainer;