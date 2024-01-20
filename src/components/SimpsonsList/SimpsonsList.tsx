import { useContext } from "react";
import SimpsonsContext from "../../store/simpsons/context/SimpsonsContext";

const SimpsonsList = (): React.ReactElement => {
  const { simpsons } = useContext(SimpsonsContext);

  return (
    <ul className="simpsons-list">
      {simpsons.map((simpson) => (
        <li key={simpson.id}>
          <h3>{simpson.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default SimpsonsList;
