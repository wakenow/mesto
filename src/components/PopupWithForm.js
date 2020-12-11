import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this.submitButton = this._modal.querySelector('.popup__submit');
        this._form = this._modal.querySelector('.popup__forms');
        this._submitHandler = submitHandler;
        this._inputList = Array.from(this._modal.querySelectorAll('.popup__form'));
        this._submitHandlerWithData = this._submitHandlerWithData.bind(this);
    }

    _getInputValues() {
        const inputValuesObj = {};
        this._inputList.forEach(item => {
            inputValuesObj[item.name] = item.value;
        })
        return inputValuesObj;
    }

    _submitHandlerWithData() {
        this._inputValues = this._getInputValues();
        this._submitHandler(this._inputValues);
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitHandlerWithData);


    }
    close() {
        super.close();
        this._form.validator.clearErrors();
        this._form.reset();


    }
}