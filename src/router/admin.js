


const admin = [
    {
        path:"/admin",
        component:()=> import("../layouts/AdminLayout.vue"),
       
        children:[

            {
                path:"products",
                name:"admin-products",
                component: ()=> import("../pages/admin/product/ListProduct.vue"),
            },

            {
                path:"products/create",
                name:"admin-products-create",
                component: ()=> import("../pages/admin/product/ProductForm.vue"),
            },
            {
                path:"products/:id/edit",
                name:"admin-products-edit",
                component: ()=> import("../pages/admin/product/EditProduct.vue"),
            },


            {
                path:"categories",
                name:"admin-categories",
                component: ()=> import("../pages/admin/category/ListCategory.vue"),
            },
            {
                path:"categories/create",
                name:"admin-categories-create",
                component: ()=> import("../pages/admin/category/CategoryForm.vue"),
            },
            {
                path:"categories/:id/edit",
                name:"admin-categories-edit",
                component: ()=> import("../pages/admin/category/EditCategory.vue"),
            },

            {
                path:"orders",
                name:"admin-orders",
                component: ()=> import("../pages/admin/order/ListOrder.vue"),
            },


            {
                path:"orders/create",
                name:"admin-orders-create",
                component: ()=> import("../pages/admin/order/OrderForm.vue"),
            },
            {
                path:"orders/:id/edit",
                name:"admin-orders-edit",
                component: ()=> import("../pages/admin/order/EditOrder.vue"),
            },
            
        ]
    },
    {
        path:"/auth",
        component:()=> import("../layouts/AuthLayout.vue"),
        children:[
            {
                path:"login",
                name:"auth-login",
                component: ()=> import("../pages/admin/auth/LoginForm.vue"),
            },
            {
                path:"register",
                name:"auth-register",
                component: ()=> import("../pages/admin/auth/RegisterForm.vue"),
            }
        ],
    }
]

export default admin;