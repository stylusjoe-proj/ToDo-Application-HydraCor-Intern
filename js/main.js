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
        inputText: ''
    },
    methods: {
        markComplete() {
            this.todos.completed = !this.todos.completed;
            console.log(test123)
        },
        getItem() {
            let thisItem = localStorage.getItem('item');
            console.log(thisItem)
        }
    },
    mounted() {
        this.$nextTick(function () {
            /* addItem() */
        });
    },
});


/*
function deleteItemFunction() {
    console.log(123)
}

function addItemFunction() {
    console.log(321)
}

function addItem() {
    var input = message;
    localStorage.setItem('item', input);
}

function getItem() {
    let thisItem = localStorage.getItem('item');
    console.log(thisItem)
}
*/