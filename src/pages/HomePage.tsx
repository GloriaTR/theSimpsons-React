import { useContext, useEffect } from "react";
import SimpsonsContext from "../store/simpsons/context/SimpsonsContext";
import Header from "../components/Header/Header";
import SimpsonsList from "../components/SimpsonsList/SimpsonsList";

const HomePage = (): React.ReactElement => {
  const { loadSimpsons } = useContext(SimpsonsContext);

  useEffect(() => {
    loadSimpsons();
  }, [loadSimpsons]);

  return (
    <>
      <Header />
      <SimpsonsList />
    </>
  );
};

export default HomePage;
