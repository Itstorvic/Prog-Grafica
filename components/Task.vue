<template>
	<div :class="`task ${tarea.done ? 'is-complete' : ''}`">
		<div class="content">{{ tarea.content }}</div>
		<div class="buttons">
			<button @click="pendiente">{{ tarea.done ? 'Undo' : 'Listo' }}</button>
			<button @click="eliminar" class="delete">Eliminar</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['tarea'],
	methods: {
		pendiente() {
			this.$store.commit('pendiente', this.tarea);
		},
		eliminar() {
			this.$store.commit('eliminar', this.tarea);
		}
	}
}
</script>

<style>
</style>