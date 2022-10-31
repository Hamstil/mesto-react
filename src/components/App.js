import React from 'react';
import headerLogo from '../images/logo.svg';
import profileImg from '../images/profil.jpg';

function App() {
  return (   
    <div className="page">
      <header className="header page__header">
        <img src={headerLogo} alt="Логотип: Mesto" className="header__logo"/>
      </header>
  <main className="content">
    <section className="profile content__profile">
      <div className="profile__image">
        <img src={profileImg} alt="аватар" className="profile__avatar"/>
      </div>
      <div className="profile__info">
        <div className="profile__text">
          <h1 className="profile__title">Антон</h1>
          <p className="profile__subtitle">программист</p>
        </div>
        <button aria-label="Изменить профиль" type="button" className="profile__edit-button"></button>
      </div>
      <button aria-label="Добавить карточку" type="button" className="profile__add-card-button"></button>
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
  <footer className="footer page__footer">
    <p className="footer__paragraph">© 2022 Mesto Russia</p>
  </footer>

  <div className="popup popup_edit_profile">
    <div className="popup__content">
      <button aria-label="Закрыть диалоговое окно" type="button" className="popup__close"></button>
      <h2 className="popup__title">Редактировать профиль</h2>
      <form name="edit-profile" className="popup-form popup-form_type_edit" novalidate>
        <label className="popup-form__field">
          <input id="profile-name" type="text" name="name" value="" placeholder="Введите имя"
            className="popup-form__input popup-form__input_text_name" minlength="2" maxlength="40" required/>
          <span className="popup-form__error profile-name-error"></span>
        </label>
        <label className="popup-form__field">
          <input id="profile-job" type="text" name="about" value="" placeholder="Введите род деятельности"
            className="popup-form__input popup-form__input_text_job" minlength="2" maxlength="200" required/>
          <span className="popup-form__error profile-job-error"></span>
        </label>
        <button aria-label="Кнопка сохранить" type="submit" className="popup-form__button">Сохранить</button>
      </form>
    </div>
  </div>

  <div className="popup popup_edit_card">
    <div className="popup__content">
      <button aria-label="Закрыть диалоговое окно" type="button" className="popup__close"></button>
      <h2 className="popup__title">Новое место</h2>
      <form name="edit-card" className="popup-form popup-form_type_add" novalidate>
        <label className="popup-form__field">
          <input id="place-name" type="text" name="name" value="" placeholder="Введите название места"
            className="popup-form__input popup-form__input_text_name-place" minlength="2" maxlength="30" required/>
          <span className="popup-form__error place-name-error"></span>
        </label>
        <label className="popup-form__field">
          <input id="place-link" type="url" name="link" value="" placeholder="Введите ссылку на изображение"
            className="popup-form__input popup-form__input_text_place-link" required/>
          <span className="popup-form__error place-link-error"></span>
        </label>
        <button aria-label="Кнопка создать" type="submit" className="popup-form__button">Создать</button>
      </form>
    </div>
  </div>

  <div className="popup popup_edit_avatar">
    <div className="popup__content">
      <button aria-label="Закрыть диалоговое окно" type="button" className="popup__close"></button>
      <h2 className="popup__title">Обновить аватар</h2>
      <form name="edit-avatar" className="popup-form popup-form_type_avatar" novalidate>
        <label className="popup-form__field">
          <input id="avatar-link" type="url" name="avatar" value="" placeholder="Введите ссылку на изображение"
            className="popup-form__input popup-form__input_text_link-avatar" required/>
          <span className="popup-form__error avatar-link-error"></span>
        </label>
        <button aria-label="Кнопка сохранить" type="submit" className="popup-form__button">Сохранить</button>
      </form>
    </div>
  </div>

  <div className="popup popup_type_delete">
    <div className="popup__content">
      <button aria-label="Закрыть диалоговое окно" type="button" className="popup__close"></button>
      <h2 className="popup__title-delete">Вы уверены?</h2>
      <form name="delete-card" className="popup-form popup-form_type_delete" novalidate>
        <button aria-label="Кнопка удалить" type="submit" className="popup-form__button">Да</button>
      </form>
    </div>
  </div>

  <div className="popup popup_view_image popup_theme_dark">
    <div className="popup__content-image">
      <button aria-label="Закрыть диалоговое окно" type="button" className="popup__close"></button>
      <img src="#" alt="модальное окно шаблон" className="popup__image"/>
      <p className="popup__text"></p>
    </div>
  </div>


</div>

  );
}

export default App;
