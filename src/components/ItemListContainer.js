import ItemCount from "./ItemCount";

function ItemListContainer(props) {
  const onAdd = (quntity) => {
    console.log(`Compraste $(quantity) unidades`);
  }
  return (
    <>
    <h1>{props.greeting}</h1>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
  );
}

export default ItemListContainer;
