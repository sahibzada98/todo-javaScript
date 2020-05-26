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
		console.log(this.todos);
		console.log("Number of items in todo List: ", this.todos.length)
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
todoList.changeList(0, 'item 1 updated')
todoList.deleteList(0,1)
