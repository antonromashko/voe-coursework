<template>
<div class="modal" :class="{'modal__visible': showModal}">
  <div class="modal-content">
    <div class="header">
      <slot name="header"></slot>
      <span v-if="enableClose" class="close" @click="$emit('close')">&times;</span>
    </div>
    <div class="auth-content">
       <slot name="content"></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AuthMain",
  props: {
    showModal: {
      type: Boolean,
      default: true
    },
    enableClose: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log(this.$route.name)
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;

  .modal-content {
    display: flex;
    flex-direction: column;
    background-color: #fefefe;
    margin: auto;
    padding: 0 10px 10px 10px;
    border: 1px solid #888;
    width: 30%;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      #nav {
      padding: 10px;
      }
      #nav a {
        font-weight: bold;
        color: #2c3e50;
      }
      #nav a.router-link-exact-active {
        color: #42b983;
      }
      .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      .close:hover,
      .close:focus {
        text-decoration: none;
        cursor: pointer;
      }
    }
    .auth-content {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
  }
}

.modal__visible {
    display: block;
}
</style>