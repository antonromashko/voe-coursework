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
    />
  </template>
</form-wrapper>
</template>

<script>
import FormWrapper from "@/components/auth/Wrapper.vue";
import FormInput from "@/components/auth/FormInput.vue";


export default {
  name: "Auth",
  components: {
    FormWrapper,
    FormInput
  },
  data() {
    return {
      formData: [
          { name: 'login', label: 'Login', value: '', type: 'text' },
          { name: 'email', label: 'Email', value: '', type: 'text' },
          { name: 'password', label: 'Password', value: '', type: 'password' },
        ]
    }
  },
  methods: {
    login() {
      console.log('login')
    }
  }
}
</script>

<style scoped>

</style>