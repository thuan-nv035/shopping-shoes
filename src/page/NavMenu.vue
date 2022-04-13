<template>
    <div class="container mx-auto">
        <div class="flex h-20 shadow-lg shadow-black-500/50 justify-between items-center px-10">
            <router-link :to ="{name: 'list-product'}">
                <img class = "h-20" src="https://www.designersvalley.com/assets/cache/rauf_vector/vector/300x300-6bca9a8bfa849954.jpg" alt="logo">
            </router-link>
            <div class="flex items-center gap-4">
                <div class="md:inline-block hidden">
                    <ul class="flex items-center gap-4 ">
                        <li><a href="">Trang chủ</a></li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                            <!-- Dropdown menu -->
                            <div id="dropdownNavbar" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <div class="py-1">
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="">Sản phẩm</a></li>
                        <router-link :to="{name: 'myaccount'}">
                            <li><a href="">My Account</a></li>
                        </router-link>
                        <router-link :to="{name : 'signup'}">
                            <li><a href="">Đăng ký</a></li>
                        </router-link>
                        <router-link :to="{name: 'login'}">
                            <li><a href="">Đăng nhập</a></li>
                        </router-link>
                    </ul>
                </div>
                <router-link :to="{name:'card-detail'}">
                    <div class="md:hidden inline-block ">
                        <i class="fa-solid fa-bars text-2xl"></i>
                    </div>
                    <div class=" relative">
                        <!--                        <span class="w-6 h-6 rounded-full flex justify-center -top-3 -right-3 items-center bg-green-400 absolute ">0</span>-->
                        <i class="fa-solid fa-cart-plus text-2xl"></i>
                        <!--          <img class="w-14 h-14" src="./../assets/cart.svg" alt="">-->
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavMenu"
    }
</script>

<style scoped>

</style>