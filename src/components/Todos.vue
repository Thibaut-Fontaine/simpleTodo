<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input type="text" class="new-todo" placeholder="newtask" v-model="newTodo" @keyup.enter="addTodo">
    </header>
    <div class="main">
      <input type="checkbox" v-model="allDone">
      <input type="checkbox" v-model="edit">
      <ul class="todo-list">
        <li class="todo editing" v-for="todo in filteredTodos" :class="{completed: todo.completed}">
          <div class="vue"  v-show="edit === false">
            <input type="checkbox" v-model="todo.completed" class="toggle">
            <label>{{ todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
          </div>
          <input type="text" class="edit" v-model="todo.name" v-show="edit === true" @keyup.enter="changeEdit">
        </li>
      </ul>
    </div>
    <footer class="footer" v-show="todos.length > 0">
      <span class="todo-count"><strong>{{ remaining }}</strong> task(s) to do</span>
      <ul class="filters">
        <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">All</a></li>
        <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">To do</a></li>
        <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Done</a></li>
      </ul>
    </footer>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        todos: [],
        edit: false,
        newTodo: '',
        filter: 'all'
      }
    },
    watch: {
      todos : {
        deep: true,
        handler: function () {
          this.$http.post('http://localhost:5000/', this.todos)
            .then((v) => { });
        }
      }
    },
    methods: {
      addTodo () {
        this.todos.push({
          completed: false,
          name: this.newTodo
        })
        this.newTodo = ''
      },
      deleteTodo (todo) {
        this.todos = this.todos.filter(x => x != todo)
      },
      changeEdit () {
        this.edit = false;
      }
    },
    computed: {
      allDone: {
        get () { return this.remaining === 0 },
        set (v) { this.todos.forEach(x => { x.completed = v }) }
      },
      remaining () {
        return this.todos.filter(todo => !todo.completed).length
      },
      filteredTodos () {
        if (this.filter === 'todo') {
          return this.todos.filter(todo => !todo.completed)
        } else if (this.filter === 'done') {
          return this.todos.filter(todo => todo.completed)
        }
        return this.todos
      }
    },
    beforeMount () {
      this.$http.get('http://localhost:5000/').then((v) => {
        this.todos = Array.isArray(v.data) ? v.data : [];
      });
    }
  }
</script>

<style src="./todos.css">
</style>
