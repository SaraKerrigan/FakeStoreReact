import React from "react";

export default function Modal({
  isOpen,
  onClose,
  cartProducts,
  deleteProduct,
  addProductToCart,
  minusProduct,
}) {
  // в компоненте Modal принимаем параметры по их названиям

  const fullPrice = cartProducts.reduce((sum, el) => {
    return sum + el.price * el.count;
  }, 0);

  return (
    //  взависимости от состояния isOpen меняем класс
    <section className={isOpen ? "modal modal__active" : "modal"}>
      <div className="modal__content">
        <div className="modal__content-top">
          <h3 className="modal__title">Корзина</h3>
          <button className="modal__close" onClick={onClose}>
            {/* в кнопку назначаем по клику выполнения функции из параметра */}
            закрыть
          </button>
        </div>
        <div className="modal__content-price">
          {cartProducts.map((el) => {
            return (
              <div className="modal__item">
                <div className="modal__item-content">
                  <p className="modal__item-text">
                    {/* {" "} - пробел  */}
                    {el.painter} {el.name} {el.price.toLocaleString()} руб.
                  </p>
                  <div className="modal__item-btns">
                    <button
                      className="modal__item-btn"
                      onClick={() => minusProduct(el)}
                      disabled={el.count == 1}
                    >
                      -
                    </button>
                    <span>x{el.count}</span>
                    <button
                      className="modal__item-btn"
                      onClick={() => addProductToCart(el)}
                      // функция с параметрами должна вызываться через колбэк
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="modal__item-delete"
                  onClick={() => deleteProduct(el.id)}
                  // колбэк нужен, чтобы функция вызывалась только по клику, иначе функция с параметрами вызовется сразу
                >
                  удалить
                </button>
              </div>
            );
          })}
        </div>
        <div className="modal__content-bottom">
          <p className="modal__total-price">
            Total price {fullPrice.toLocaleString()} руб.
          </p>
        </div>
      </div>
    </section>
  );
}
