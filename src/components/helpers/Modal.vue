<template>
<div class="modal" :class="{'modal__visible': showModal}" :style="adaptMain">
  <div class="modal-content" :style="adaptModalSize">
    <div class="header">
      <slot name="header"></slot>
      <slot name="alert"></slot>
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
  computed: {
    adaptModalSize () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return {
            width: '100%',
            height: '100%'
          }
          case 'sm': return {
            width: '100%',
            height: '100%'
          }
          case 'md': return {
            width: '100%',
            height: '100%'
          }
          case 'lg': return {
            width: '30%',
          }
          case 'xl': return {
            width: '30%',
          }
          default:
          throw 'Unsupported type';
        }
      },
    adaptMain () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return {}
          case 'sm': return {}
          case 'md': return {}
          case 'lg': return {
            'padding-top': '100px'
          }
          case 'xl': return {
            'padding-top': '100px',
          }
          default:
          throw {};
        }
      },
  },
  mounted() {
    console.log(this.$vuetify.breakpoint.name)
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  .modal-content {
    display: flex;
    flex-direction: column;
    background-color: #fefefe;
    margin: auto;
    padding: 0 10px 10px 10px;
    border: 1px solid #888;
    //width: 30%;

    .header {
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      align-items: center;

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
    .auth-content > div {
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