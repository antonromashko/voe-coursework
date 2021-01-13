<template>
<form-wrapper :formData="formData" button-name="Sign up" @click="signUp">
  <template #title>
    <div class="form-title">REGISTRATION</div>
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
import { RULES, ROUTER } from "@/const";
import { mapState } from 'vuex';

export default {
  name: "Registration",
  components: {
    FormWrapper,
    FormInput
  },
  data() {
    return {
      isNotEqualConfirm: false,
      formData: {
        fullName: {
          name: 'fullName',
          label: 'Full name',
          value: '',
          type: 'text',
          counter: RULES.NAME.counter,
          rules: RULES.NAME.rules
        },
        login: {
          name: 'login',
          label: 'Login',
          value: '',
          type: 'text',
          counter: RULES.LOGIN.counter,
          rules: RULES.LOGIN.rules
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
        },
        confirm: {
          name: 'confirm',
          label: 'Confirm',
          value: '',
          type: 'password',
          counter: RULES.PASSWORD.counter,
          rules: [...RULES.PASSWORD.rules, () => !this.isNotEqualConfirm || 'Passwords must match']
        },
      }
    }
  },
  computed: {
    ...mapState({
      loggedInUser: state => state.loggedInUser
    })
  },
  watch: {
    formData: {
      deep: true,
      handler() {
        let passwordFieldsCompare = !(this.formData.password.value === this.formData.confirm.value);
        this.isNotEqualConfirm = (!!this.formData.password.value && !!this.formData.confirm.value) && passwordFieldsCompare;
      }
    }
  },
  methods: {
    signUp(data) {
      localStorage.setItem(data.login.value, JSON.stringify(data));
      this.$store.commit('SET_LOGIN_USER', data.login.value)
      localStorage.setItem('logged_in', this.loggedInUser);
      this.$router.push(ROUTER.TODOS)
    }
  }
}
</script>

<style scoped>

</style>