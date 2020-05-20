var todos = ['item 1','item 2','item 3','item 4']

function addToList(x){
	console.log(todos.push('item 5'))
	console.log(todos)
}

function showList(){
	console.log(todos)
}

function changeList(index, newElement){
	todos[index] = newElement
	console.log(todos)
}

function deleteList(startIndex, howMany){
	console.log(todos.splice(startIndex, howMany))
	console.log(todos)
}

showList()
addToList('item 5')
changeList(0, 'item 1 updated')
deleteList(1, 1)