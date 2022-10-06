import TodoListPage from '../page-objects/TodoListPage'

describe('Testing the Todo List page - Happy path scenarios', () => {
	before(() => {
		cy.visit('/')
	})

	it('Should be located in the Todo List page', () => {
		cy.url().should('include', '/todo-list')
		TodoListPage.elements.titleText().should('be.visible').and('exist')
	})

	it('Should add two tasks to the list', () => {
		TodoListPage.typeTitleTaskIput('Task 1')
		TodoListPage.typeDescriptionTaskInput('Description 1')
		TodoListPage.clickAddTaskButton()

		TodoListPage.elements.tasksContainer().should('be.visible').and('exist')
		TodoListPage.elements.tasksContainer().children().should('have.length', 1)

		TodoListPage.typeTitleTaskIput('Task 2')
		TodoListPage.typeDescriptionTaskInput('Description 2')
		TodoListPage.clickAddTaskButton()

		TodoListPage.elements.tasksContainer().children().should('have.length', 2)
		TodoListPage.elements.tasksContainer().children().eq(0).should('contain', 'Task 1')
		TodoListPage.elements.tasksContainer().children().eq(1).should('contain', 'Task 2')
	})

	it('Should delete a task to the list', () => {
		TodoListPage.elements.tasksContainer().children().should('have.length', 2)
		TodoListPage.clickDeleteTaskButton()
		TodoListPage.elements.tasksContainer().children().should('have.length', 1)
		TodoListPage.clickDeleteTaskButton()
		TodoListPage.elements.tasksContainer().children().should('have.length', 0)
	})
})

describe('Testing the Todo List page - Sad path scenarios', () => {
	before(() => {
		cy.visit('/')
	})

	it('Should not create a task if title is empty', () => {
		TodoListPage.typeDescriptionTaskInput('Description 1')
		TodoListPage.clickAddTaskButton()
		TodoListPage.elements.tasksContainer().children().should('have.length', 0)
	})
})
