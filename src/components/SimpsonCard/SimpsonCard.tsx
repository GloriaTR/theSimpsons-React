import { SimpsonStructure } from "../../types";
import "./SimpsonCard.css";

interface SimpsonCardProps {
  simpson: SimpsonStructure;
}

const SimpsonCard = ({
  simpson: { name, image },
}: SimpsonCardProps): React.ReactElement => {
  return (
    <article className="simpson-character">
      <h2 className="simpson-character__name">{name}</h2>
      <img
        src={image}
        alt={`Full body of ${name}`}
        className="simpson-character__image"
      />
    </article>
  );
};

export default SimpsonCard;
