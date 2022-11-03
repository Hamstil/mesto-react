import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    
    function handleEditAvatarClick () {
      setIsEditAvatarPopupOpen(true);
    }   

    function handleEditProfileClick () {
      setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick () {
      setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups () {
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
    }


  return (
    
    <div className="page">
      <Header/>
      <Main 
        onEditAvatar={handleEditAvatarClick}       
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
       />
      <Footer/>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

      <div className="popup popup_edit_profile">
        <div className="popup__content">
          <button aria-label="Закрыть диалоговое окно" type="button" className="popup__close"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form name="edit-profile" className="popup-form popup-form_type_profile" novalidate>
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
          <form name="edit-card" className="popup-form popup-form_type_card" novalidate>
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

      <div className="popup popup_edit_delete">
        <div className="popup__content">
          <button aria-label="Закрыть диалоговое окно" type="button" className="popup__close"></button>
          <h2 className="popup__title-delete">Вы уверены?</h2>
          <form name="edit-delete" className="popup-form popup-form_type_delete" novalidate>
            <button aria-label="Кнопка удалить" type="submit" className="popup-form__button">Да</button>
          </form>
        </div>
      </div>

      <ImagePopup/>

</div>

  );
}

export default App;
