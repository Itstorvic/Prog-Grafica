<template>
  <main>
    <h1>Tabla de Tareas</h1>
    <p>Crea una lista de tareas</p>

    <div class="create-new">
      <input 
        type="text" 
        v-model="nuevaTarea" 
        placeholder="Agregar Tarea" 
        @keypress.enter="addTask" />
      <button @click="addTask">Agregar</button>
    </div>

    <div class="tasks">
      <Task
        v-for="(tarea, i) in $store.state.tareas"
        :key="i"
        :tarea="tarea" />
    </div>

  </main>
</template>

<script>
export default {
  data (){
    return {
      nuevaTarea: ''
    }
  },
  methods: {
    addTask () {
      if (this.nuevaTarea) {
        this.$store.commit('agregar', this.nuevaTarea);
        this.nuevaTarea = '';
      }
    }
  }
}
</script>