import React from "react";
import styles from "./Polityka.module.css";

const Polityka = () => {
  return (
    <div>
      <div className={styles.offer}>
        <h1 className={`${"title"} ${styles.title}`}>Polityka prywatności</h1>

        <div className={styles.container}>
          <span style={{ fontWeight: "700" }}>§.1 Postanowienia Ogólne</span>
          <ol>
            <li>
              Administratorem danych jest Aleksandra Adamiec Psycholog Sportu z
              siedzibą 43-502 Czechowice-Dziedzice Jodłowa 3, NIP:
              937-254-23-57, REGON: 331149. Ochrona danych odbywa się zgodnie z
              wymogami powszechnie obowiązujących przepisów prawa, a ich
              przechowywanie ma miejsce na zabezpieczonych serwerach.
            </li>
            <li>
              Dla interpretacji terminów stosuje się słowniczek Regulaminu lub
              tak jak zostało to opisane w Polityce Prywatności (jeżeli wynika
              to bezpośrednio z opisu).
            </li>
            <li>
              Termin „Użytkownik" zastąpiony został określeniem „Ty",
              „Administrator" – „My". Termin „RODO" oznacza Rozporządzenie
              Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
              2016 r. w sprawie ochrony osób fizycznych w związku z
              przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
              takich danych oraz uchylenia dyrektywy 95/46/WE.
            </li>
            <li>
              Szanujemy Twoje prawo do prywatności i dbamy o bezpieczeństwo
              danych. W tym celu używany jest m. in. bezpieczny protokół
              szyfrowania komunikacji (SSL).
            </li>
            <li>
              Dane osobowe podawane w formularzu są traktowane jako poufne i nie
              są widoczne dla osób nieuprawnionych.
            </li>
          </ol>
          <span style={{ fontWeight: "700" }}>§.2 Administrator Danych</span>
          <ol>
            <li>
              Aleksandra Adamiec Psycholog Sportu z siedzibą 43-502
              Czechowice-Dziedzice Jodłowa 3, NIP: 937-254-23-57, REGON: 331149
              jest administratorem danych swoich klientów. Oznacza to, że jeśli
              wypełnisz formularz kontaktowy na naszej stronie www, to
              przetwarzamy Twoje dane jak: imię, nazwisko, adres e-mail, numer
              telefonu, IP i inne dane zwykłe, które zostaną przez Ciebie
              podane, w celach kontaktowych, a także informowania o ofercie
              Aleksandra Adamiec Psycholog Sportu.
            </li>
            <li>
              Usługodawca jest także administratorem osób zapisanych na
              newsletter.
            </li>
            <li>
              <ul>
                <label>Dane osobowe przetwarzane są:</label>
                <li>zgodnie z przepisami dotyczącymi ochrony danych osobowych,</li>
                <li>zgodnie z wdrożoną Polityką Prywatności,</li>
                <li>
                  w zakresie i celu niezbędnym do nawiązania, ukształtowania
                  treści Umowy, zmiany bądź jej rozwiązania oraz prawidłowej
                  realizacji Usług świadczonych drogą elektroniczną,
                </li>
                <li>
                  w zakresie i celu niezbędnym do wypełnienia uzasadnionych
                  interesów (prawnie usprawiedliwionych celów), a przetwarzanie
                  nie narusza praw i wolności osoby, której dane dotyczą: w
                  zakresie i celu zgodnym ze zgodą wyrażoną przez Ciebie, jeśli
                  zapisałeś się na newsletter.
                </li>
              </ul>
            </li>
            <li>
              Każda osoba, której dane dotyczą (jeżeli jesteśmy ich
              administratorem) ma prawo dostępu do danych, sprostowania,
              usunięcia lub ograniczenia przetwarzania, prawo sprzeciwu, prawo
              wniesienia skargi do organu nadzorczego.
            </li>
            <li>
              Zastrzegamy sobie prawo do przetwarzania Twoich danych po
              rozwiązaniu Umowy lub cofnięciu zgody tylko na potrzeby
              dochodzenia ewentualnych roszczeń przed sądem, archiwizacji
              dokumentacji medycznej lub jeżeli przepisy krajowe albo unijne
              bądź prawa międzynarodowego obligują nas do retencji danych.
            </li>
            <li>
              Usługodawca ma prawo udostępniać dane osobowe Użytkownika oraz
              innych jego danych podmiotom upoważnionym na podstawie właściwych
              przepisów prawa (np. organom ścigania).
            </li>
            <li>
              Usunięcie danych osobowych może nastąpić na skutek cofnięcia zgody
              bądź wniesienia prawnie dopuszczalnego sprzeciwu na przetwarzanie
              danych osobowych.
            </li>
            <li>
              Usługodawca nie udostępniania danych osobowych innym podmiotom
              aniżeli upoważnionym na podstawie właściwych przepisów prawa.
            </li>
            <li>
              Wdrożyliśmy pseudonimizację, szyfrowanie danych oraz mamy
              wprowadzoną kontrolę dostępu, dzięki czemu minimalizujemy skutki
              ewentualnego naruszenia bezpieczeństwa danych.
            </li>
            <li>
              Dane osobowe przetwarzają osoby wyłącznie upoważnione przez nas
              albo przetwarzający, z którymi ściśle współpracujemy.
            </li>
            <li>
              Dane osobowe jak adres e-mail, numer telefonu, imię i nazwisko
              zbierane są jedynie w miejscach, w których użytkownik wypełniając
              formularz wyraźnie wyraził na to zgodę. Powyższe dane zachowujemy
              i wykorzystujemy tylko do potrzeb niezbędnych do wykonania danej
              funkcji.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Polityka;