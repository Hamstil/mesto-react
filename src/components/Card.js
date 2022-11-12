import React from "react";

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <button
        aria-label="кнопка удаления"
        type="button"
        className="element__trash"
      ></button>
      <img
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
        className="element__image"
      />
      <div className="element__group">
        <h2 className="element__title">{card.name}</h2>
        <div className="elment__group-like">
          <button
            aria-label="кнопка лайка"
            type="button"
            className="element__like"
          ></button>
          <p className="element__count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
