<template>
  <div class="container">
    <AddTask :show-modal="showModal" @close="close"/>
    <div class="row">
      <div class="col-md-12">
        <div class="card card-white">
          <div class="card-body">
            <nav class="navbar navbar-light bg-light justify-content-between">
              <form class="form-inline justify-content-between w-100">
                <input class="form-control mr-sm-2 w-50" type="search" placeholder="Search" aria-label="Search">
                <ul class="nav nav-pills todo-nav">
                  <li role="presentation" class="nav-item all-task active"><a href="#" class="nav-link">All</a></li>
                  <li role="presentation" class="nav-item completed-task"><a href="#" class="nav-link">Completed</a>
                  </li>
                </ul>
                <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="showAddTaskModal">Add</button>
              </form>
            </nav>
            <ul class="list-group">
              <li class="list-group-item list-group-item-action active d-flex justify-content-between align-items-center">
                Cras justo odio
                <div class="checker"><span class=""><input type="checkbox"></span></div>
              </li>
              <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in
                <div class="checker"><span class=""><input type="checkbox"></span></div>
              </li>
              <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                Morbi leo risus
                <div class="checker"><span class=""><input type="checkbox"></span></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTask from "@/components/todo/AddTask.vue";

export default {
  name: "Todos",
  components: {
    AddTask
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    showAddTaskModal() {
      this.showModal = true;
    },
    close() {
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
body{
    margin-top:20px;
    background: #f8f8f8;
}

.todo-nav {
    margin-top: 10px
}

.todo-list {
    margin: 10px 0
}

.todo-list .todo-item {
    margin: 5px 0;
    border-radius: 0;
    background: #f7f7f7
}

.todo-list.only-active .todo-item.complete {
    display: none
}

.todo-list.only-active .todo-item:not(.complete) {
    display: block
}

.todo-list.only-complete .todo-item:not(.complete) {
    display: none
}

.todo-list.only-complete .todo-item.complete {
    display: block
}

.todo-list .todo-item.complete span {
    text-decoration: line-through
}

.remove-todo-item {
    color: #ccc;
    visibility: hidden
}

.remove-todo-item:hover {
    color: #5f5f5f
}

.todo-item:hover .remove-todo-item {
    visibility: visible
}

div.checker {
    width: 18px;
    height: 18px;
    margin-right: 10px;
}

div.checker input,
div.checker span {
    width: 18px;
    height: 18px
}

div.checker span {
    display: -moz-inline-box;
    display: inline-block;
    zoom: 1;
    text-align: center;
    background-position: 0 -260px;
}

div.checker, div.checker input, div.checker span {
    width: 19px;
    height: 19px;
}

div.checker, div.radio, div.uploader {
    position: relative;
}

div.button, div.button *, div.checker, div.checker *, div.radio, div.radio *, div.selector, div.selector *, div.uploader, div.uploader * {
    margin: 0;
    padding: 0;
}

div.button, div.checker, div.radio, div.selector, div.uploader {
    display: -moz-inline-box;
    display: inline-block;
    zoom: 1;
    vertical-align: middle;
}

.card {
    padding: 25px;
    margin-bottom: 20px;
    border: initial;
    background: #fff;
    border-radius: calc(.15rem - 1px);
    box-shadow: 0 1px 15px rgba(0,0,0,0.04), 0 1px 6px rgba(0,0,0,0.04);
}
</style>