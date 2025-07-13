// src/components/CharactersPage.js - ФИНАЛЬНАЯ ВЕРСИЯ
import styles from './CharactersPage.module.css';
import backgroundImage from '../assets/bg-chars.png';

import stanImage from '../assets/chars-group1.png';
import kyleImage from '../assets/chars-group2.png';
import cartmanImage from '../assets/chars-group3.png';
import kennyImage from '../assets/chars-group4.png';

function CharactersPage(props) {
  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`
  };
  return (
    <div className={styles.charactersPage} style={pageStyle}>
      {/* Эта часть у тебя пропадала, я ее вернул */}
      <div className={styles.header}>
        <h1 className={styles.title}>Characters</h1>
        <div className={styles.arrow} onClick={props.onNavigate}>→</div>
      </div>

      <div className={styles.charactersContainer}>
        {/*
          Теперь у каждого персонажа ДВА класса:
          1. .character - для общих стилей (отступов)
          2. .stan, .kyle и т.д. - для уникального размера
        */}
        <img src={stanImage} alt="Stan Marsh" className={`${styles.character} ${styles.stan}`} />
        <img src={kyleImage} alt="Kyle Broflovski" className={`${styles.character} ${styles.kyle}`} />
        <img src={cartmanImage} alt="Eric Cartman" className={`${styles.character} ${styles.cartman}`} />
        <img src={kennyImage} alt="Kenny McCormick" className={`${styles.character} ${styles.kenny}`} />
      </div>
    </div>
  );
}
export default CharactersPage;