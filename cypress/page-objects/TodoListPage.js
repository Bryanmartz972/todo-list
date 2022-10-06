class TodoListPage {
	elements = {
		titleText: () => cy.get('[data-cy="todolist-title"]'),
		titleTaskInput: () => cy.get('[data-cy="titletask-input"]'),
		descriptionTaskInput: () => cy.get('[data-cy="descriptiontask-input"]'),
		addTaskButton: () => cy.get('[data-cy="addtask-button"]'),
		tasksContainer: () => cy.get('[data-cy="tasks-container"]'),
		deleteTaskButton: () => cy.get('[data-cy="deletetask-button"]').first(),
	}

	typeTitleTaskIput(taskTitle) {
		this.elements.titleTaskInput().type(taskTitle)
	}

	typeDescriptionTaskInput(taskDescription) {
		this.elements.descriptionTaskInput().type(taskDescription)
	}

	clickAddTaskButton() {
		this.elements.addTaskButton().click()
	}

	clickDeleteTaskButton() {
		this.elements.deleteTaskButton().click()
	}
}

module.exports = new TodoListPage()
