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
        addItem() {
            var i = 4;
            while (i < 10) {
                app.todos.push({ id: i, text: app.inputText, completed: false })
                i++;
                break;
            }
        },
        deleteItem() {
            // if todos id = todos number then delete

            
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

function addItemFunctionToLocalStorage() {
    localStorage.setItem('item', inputText); console.log(inputText)
    console.log(321)
}

function addItem() {
    var input = message;
    localStorage.setItem('item', input);
}

function getItemFunctionFromLocalStorage() {
    let thisItem = localStorage.getItem('item');
    console.log(thisItem)
}
*/