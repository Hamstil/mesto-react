import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_view_image popup_theme_dark ${
        props.isOpen ? "popup_is-opened" : ""
      }`}
    >
      <div className="popup__content-image">
        <button
          aria-label="Закрыть диалоговое окно"
          type="button"
          className="popup__close"
          onClick={props.onClose}
        ></button>
        <img src={props.card.link} alt={props.card.name} className="popup__image" />
        <p className="popup__text">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
