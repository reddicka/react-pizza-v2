import React from 'react';

import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';

//import pizzas from './assets/pizzas.json';

import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState([]);

  // https://62948189a7203b3ed06a58de.mockapi.io/Items - пиццы тут

  /* Проба через fetch, но так не надо
  // fetch запрос - стандартная функция браузера. Запрашиваем данные пицц с mockapi.io.
  fetch('https://62948189a7203b3ed06a58de.mockapi.io/Items') // Отправь запрос по адресу
    .then((res) => {
      // Дождались ответ, получили какое-то говно
      return res.json(); // Конвертировали его в json
    })
    .then((arr) => {
      setItems(arr);
    });*/

  //Выполняется только один раз при пустом массиве (второй параметр)
  React.useEffect(() => {
    fetch('https://62948189a7203b3ed06a58de.mockapi.io/Items') // Отправь запрос по адресу
      .then((res) => res.json())
      .then((arr) => setItems(arr));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                {...obj}
                /*title={obj.title}
                price={obj.price}
                pizzaImgUrl={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}*/
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
