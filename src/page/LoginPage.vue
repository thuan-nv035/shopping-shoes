<template>
  <div>
    <form  @submit.prevent = "_login()">
      <div class="bg-white w-full lg:w-1/3 mx-auto rounded-lg lg:my-20 px-4 py-4 shadow-lg">
        <input type='text' v-model = "email" placeholder="Email"
               class="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" />
        <input type='password' placeholder="Password" v-model = "password"
               class="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" />
        <button class="text-white py-3 rounded-lg w-full font-bold text-xl tracking-wider"
                style="background-color:#1977f2;" @click = "_getLoggedUserInfo()">Log
          In</button>
        <div class="flex justify-center my-4">
          <a class="text-blue-500 text-sm" href="#">Forgot account?</a>
        </div>
        <hr class="">
        <div class="flex justify-center my-6">
          <router-link :to="{name: 'signup'}">
            <button class="text-white h-12 rounded px-6 font-bold" style="background-color:#54b72b">Create
              new Account </button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import {authService} from "../service/authService";
  export default {
    name: 'LoginComponent',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async _login() {
        try {
          const resp = await authService.doLogin({
            email: this.email,
            password: this.password
          })
          const data = resp.data;
          localStorage.setItem("token", data.token);
          alert('Đăng nhập thành công');
          window.location.href = '/';
        } catch (e) {
          console.log(e)
          alert('Email chưa được đăng ký hoặc mật khẩu không đúng')
        }
      },
    }
  }
</script>