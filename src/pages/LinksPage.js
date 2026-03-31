import React, {useEffect} from 'react';
import Links from '../components/Links/Links';


const LinksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Przewiń stronę do góry, kiedy komponent jest zamontowany
  }, []);
  return <Links />
}

export default LinksPage
