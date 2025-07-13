// src/components/HomePage.js
import styles from './HomePage.module.css';
import backgroundImage from '../assets/bg-home.jpg';

// 1. Принимаем props
function HomePage(props) { 
  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <div className={styles.homePage} style={pageStyle}>
      <h1 className={styles.titleOfficial}>Official</h1>
      <h2 className={styles.titleWebsite}>WEBSITE</h2>
      <h3 className={styles.titleSouthPark}>SOUTH PARK</h3>
      {/* 2. Используем функцию из props в onClick */}
      <button 
        className={styles.continueButton} 
        onClick={props.onContinueClick}
      >
        Continue
      </button>
    </div>
  );
}

export default HomePage;