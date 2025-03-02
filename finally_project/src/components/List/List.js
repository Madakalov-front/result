import { Component } from '../../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const heading = document.createElement('h2');
    heading.className = 'donates-container__title';
    heading.textContent = 'Список донатов';

    this.$containerDonate = document.createElement('div');
    this.$containerDonate.className = 'donates-container__donates';

    this.$rootElement.append(heading, this.$containerDonate)
  }

  addItem(item) {
    this.$containerDonate.append(item)
  }
}