import imageSuccessPath from "../images/popup/infoTooltip/success.svg";
import imageErrorPath from "../images/popup/infoTooltip/error.svg";

const InfoTooltip = (props) => {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && "popup_opened"
      }`}
      id={props.name}
    >
      <div className={`popup__container ${props.containerType}`}>
        <img className="popup__img" alt="" src={ props.isOk ? imageSuccessPath : imageErrorPath } />
        <span className="popup__caption">{ props.isOk ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз." }</span>
        <button
          className={`popup__form-closer popup__form-closer_${props.name}`}
          id={`${props.name}-closer`}
          type="button"
          aria-label="Закрыть форму"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
};
export default InfoTooltip;
