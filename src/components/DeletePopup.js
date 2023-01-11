import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeletePopup({ isOpen, onClose, card, onDeleteCard, isLoading }) {
  // метод нажатия на кнопку
  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard(card);
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="delete"
      textButton={isLoading ? "Удаляю" : "Да"}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
}

export default DeletePopup;
