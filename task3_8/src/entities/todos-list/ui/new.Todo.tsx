import { useForm } from "react-hook-form";
import './index.scss';
import { Todos } from "shared/typecode/models";
import { DevTool } from "@hookform/devtools";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "shared/api/todos-api";

const CreateTodos = () =>{
    const queryClient = useQueryClient()

    const form = useForm<Todos>()
    const { register, control, handleSubmit, formState, reset } = form
    const { errors } = formState;

    const create = useMutation({
        mutationFn: createTodo,
        onMutate: async (newTodo) => {
            await queryClient.cancelQueries({ queryKey: ['todos'] })

            const previousTodos = queryClient.getQueryData(['todos']) as Todos[]

            queryClient.setQueryData<Todos[]>(['todos'], (old) => [...(old || []), newTodo])

            return () => queryClient.setQueriesData(['todos'], previousTodos)
        }
    })

    const submit = async (todo: Todos) =>{
        todo.userId = "1"
        todo.id = Math.random()
        todo.completed = false

        create.mutate(todo)
        reset();
    };

    return(
        <div>
            <form onSubmit={handleSubmit(submit)} className="todo-form" >
                <div className="post-form__control">
                    <input 
                        type="text" 
                        id="title" 
                        className="todo-form__input" 
                        placeholder="Enter the task..."
                        { ...register("title", {
                            required: {
                                value: true,
                                message: "Field cannot be blank"
                            },
                            minLength: {
                                value: 6,
                                message: "Min length 5",
                            },
                            maxLength: {
                                value: 200,
                                message: "Max length 1000"
                            }
                        })}
                    />
                    <p className="todo-form__error-msg">{ errors.title?.message }</p>
                </div>
                <button type="submit" className="todo-form__btn">Add Todo</button>
            </form>
            <DevTool control={control}/>
        </div>
    )
};

export default CreateTodos;