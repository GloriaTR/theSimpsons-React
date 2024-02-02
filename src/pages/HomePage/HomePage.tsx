import { useContext, useEffect, useState } from "react";
import SimpsonsContext from "../../store/simpsons/context/SimpsonsContext";
import Header from "../../components/Header/Header";
import SimpsonsList from "../../components/SimpsonsList/SimpsonsList";
import Pagination from "../../components/Pagination/Pagination";

const HomePage = (): React.ReactElement => {
  const { loadSimpsons } = useContext(SimpsonsContext);
  const limitPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    loadSimpsons({ skip, limit: limitPerPage });
  }, [loadSimpsons, skip, limitPerPage]);

  const nextPage = () => {
    const newSkip = skip + limitPerPage;
    setSkip(newSkip);
    setCurrentPage(Math.floor(newSkip / limitPerPage));
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    const newSkip = Math.max(0, skip - limitPerPage);
    setSkip(newSkip);
    setCurrentPage(Math.floor(newSkip / limitPerPage));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <SimpsonsList />
      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </>
  );
};

export default HomePage;
