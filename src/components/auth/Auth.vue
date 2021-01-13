<template>
<form-wrapper :formData="formData" button-name="Login" @click="login">
  <template #title>
    <div class="form-title">AUTH</div>
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
import { RULES } from "@/const/index.js"
export default {
  name: "Auth",
  components: {
    FormWrapper,
    FormInput
  },
  data() {
    return {
      formData: [
          {
            name: 'login',
            label: 'Login',
            value: '',
            ype: 'text',
            counter: RULES.NAME.counter,
            rules: RULES.NAME.rules
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
        ]
    }
  },
  methods: {
    login() {
      console.log(this.formData)
    }
  }
}
</script>

<style scoped>

</style>