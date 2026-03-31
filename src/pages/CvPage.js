import React, {useEffect} from "react";
import Cv from '../components/Cv/Cv';

const CvPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Przewiń stronę do góry, kiedy komponent jest zamontowany
  }, []);
  return (
    <Cv />
  );
};

export default CvPage;
