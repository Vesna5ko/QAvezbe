/// <reference types="cypress" />

import * as todoPage from 'page-objects/todo-page'

describe('visual validation',() =>{
before(() => todoPage.navigate())

it('should look good', ()=>{
    todoPage.addTodo('Clean room')
    todoPage.addTodo('Lear something')

    todoPage.toggleTodo(0)
})
})