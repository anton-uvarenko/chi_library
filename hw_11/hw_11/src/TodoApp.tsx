import React, {ChangeEvent, ChangeEventHandler, Component, FormEventHandler, MouseEventHandler} from "react";

type input = {
    name: string,
}

type Todo = {
    isComplete: boolean,
    name: string,
}

enum TodosToShow {
    All,
    Complete,
    Unncomplete,
}

type State = {
    todos: Todo[],
    todosToShow: TodosToShow,
}

class TodoApp extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            todos: [],
            todosToShow: TodosToShow.All,
        }
    }

    handleSubmit = (e: React.FormEvent):FormEventHandler<HTMLFormElement> | any => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e?.target as HTMLFormElement).entries()) as input;
        this.setState(prevState => {
            return {
                todos: [...prevState.todos, {isComplete: false, name: data.name}],
                todosToShow: prevState.todosToShow,
            }
        })

        return ;
    }


    handleChangeTodoState = (index: number):ChangeEventHandler<HTMLInputElement> | any => {
        this.setState(prevState => {
            const stateUpdate = JSON.parse(JSON.stringify(prevState)) as State;
            const elem = stateUpdate.todos.at(index)
            if (elem) {
                elem.isComplete = !elem.isComplete;
            }

            return {
                todos: stateUpdate.todos,
                todosToShow: prevState.todosToShow,
            }

        })
        return ;
    }

    handleDeleteTodo = (index: number): MouseEventHandler<HTMLButtonElement> | any => {
        this.setState(prevState => {
            const stateUpdate = [...prevState.todos];
            stateUpdate.splice(index, 1);
            return {
                todos: stateUpdate,
            }
        })
        return ;
    }

    handleSelect = (event: React.FormEvent):ChangeEventHandler<HTMLSelectElement> | any => {
        const show = +(event?.target as HTMLInputElement).value as TodosToShow;
        this.setState(prevState => {
            return {
                todos: prevState.todos,
                todosToShow: show,
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name"/>
                    <input type="submit"/>
                </form>
                <select defaultValue={0} onChange={this.handleSelect}>
                    <option value={0}>all</option>
                    <option value={1}>completed</option>
                    <option value={2}>uncompleted</option>
                </select>
                <div>
                    {this.state.todos.map((todo, index) => {
                        if (this.state.todosToShow === TodosToShow.Complete && !todo.isComplete) {
                            console.log(todo.isComplete);
                            return;
                        }

                        if (this.state.todosToShow === TodosToShow.Unncomplete && todo.isComplete) {
                            return;
                        }

                        return (
                            <div>
                                <div>{todo.name}</div>
                                <input type="checkbox" checked={todo.isComplete} onChange={() => this.handleChangeTodoState(index)}/>
                                <button onClick={() => this.handleDeleteTodo(index)}>delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default TodoApp;