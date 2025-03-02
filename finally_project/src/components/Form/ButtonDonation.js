import { Component } from "../../core/Component";


export class ButtonDonation extends Component {
    setup(props) {
        this.$rootElement = document.createElement('button');
        this.$rootElement.className = 'donate-form__submit-button';
        this.$rootElement.disabled = true;
        this.$rootElement.type = 'submit';
        this.$rootElement.textContent = 'Задонатить'
        this.$rootElement.addEventListener('click', props.handleSubmit)
    }
}