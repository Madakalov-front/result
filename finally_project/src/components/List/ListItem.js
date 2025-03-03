import { Component } from '../../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.formattedDate = new Date().toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
  }).replace(/\./g, "/");
  
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.textContent = `${this.formattedDate}  - `;
    const b = document.createElement('b')
    b.textContent = `\u00A0 $${props.sum}`;
    this.$rootElement.append(b)
  }
}
