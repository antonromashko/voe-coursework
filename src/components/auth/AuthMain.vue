<template>
  <div>
    <Modal>
      <template #header>
        <div id="nav">
          |
          <router-link to="/auth">Sign in</router-link>
          |
          <router-link to="/registration">Sign up</router-link>
          |
          <router-link to="/history">History</router-link>
          |
        </div>
      </template>
      <template #alert>
        <v-alert
        color="red"
        type="error"
        dismissible
        max-width="350"
        :value="alert"
      >
      {{ alertMessage }}
    </v-alert>
      </template>
      <template #content>
        <Auth v-if="$route.name === 'Auth'" @login="loginFailed"/>
        <Registration v-if="$route.name === 'Registration'" @sign-up="signUpFailed"/>
      </template>
    </Modal>
  </div>
</template>

<script>
import Auth from "@/components/auth/Auth.vue";
import Registration from "@/components/auth/Registration.vue";
import Modal from "@/components/helpers/Modal";

export default {
  name: "AuthMain",
  components: {
    Auth,
    Registration,
    Modal
  },
  data() {
    return {
      showModal: true,
      isRegistered: true,
      alert: false,
      alertMessage: ''
    }
  },
  methods: {
    alertLogin(isLogged) {
      if (!isLogged) {
        this.alert = true;
        setTimeout(()=>{
          this.alert=false;
        },5000)
      }
    },
    signUpFailed(isLogged, login) {
      this.alertLogin(isLogged);
      this.alertMessage = `Login ${login} already exists`
    },
    loginFailed(isLogged) {
      this.alertLogin(isLogged);
      this.alertMessage = 'Check username and password'
    }
  }
}
</script>
