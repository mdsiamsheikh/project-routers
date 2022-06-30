<template>
    <div>
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
        
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './StockVew.vue';
    

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortflio'
            })
        },
        components: {
            appStock: Stock,
           
        }
    }
</script>