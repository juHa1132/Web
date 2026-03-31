import React, { useEffect } from 'react';
import Polityka from '../components/PolitykaPrywatnosci/Polityka';

const PolitykaPrywatnosciPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Przewiń stronę do góry, kiedy komponent jest zamontowany
  }, []);

  return (
    <Polityka />
  )
}

export default PolitykaPrywatnosciPage;
