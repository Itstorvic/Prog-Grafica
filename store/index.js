export const state = () => ({
	tareas: []
})

export const mutations = {
	agregar (state, tarea) {
		state.tareas = [{ content: tarea, done: false }, ...state.tareas];
	},
	eliminar (state, tarea) {
		state.tareas.splice(state.tareas.indexOf(tarea), 1);
	},
	pendiente (state, tarea) {
		tarea.done = !tarea.done;
	}
}