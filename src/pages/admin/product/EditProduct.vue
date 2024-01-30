<template>
    <div class="col-8">
        <h1>Product Edit</h1>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Name Product" label-for="input-1">
                <b-form-input id="input-1" name="name" v-model="form.name" type="text" placeholder="Enter Name Product"
                    ></b-form-input>
            </b-form-group>
            <div v-if="errors.name">
                <ul>
                    <li v-for="(error, index) in errors.name" :key="index">
                        <b-badge pill variant="primary" style=" --bs-badge-color: #c4264e;">{{ error }}</b-badge>
                    </li>
                </ul>
            </div>

            <b-form-group id="input-group-2" label="Slug:" label-for="input-2">
                <b-form-input id="input-2" name="slug" v-model="form.slug" placeholder="Enter Slug" ></b-form-input>
            </b-form-group>
            <div v-if="errors.slug">
                <ul>
                    <li v-for="(error, index) in errors.slug" :key="index">
                        <b-badge pill variant="primary" style=" --bs-badge-color: #c4264e;">{{ error }}</b-badge>
                    </li>
                </ul>
            </div>

            <b-form-group id="input-group-2" label="Image:" label-for="input-2">

                <b-form-file v-model="form.image" name="image" class="mt-3" plain></b-form-file>
                <div v-if="form.image !== ''">
                    <img v-bind:src="form.image" style="max-width: 200px;" alt="Vue Logo" />
                    <div class="mt-3">Selected file: {{ form.image !== "" ? form.image : 'No file selected' }}</div>
                </div>

            </b-form-group>
            <div v-if="errors.image">
                <ul>
                    <li v-for="(error, index) in errors.image" :key="index">
                        <b-badge pill variant="primary" style=" --bs-badge-color: #c4264e;">{{ error }}</b-badge>
                    </li>
                </ul>
            </div>

            <b-form-group id="input-group-1" label="Price:" label-for="input-1">
                <b-form-input id="input-1" name="price" v-model="form.price" type="number"
                    placeholder="Enter Product Price " ></b-form-input>
            </b-form-group>

            <div v-if="errors.price">
                <ul>
                    <li v-for="(error, index) in errors.price" :key="index">
                        <b-badge pill variant="primary" style=" --bs-badge-color: #c4264e;">{{ error }}</b-badge>
                    </li>
                </ul>
            </div>
            <b-form-group id="input-group-1" label="Old Price: " label-for="input-1">
                <b-form-input id="input-1" name="old_price" v-model="form.old_price" type="number"
                    placeholder="Enter Product Old Price " ></b-form-input>
            </b-form-group>
            <div v-if="errors.old_price">
                <ul>
                    <li v-for="(error, index) in errors.old_price" :key="index">
                        <b-badge pill variant="primary" style=" --bs-badge-color: #c4264e;">{{ error }}</b-badge>
                    </li>
                </ul>
            </div>

            <b-form-group id="input-group-1" label="Category: " label-for="input-1">
                <b-form-select id="input-3" name="category_id" v-model="form.category_id"
                    :options="listcategory"></b-form-select>
            </b-form-group>


            <div v-if="errors.category_id">
                <ul>
                    <li v-for="(error, index) in errors.category_id" :key="index">
                        <b-badge pill variant="primary" style=" --bs-badge-color: #c4264e;">{{ error }}</b-badge>
                    </li>
                </ul>
            </div>
            <b-form-group id="input-group-1" label="Brand: " label-for="input-1">
                <b-form-select id="input-3" name="brand_id" v-model="form.brand_id" :options="listbrand"></b-form-select>
            </b-form-group>

            <div v-if="errors.brand_id">
                <ul>
                    <li v-for="(error, index) in errors.brand_id" :key="index">
                        <b-badge pill variant="primary" style=" --bs-badge-color: #c4264e;">{{ error }}</b-badge>
                    </li>
                </ul>
            </div>
            <b-form-group id="input-group-1" label="Quantity: " label-for="input-1">
                <b-form-input id="input-1" name="quantity" v-model="form.quantity" type="number"
                    placeholder="Enter Quantity " ></b-form-input>
            </b-form-group>
            <div v-if="errors.quantity">
                <ul>
                    <li v-for="(error, index) in errors.quantity" :key="index">
                        <b-badge pill variant="primary" style=" --bs-badge-color: #c4264e;">{{ error }}</b-badge>
                    </li>
                </ul>
            </div>

            <b-form-group id="input-group-1" label="Code: " label-for="input-1">
                <b-form-input id="input-1" name="code" v-model="form.code" type="text" placeholder="Enter Code "
                    ></b-form-input>
            </b-form-group>
            <div v-if="errors.code">
                <ul>
                    <li v-for="(error, index) in errors.code" :key="index">
                        <b-badge pill variant="primary" style=" --bs-badge-color: #c4264e;">{{ error }}</b-badge>
                    </li>
                </ul>
            </div>

            <b-form-group id="input-group-1" label="description: " label-for="input-1">
                <ckeditor :editor="editor" v-model="form.description" :config="editor"></ckeditor>
            </b-form-group>
            <div v-if="errors.description">
                <ul>
                    <li v-for="(error, index) in errors.description" :key="index">
                        <b-badge pill variant="primary" style=" --bs-badge-color: #c4264e;">{{ error }}</b-badge>
                    </li>
                </ul>
            </div>


            <b-form-group label="Hot: ">
                <b-form-radio v-model="form.hot" name="hot" value="1">Hot</b-form-radio>
                <b-form-radio v-model="form.hot" name="hot" value="0">Normal</b-form-radio>
            </b-form-group>


            <b-form-group label="Status">
                <b-form-radio v-model="form.status" name="status" value="1">Show</b-form-radio>
                <b-form-radio v-model="form.status" name="status" value="0">Hide</b-form-radio>
            </b-form-group>







            <b-button type="submit" variant="primary">Submit</b-button>
            <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
        </b-form>
    </div>
