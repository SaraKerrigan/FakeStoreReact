import React, { useState } from "react";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Info from "../components/Info";
import Team from "../components/Team";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import fr1 from "../assets/images/fr1.jpeg";
import fr2 from "../assets/images/fr2.jpeg";
import fr3 from "../assets/images/fr3.jpeg";
import fr4 from "../assets/images/fr4.jpeg";
import fr5 from "../assets/images/fr5.jpeg";
import fr6 from "../assets/images/fr6.jpeg";
import gr1 from "../assets/images/gr1.jpeg";
import gr2 from "../assets/images/gr2.jpeg";
import gr3 from "../assets/images/gr3.jpeg";
import gr4 from "../assets/images/gr4.jpeg";
import gr5 from "../assets/images/gr5.jpeg";
import gr6 from "../assets/images/gr6.jpeg";
import en1 from "../assets/images/en1.jpeg";
import en2 from "../assets/images/en2.jpeg";
import en3 from "../assets/images/en3.jpeg";
import en4 from "../assets/images/en4.jpeg";
import en5 from "../assets/images/en5.jpeg";
import en6 from "../assets/images/en6.jpeg";

export default function Home() {
  const products = [
    {
      id: 1,
      img: fr1,
      painter: "Марсель Руссо",
      name: "Охота Амура",
      material: "Холст, масло (50х80)",
      price: 14500,
      category: "France",
    },
    {
      id: 2,
      img: fr2,
      painter: "Анри Селин",
      name: "Дама с собачкой",
      material: "Акрил, бумага (50х80)",
      price: 14500,
      category: "France",
    },
    {
      id: 3,
      img: fr3,
      painter: "Франсуа Дюпон",
      name: "Процедура",
      material: "Цветная литография (40х60)",
      price: 14500,
      category: "France",
    },
    {
      id: 4,
      img: fr4,
      painter: "Луи Детуш",
      name: "Роз",
      material: "Бумага, акрил (50х80)",
      price: 14500,
      category: "France",
    },
    {
      id: 5,
      img: fr5,
      painter: "Франсуа Дюпон",
      name: "Птичья трапеза",
      material: "Цветная литография (40х60)",
      price: 14500,
      category: "France",
    },
    {
      id: 6,
      img: fr6,
      painter: "Пьер Моранж",
      name: "Пейзаж с рыбой",
      material: "Цветная литография (40х60)",
      price: 14500,
      category: "France",
    },
    {
      id: 7,
      img: gr1,
      painter: "Курт Вернер",
      name: "Над городом",
      material: "Цветная литография (40х60)",
      price: 16000,
      category: "Germany",
    },
    {
      id: 8,
      img: gr2,
      painter: "Макс Рихтер",
      name: "Птенцы",
      material: "Холст, масло (50х80)",
      price: 14500,
      category: "Germany",
    },
    {
      id: 9,
      img: gr3,
      painter: "Мартин Майер",
      name: "Среди листьев",
      material: "Цветная литография (40х60)",
      price: 20000,
      category: "Germany",
    },
    {
      id: 10,
      img: gr4,
      painter: "Герман Беккер",
      name: "Яркая птица",
      material: "Цветная литография (40х60)",
      price: 13000,
      category: "Germany",
    },
    {
      id: 11,
      img: gr5,
      painter: "Вульф Бауэр",
      name: "Дятлы",
      material: "Бумага, акрил (50х80)",
      price: 20000,
      category: "Germany",
    },
    {
      id: 12,
      img: gr6,
      painter: "Вальтер Хартманн",
      name: "Большие воды",
      material: "Бумага, акрил (50х80)",
      price: 23000,
      category: "Germany",
    },
    {
      id: 13,
      img: en1,
      painter: "Пол Смит",
      name: "Дикий зверь",
      material: "Акварель, бумага (50х80)",
      price: 19500,
      category: "England",
    },
    {
      id: 14,
      img: en2,
      painter: "Джон Уайт",
      name: "Скалистый берег",
      material: "Цветная литография (40х60)",
      price: 17500,
      category: "England",
    },
    {
      id: 15,
      img: en3,
      painter: "Джим Уотсон",
      name: "Река и горы",
      material: "Акварель, бумага (50х80)",
      price: 20500,
      category: "England",
    },
    {
      id: 16,
      img: en4,
      painter: "Юджин Зиллион",
      name: "Белый попугай",
      material: "Цветная литография (40х60)",
      price: 15500,
      category: "England",
    },
    {
      id: 17,
      img: en5,
      painter: "Эрик Гиллман",
      name: "Ночная рыба",
      material: "Бумага, акрил (50х80)",
      price: 12500,
      category: "England",
    },
    {
      id: 18,
      img: en6,
      painter: "Альфред Барр",
      name: "Рыжий кот",
      material: "Цветная литография (40х60)",
      price: 21000,
      category: "England",
    },
  ];

  const [category, setCategory] = useState("France");
  const [openModal, setOpenModal] = useState(false);
  // создали state для модального окна
  const [cartProducts, setCartProducts] = useState([]);
  // setCartProducts - функция для изменения состояния cartProducts (cartProducts - массив (по умолчанию пустой) для корзины)
  const cartCount = cartProducts.length;

  function handleOpenModal() {
    setOpenModal(true);
  }
  // функция для открытия модального окна
  function handleCloseModal() {
    setOpenModal(false);
  }
  // функция для закрытия модального окна

  // функция для добавления товара в корзину
  function addProductToCart(product) {
    const currentProduct = cartProducts.find((el) => el.id == product.id);
    // currentProduct - ищем продукт по его id внутри корзины, если он есть, то в currentProduct запишется сам объект, а иначе undefined
    // prev - текущий массив
    // product - товар
    if (currentProduct) {
      setCartProducts((prev) =>
        prev.map((el) => {
          if (el.id == product.id) {
            el.count++;
          }
          return el;
        })
      );
    }
    // если есть currentProduct, то через setCartProducts (функция для изменения состояния cartProducts) получаем prev(массив корзины)и преобразуем его через map и далее увеличиваем счетчик у конкретного элемента массива
    // return el - в map нужно всегда возвращать элемент массива
    else {
      setCartProducts((prev) => [...prev, { ...product, count: 1 }]);
      // prev - массив корзины, product - элемент массива products, count - счетчик
    }
  }
  function minusProduct(product) {
    setCartProducts((prev) =>
      prev.map((el) => {
        if (el.id == product.id) {
          el.count--;
        }
        return el;
      })
    );
  }

  function deleteProduct(id) {
    setCartProducts((prev) => prev.filter((el) => el.id != id));
  }

  const filteredProducts = products.filter((el) => {
    return el.category == category;
  });

  return (
    <div>
      <MobileMenu />
      <Header onOpen={handleOpenModal} cartCount={cartCount} />
      <Modal
        isOpen={openModal}
        onClose={handleCloseModal}
        cartProducts={cartProducts}
        deleteProduct={deleteProduct}
        addProductToCart={addProductToCart}
        minusProduct={minusProduct}
      />
      {/* isOpen onClose пропсы */}
      {/* передача параметров (isOpen, onClose) в компонент Modal */}
      <main className="main-section">
        <Intro />
        <section className="pictures">
          <div className="container">
            <div className="pictures__header">
              <h2 className="pictures__title">Репродукции</h2>
              <div className="pictures__buttons">
                <button
                  className={
                    category === "France"
                      ? "pictures__button pictures__button-active"
                      : "pictures__button"
                  }
                  onClick={() => setCategory("France")}
                >
                  Франция
                </button>
                <button
                  className={
                    category === "Germany"
                      ? "pictures__button pictures__button-active"
                      : "pictures__button"
                  }
                  onClick={() => setCategory("Germany")}
                >
                  Германия
                </button>
                <button
                  className={
                    category === "England"
                      ? "pictures__button pictures__button-active"
                      : "pictures__button"
                  }
                  onClick={() => setCategory("England")}
                >
                  Англия
                </button>
              </div>
            </div>
            <div className="pictures__items pictures__items-active">
              {filteredProducts.map((el) => {
                const currentProduct = cartProducts.find(
                  (product) => el.id == product.id
                );
                return (
                  <div className="pictures__item" key={el.id}>
                    {/* key нужен для того, чтобы React мог без ошибок рендерить элементы */}
                    <img className="pictures__item-img" src={el.img} alt="" />
                    <h4 className="pictures__item-painter">{el.painter}</h4>
                    <h3 className="pictures__item-name">{el.name}</h3>
                    <p className="pictures__item-material">{el.material}</p>
                    <p className="pictures__item-price">
                      {el.price.toLocaleString()} руб
                    </p>
                    <button
                      className="pictures__item-btn"
                      onClick={() => addProductToCart(el)}
                    >
                      {currentProduct
                        ? `В корзине: ${currentProduct.count}`
                        : "В корзину"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Info />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
