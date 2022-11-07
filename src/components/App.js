import { useState, useEffect } from 'react';
import api from '../utils/Api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);    
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [profileData, setProfileData] = useState([]);
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState({});

    // Получение данных Профиля из запроса
    useEffect(() => {
      api.getUserInfo()
        .then((data) => {          
          setProfileData(data);          
        })
        .catch((err) => console.log(err))
    }, []);

    // Получение карточек из запроса
    useEffect(() => {
      api.getInitialCards()
        .then((data) => {
          setCards(data);
        })
      .catch((err) => {console.log(err);});
    }, []);
    
    // Функция состояния попапа Аватара
    function handleEditAvatarClick () {
      setIsEditAvatarPopupOpen(true);
    }   

    // Функция состояния попапа Профиля
    function handleEditProfileClick () {
      setIsEditProfilePopupOpen(true);
    }

    // Функция состояния попапа Места
    function handleAddPlaceClick () {
      setIsAddPlacePopupOpen(true);
    }

    // Функция состояния попапа Удаления
    function handleDeleteClick () {
      setIsDeletePopupOpen(true);
    }

    // Функция клика по карточке изображения
    function handleCardClick(card) {
      setIsImagePopupOpen(true);
      setSelectedCard(card);
    }

    // Функция состояния закрытия попапов
    function closeAllPopups () {
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsDeletePopupOpen(false);
      setIsImagePopupOpen(false);
      setSelectedCard({});
    }


  return (
    
    <div className="page">
      <Header/>
      <Main 
        userName={profileData.name}
        userDescription={profileData.about}
        userAvatar={profileData.avatar}
        onEditAvatar={handleEditAvatarClick}       
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onDeleteCard={handleDeleteClick}
        cards={cards}
        onCardClick={handleCardClick}
       />
      <Footer/>
      
      <PopupWithForm 
        title='Обновить аватар'
        name='avatar'
        textButton='Сохранить'       
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup-form__field">
              <input id="avatar-link" type="url" name="avatar" value="" placeholder="Введите ссылку на изображение"
                className="popup-form__input popup-form__input_text_link-avatar" required/>
              <span className="popup-form__error avatar-link-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        title='Редактировать профиль'
        name='profile'
        textButton='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>

      <PopupWithForm 
        title='Новое место'
        name='card'
        textButton='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>

      <PopupWithForm 
        title='Вы уверены?'
        name='delete'
        textButton='Да'
        isOpen={isDeletePopupOpen}
        onClose={closeAllPopups}
      >        
      </PopupWithForm>

      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
        isOpen={isImagePopupOpen}
      />

</div>

  );
}

export default App;
