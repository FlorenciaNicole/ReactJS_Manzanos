import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const producto ={
  id: 1,
  image: "https://www.kleinfeldbridal.com/wp-content/uploads/2022/06/lazaro-strapless-sweetheart-neckline-wedding-dress-with-shimmer-tulle-34529081-899x1024.jpg",
  title: "Lazaro Dresses",
};

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  useEffect(() => {
  const getData = new Promise(resolve => {
    setTimeout(() => {
      resolve(producto);
    }, 2000);
  });
  getData.then(res => setData(res));
  },[])
  

  return (
    <div>
    <ItemDetail data={data} />
    </div>
  )
}
export default ItemDetailContainer;