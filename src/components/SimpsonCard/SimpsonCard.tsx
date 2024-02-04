import { NavLink } from "react-router-dom";
import { SimpsonStructure } from "../../types";
import "./SimpsonCard.css";

interface SimpsonCardProps {
  simpson: SimpsonStructure;
}

const SimpsonCard = ({
  simpson: { id, name, image },
}: SimpsonCardProps): React.ReactElement => {
  return (
    <NavLink to={`/${id}`}>
      <article className="simpson-character">
        <h3 className="simpson-character__name">{name}</h3>
        <img
          src={image}
          alt={`Full body of ${name}`}
          className="simpson-character__image"
        />
      </article>
    </NavLink>
  );
};

export default SimpsonCard;
