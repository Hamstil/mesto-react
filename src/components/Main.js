import React from "react";
import Card from "./Card";

function Main(props) {
  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__image" onClick={props.onEditAvatar}>
          <div
            style={{
              backgroundImage: `url(${props.userAvatar})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            }}
            className="profile__avatar"
          ></div>
        </div>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__title">{props.userName}</h1>
            <p className="profile__subtitle">{props.userDescription}</p>
          </div>
          <button
            aria-label="Изменить профиль"
            type="button"
            className="profile__edit-button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          aria-label="Добавить карточку"
          type="button"
          className="profile__add-card-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section aria-label="Карточки мест" className="section content__section">
        <ul className="elements-content">
          {props.cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
