<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <ProductComponent></ProductComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
    import HeaderComponent from "@/components/HeaderComponent";
    import ProductComponent from "@/components/ProductComponent";
    import FooterComponent from "@/components/FooterComponent";
    export default {
        name: 'HomePage',
        components: {
            HeaderComponent,
            ProductComponent,
            FooterComponent
        }
    }
</script>