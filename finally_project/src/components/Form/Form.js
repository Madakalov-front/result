import { Component } from '../../core/Component';
import { Label } from './Label';
import { Input } from "./Input";
import { ButtonDonation } from './ButtonDonation';
import { ListItem } from '../List/ListItem';


export class Form extends Component {
  setup(props) {
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const donateLabel = new Label({ textContent: 'Введите сумму в $', className: 'donate-form__input-label', });
    this.$rootElement.append(donateLabel.$rootElement)

    this.input = new Input({ placeholder: 'от 1$ до 100$', max: '100', min: '1', name: 'amount', type: 'number', className: 'donate-form__donate-input', required: true, handleInput: this.handleInput.bind(this) })
    donateLabel.$rootElement.append(this.input.$rootElement)

    this.button = new ButtonDonation({ handleSubmit: this.handleSubmit.bind(this) })
    this.$rootElement.append(this.button.$rootElement)

    this.listDonate = props.listDonate;
    this.amount = props.amount
  }

  handleInput(event) {
    const input = event.target.closest('input')

    if (input.value < 0 || input.value > 100 ||  input.value === '') {
      this.button.$rootElement.disabled = true;
      throw new Error(`Value ${input.value}: выходит за диапозон от 0 до 100`);
    }

    this.state.value = input.value;
    this.button.$rootElement.disabled = false;
    return input.value
  }

  handleSubmit(event) {
    event.preventDefault();

    const listItemDonate = new ListItem({sum: this.state.value})
    this.listDonate.addItem(listItemDonate.$rootElement)
    this.amount(this.state.value)
    this.input.$rootElement.value = '';
    this.button.$rootElement.disabled = true;
  }
}
