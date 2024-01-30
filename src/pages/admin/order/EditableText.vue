<template>
    <div>
      <div v-if="!editing">
        <span class="text" @click="enableEditing">{{ value }}</span>
      </div>
      <div v-if="editing">
        <label>{{ label }}:</label>
        <input v-if="type !== 'textarea'" v-model="tempValue" class="input" />
        <textarea v-if="type === 'textarea'" v-model="tempValue" class="textarea"></textarea>
        <button @click="disableEditing">Cancel</button>
        <button @click="saveEdit">Save</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['value', 'label', 'type'],
    data() {
      return {
        tempValue: null,
        editing: false
      };
    },
    methods: {
      enableEditing() {
        this.tempValue = this.value;
        this.editing = true;
      },
      disableEditing() {
        this.tempValue = null;
        this.editing = false;
      },
      saveEdit() {
        this.$emit('input', this.tempValue);
        this.disableEditing();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>