import React from "react";
import styles from "./How.module.css";
import HowCard from "./HowCard";
import useWindowSize from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

const How = () => {

  const navigate = useNavigate();

  const buttonStyles = {
    margin: "1rem auto",
  };

  function handleClick() {
    navigate("/kontakt");
  }

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1000;


  return (
    <section className={styles.container}>
      <h1 className={`${"title"} ${styles.title}`}>
        W jaki sposób możemy współpracować?
      </h1>
      <div className={styles.items}>
        <HowCard
          src={"/svg/sofa.svg"}
          title={"Wizyty indywidualne"}
          text={
            "Spotkania w gabinecie i poza nim, na których pracujemy indywidualnie z zawodnikiem, trenerem lub rodzicem."
          }
          extendedInfo={
            "Spotkania w gabinecie to okazja do rozmowy z psychologiem. Na tych sotkaniach uczę jak zwiększyć koncentrację podczas zawodów, jak radzić sobie ze stresem a także oferuje różne techniki treningu relaksacyjnego. W rzeczywistości do każdego klienta podchodzę indywidualnie tak żeby nasza współpraca przyniosła jak najlepszy efekt."
          }
          extraClass={"item1"}
          extraClassHover={"box-shadow1"}
        >
          <img src="/svg/sofa.svg" alt="Wizyty indywidualne" />
          <h3>Wizyty indywidualne</h3>
          <p>
            Spotkania w gabinecie i poza nim, na których pracujemy indywidualnie z
            zawodnikiem, trenerem lub rodzicem.
          </p>
        </HowCard>

        <HowCard
          id={"zespol"}
          src="/svg/gwizdek.svg"
          title={"Wspołpraca z zespołami"}
          text={
            " W przeszłości współpracowałam już z wieloma zespołami. Współpraca psychologa może przełożyć się na lepsze wyniki całej drużyny jak i lepszą atmosferę w szatni zespołu."
          }
          extraClass={"item2"}
          extraClassHover={"box-shadow2"}
        >
          <img src="/svg/gwizdek.svg" alt="Współpraca z zespołami" />
          <h3>Wspołpraca z zespołami</h3>
          <p>
            W przeszłości współpracowałam już z wieloma zespołami. Współpraca
            psychologa może przełożyć się na lepsze wyniki całej drużyny jak i
            lepszą atmosferę w szatni zespołu.
          </p>
        </HowCard>
        <HowCard
          id={"wyklad"}
          src={"/svg/wyklad.svg"}
          title={"Wykłady (szkolenia)"}
          text={
            "Prowadzę wykłady i szkolenia w tematyce związanej z treningiem mentalnym, i przygotowaniem zawodników do zawodów."
          }
          extraClass={"item3"}
          extraClassHover={"box-shadow2"}
        >
          <img src="/svg/wyklad.svg" alt="Wykłady" />
          <h3>Wykłady (szkolenia)</h3>
          <p>
            Prowadzę wykłady i szkolenia w tematyce związanej z treningiem
            mentalnym, i przygotowaniem zawodników do zawodów.
          </p>
        </HowCard>
        <HowCard
          id={"online"}
          src={"/svg/skype.svg"}
          title={"Wizyty online przez skype"}
          text={
            "Dla tych, którzy pochodzą z innego regionu Polski, przebywają aktualnie na zgrupowaniu lub z nadmiaru obowiązków nie mają czasu na wizytę proponuję konsultacje za pomocą komunikatora Skype."
          }
          extraClass={"item4"}
          extraClassHover={"box-shadow4"}
        >
          <img src="/svg/skype.svg" alt="Wizyty online" />
          <h3>Wizyty online przez skype</h3>
          <p>
            Dla tych, którzy pochodzą z innego regionu Polski, przebywają
            aktualnie na zgrupowaniu lub z nadmiaru obowiązków nie mają czasu na
            wizytę proponuję konsultacje za pomocą komunikatora Skype.
          </p>
        </HowCard>
      </div>
      {isMobile && (
        <button
          type="button"
          onClick={handleClick}
          className={styles["button"]}
          style={buttonStyles}
        >
          Skontaktuj się
          <p className={styles["button-icon"]}>❯</p>
        </button>
      )}
    </section>
  );
};

export default How;
