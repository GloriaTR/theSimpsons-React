import { useContext } from "react";
import SimpsonsContext from "../../store/simpsons/context/SimpsonsContext";
import "./SimpsonsList.css";

const SimpsonsList = (): React.ReactElement => {
  const { simpsons } = useContext(SimpsonsContext);

  return (
    <ul className="simpsons-list">
      {simpsons.map((simpson) => (
        <li key={simpson.id}></li>
      ))}
    </ul>
  );
};

export default SimpsonsList;
