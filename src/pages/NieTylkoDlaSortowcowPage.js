import React,{useEffect} from 'react';
import NieTylkoDlaSortowcow from '../components/NieTylkoDlaSportowcow/NieTylkoDlaSportowcow';

const NieTylkoDlaSortowcowPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Przewiń stronę do góry, kiedy komponent jest zamontowany
  }, []);
  return (
    <div>
      <NieTylkoDlaSortowcow />
    </div>
  )
}

export default NieTylkoDlaSortowcowPage;
