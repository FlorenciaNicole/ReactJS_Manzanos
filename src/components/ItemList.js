import Item from "./Item";

function ItemList({data = []}) {
  return (
    data.map(productos => <Item key={productos.id} info={productos} />)
  );
}

export default ItemList;
