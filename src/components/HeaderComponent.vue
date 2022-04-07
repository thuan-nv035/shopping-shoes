<template>
    <div>
        <div class=" w-full h-24 shadow-lg shadow-black-500/50 flex md:space-x-6 md:px-0 px-5 justify-between items-center ">
            <div class="md:order-1 order-2 w-32 pl-6">
                <img class = "h-24" src="https://www.designersvalley.com/assets/cache/rauf_vector/vector/300x300-6bca9a8bfa849954.jpg" alt="logo">
            </div>
            <div class="md:order-2 order-1 pr-6 flex space-x-2 uppercase font-semibold items-center">
                <div class=".pr-4"><a href="">Home</a></div>
                <div class=".pr-4"><a href="">Danh mục</a></div>
                <div class=".pr-4"><a href="">Đăng ký</a></div>
                <div class=".pr-4"><a href="">Đăng nhập</a></div>
                <div class="relative">
                    <div class="w-8"><i class="fa-solid fa-cart-arrow-down"></i></div>
                    <div
                            class="bg-red-400 text-white -top-4 -right-2 absolute rounded-full text-sm w-6 h-6 flex items-center justify-center cart-item-counter">
                        0
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent",
        components: {

        }
    }
</script>