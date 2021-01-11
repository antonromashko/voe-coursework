<template>
  <Modal :enable-close="true" :show-modal="showModal" @close="$emit('close')">
    <template #content>
      <form-wrapper :formData="formData" button-name="Add" @click="onAddTask">
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
  </Modal>
</template>

<script>
import Modal from '@/components/helpers/Modal.vue';
import FormWrapper from "@/components/auth/Wrapper.vue";
import FormInput from "@/components/auth/FormInput.vue";

export default {
  name: "AddTask",
  components: {
    Modal,
    FormInput,
    FormWrapper
  },
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      formData: [
          { name: 'name', label: 'NAME', value: '', type: 'text' },
          { name: 'description', label: 'DESCRIPTION', value: '', type: 'text' },
          { name: 'image', label: 'IMAGE', value: '', type: 'text' },
        ]
    }
  },
  methods: {
    onAddTask() {
      console.log(this.showModal)
    }
  }
}
</script>

<style scoped>

</style>