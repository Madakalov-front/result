import { Component } from '../core/Component';
import { Form } from './Form/Form';
import { List } from './List/List';
import { ListItem } from './List/ListItem';
import { TotalDonation } from './TotalDonation';

export class App extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';
    this.state = {
      total: 0,

    }
    this.donateHead = new TotalDonation({className: 'total-amount', textContent: 'Итого: $'})
    this.$rootElement.appendChild(this.donateHead.$rootElement);
    
    this.donateList = new List();    
    this.donateForm = new Form({listDonate: this.donateList, amount: this.onItemCreate.bind(this)});


    this.$rootElement.appendChild(this.donateForm.$rootElement);
    this.$rootElement.appendChild(this.donateList.$rootElement);

  }
  
  onItemCreate(amount) {
    this.state.total += Number(amount);
    this.donateHead.$containerTotal.textContent =  this.state.total;
  }
}
