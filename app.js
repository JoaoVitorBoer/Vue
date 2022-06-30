const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Zuzu Baladero',
            age: 64
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },

    }

})

app.mount('#app')