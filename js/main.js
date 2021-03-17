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
                completed: true
            }

        ],
        welcomeMessage: 'The Introductory Application',
        inputText: '',
        inputNumber: 0
    },
    methods: {
        markComplete() {
            /*
            this.$nextTick(function () {
                this.$set(todos.completed, this.inputNumber, !todos.completed);
                Vue.set(todos.completed, this.inputNumber, !todos.completed)
                this.$forceUpdate();
            });
            */
        },
        addItem() {
            
            var i = 4;
            if (this.inputText != "") {
                while (i < 10) {
                    localStorage.setItem(i, this.inputText);
                    let thisItem = localStorage.getItem(i);
                    app.todos.push({ id: i, text: thisItem, completed: false })
                    i++;
                    break;
                }
            }
            else { }
        },
        deleteItem() {
            // if todos id = todos number then delete
        }
    },
    mounted() {
        
    }
    
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