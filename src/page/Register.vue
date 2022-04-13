<template>
    <div>
        <form action="" @submit.prevent="signup">
            <div class="bg-grey-lighter min-h-screen flex flex-col mt-2">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                                v-model = "name"
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="name" id="name"
                                placeholder="Name"/>
                        <span id="name-error"></span>
                        <input
                                v-model = "fullname"
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname" id="fullname"
                                placeholder="Full Name"/>
                        <span id="fullname-error"></span>
                        <input
                                v-model = "phone"
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="phone" id="phone"
                                placeholder="Phone Number"/>
                        <span id="phone-error"></span>
                        <input
                                v-model = "email"
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email" id="email"
                                placeholder="Email"/>
                        <span id="email-error"></span>
                        <input
                                v-model = "password"
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password" id="password"
                                placeholder="Password"/>
                        <span id="password-error"></span>
                        <button
                                type="submit"
                                class="w-full text-center py-3 rounded hover:bg-green-dark focus:outline-none my-1"
                        >Create Account
                        </button>

                        <div class="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div class="text-grey-dark mt-6">
                        Already have an account?
                        <a class="no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import {signupService} from "@/service/signupService";

    export default {
        name: 'RegisterComponent',
        data() {
            return {
                name: '',
                fullName: '',
                phone: '',
                email: '',
                password: '',
                errors: []
            }
        },
        components: {},

        methods: {
            async signup() {
                try {
                    await signupService.postUser({
                        name: this.name,
                        full_name: this.fullName,
                        phone: this.phone,
                        email: this.email,
                        password: this.password,
                    });
                    alert('dang ky thanh cong')
                    this.$router.push({name: 'login'});
                } catch (e) {
                    console.log(e)
                }
            },
        },

    }
</script>