</template>
<script>


import axios from "axios";
import { defineComponent, ref, reactive } from "vue";
import Cookies from 'js-cookie';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default defineComponent({


    data() {
        const token = Cookies.get('token');

        const listcategory = ref([]);
        const listbrand = ref([]);
        const form = reactive({
            name: "",
            slug: "",
            image: "",
            price: 0,
            old_price: 0,
            category_id: 0,
            brand_id: 0,
            quantity: 0,
            code: "",
            description: "",
            hot: 0,
            status: 0,

        });
        const show = true;

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

        const getListBrand = () => {
            axios.get("http://127.0.0.1:8000/api/brand/create")
                .then(function (response) {
                    listbrand.value = response.data.listbrand;
                    console.log(listbrand.value);

                })
                .catch(function (error) {
                    console.log(error);
                });
        };



        getListBrand();

        const getProduct = () => {
            axios.get(`http://127.0.0.1:8000/api/products/${this.$route.params.id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
                .then(function (response) {

                    console.log(response.data);

                    form.name = response.data.data.name;

                    form.slug = response.data.data.slug;
                    form.image = response.data.data.image;
                    form.price = response.data.data.price;
                    form.old_price = response.data.data.old_price;
                    form.category_id = response.data.data.category_id;
                    form.brand_id = response.data.data.brand_id;
                    form.quantity = response.data.data.quantity;
                    form.code = response.data.data.code;
                    form.description = response.data.data.description;
                    form.hot = response.data.data.hot;
                    form.status = response.data.data.status;

                })
                .catch(function (error) {
                    console.log(error);

                });
        };
        getProduct();






        return {

            show,
            form,
            token,

            listcategory,
            listbrand,
            editor: ClassicEditor,
            errors:"",


        };

    },
    methods: {
        onSubmit(event) {
            event.preventDefault();

            console.log(this.form);


            //   const formData = new FormData();
            //   formData.append('name', this.form.name);
            //   formData.append('name_en', this.form.name_en);
            //   formData.append('slug', this.form.slug);
            //   formData.append('image', this.form.image);
            //   formData.append('parent', this.form.parent);
            //   formData.append('status', this.form.status);
            //   const config = {
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     }
            //     };
            axios.put(`http://127.0.0.1:8000/api/products/${this.$route.params.id}`, this.form, {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                }
            })
                .then(response => {
                    console.log(response.data);
                    if (response.data.status == 200) {
                        this.$router.push({ name: 'admin-products' });
                    }
                })
                .catch(errors => {
                    // Xử lý lỗi nếu có
                    this.errors = errors.response.data.error;
                    console.error('Error submitting form:', errors);
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
  
     