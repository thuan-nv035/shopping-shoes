<template>
    <div>
        <div class="container mx-auto md:px-0 px-5">
            <div class="mx-36 my-10">
                <div class="grid grid-cols-7 space-x-5">
                    <div class="col-span-3">
                        <div class="thumb">
                            <img src="http://128.199.211.17/storage/products/16320604730defy-all-day-training-shoe-LtD2G1.jpeg"
                                 alt="Nike Jordan 2">
                        </div>
                        <br>
                        <div class="flex">
                            <img class="w-20"
                                 src="http://128.199.211.17/storage/products/16320604730defy-all-day-training-shoe-LtD2G1.jpeg"
                                 alt="">
                        </div>
                    </div>
                    <div class="col-span-4 space-y-5">
                        <h1 class="text-3xl font-bold">Nike Jordan 2</h1>
                        <p class="font-bold text-2xl text-red-500 text-left">
                            <span>100</span>
                        </p>
                        <div class="flex space-x-2 items-center font-bold">
                            <span class="bi bi-plus cursor-pointer">+</span>
                            <input type="text" value="1" class="quantity border rounded w-12 text-center font-medium">
                            <span class="bi bi-dash cursor-pointer">-</span>
                            <button class="border border-gray-800 text-black p-2 text-xl">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div class="mt-20">
                    <h2 class="font-bold text-2xl">Mô tả sản phẩm</h2>
                    <p>ake on everyday challenges in the Nike Defy All Day. Leather up top and rubber traction on the
                        bottom create a durable design that lasts the rigours of tough training sessions. Soft
                        cushioning carries comfort through your workout—or a day of getting things done.</p>
                    <ul>
                        <li>Colour Shown: White/University Red/Black</li>
                        <li>Style: DJ1196-101</li>
                    </ul>
                </div>
                <div class = "mt-20">
                    <h4 class = "text-2xl font-bold">Có thể bạn sẽ thích</h4>
                    <div class = "grid grid-cols-1 md:grid-cols-5 md:space-x-6 space-y-6 md:space-y-0 mt-5">
                        <a href="" class = "bg-white shadow pb-2 col-span-1">
                            <div>
                                <img src="http://128.199.211.17/storage/products/164923446804f37fca8-6bce-43e7-ad07-f57ae3c13142%20(1).png" alt="" class = "z-10 w-full h-50 object-cover">
                                <div class = "space-y-4 mt-5 px-4">
                                    <div class = "flex justify-between">
                                        <h4 class = "uppercase font-extrabold text-xl text-left">NMD 2</h4>
                                        <button>
                                            <i class="fa-regular fa-heart text-xl"></i>
                                        </button>
                                    </div>
                                    <p class = "font-bold text-2xl text-red-500 text-left"><span>100</span></p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ProductDetailComponent',
        Components: {}
    }

</script>

