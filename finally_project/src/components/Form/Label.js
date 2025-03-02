import { Component } from "../../core/Component";


export class Label extends Component {
    setup(props) {
        this.$rootElement = document.createElement('label')
        this.$rootElement.className = props.className;
        this.$rootElement.textContent = props.textContent;
        
    }
}