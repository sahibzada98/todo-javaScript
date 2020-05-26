/*
var myPerson = {
	name: 'Sahibzada Ahmad Masood',
	age: 22,
	address: '803-350 Prince Arthur Ouest'
};
console.log(myPerson)

*/

//Playing around with objects from JS and implementing ways from watchandcode.com

var todoList = {
	todos: [],
	
	displayList: function(){
		if (this.todos.length == 0){
			console.log("The todo List is empty.")
		} else {
			for (i = 0; i < this.todos.length; i++){
				if (this.todos[i].completed == false){
					console.log("( ) ", this.todos[i].todoText)
				} else {
					console.log("(x) ",this.todos[i].todoText)
				}
			}
			console.log("Number of items in todo List: ", this.todos.length)
		}
	},
	addToList: function(todoText){
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	    this.displayList()
	},
	changeList: function(index, updatedText){
		this.todos[index].todoText = updatedText
		this.displayList()
	},
	deleteList: function(startIndex, howMany){
		console.log(this.todos.splice(startIndex, howMany))
		this.displayList()
	},
	toggleCompleted: function(index){
		var todo = this.todos[index];
		todo.completed = !todo.completed
		this.displayList()
	}

};


todoList.displayList()
todoList.addToList('item 5')
todoList.toggleCompleted(0)
todoList.changeList(0, 'item 1 updated')
todoList.deleteList(0,1)
