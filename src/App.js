// src/App.js
import { useState } from 'react';
import HomePage from './components/HomePage.js';
import CharactersPage from './components/CharactersPage.js';
// Допустим, у нас будет еще одна страница, на которую ведет стрелка
import SomeOtherPage from './components/SomeOtherPage.js'; // Тебе нужно будет создать этот компонент

function App() {
  // Теперь состояние хранит название текущей страницы
  const [page, setPage] = useState('home');

  // Функция для навигации
  const navigateTo = (pageName) => {
    setPage(pageName);
  };

  // Условный рендеринг страниц
  switch (page) {
    case 'home':
      // с HomePage переходим на 'characters'
      return <HomePage onContinueClick={() => navigateTo('characters')} />;
    case 'characters':
      // с CharactersPage переходим на 'someOtherPage'
      return <CharactersPage onNavigate={() => navigateTo('someOtherPage')} />;
    case 'someOtherPage':
      // Здесь будет твоя следующая страница
      return <SomeOtherPage />;
    default:
      return <HomePage onContinueClick={() => navigateTo('characters')} />;
  }
}

export default App;