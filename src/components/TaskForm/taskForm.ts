import styles from './product.css';
import { addTask } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/store";
import { Task } from "../../types/task";

class TaskForm extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        addObserver(this)
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <h2>Titulo</h2>
         <form class="task-form">
            <input type="text" id="text-input" placeholder="Nombre de tarea" required />
            <button type="submit" id="add-btn">Agregar</button>
         </form>
        `;

        const formElement = this.shadowRoot?.querySelector('.task-form')
        formElement?.addEventListener("submit", (e) => {
            e.preventDefault()
            //Permite acceder al valor del input
            const inputValue = this.shadowRoot?.querySelector("#text-input") as HTMLInputElement
            
            //Estructura de la tarea
            const newTask: Task = {
                id: new Date().getTime(),
                title: inputValue.value,
                state: false
            }
            //Disparar la accion que quiero que se ejecute
            dispatch(addTask(newTask))            
            
        })

		
		}
	
}

customElements.define('task-form', TaskForm);
export default TaskForm;
