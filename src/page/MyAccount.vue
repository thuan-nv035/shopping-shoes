<template>
    <div class="h-full mt-5">
        <div class="border-b-2 block md:flex">

<!--            <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">-->
<!--                <div class="flex justify-between">-->
<!--                    <span class="text-xl font-semibold block">My Profile</span>-->
<!--                    <a href="#" @click="edit"-->
<!--                       class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Update</a>-->
<!--                </div>-->

<!--                <div v-for="(userItem, userIndex) in user" :key="userIndex">-->
<!--                    <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>-->
<!--                    <div class="flex">-->
<!--                        <h2>{{userItem.name}}</h2>-->
<!--                    </div>-->
<!--                    <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>-->
<!--                    <div class="flex">-->
<!--                        <h2>{{userItem.phone}}</h2>-->
<!--                    </div>-->
<!--                    <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>-->
<!--                    <div class="flex">-->
<!--                        <h2>{{userItem.email}}</h2>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

            <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                <div class="flex justify-between">
                    <span class="text-xl font-semibold block">My Profile</span>
                    <a href="#" @click="edit()"
                       class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Update</a>
                </div>
                <div class="rounded  shadow p-6">
                    <div class="pb-6">
                        <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>
                        <div class="flex">
                            <input id="username" class="border-1  rounded-r px-4 py-2 w-full" type="text" v-model="name"
                                   placeholder="Jane Name"/>
                        </div>
                    </div>
                    <div class="pb-6">
                        <label for="phone" class="font-semibold text-gray-700 block pb-1">Phone</label>
                        <div class="flex">
                            <input id="phonenumber" class="border-1  rounded-r px-4 py-2 w-full" type="text"
                                   v-model="phone"
                                   placeholder="0969 899 333"/>
                        </div>
                    </div>
                    <div class="pb-4">
                        <label for="about" class="font-semibold text-gray-700 block pb-1">Email</label>
                        <input id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" v-model='email'
                               placeholder="example@example.com"/>
                        <span class="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {authService} from "@/service/authService";
    import {userService} from "@/service/userService";

    export default {
        name: "MyAccount",
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                user: []
            }
        },
        components: {},
        methods: {
            async edit() {
                try {
                     await authService.putUser({
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                    })

                    alert('Updated')
                } catch (e) {
                    console.log(e)
                    alert('false')
                }
            },
            async getData() {
                try {
                    const resp = await userService.getDataUser();
                    this.userService = resp.data.user;
                    console.log(this.userService);

                } catch (e) {
                    console.log(e);
                }
            },
        },
        mounted() {
            this.getData()
        }
    }
</script>

<style scoped>

</style>