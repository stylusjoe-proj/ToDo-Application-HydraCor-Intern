let app = new Vue({
    el: "#vueApp",
    data: {
        todos: [
            {
                text: 'Configure OSX Dev. Environment',
                completed: true
            },
            {
                text: 'Learn Vue',
                completed: false
            },
            {
                text: 'Introduce Persistent Storage',
                completed: true
            }

        ],
        welcomeMessage: 'The Introductory Application',
        inputText: ''
    },
    methods: {
        addItem() {
            if (this.inputText != "") {
               
                app.todos.push({ text: this.inputText, completed: false })
            

            }
            else { }
        },
        deleteItem() {
            // if todos id = todos number then delete

            this.todos.splice(this.todos.length - 1, 1);
           

        }
    },
    mounted() {
        if (localStorage.getItem('new list') !== null) {
            try {
                this.todos = JSON.parse(localStorage.getItem('new list'));
            } catch (e) {
                
            }
        }
    },
    watch: {
        todos: function () {
            localStorage.setItem('new list', JSON.stringify(this.todos));
            console.log(this.todos)
            
        }
    }
    
});
