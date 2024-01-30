<template>
  <div class = "col-8">
    <h1>Category Form</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Name Category" label-for="input-1">
        <b-form-input id="input-1" name="name" v-model="form.name" type="text" placeholder="Enter Name category">
          
        </b-form-input>
      </b-form-group>
      <div v-if="errors.name" >
        <ul>
            <li v-for="(error, index) in errors.name" :key="index">
              <b-badge   pill variant="primary" style=" --bs-badge-color: #c4264e;" >{{ error }}</b-badge>
            </li>
          </ul>
      </div>
      

      <b-form-group id="input-group-1" label="English Category Name" label-for="input-1">
        <b-form-input id="input-1" name="name_en" v-model="form.name_en" type="text"
          placeholder="Enter English Category Name" ></b-form-input>
          
      </b-form-group>
      <div v-if="errors.name_en" >
        <ul>
            <li v-for="(error, index) in errors.name_en" :key="index">
              <b-badge   pill variant="primary" style=" --bs-badge-color: #c4264e;" >{{ error }}</b-badge>
            </li>
          </ul>
      </div>


      <b-form-group id="input-group-1" label="Category Parent" label-for="input-1">
        <b-form-select id="input-3" name="parent" v-model="form.parent" :options="listcategory"></b-form-select>
      </b-form-group>

      

      <b-form-group id="input-group-2" label="Slug:" label-for="input-2">
        <b-form-input id="input-2" name="slug" v-model="form.slug" placeholder="Enter Slug" ></b-form-input>
      </b-form-group>

      <div v-if="errors.slug" >
        <ul>
            <li v-for="(error, index) in errors.slug" :key="index">
              <b-badge   pill variant="primary" style=" --bs-badge-color: #c4264e;" >{{ error }}</b-badge>
            </li>
          </ul>
      </div>

      
      <b-form-group id="input-group-2" label="Image:" label-for="input-2">

        <b-form-file v-model="form.image" name="image" class="mt-3" plain></b-form-file>
        <div class="mt-3">Selected file: {{ form.image ? form.image : '' }}</div>
      </b-form-group>

      <b-form-group label="Status" >
        <b-form-radio v-model="form.status"  name="status" value="1" >Show</b-form-radio>
        <b-form-radio v-model="form.status"  name="status" value="0">Hide</b-form-radio>
      </b-form-group>
      






      <b-button type="submit" variant="primary">Submit</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
  </div>
</template>
<script>


import axios from "axios";
import { defineComponent, ref } from "vue";
import Cookies from 'js-cookie';
export default defineComponent({


  data() {

    const listcategory = ref([]);

   
    const show = true;

    const token = Cookies.get('token');
   

    const getListCategory = () => {
      axios.get("http://127.0.0.1:8000/api/category/create")
        .then(function (response) {
          listcategory.value = response.data.listcategory;
          console.log(listcategory.value);
          
        })
        .catch(function (error) {
          
          console.log(error);
        });
    };



    getListCategory();

    return {

      show,
      form: {
        name: "",
        name_en: "",
        slug: "",
        image: "",
        parent: 0,
        status:1,

      },
      
      listcategory,
      token,
      errors:"",

    };

  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      console.log(this.form);

      const formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('name_en', this.form.name_en);
      formData.append('slug', this.form.slug);
      formData.append('image', this.form.image);
      formData.append('parent', this.form.parent);
      formData.append('status', this.form.status);

    axios.post('http://127.0.0.1:8000/api/categories', formData,{
        headers: {
            'Authorization': 'Bearer ' + this.token
          } 
      })
        .then(response => {
          console.log(response.data);
          if(response.data.status == 200){
            this.$router.push({ name: 'admin-categories' });
          }
          // alert('Form submitted successfully!');
        })
        .catch(errors => {
          // Xử lý lỗi nếu có
          console.log(errors);
          this.errors = errors.response.data.error;
          console.error('Error submitting form:', this.errors );
        });
    },

    onReset(event) {
      event.preventDefault()
      // Reset our form values
        

      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }



});



</script>
  
  <!-- <script>
    export default {
      data() {
        return {
          form: {
            email: '',
            name: '',
            listcategory: null,
            checked: []
          },
        
        }
      },
      methods: {
        onSubmit(event) {
          event.preventDefault()
          alert(JSON.stringify(this.form))
        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.form.email = ''
          this.form.name = ''
          this.form.food = null
          this.form.checked = []
          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        }
      }
    }
  </script>
 -->

   