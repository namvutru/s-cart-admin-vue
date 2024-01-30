<template>
    <div>
        <h1>Login</h1>
        <!-- <div class="alert alert-danger" >
            <p>There was an error, unable to sign in with those credentials.</p>
        </div> -->
        <div v-if="error" class="alert alert-danger">
            <p>{{ error }}</p>
        </div>
        <form autocomplete="off" @submit="onSubmit" method="post">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" v-model="email" id="email" class="form-control" placeholder="Email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" id="password" placeholder="Password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-default">Sign in</button>
        </form>
    </div>
</template>

<script>


import axios from "axios";
import { defineComponent} from "vue";
import Cookies from 'js-cookie';

export default defineComponent({


    data() {

        return {
            email:"",
            password:"",
            error:"",
        };

    },
    methods: {
        onSubmit(event) {
        event.preventDefault();
  
        const formData = new FormData();
        formData.append('email', this.email);
        formData.append('password', this.password);

        
   
        axios.post("http://127.0.0.1:8000/api/login", formData)
          .then(response => {
            console.log(response.data);
            const accessToken = response.data.token;
            Cookies.set('token', accessToken, { expires: 7 });
            if(response.data.token) this.$router.push({ name: 'admin-products' });
            // alert('Form submitted successfully!');
            else this.error = response.data.message;
          })
          .catch(errors => {
            console.error('Error submitting form:', errors);
          });
      },
    }

});

   


</script>