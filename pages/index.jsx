import Tabuleiro from "../components/tabuleiro";

import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <>
      <div className={styles.title}>JOGO DE DAMAS</div>
      <div className={styles.container}>
          <Tabuleiro />
      </div>
    </>
  );
}
