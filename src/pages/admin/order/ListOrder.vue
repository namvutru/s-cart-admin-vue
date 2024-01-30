<template>
    <div>
        <h1>Order</h1>
        <div class="col-md-12">
        
        <b-table :items="items" :fields="fields">
            <template #cell(image)="row">
                <img :src="row.value" alt="Category Image" style="max-width: 50px; max-height: 50px;">
            </template>
            
            
            <template #cell(action)="row">
                <router-link :to="{ name: 'admin-orders-edit', params: { id: row.item.id } }">
                    <b-button title="Edit" class="justify-content-between align-items-center bg-white border-0">
                        <b-icon icon="pencil-square" variant="info" aria-hidden="true"></b-icon>
                    </b-button>  
                </router-link>          
                <b-button title="Delete" @click="deleteOrder(row.item.id)"
                    class="justify-content-between align-items-center bg-white border-0">
                    <b-icon icon="trash" variant="danger" aria-hidden="true"></b-icon>
                </b-button>
            </template>
        </b-table>
    </div>
        
    </div>
   

</template>




<script >

import axios from "axios";
import { defineComponent, ref } from "vue";
import Cookies from 'js-cookie';
export default defineComponent({
    setup() {

        // const columns = [
        //     // {
        //     //     name: 'Id',
        //     //     dataIndex: 'id',
        //     //     key: 'id',
        //     // },
        //     {
        //         title: 'First name',
        //         dataIndex: 'first_name',
        //         key: 'first_name',
        //     },
        //     {
        //         title: 'Last name',
        //         dataIndex: 'last_name',
        //         key: 'last_name',
        //     },
        //     {
        //         title: 'Phone number',
        //         key: 'phone_number',
        //         dataIndex: 'phone_number',
        //     },
        //     {

        //         title: 'Email',
        //         key: 'email',
        //         dataIndex: 'email',
        //     },

        //     // {

        //     //     title: 'Address',
        //     //     key: 'address',
        //     //     dataIndex: 'address',
        //     // },
        //     {

        //         title: 'Status',
        //         key: 'status',
        //         dataIndex: 'status',
        //     },
        //     {

        //         title: 'Total',
        //         key: 'total',
        //         dataIndex: 'total',
        //     },
        //     {

        //         title: 'Created at',
        //         key: 'created_at',
        //         dataIndex: 'created_at',
        //     },
        //     // {

        //     //     title: 'Updated at',
        //     //     key: 'updated_at',
        //     //     dataIndex: 'updated_at',
        //     // },
        //     {

        //         title: 'Action',
        //         key: 'action',

        //     }
        // ];
        const token = Cookies.get('token');
        const fields = ['id','first_name','last_name','phone_number','email','status','total','created_at', 'action'];
        const items = ref([]);

        
        const current = ref(2);
        const getOrders = () => {
            axios.get("http://127.0.0.1:8000/api/orders",{
        headers: {
            'Authorization': 'Bearer ' + token
          } 
      })
                .then(function (response) {
                    items.value = response.data.listorder;
                })
                .catch(function (error) {
                    console.log(error);
                });
        };

        const deleteOrder= (id) =>{
            axios.delete("http://127.0.0.1:8000/api/orders/" + id,{
        headers: {
            'Authorization': 'Bearer ' + token
          } 
      })
                .then(function (response) {
                    getOrders();
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }


        getOrders();

        return {
            fields,
            items,
            current,
            deleteOrder
        };

    }


});


</script>