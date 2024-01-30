<template>
    <div>
        <h1>Edit Order</h1>
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">

                            <div class="row" id="order-body">
                                <div class="col-sm-6">
                                    <table class="table table-hover box-body text-wrap table-bordered">
                                        <tr>
                                            <td class="td-title">Tên:</td>
                                            <td>{{ order.first_name }}
                                            </td>
                                            
                                        </tr>
                                        <tr>
                                            <td class="td-title">Họ:</td>
                                            <td>{{ order.last_name }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td-title">Điện thoại:</td>
                                            <td>{{order.phone_number }}</td>
                                        </tr>
                                        <tr>
                                            <td class="td-title">Email:</td>
                                            <td>{{ order.email }}</td>
                                        </tr>
                                        <tr>
                                            <td class="td-title">Địa chỉ:</td>
                                            <td>{{ order.address }}</td>
                                        </tr>

                                    </table>
                                </div>
                                <div class="col-sm-6">
                                    <table class="table table-bordered">
                                        <tr>
                                            <td class="td-title">Trạng thái đơn hàng:</td>
                                            <td>
                                                <b-form-select id="input-3" name="parent" v-model="order.status" :options="liststatus" @change="updatestatus"></b-form-select>
                                                
                                                
                                            </td>
                                        </tr>


                                        <!-- <tr>
                                            <td>Tên miền:</td>
                                            <td>https://namvutru.org</td>
                                        </tr> -->
                                        <tr>
                                            <td>Tạo lúc:</td>
                                            <td>{{ order.created_at }}</td>
                                        </tr>
                                    </table>

                                </div>
                            </div>
                            <form id="form-add-item">
                                <input type="hidden" name="_token" value=""> <input type="hidden" name="order_id" value="">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="card collapsed-card">
                                            <div class="table-responsive">
                                                <table class="table table-hover box-body text-wrap table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Tên</th>

                                                            <th class="product_price">Giá</th>
                                                            <th class="product_qty">Số lượng</th>
                                                            <th class="product_total">Tổng tiền</th>

                                                            <th>Thao tác</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr v-for="item in listitem" :key="item.id">
                                                            <td>
                                                                {{item.name}}
                                                            </td>

                                                            <td class="product_price"><a href="#" data-title="Giá">{{item.price}}</a></td>
                                                            <td class="product_qty">x <a href="#" class="edit-item-detail"
                                                                    data-title="Số lượng">{{item.qty}}</a></td>
                                                            <td class="product_total item_id_">
                                                                {{ item.price*item.qty }}
                                                            </td>
                                                            <td>
                                                                <span onclick="deleteItem('');" class="btn btn-danger " size="sm"
                                                                    data-title="Delete">
                                                                    <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                                                                </span>
                                                            </td>
                                                        </tr>




                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="card collapsed-card">
                                        <table class="table table-bordered">
                                            <tr style="font-weight:bold;" class="data-balance">
                                                <td class="td-title-normal">SubTotal:</td>
                                                <td style="text-align:right" class="data-subtotal">{{ order.total }}</td>
                                            </tr>



                                        </table>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="card">
                                        <table class="table table-hover box-body text-wrap table-bordered">
                                            <tr>
                                                <td class="td-title">Ghi chú:</td>
                                                <td>
                                                    <a href="#" class="updateInfo" data-name="comment" data-type="text"
                                                        data-pk="" data-title>
                                                        {{ order.comment }}
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="card collapsed-card">
                                        <div class="card-header border-transparent">
                                            <h3 class="card-title">Lịch sử đơn hàng</h3>
                                            <div class="order-info">
                                                <span> </span>
                                            </div>

                                        </div>

                                        <div class="card-body p-0 out">
                                            <div class="table-responsive">
                                                <table class="table m-0" id="history">
                                                    <tr>
                                                        <th>Nhân viên</th>
                                                        <th>Nội dung</th>
                                                        <th>Thời gian</th>
                                                    </tr>
                                                    <tr>


                                                        <td></td>
                                                        <td>
                                                            <div class="history">New order</div>
                                                        </td>
                                                        <td> {{ order.created_at }}</td>
                                                    </tr>


                                                    <tr v-for="changestatus in listchangestatus" :key="changestatus.key">
                                                        <td>{{ changestatus.user_name }}</td>
                                                        <td>
                                                            <div class="history">{{ changestatus.change }}</div>
                                                        </td>
                                                        <td>{{ changestatus.created_at }} </td>
                                                    </tr>

                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>


<script>
import axios from "axios";
import { defineComponent, reactive,ref } from "vue";
import Cookies from 'js-cookie';

export default defineComponent({


    data() {

        const token = Cookies.get('token');


        

        // const errors= ref({});
        const listitem = ref([]);
        const listchangestatus = ref([]);
        const order = reactive({
            id: "",
            first_name: "",
            last_name: "",
            phone_number: "",
            email: "",
            address: "",
            status: "",
            total: "",
            agent: "",
            comment: "",

        });
        const form = reactive({
            pk: "",
            name: "",
            value:"",  
        });



        const getOrder = () => {
            axios.get(`http://127.0.0.1:8000/api/orders/${this.$route.params.id}`,{
        headers: {
            'Authorization': 'Bearer ' + token
          } 
      })
                .then(function (response) {

                    console.log(response.data);
                    order.id = response.data.data.id;
                    order.first_name = response.data.data.first_name;
                    order.last_name = response.data.data.last_name;
                    order.phone_number = response.data.data.phone_number;
                    order.email = response.data.data.email;
                    order.address = response.data.data.address;
                    order.status = response.data.data.status;
                    order.total = response.data.data.total;
                    order.agent = response.data.data.agent;
                    order.comment = response.data.data.comment;
                    order.created_at = response.data.data.created_at;
                    listitem.value= response.data.listitem;

                })
                .catch(function (error) {
                    console.log(error);

            });
        };
        getOrder();



        const listChangestatus = () => {
            axios.get(`http://127.0.0.1:8000/api/listchangestatus/${this.$route.params.id}`,{
        headers: {
            'Authorization': 'Bearer ' + token
          } 
      })
                .then(function (response) {

                    console.log(response.data);
                    
                    listchangestatus.value= response.data.listchangestatus;

                })
                .catch(function (error) {
                    console.log(error);

            });
        };

        listChangestatus();



        return {
            form,
            token,
            listchangestatus,
            order,
            listitem,
            liststatus:[
                {value:1,text:'New'},
                {value:2,text:'Processing'},
                {value:3,text:'Hold'},
                {value:4,text:'Canceled'},
                {value:5,text: 'Done'},
                {value:6,text:'Failed'},
            ],
        };

    },

    methods: {
        updatestatus(){

            this.form.name = 'status';
            this.form.value = this.order.status;
            this.form.pk = this.order.id;
            console.log(this.form);
            axios.put("http://127.0.0.1:8000/api/orders/"+this.order.id,this.form,{
        headers: {
            'Authorization': 'Bearer ' + this.token
          } 
        })
          .then(response => {
            console.log(response.data);
            if(response.data.status == 200){
            alert(response.data.msg);
          }
          })
          .catch(errors => {
            // Xử lý lỗi nếu có
            this.errors = errors.response.data.error;
            console.error('Error submitting form:', errors);
          });
        }
           
    }

       

});
</script>




<style scoped></style>