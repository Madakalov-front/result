import { Component } from "../core/Component";


export class TotalDonation extends Component {
    setup(props) {
        this.$rootElement = document.createElement('h1');
        this.$rootElement.className = props.className;
        this.$rootElement.textContent = props.textContent;

        this.$containerTotal = document.createElement('span');
        this.$rootElement.append(this.$containerTotal)
    }
}