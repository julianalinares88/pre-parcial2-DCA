import { Actions } from '../types/store';
import { Task } from '../types/task';

export const addTask = (payload: Task) => {
	return {
		action: Actions.ADD_TASK,
		payload,
	};
};

export const removeTask = (payload: number) => {
	return {
		action: Actions.REMOVE_TASK,
		payload,
	};
};

export const toggleTask = (payload: number) => {
	return {
		action: Actions.TOGGLE_TASK,
		payload,
	};
};

