import { Actions } from '../types/store';
import { Task } from '../types/task';
//Crea la función reducer
export const reducer = (currentAction: any, currentState: any) => {
	//Sacamos las acciones principales
	const { action, payload } = currentAction;

	//Estas acciones se ejecutan cuando se llama a la función dispatch
	switch (action) {
		case Actions.ADD_TASK:
			//Se agrega la tarea al arreglo de tareas
			return {
				...currentState,
				tasks: [...currentState.tasks, payload],
			};

		case Actions.REMOVE_TASK:
			return {
				...currentState,
				//Devuelve todas las tareas diferentes a las que se elimino
				tasks: currentState.tasks.filter((task: Task) => task.id !== payload),
				
			};

		case Actions.TOGGLE_TASK:
			return {
				...currentState,
				//Mapeo de tarea 
				tasks: currentState.tasks.map((task: Task) => {
					//Si el id de la tarea que se este recorriendo es igual al payload que está llegando
					if (task.id === payload) {
						//Entonces retorna las propiedades de esa tarea
						return {
							...task,
							//Solo modifica el estado de la tarea
							state: !task.state,
						};
					}
					///Si no es igual, retorna la tarea original
					return task;
				})
			};

		default:
			return currentState;
	}
};
