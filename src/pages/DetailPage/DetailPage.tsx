import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SimpsonsContext from "../../store/simpsons/context/SimpsonsContext";

const DetailPage = (): React.ReactElement => {
  const { id } = useParams();

  const { selectedSimpson, loadSelectedSimpson } = useContext(SimpsonsContext);

  useEffect(() => {
    if (id) {
      loadSelectedSimpson(id);
    }
  }, [loadSelectedSimpson, id]);

  return (
    <div className="detail">
      <h2 className="detail__name">{selectedSimpson.name}</h2>
      <img
        src={selectedSimpson?.image}
        alt={`Close-up of ${selectedSimpson.name}`}
        className="detail__image"
      />
      <div className="detail-description">
        <span className="detail-description__background">
          Description: {selectedSimpson.background}
        </span>
        <span className="detail-description__gender">
          Gender: {selectedSimpson.gender}
        </span>
        <span className="detail-description__occupation">
          Occupation: {selectedSimpson.occupation}
        </span>
        <span className="detail-description__status">
          Status: {selectedSimpson.status}
        </span>
      </div>
    </div>
  );
};

export default DetailPage;
