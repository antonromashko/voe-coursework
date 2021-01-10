<template>
<div class="modal" :class="{'modal__visible': showModal}">
  <div class="modal-content">
    <div class="header">
      <div id="nav">
      | <router-link to="/auth">Sign in</router-link>
      | <router-link to="/registration">Sign up</router-link> |
      </div>
      <span class="close" @click="showModal = !showModal">&times;</span>
    </div>
    <div class="auth-content">
       <Auth v-if="$route.name === 'Auth'"/>
       <Registration v-if="$route.name === 'Registration'" />
    </div>
  </div>
</div>
</template>

<script>
import Auth from "@/components/auth/Auth.vue";
import Registration from "@/components/auth/Registration.vue";

export default {
  name: "AuthMain",
  components: {
    Auth,
    Registration
  },
  data() {
    return {
      showModal: true,
      isRegistered: true
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