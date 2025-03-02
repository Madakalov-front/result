import { Component } from "../../core/Component";


export class Input extends Component {
    setup(props) {
        this.$rootElement = document.createElement('input');
        for (const attr in props) {
            this.$rootElement[attr] = props[attr]
        }
        this.$rootElement.addEventListener('input', props.handleInput)
    }
}