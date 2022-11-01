import React from "react";
import profileImg from '../images/profil.jpg';

function Main() {

    function handleEditAvatarClick () {        
            const popupEditAvatar = document.querySelector(".popup_edit_avatar");
            popupEditAvatar.classList.add("popup_is-opened");        
    }   

    function handleEditProfileClick () {       
            const popupEditProfile = document.querySelector(".popup_edit_profile");
            popupEditProfile.classList.add("popup_is-opened");       
    }

    function handleAddPlaceClick () {        
            const popupEditCard = document.querySelector(".popup_edit_card");
            popupEditCard.classList.add("popup_is-opened");    
    }


    return(
      <main className="content">
        <section className="profile content__profile">
          <div className="profile__image" onClick={handleEditAvatarClick}>
            <img src={profileImg} alt="аватар" className="profile__avatar"/>
          </div>
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__title">Антон</h1>
              <p className="profile__subtitle">программист</p>
            </div>
            <button aria-label="Изменить профиль" type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
          </div>
          <button aria-label="Добавить карточку" type="button" className="profile__add-card-button" onClick={handleAddPlaceClick}></button>
        </section>
        <section aria-label="Карточки мест" className="section content__section">
          <ul className="elements-content">
            <template className="cards-element">
              <li className="element">
                <button aria-label="кнопка удаления" type="button" className="element__trash"></button>
                <img src="#" alt="карточка шаблон" className="element__image"/>
                <div className="element__group">
                  <h2 className="element__title">123</h2>
                  <div className="elment__group-like">
                    <button aria-label="кнопка лайка" type="button" className="element__like"></button>
                    <p className="element__count"></p>
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </section>
      </main>
    )    
} 

export default Main;