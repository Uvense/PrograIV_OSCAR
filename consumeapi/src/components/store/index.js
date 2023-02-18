import createStore from 'vuex'({
    state: { 
         curretRegion: 'ALL'
         total = 0,
         currentPage: 1
    },
    getter: {
        curretRegion: state => state.currengion,
        currentPage: state => state.currentPage

    },
    mutation:{
        SET_REGION: (state, region)=> this.state.curretRegion=region
     SET_CURRENTPAGE: (state, currentPage) => state.currentPage = currentPage
    }
})