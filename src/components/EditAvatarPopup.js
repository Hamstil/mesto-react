import React, { useEffect, useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import useFormWithValidation from "../hooks/useFormWithValidation";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  // Реф аватара
  const avatarRef = useRef();

  // вычитываем переменные и методы из кастомного хука
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({
      avatar: "",
    });

  const { avatar } = values;

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
    resetForm();
  }, [isOpen]);

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
          value={avatar || ""}
          onChange={handleChange}
          placeholder="Введите ссылку на изображение"
          className="popup-form__input popup-form__input_text_link-avatar"
          required
        />
        <span className="popup-form__error avatar-link-error popup-form__error_active">
          {errors.avatar}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
