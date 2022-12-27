const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  //タグで囲った内容を反映させるには、props.childrenと変更することもできる
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
