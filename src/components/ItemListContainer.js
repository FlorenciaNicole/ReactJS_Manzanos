import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


const productos = [
  {id: 1, image: "https://www.kleinfeldbridal.com/wp-content/uploads/2022/08/rivini-3d-floral-lace-fit-and-flare-wedding-dress-with-off-the-shoulder-long-sleeves-34566703-400x580.jpeg", title: "Rivini", category:"Vestidos"},
  {id: 2, image: "https://www.kleinfeldbridal.com/wp-content/uploads/2019/10/pnina-tornai-a-line-long-sleeve-floral-lace-wedding-dress-with-plunging-v-neckline-8000024-400x580.jpg", title: "Pnina Tornai", category:"Vestidos"},
  {id: 3, image: "https://www.kleinfeldbridal.com/wp-content/uploads/2022/07/essense-of-australia-a-line-wedding-dress-with-v-neckline-and-bow-detail-34563148-400x580.jpg", title: "Essence of Australia", category:"Vestidos"},
  {id: 4, image: "https://www.kleinfeldbridal.com/wp-content/uploads/2019/10/Headpiece-101-SM.png", title:"Headpiece", category:"Accesorios"},
  {}
];

export const ItemListContainer = ({texto}) => {

  const [data, setData] = useState ([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
      resolve (productos);
    }, 2000);
  });
    if (categoriaId) {
      getData.then(res => setData(res.filter(productos => productos.category === categoriaId)));
    } else {
      getData.then(res => setData(res));
    }

    getData.then(res => setData(res));
  }, [categoriaId])
  

  const onAdd = (quantity) => {
    console.log(`Compraste $(quantity) unidades`);
  }
  return (
    <>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
    <ItemList data={data} />
    </>
  );
  }

export default ItemListContainer;
