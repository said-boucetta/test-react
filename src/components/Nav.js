//import "./Nav.css";
import ListeItem from "./ListeItem";

const Nav = () => {
  const border = "solid 2px black";
  const p = <p>hello</p>;
  const message = () => "function executed";
  const edit = true;
  const liste = ["Item1", "Item2", "Item3"];
  return (
    <nav style={{ color: "red", borderRight: border, width: "50%" }}>
      <ul>
        {liste.map((x) => (
          <ListeItem data={x} />
        ))}
      </ul>
      {/*edit ? <p>lorem</p> : <button>Save</button>*/}
      {edit && <p>lorem</p>}
      {message()}
    </nav>
  );
};

export default Nav;
