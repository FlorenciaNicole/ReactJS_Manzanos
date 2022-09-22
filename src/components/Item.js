const Item = ({info}) => {
  return (
    <a href='' calssName="producto">
    <img src={info.image} alt="" />
    <p>{info.title}</p>

    </a>
  );
}

export default Item;