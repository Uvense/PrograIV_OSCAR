<template>
    {{ data.map((d) => d.region ) }}
</template>

<script>
import requests from './requests';
export default({
    data(){
        return {
            data: [],
            firtIndex: 0,
            lastIndex:0,
            slicedData: []
            
        }
    },
    methods: {
        async getAllCountries(){
            const response = await fetch(requests.getAllCountries);
            this.data = await response.json();
        },
        async getbyRegion(){
            const response = await fetch(requests.getbyRegion(this.$store.state.currentRegion));
            this.data = await response.json();
        }
    },
    computed: {
        laodData(){
            if(this.$store.state.currentRegion == "All"){
                
            this.getAllCountries(0)
            this.lastIndex = this.$store.state.currentPage * 10;
            this.firtIndex = this.lastIndex - 10
            this.slicedData = this.data
            } else {
                 this.getbyRegion()
            }
            return this.Data
        },
        total() {

            get(){
                returt: this.$store.state.total
            },
            setInterval( value){
                this.$store.commit("SET_TOTAL", value)
            }
        }
    }
});

</script>
