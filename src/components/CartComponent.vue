<template>
    <div>
        <div class = "container mx-auto md:px-0 px-5">
            <h4 class = "block text-center text-2xl font-bold mt-2">Giỏ hàng</h4>
            <table class = "table-fixed w-full border p-4 cart-info">
                <tbody>
                    <tr class = "p-2">
                        <th class = "p-2">Sản phẩm</th>
                        <th class = "p-2">Số lượng</th>
                        <th class = "p-2">giá/đơn vị</th>
                        <th class = "p-2">Tổng giá</th>
                    </tr>
                    <tr class = "text-center">
                        <td class = "p-2">
                            <img src="" alt="">
                            <span class = "font-bold">Nike jordan 2</span>
                        </td>
                        <td class = "p-2">
                            <span class = "bi bi-plus cursor-pointer">+</span>
                            <input type="text" value ="1" class = "quantity border rounded w-12 text-center font-medium">
                            <span class = "bi bi-dash cursor-pointer">-</span>
                        </td>
                        <td class = "font-bold text-red-500 p-2">100</td>
                        <td class = font-bold text-red-500 p-2 total-item-price>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CartComponent',
        components: {

        }
    }
</script>