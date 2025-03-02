import { Component } from '../../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.textContent = '19/01/2024, 18:12:01 -';
    const b = document.createElement('b')
    b.textContent = `\u00A0 $${props.sum}`;
    this.$rootElement.append(b)
  }
}
