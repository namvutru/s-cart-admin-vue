<template>
    <div>

        <h1>Product </h1>
        <router-link :to="{ name: 'admin-products-create' }"><b-button variant="success">Add new</b-button></router-link>



        <div class="col-md-12">

            <b-table :items="items" :fields="fields">
                <template #cell(image)="row">
                    <img :src="row.value" alt="Category Image" style="max-width:100px; max-height: 100px;">
                </template>
                <template #cell(status)="row">
                    <b-badge v-if="row.value==1" pill variant="primary" style=" --bs-badge-color: #26c448;" >Show</b-badge>
                    <b-badge v-else pill variant="primary" style=" --bs-badge-color: #c4264e;" >Hide</b-badge>
                </template>
                <template #cell(hot)="row">
                        <b-badge v-if="row.value==1" pill variant="primary"  style=" --bs-badge-color: #c4264e;" >Hot</b-badge>
                        
                    </template>

                <template #cell(action)="row">
                    <router-link :to="{ name: 'admin-products-edit', params: { id: row.item.id } }">

                        <b-button title="Edit" class="justify-content-between align-items-center bg-white border-0">

                            <b-icon icon="pencil-square" variant="info" aria-hidden="true"></b-icon>
                        </b-button>
                    </router-link>
                    <b-button title="Delete" @click="deleteProduct(row.item.id)"
                        class="justify-content-between align-items-center bg-white border-0">
                        <b-icon icon="trash" variant="danger" aria-hidden="true"></b-icon>
                    </b-button>
                </template>
            </b-table>
        </div>

    </div>
</template>
<script>
import axios from "axios";
import { defineComponent, ref } from "vue";
import Cookies from 'js-cookie';
export default defineComponent({


    data() {
        const token = Cookies.get('token');
        const fields = ['id','name','slug','image','price','old_price',	'quantity',	'code',	'hot',	'status','category_name','brand_name','action'];
        const items = ref([]);

        const getProducts = () => {
            axios.get("http://127.0.0.1:8000/api/products",{
        headers: {
            'Authorization': 'Bearer ' + token
          } 
      })
                .then(function (response) {
                    items.value = response.data.listproduct;
                    console.log(items.value);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        getProducts();

        const deleteProduct = (id) =>{
            axios.delete("http://127.0.0.1:8000/api/products/" + id,{
        headers: {
            'Authorization': 'Bearer ' + token
          } 
      })
                .then(function (response) {
                    getProducts();
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }



        // Trả về dữ liệu cần thiết từ setup
        return {
            fields,
            items,
            deleteProduct,

        };

    },
    // mounted() {
    // this.getCategorys();
    // },
    methods: {
        // getCategorys = () => {
        //     axios.get("http://127.0.0.1:8000/api/categories")
        //         .then(response => {
        //             this.items.value = response.data.listcategory;
        //             console.log(this.items.value);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        // },


        // deleteCategory(id) {
        //     axios.delete("http://127.0.0.1:8000/api/categories/" + id)
        //         .then(function (response) {
        //             console.log(response.data);
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        // }

    }


}); 
</script>    