const app = Vue.createApp({
    data() {
        return {

            showBooks: true,
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            books: [
                { title: 'Peaky Blinders', author: 'Thomas Shekby', img: 'assets/1.jpg', isFav: true},
                { title: 'The Office', author: 'Michael Scott', img: 'assets/2.jpg', isFav: false},
                { title: 'Breaking Bad', author: 'Walter White', img: 'assets/3.jpg', isFav: true}
            ],
            age: 64,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
}
)

app.mount('#app')