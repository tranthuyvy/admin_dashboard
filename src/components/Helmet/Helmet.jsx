const Helmet = (props) => {
  document.title = "Highland Coffee | " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
