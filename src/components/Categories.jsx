import React from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0); //activeIndex = 0 "Все пиццы"

  const onClickCategory = (index) => {
    //Передаем индекс, который будет выбирать активную категорию
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          //при клике вызываем анонимную фун-ю, иначе без неё будет происходить бесконечное выполнение функции, даже без клика.
          onClick={() => onClickCategory(0)}
          className={activeIndex === 0 ? "active" : ""}
        >
          Все
        </li>
        <li
          onClick={() => onClickCategory(1)}
          className={activeIndex === 1 ? "active" : ""}
        >
          Мясные
        </li>
        <li
          onClick={() => onClickCategory(2)}
          className={activeIndex === 2 ? "active" : ""}
        >
          Вегетарианская
        </li>
        <li
          onClick={() => onClickCategory(3)}
          className={activeIndex === 3 ? "active" : ""}
        >
          Гриль
        </li>
        <li
          onClick={() => onClickCategory(4)}
          className={activeIndex === 4 ? "active" : ""}
        >
          Острые
        </li>
        <li
          onClick={() => onClickCategory(5)}
          className={activeIndex === 5 ? "active" : ""}
        >
          Закрытые
        </li>
      </ul>
    </div>
  );
};

export default Categories;
