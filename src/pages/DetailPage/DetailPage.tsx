import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SimpsonsContext from "../../store/simpsons/context/SimpsonsContext";
import "./DetailPage.css";

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
      <div className="detail__image">
        <img
          src={selectedSimpson?.image}
          alt={`Close-up of ${selectedSimpson.name}`}
        />
      </div>
      <div className="detail-description">
        <div>
          <span className="detail-description__background">Description:</span>
          <span> {selectedSimpson.background}</span>
        </div>
        <div>
          <span className="detail-description__gender">Gender:</span>
          <span> {selectedSimpson.gender}</span>
        </div>
        <div>
          <span className="detail-description__occupation">Occupation:</span>
          <span> {selectedSimpson.occupation}</span>
        </div>
        <div>
          <span className="detail-description__status">Status:</span>
          <span> {selectedSimpson.status}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
