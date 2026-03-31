import React, {useEffect} from 'react';
import Offer from '../components/Offer/Offer';

const OfferPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Przewiń stronę do góry, kiedy komponent jest zamontowany
  }, []);

  return (
    <Offer />
  )
}

export default OfferPage;
