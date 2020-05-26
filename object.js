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
	},
	toggleAll: function(){
		//if everything is true, make everything false; otherwise make everything true;
		// so the only case where we change everything to false is when all is true
		// we can keep a boolean to check if everything is true or not; set to true; 
		// changes to false as soon as smth is false;
		// then we put an if(true) loop thru and make all false; else all true
		check = true
		for(i = 0; i < this.todos.length; i++){
			if(this.todos[i].completed == false) check = false
		}
		if(check){
			for(i = 0; i < this.todos.length; i++){
				this.todos[i].completed = false
			}
		} else {
			for(i = 0; i < this.todos.length; i++){
				this.todos[i].completed = true
			}
		}
		this.displayList()
	}

};

// testing script begins here

todoList.displayList()
todoList.addToList('item 1')
todoList.toggleCompleted(0)
todoList.addToList('item 2')
todoList.addToList('item 3')
todoList.toggleCompleted(1)
todoList.toggleCompleted(2)
todoList.toggleAll()
todoList.toggleAll()
//todoList.changeList(0, 'item 1 updated')
//todoList.deleteList(0,1)
