<template>
<form-wrapper :formData="formData" button-name="Sign up" @click="signUp">
  <template #title>
    <div class="form-title">REGISTRATION</div>
  </template>
  <template v-for="(item, idx) in formData" #[item.name]="props">
    <FormInput
        v-model="item.value"
        :name="item.name"
        :label="item.label"
        :type="item.type"
        :key="idx"
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
import {RULES} from "@/const";


export default {
  name: "Registration",
  components: {
    FormWrapper,
    FormInput
  },
  data() {
    return {
      isNotEqualConfirm: false,
      formData: [
          {
            name: 'fullName',
            label: 'Full name',
            value: '',
            type: 'text',
            counter: RULES.NAME.counter,
            rules: RULES.NAME.rules
          },
          {
            name: 'login',
            label: 'Login',
            value: '',
            type: 'text',
            counter: RULES.LOGIN.counter,
            rules: RULES.LOGIN.rules
          },
          {
            name: 'email',
            label: 'Email',
            value: '',
            type: 'text',
            counter: RULES.EMAIL.counter,
            rules: RULES.EMAIL.rules
          },
          {
            name: 'password',
            label: 'Password',
            value: '',
            type: 'password',
            counter: RULES.PASSWORD.counter,
            rules: RULES.PASSWORD.rules
          },
          {
            name: 'confirm',
            label: 'Confirm',
            value: '',
            type: 'password',
            counter: RULES.PASSWORD.counter,
            rules: [ ...RULES.PASSWORD.rules, () => !this.isNotEqualConfirm || 'Passwords must match' ]
          },
        ]
    }
  },
  watch: {
    formData: {
      deep: true,
      handler() {
        let passwordFields = this.formData.filter(item => item.type === 'password');
        this.isNotEqualConfirm = (!!passwordFields[0].value && !!passwordFields[1].value) && !(passwordFields[0].value === passwordFields[1].value);
      }
    }
  },
  methods: {
    signUp() {
      console.log(this.formData)
    }
  }
}
</script>

<style scoped>

</style>