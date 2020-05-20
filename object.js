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
	todos: ['item 1','item 2','item 3','item 4'],
	//numItems: (this.todos).length, //why doesnt this work
	displayList: function(){
		console.log(this.todos);
	},
	addToList: function(x){
		console.log(this.todos.push(x))
	    this.displayList()
	},
	changeList: function(index, newElement){
		this.todos[index] = newElement
		this.displayList()
	},
	deleteList: function(startIndex, howMany){
		console.log(this.todos.splice(startIndex, howMany))
		this.displayList()
	}
};


todoList.displayList()
todoList.addToList('item 5')
todoList.changeList(0, 'item 1 updated')
todoList.deleteList(0,1)
