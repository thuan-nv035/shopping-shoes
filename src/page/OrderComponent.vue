<template>
    <div class="container mx-auto">
        <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">

            <div class="flex justify-start item-start space-y-2 flex-col">
                <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order
                    </h1>
            </div>
            <div
                    class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div
                            class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">

                        <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800 mb-5">
                            My Cart</p>

                        <div    v-for="(cartItem, index) in carts" :key="index"
                                class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full mb-6"
                                >
                            <div class="w-full md:w-40">
                                <img class="w-full hidden md:block" :src="cartItem.image.full_image_path"  alt="dress"/>
                                <img class="w-full md:hidden" src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png" alt="dress"/>
                            </div>
                            <div class="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                                <div class="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                     {{cartItem.name}}   </h3>

                                </div>
                                <div class="flex justify-between space-x-8 items-start w-full">
                                    <p class="text-base dark:text-white xl:text-lg leading-6">${{ cartItem.price }} </p>
                                    <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800"></p>
                                    <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                                        ${{ cartItem.quantity * cartItem.price }}    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                            class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                            <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                            <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div class="flex justify-between w-full">
                                    <p class="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">${{ subtotal }}</p>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base dark:text-white leading-4 text-gray-800">Discount <span
                                            class="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span>
                                    </p>
                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">-${{ discount }} (50%)</p>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600"></p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">${{ total }}</p>
                            </div>
                        </div>
                        <div
                                class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                            <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
                            <div class="flex justify-between items-start w-full">
                                <div class="flex justify-center items-center space-x-4">
                                    <div class="w-8 h-8">
                                        <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png"/>
                                    </div>
                                    <div class="flex flex-col justify-start items-center">
                                        <p class="text-lg leading-6 dark:text-white font-semibold text-gray-800">DPD Delivery<br/><span
                                                class="font-normal">Delivery with 24 Hours</span></p>
                                    </div>
                                </div>
                                <p class="text-lg font-semibold leading-6 dark:text-white text-gray-800">$8.00</p>
                            </div>
                            <div class="w-full flex justify-center items-center">
                                <button @click = "order"
                                        class="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                                    DẶT HÀNG
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {orderService} from '@/service/orderService'

    export default {
        name: "OrderComponent",
        components: {},
        data() {
            return {
                listOrder: [],
                users: [],
                carts: [],
                subtotal: 0,
                discount: 0.5,
                shipping: 0.1,
                total: 0,
                newCart: '',
            }
        },
        methods: {
            async order() {
                try {
                    let order = {
                        sub_total: this.subtotal,
                        total: this.total,
                        tax: this.subtotal * 0.1,
                        note: 'không có',
                        address: 'không có',
                        phone: this.users.phone,
                        name: this.users.name,
                        products: this.newCart
                    }
                    orderService.makeOrder(order)
                    window.location.href = '/order/success';
                } catch (error) {
                    console.log(error)
                    alert('Đặt hàng thất bại')
                }
            }
        },
        mounted() {
            if (localStorage.getItem('carts')) {
                this.carts = JSON.parse(localStorage.getItem('carts'))
            }
            this.subtotal = this.carts.reduce((total, item) => {
                return total + item.price * item.quantity
            }, 0)
            this.discount = this.subtotal * this.discount
            this.shipping = this.subtotal * this.shipping
            this.total = this.subtotal - this.discount + this.shipping
            this.newCart = this.carts.map(item => {
                return {
                    id: item.id,
                    quantity: item.quantity,
                    price: item.price,
                    name: item.name
                }
            })
        }
    }
</script>

<style scoped>

</style>