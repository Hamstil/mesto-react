import React, { useEffect, useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  // Реф аватара
  const avatarRef = useRef();

  // Стейт парметр значения аватар
  const [avatar, setAvatar] = useState("");

  // Обработчик нажатия на кнопку
  function handleSubmit(e) {
    // Отмена нажатия на кнопку
    e.preventDefault();

    // Значение из инпута из рефа
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  function handleChangeAvatar(e) {
    setAvatar(e.target.value);
  }

  // Отчистка инпута
  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      textButton={isLoading ? "Сохранияю..." : "Сохранить"}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="popup-form__field">
        <input
          id="avatar-link"
          type="url"
          name="avatar"
          ref={avatarRef}
          value={avatar}
          onChange={handleChangeAvatar}
          placeholder="Введите ссылку на изображение"
          className="popup-form__input popup-form__input_text_link-avatar"
          required
        />
        <span className="popup-form__error avatar-link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
