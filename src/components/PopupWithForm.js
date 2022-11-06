import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_edit_${props.name} ${
        !props.isOpen ? "" : "popup_is-opened"
      }`}
    >
      <div className="popup__content">
        <button
          aria-label="Закрыть диалоговое окно"
          type="button"
          className="popup__close"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          name={`edit-${props.name}`}
          className={`popup-form popup-form_type_${props.name}`}
        >
          {props.children}
          <button
            aria-label="Кнопка сохранить"
            type="submit"
            className="popup-form__button"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
