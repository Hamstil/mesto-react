import React, { useEffect, useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  // Реф аватара
  const avatarRef = useRef();

  // состояние ошибки и валидности
  const [errors, setErrors] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Обработчик нажатия на кнопку
  function handleSubmit(e) {
    // Отмена нажатия на кнопку
    e.preventDefault();

    // Значение из инпута из рефа
    if (isValid) {
      onUpdateAvatar({
        avatar: avatarRef.current.value,
      });
    }
  }

  // Отчистка инпута
  useEffect(() => {
    avatarRef.current.value = "";
    setErrors("");
    setIsValid(false);
  }, [isOpen]);

  // изменения состояний при вводе в форму
  const handleChange = (event) => {
    setErrors(event.target.validationMessage);
    setIsValid(event.target.closest("form").checkValidity());
  };

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      textButton={isLoading ? "Сохранияю..." : "Сохранить"}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}
    >
      <label className="popup-form__field">
        <input
          id="avatar-link"
          type="url"
          name="avatar"
          ref={avatarRef}
          onChange={handleChange}
          placeholder="Введите ссылку на изображение"
          className="popup-form__input popup-form__input_text_link-avatar"
          required
        />
        <span className="popup-form__error avatar-link-error popup-form__error_active">
          {errors}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
