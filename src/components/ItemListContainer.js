import Card from "./Card";

function ItemListContainer() {
  return (
    <div>
      <h1>{}</h1>  
      <div className="main container">
        <Card
          price={4500}
          title="Rivini"
          detail="VESTIDO DE NOVIA ENTALLADO Y CON VUELO DE ENCAJE FLORAL 3D CON MANGAS LARGAS Y HOMBROS DESCUBIERTOS" 
          img="https://www.kleinfeldbridal.com/wp-content/uploads/2022/08/rivini-3d-floral-lace-fit-and-flare-wedding-dress-with-off-the-shoulder-long-sleeves-34566703-400x580.jpeg"
        />
        <Card
          price={1500}
          title="Essence Of Australia"
          detail="VESTIDO DE NOVIA CON CORPIÑO DE ENCAJE Y TIRANTES FINOS"
          img="https://www.kleinfeldbridal.com/wp-content/uploads/2022/07/essense-of-australia-a-line-wedding-dress-with-lace-bodice-and-spaghetti-straps-34563130-400x580.jpg"
        />
        <Card
          price={6300}
          title="Love by Pnina Tornai"
          detail="VESTIDO DE NOVIA TUBO CON MANGAS FAROL Y ESCOTE EN V PRONUNCIADO POR TODO EL ENCAJE"
          img="https://www.kleinfeldbridal.com/wp-content/uploads/2021/08/love-by-pnina-tornai-all-over-lace-long-puff-sleeve-sheath-wedding-dress-with-plunging-v-neckline-50000000-400x580.jpg"
        />
        <Card
          price={650}
          title="Velo Diamond"
          detail="VELO DE NOVIA BLANCO CON DIAMANTES"
          img="https://images.squarespace-cdn.com/content/v1/5ce30f0eadda8000016a71df/1638542226995-2LSF6GN50GTCE5WJNXT3/image-asset.jpeg?format=500w"
        />
        <Card
          price={1000}
          title="Velo Bordado"
          detail="VELO DE NOVIA BORDADO"
          img="https://images.squarespace-cdn.com/content/v1/5ce30f0eadda8000016a71df/1642641407841-9KLBX4WA12MTI7G6STWG/image-asset.jpeg?format=500w"
        />
      </div>
    </div> 
  );
}
/* 
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
  } */

export default ItemListContainer;
