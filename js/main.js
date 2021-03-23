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
     
    },
    watch: {
        todos: function () {
            localStorage.setItem('new list', JSON.stringify(this.todos));
            console.log(this.todos)
            
        }
    }
    
});

/*
    watch: {
        todos: function () {
            localStorage.setItem(this.$storageVariable, this.todos);
            let anyItems = localStorage.getItem(this.$storageVariable);
            this.todos = anyItems;
            JSON.parse(anyItems);
        }
    }


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

localStorage.setItem(this.$appVariable, this.inputText);
                    let thisItem = localStorage.getItem(this.$appVariable);
                    app.todos.push({text: thisItem, completed: false })
                    this.$appVariable++;
*/