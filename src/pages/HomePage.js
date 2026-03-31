import React, {useEffect} from 'react';
import Content from '../components/Content/Content';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Przewiń stronę do góry, kiedy komponent jest zamontowany
  }, []);
  return (
    <Content />
  )
}

export default HomePage;
