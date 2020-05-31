
			var todoList = {
	todos: [],
	

	addToList: function(todoText){
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},
	changeList: function(index, updatedText){
		this.todos[index].todoText = updatedText;
	},
	deleteList: function(startIndex, howMany){
		this.todos.splice(startIndex, howMany);
	},
	toggleCompleted: function(index){
		var todo = this.todos[index];
		todo.completed = !todo.completed
	},
	toggleAll: function(){
		//if everything is true, make everything false; otherwise make everything true;
		// so the only case where we change everything to false is when all is true
		// we can keep a boolean to check if everything is true or not; set to true; 
		// changes to false as soon as smth is false;
		// then we put an if(true) loop thru and make all false; else all true
		check = true
		// for(i = 0; i < this.todos.length; i++){
		// 	if(this.todos[i].completed == false) check = false
		// }

		this.todos.forEach(function(todos){
			if(todos.completed === false) check = false;
			//console.log('first check')
		});

		if(check){
			this.todos.forEach(function(todos){ 
				todos.completed = false;
				//console.log('second check')
			});
		} else {
			this.todos.forEach(function(todos){ 
				todos.completed = true;
				//console.log('third check')
			});
		}
		
	}

};



var handlers = {

	toggleAll: function(){
		todoList.toggleAll();
		view.displayTodos();
	},
	addToList: function(){
		var addTextInput = document.getElementById("addTextInput")
		todoList.addToList(addTextInput.value);
		//var todoUl = document.querySelector('ul');
		//var todoLi = document.createElement('li');
		//todoLi.value = addTextInput.value;
		//todoUl.appendChild(todoLi);
		addTextInput.value = '';
		view.displayTodos(); // 0----

		//var button = document.createElement("button");
		//button.innerText = "Do Something";
		//document.body.appendChild(btn);  

	},
	changeList: function(){
		var changeIndexInput = document.getElementById("changeIndexInput")
		var changeTextInput = document.getElementById("changeTextInput")
		todoList.changeList(changeIndexInput.value, changeTextInput.value)
		changeTextInput.value = ''
		changeIndexInput.value = ''
		view.displayTodos(); // 0----
	},
	deleteList: function(deleteIndex){
		todoList.deleteList(deleteIndex, 1)
		view.displayTodos(); // 0----

	},
	toggleCompleted: function(toggleIndex){
		//var toggleIndexInput = document.getElementById("toggleIndexInput")
		todoList.toggleCompleted(toggleIndex);
		//toggleIndexInput.value = '';
		view.displayTodos(); // 0----
	}
};

var view = {
	displayTodos: function(){
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		// for (i = 0; i < todoList.todos.length; i++){
		// 	var todoLi = document.createElement('li');
		// 	var todo = todoList.todos[i];
		// 	var todoTextWithCompletion = '';

		// 	if(todo.completed == true){
		// 		todoTextWithCompletion = '(x)  ' + todo.todoText;
		// 	} else {
		// 		todoTextWithCompletion = '( )  ' + todo.todoText;
		// 	}

		// 	todoLi.id = i;
		// 	todoLi.textContent = todoTextWithCompletion;
		// 	todoLi.appendChild(this.createDeleteButton());
		// 	todoLi.appendChild(this.createToggleButton());
		// 	todosUl.appendChild(todoLi);
		// }
		todoList.todos.forEach(function(todos, index){
		 	var todoLi = document.createElement('li');
		// 	var todo = todoList.todos[i];
		    var todoTextWithCompletion = '';

			if(todos.completed == true){
				todoTextWithCompletion = '(x)  ' + todos.todoText;
			} else {
				todoTextWithCompletion = '( )  ' + todos.todoText;
			}

			todoLi.id = index;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todoLi.appendChild(this.createToggleButton());
			todosUl.appendChild(todoLi);

		}, this)
	},
	createDeleteButton: function(){

		var deleteButton = document.createElement('button');
		deleteButton.textContent = "Delete";
		deleteButton.className = "deleteButton";
		//variable called delete button
		// want to return the button
		return deleteButton;
	},
	createToggleButton: function(){
		var toggleButton = document.createElement('button');
		toggleButton.textContent = "Toggle";
		toggleButton.className = "toggleButton";
		return toggleButton;

	},
	setUpEventListeners: function(){
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(event) {
		//console.log(event.target.parentNode.id);

		//Get the element that was clicked on
		var clickedElement = event.target;
		if (clickedElement.className == 'deleteButton'){
			//coz we are getting the li as a string and we want to change it to a number
			handlers.deleteList(parseInt(clickedElement.parentNode.id));

			}
			if (clickedElement.className == 'toggleButton'){
				handlers.toggleCompleted(parseInt(clickedElement.parentNode.id));
				//console.log(clickedElement.parentNode.id);
			}
		});
	}

};

view.setUpEventListeners();

