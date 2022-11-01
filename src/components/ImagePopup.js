import React from "react";


function ImagePopup() {
    return(
      <div className="popup popup_view_image popup_theme_dark">
        <div className="popup__content-image">
          <button aria-label="Закрыть диалоговое окно" type="button" className="popup__close"></button>
          <img src="#" alt="модальное окно шаблон" className="popup__image"/>
          <p className="popup__text"></p>
        </div>
      </div>
    )    
} 

export default ImagePopup;