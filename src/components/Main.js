import React from "react";
import Card from "./Card";

function Main({
  cards,
  onAddPlace,
  onCardClick,
  onEditAvatar,
  onEditProfile,
  userAvatar,
  userName,
  userDescription,
}) {
  const cardsElement = cards.map((card) => (
    <Card key={card._id} card={card} onCardClick={onCardClick} />
  ));

  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__image" onClick={onEditAvatar}>
          <div
            style={{
              backgroundImage: `url(${userAvatar})`,
            }}
            className="profile__avatar"
          ></div>
        </div>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            aria-label="Изменить профиль"
            type="button"
            className="profile__edit-button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          aria-label="Добавить карточку"
          type="button"
          className="profile__add-card-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section aria-label="Карточки мест" className="section content__section">
        <ul className="elements-content">{cardsElement}</ul>
      </section>
    </main>
  );
}

export default Main;
