import { useContext } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import SimpsonsContext from "../../store/simpsons/context/SimpsonsContext";
import Button from "../Button/Button";
import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  previousPage: () => void;
  nextPage: () => void;
}

const Pagination = ({
  currentPage,
  previousPage,
  nextPage,
}: PaginationProps) => {
  const { simpsons, totalSimpsons } = useContext(SimpsonsContext);
  const limitPerPage = 10;

  const currentRangeStart = currentPage * limitPerPage + 1;
  const currentRangeEnd = Math.min(
    currentRangeStart + limitPerPage - 1,
    totalSimpsons,
  );

  const lastPage = Math.floor(totalSimpsons / limitPerPage);
  const isLastPage = currentPage === lastPage;

  return (
    <div className="pagination">
      <Button
        className="button button--solid"
        actionOnClick={previousPage}
        disabled={currentPage === 0}
      >
        <IoIosArrowDropleftCircle
          className="icon-previous"
          aria-label="Pagination previous button"
        />
      </Button>

      {simpsons.length !== 0 && (
        <span className="pagination-count">
          {currentRangeStart} - {currentRangeEnd} / {totalSimpsons}
        </span>
      )}

      <Button
        className="button button--solid"
        actionOnClick={nextPage}
        disabled={isLastPage}
      >
        <IoIosArrowDroprightCircle
          className="icon-next"
          aria-label="Pagination next button"
        />
      </Button>
    </div>
  );
};

export default Pagination;
