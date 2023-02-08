import "./styles.css";
const Parent = ({ hiParent, propLoad }) => {
  return (
    <button
      className={`btn ${propLoad ? `isloading` : null}`}
      onClick={(e) => hiParent(e, "hiii")}
    >
      Parent child
    </button>
  );
};

export default Parent;
