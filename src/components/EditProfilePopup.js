import React, { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  // Контекст пользователя
  const currentUser = useContext(CurrentUserContext);

  // Состояния переменных профиля
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  // Изменение состояния имя и описания при вводе
  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, isOpen]);

  // Ввод имени в инпут и запись в состояние
  function handleChangeName(e) {
    setName(e.target.value);
  }

  // Ввод описания в инпут и запись в состояние
  function handleChangeAbout(e) {
    setAbout(e.target.value);
  }

  // Обработчик нажатия на кнопку
  function handleSubmit(e) {
    // отмена перезагрузки при нажатии на кнопку
    e.preventDefault();

    // Передаем значения управляемых компонентов во внешнй обработчик
    onUpdateUser({
      name: name,
      about: about,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      textButton={isLoading ? "Сохранияю..." : "Сохранить"}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="popup-form__field">
        <input
          id="profile-name"
          type="text"
          value={name || ""}
          onChange={handleChangeName}
          name="name"
          placeholder="Введите имя"
          className="popup-form__input popup-form__input_text_name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup-form__error profile-name-error"></span>
      </label>
      <label className="popup-form__field">
        <input
          id="profile-job"
          type="text"
          value={about || ""}
          onChange={handleChangeAbout}
          name="about"
          placeholder="Введите род деятельности"
          className="popup-form__input popup-form__input_text_job"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup-form__error profile-job-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
