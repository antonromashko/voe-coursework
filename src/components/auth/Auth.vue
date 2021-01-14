<template>
<form-wrapper :formData="formData" button-name="Login" @click="login">
  <template #title>
    <div class="form-title">AUTH</div>
  </template>
  <template v-for="(item, key) in formData" #[item.name]="props">
    <FormInput
        v-model="item.value"
        :name="item.name"
        :label="item.label"
        :type="item.type"
        :key="key"
        :value="props"
        :counter="item.counter"
        :rules="item.rules"
    />
  </template>
</form-wrapper>
</template>

<script>
import FormWrapper from "@/components/auth/Wrapper.vue";
import FormInput from "@/components/auth/FormInput.vue";
import {ROUTER, RULES} from "@/const/index.js"
export default {
  name: "Auth",
  components: {
    FormWrapper,
    FormInput
  },
  data() {
    return {
      formData: {
        login: {
          name: 'login',
          label: 'Login',
          value: '',
          ype: 'text',
          counter: RULES.NAME.counter,
          rules: RULES.NAME.rules
        },
        email: {
          name: 'email',
          label: 'Email',
          value: '',
          type: 'text',
          counter: RULES.EMAIL.counter,
          rules: RULES.EMAIL.rules
        },
        password: {
          name: 'password',
          label: 'Password',
          value: '',
          type: 'password',
          counter: RULES.PASSWORD.counter,
          rules: RULES.PASSWORD.rules
        }
      }
    }
  },
  methods: {
    login() {
      let userData = JSON.parse(localStorage.getItem(this.formData.login.value));
      let loggedIn = userData && userData.login.value === this.formData.login.value && userData.password.value === this.formData.password.value
      if (loggedIn) {
        this.$store.commit('SET_LOGIN_USER', this.formData.login.value)
        // reset previous user data in store
        this.$store.commit('RESET_TODOS_ITEMS', {});
        // set history to store
        this.$store.commit('SET_HISTORY_ROW', JSON.parse(localStorage.getItem('history')));
        this.$router.push(ROUTER.TODOS);
      }
      this.$emit('login', loggedIn)
    }
  }
}
</script>

<style scoped>

</style>