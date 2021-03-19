Vue.prototype.$appVariable = 4;
Vue.prototype.$arrayIndex = 0;

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
        inputText: ''
    },
    methods: {
        addItem() {
            if (this.inputText != "") {
                    localStorage.setItem(this.$appVariable, this.inputText);
                    let thisItem = localStorage.getItem(this.$appVariable);
                    app.todos.push({ id: this.$appVariable, text: thisItem, completed: false })
                    this.$appVariable++;
                
            }
            else { }
        },
        deleteItem() {
            // if todos id = todos number then delete
            
                this.todos.splice(this.$arrayIndex, 1);
                this.$arrayIndex++;
            
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