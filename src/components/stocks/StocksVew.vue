<template>
    <div>
        <app-stock v-for="stock in stocks" :key="stock" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './StockVew.vue';

    export default {
        components: {
            appStock: Stock
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>