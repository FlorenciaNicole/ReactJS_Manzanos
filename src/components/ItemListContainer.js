import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


const productos = [
  {id: 1, image: "https://www.kleinfeldbridal.com/wp-content/uploads/2022/08/rivini-3d-floral-lace-fit-and-flare-wedding-dress-with-off-the-shoulder-long-sleeves-34566703-400x580.jpeg", title: "Rivini"},
  {id: 2, image: "https://www.kleinfeldbridal.com/wp-content/uploads/2019/10/pnina-tornai-a-line-long-sleeve-floral-lace-wedding-dress-with-plunging-v-neckline-8000024-400x580.jpg", title: "Pnina Tornai"},
  {id: 3, image: "https://www.kleinfeldbridal.com/wp-content/uploads/2022/07/essense-of-australia-a-line-wedding-dress-with-v-neckline-and-bow-detail-34563148-400x580.jpg", title: "Essence of Australia"},
];

export const ItemListContainer = ({texto}) => {

  const [data, setData] = useState ([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
      resolve (productos);
    }, 2000);
  });
    getData.then(res => setData(res));
  }, [])
  

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
