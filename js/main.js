let app = new Vue({
    el: "#vueApp",
    data: {
        todos: [
            {
                id: 1,
                text: 'Configure OSX Dev. Environment',
                completed: true
            },
            {
                id: 2,
                text: 'Learn Vue',
                completed: false
            },
            {
                id: 3,
                text: 'Introduce Persistent Storage',
                completed: false
            }
        ],
        welcomeMessage: 'The Introductory Application',
        inputText:'blank'
    },
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed;
        }
    },
    mounted() {

    },
});

function deleteItemFunction() {
    console.log(123)
}

function addItemFunction() {
    console.log(321)
}
