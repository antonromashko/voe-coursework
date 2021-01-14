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
      Check username and password
    </v-alert>
      </template>
      <template #content>
        <Auth v-if="$route.name === 'Auth'" @login="login"/>
        <Registration v-if="$route.name === 'Registration'"/>
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
      alert: false
    }
  },
  methods: {
    login(logged) {
      if (!logged) {
        this.alert = true;
        setTimeout(()=>{
          this.alert=false
        },5000)
      }
    }
  },
  mounted() {
    console.log(this.$route.name)
  }
}
</script>
