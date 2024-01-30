<template>
    <div class="container-fuild  col-12" style="background-color: antiquewhite;">


        <div class=" row align-items-center ">
            <div class="col-2 text-center" style="background-color: rgb(153, 79, 79);"> 
                <h1>S-Cart </h1>
            </div>
            <div class = 'col-8'></div>
            <div class="col-2 text-center "> 
                <b-button variant="outline-info" v-if="this.token" @click="logout" class="mb-2">
                <b-icon icon="power" aria-hidden="true"></b-icon> Logout
                </b-button>
            </div>
        </div>
</div>
</template >

<script>
    

import axios from "axios";
import { defineComponent,} from "vue";
import Cookies from 'js-cookie';
export default defineComponent({


  data() {

   
    const token = Cookies.get('token');
   
    return {
      token,
    };

  },
  methods: {
    
    logout(event){
        event.preventDefault();
        axios.get('http://127.0.0.1:8000/api/logout',{
        headers: {
            'Authorization': 'Bearer ' + this.token
          },
      }).then(response => {
            
          console.log(response.data);
          Cookies.remove('token');
          this.$router.push({ name: 'auth-login' });
        //   alert('Form submitted successfully!');
        })
        .catch(error => {
          // Xử lý lỗi nếu có
          console.error('Error submitting form:', error);
        });
    },
    }




});




</script>
