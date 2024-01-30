<template>
    <aside>
        <section class="sidebar" style="height: auto;">

            <!-- Sidebar user panel (optional) -->
            <div class="row user-panel align-items-center">
                <div class="col-4 ">
                    <b-img src="http://127.0.0.1:8000/vendor/laravel-admin/AdminLTE/dist/img/user2-160x160.jpg"
                        rounded="circle" alt="Circle image" heigh="50" width="50"></b-img>
                </div>
                <div class="col-8 ">
                    <p>{{ user.name }}</p>
                </div>
            </div>

            <!-- search form (Optional) -->
            <form class="sidebar-form" style="overflow: initial;" onsubmit="return false;">
                <div class="input-group">
                    <input type="text" autocomplete="off" class="form-control autocomplete" placeholder="Search...">
                    <span class="input-group-btn">
                        <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i
                                class="fa fa-search"></i>
                        </button>
                    </span>

                </div>
            </form>
            <!-- /.search form -->
            <nav class="navbar">

                <!-- Links -->
                <ul class="navbar-nav flex-fill">
                    <li class="nav-item "><router-link :to="{ name: 'admin-products' }" class="nav-link"><b-icon
                                icon="archive" aria-hidden="true"></b-icon> Product</router-link></li>
                    <li class="nav-item "><router-link :to="{ name: 'admin-categories' }" class="nav-link"><b-icon
                                icon="list" aria-hidden="true"></b-icon> Category</router-link></li>
                    <li class="nav-item "><router-link :to="{ name: 'admin-orders' }" class="nav-link"><b-icon
                                icon="cart-check" aria-hidden="true"></b-icon> Order</router-link></li>
                    <!-- <li class="nav-item "><router-link :to="{ name: 'admin-orders' }" class="nav-link"><b-icon
                                icon="cart-check" aria-hidden="true"></b-icon> Brand</router-link></li> -->





                    <!-- <li class="nav-item ">

                        <a class="nav-link " href="#"><b-icon icon="archive" aria-hidden="true"></b-icon> Product</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link " href="#"><b-icon icon="list" aria-hidden="true"></b-icon> Category</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link " href="#"><b-icon icon="cart-check" aria-hidden="true"></b-icon> Order</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link " href="#"><b-icon icon="geo-alt-fill" aria-hidden="true"></b-icon> Brand</a>
                    </li> -->
                </ul>

            </nav>
            <!-- /.sidebar-menu -->
        </section>
    </aside>
</template>
<script>


import axios from "axios";
import { defineComponent,reactive} from "vue";
import Cookies from 'js-cookie';
export default defineComponent({


  data() {
    
    const user = reactive ({
        name:"",
    })
    
    const token = Cookies.get('token');
    const getuser = () => {
            axios.get("http://127.0.0.1:8000/api/user",{
        headers: {
            'Authorization': 'Bearer ' + token
          } 
      })
                .then(function (response) {
                    console.log(response.data);
                    user.name = response.data.data.name;
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        getuser();
    return {
      token,
      user,
    };

  },

});

</script>


<style scoped>
.sidebar {
    padding-bottom: 10px;
}

.nav-link {
    color: black !important;
    /* Đặt màu chữ là đen */
    text-decoration: none !important;
    /* Tắt gạch chân */
}

/* Một số tùy chỉnh thêm nếu cần */
.nav-link:hover {
    color: rgb(64, 18, 233) !important;
    /* Đổi màu chữ khi di chuột qua liên kết */
}

.user-panel {
    position: relative;
    width: 100%;
    padding: 10px;
    overflow: hidden;
}

.nav-item {
    padding: 12px 15px 12px 15px;
    display: block;
}
</style>

 
