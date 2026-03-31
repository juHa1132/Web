import React , {useEffect} from 'react';
import Contact from '../components/Contact/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Przewiń stronę do góry, kiedy komponent jest zamontowany
  }, []);
  return (
    <Contact />
  )
}

export default ContactPage;
