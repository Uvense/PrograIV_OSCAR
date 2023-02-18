<template>

</template>
<script>
import Paginate  from 'vuejs-paginate-next'
export default ({
    data(){
      return{
        pageCount: 0
      }  
    },
components: {
    Paginate
},
computed: {
    pageCounter(){
        this.pageCount  = Math.ceil(this.$store.$state.total/10);
        return this.pageCount
    },
    currentPage: {
        get() {
            
        }
    }
}
})
</script>