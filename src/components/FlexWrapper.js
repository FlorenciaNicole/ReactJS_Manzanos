import "./FlexWrapper.css";

function FlexWrapper(props) {

  let classnames = `flexWrapper ${props.columns ? "fxRow" : "fxCol"}`;
  return <div className={classnames}>{props.children}</div>;
}

export default FlexWrapper;