import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  // Добавление рефов на инпуты
  const nameRef = useRef();
  const linkRef = useRef();

  // Метод по нажатию на кнопку создать
  function handleSubmit(e) {
    // Отмена действия по нажатию на кнопку
    e.preventDefault();

    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }

  // Метод отчистки инпутов при открытии попапа
  useEffect(() => {
    nameRef.current.value = "";
    linkRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="card"
      textButton={isLoading ? "Создаю..." : "Создать"}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="popup-form__field">
        <input
          id="place-name"
          type="text"
          name="name"
          ref={nameRef}
          placeholder="Введите название места"
          className="popup-form__input popup-form__input_text_name-place"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup-form__error place-name-error"></span>
      </label>
      <label className="popup-form__field">
        <input
          id="place-link"
          type="url"
          name="link"
          ref={linkRef}
          placeholder="Введите ссылку на изображение"
          className="popup-form__input popup-form__input_text_place-link"
          required
        />
        <span className="popup-form__error place-link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
