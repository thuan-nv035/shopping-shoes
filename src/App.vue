<template>
    <div class="container mx-auto">

        <NavMenu></NavMenu>
        <router-view></router-view>
        <Footer></Footer>

    </div>
</template>

<script>
    import NavMenu from './page/NavMenu'
    import Footer from './page/Footer'

    export default {
        name: 'App',
        components: {
            NavMenu,
            Footer
        }
    }
</script>

<style>

</style>
