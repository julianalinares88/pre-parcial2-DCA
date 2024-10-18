//El arreglo donde see almacenan las tareas
export type AppState = {
	tasks: []
};

export type Observer = { render: () => void } & HTMLElement;

///Las acciones que se pueden realizar de acuerdo a lo que se pida
export enum Actions {
	'ADD_TASK' = 'ADD_TASK',
	'REMOVE_TASK' = 'REMOVE_TASK',
	'TOGGLE_TASK' = 'TOGGLE_TASK'
}


