import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
export const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'list-product',
            component:()=>import('@/page/HomePage')
        },
        {
            path:'/chi-tiet-san-pham',
            name:'detail-product',
            component:()=>import('@/page/ProductDetail')
        },
        {
            path:'/gio-hang',
            name:'card-detail',
            component:()=>import('@/page/CardDetail')
        },
        {
            path:'/dang-nhap',
            name:'login',
            component:()=>import('@/page/LoginPage')
        },
        {
            path:'/dang-ky',
            name:'signup',
            component:()=>import('@/page/Register')
        },
        {
            path:'/order',
            name:'order',
            component:()=>import('@/page/OrderComponent')
        },
        {
            path:'/order/success',
            name:'success',
            component:()=>import('@/page/SuccessComponent')
        },
        {
            path:'/myaccount',
            name:'myaccount',
            component:()=>import('@/page/MyAccount')
        },
        {
            path:'*',
            component:()=>import('@/page/NotFound.vue')
        }

    ],
    mode: "history"
})