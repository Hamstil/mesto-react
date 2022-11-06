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
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
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
        cards={cards}
        onCardClick={handleCardClick}
       />
      <Footer/>
      
      <PopupWithForm 
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm 
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
        isOpen={isImagePopupOpen}
      />

</div>

  );
}

export default App;
