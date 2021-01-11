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
    />
  </template>
</form-wrapper>
</template>

<script>
import FormWrapper from "@/components/auth/Wrapper.vue";
import FormInput from "@/components/auth/FormInput.vue";


export default {
  name: "Registration",
  components: {
    FormWrapper,
    FormInput
  },
  data() {
    return {
      formData: [
          { name: 'fullName', label: 'Full name', value: '', type: 'text' },
          { name: 'login', label: 'Login', value: '', type: 'text' },
          { name: 'email', label: 'Email', value: '', type: 'text' },
          { name: 'password', label: 'Password', value: '', type: 'password' },
          { name: 'confirm', label: 'Confirm', value: '', type: 'password' },
        ]
    }
  },
  methods: {
    signUp() {
      console.log('signUp')
    }
  }
}
</script>

<style scoped>

</style>