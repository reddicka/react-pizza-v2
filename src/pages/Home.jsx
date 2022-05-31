import React from 'react';

import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

//import pizzas from './assets/pizzas.json'; - прошлый импорт данных из файла

const Home = () => {
    // Для отображения пицц
    const [items, setItems] = React.useState([]);

    // Грузится странциа или нет (для скелетонов)
    const [isLoading, setIsLoading] = React.useState(true);

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
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    // Если идет загрузка, то создаем новый фейковый массив из 6-ти пицц,
                    // на его основании делаем скелетоны карточек со значением заглушки
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                     // Если загрузка не идет - показываем карточки как надо
                    : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
                
                    /*
                    {...obj} - это:
                    
                    title={obj.title}
                    price={obj.price}
                    pizzaImgUrl={obj.imageUrl}
                    sizes={obj.sizes}
                    types={obj.types}*/
                }
            </div>
        </>
    )
}

export default Home;
