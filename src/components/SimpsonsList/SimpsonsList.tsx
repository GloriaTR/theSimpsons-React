import { useContext } from "react";
import SimpsonsContext from "../../store/simpsons/context/SimpsonsContext";
import SimpsonCard from "../SimpsonCard/SimpsonCard";
import "./SimpsonsList.css";

const SimpsonsList = (): React.ReactElement => {
  const { simpsons } = useContext(SimpsonsContext);

  return (
    <ul className="simpsons-list">
      {simpsons.map((simpson) => (
        <li key={simpson.id}>
          <SimpsonCard simpson={simpson} />
        </li>
      ))}
    </ul>
  );
};

export default SimpsonsList;
