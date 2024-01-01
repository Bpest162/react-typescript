import { useForm } from "react-hook-form";
import './index.scss';
import { Posts } from "shared/typecode/models";
import { DevTool } from "@hookform/devtools";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPosts } from "shared/api/posts-api";


const CreatePosts = () =>{
    const queryClient = useQueryClient()

    const form = useForm<Posts>()
    const { register, control, handleSubmit, formState, reset } = form
    const { errors } = formState;

    const create = useMutation({
        mutationFn: addPosts,
        onMutate: async (newPost) => {
            await queryClient.cancelQueries({ queryKey: ["posts"] })

            const previousPosts = queryClient.getQueryData(["posts"]) as Posts[]

            queryClient.setQueryData<Posts[]>(["posts"], (old) => [...(old || []), newPost])

            return () => queryClient.setQueriesData(["posts"], previousPosts)
        }
    })

    const submit = async (post: Posts) =>{
        post.userId = 1
        post.id = Math.random()

        create.mutate(post)
        reset();
    };

    return(
        <div>
            <form onSubmit={handleSubmit(submit)} className="post-form" >
                <div className="post-form__control">
                    <label className="label" htmlFor="title">Title: </label>
                    <input 
                        type="text" 
                        id="title" 
                        className="post-form__input" 
                        placeholder="Enter the title..."
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
                    <p className="post-form__error-msg">{ errors.title?.message }</p>
                </div>
                <div className="post-form__control">
                    <label className="label" htmlFor="body">Text: </label>
                    <textarea 
                        id="body" 
                        className="post-form__textarea" 
                        placeholder="Enter the text..."
                        { ...register("body", {
                            required: {
                                value: true,
                                message: "Field cannot be blank"
                            },
                            minLength: {
                                value: 6,
                                message: "Min length 5"
                            },
                            maxLength: {
                                value: 500,
                                message: "Max length 3000"
                            }
                        })}
                    />
                    <p className="post-form__error-msg">{ errors.body?.message }</p>
                </div>
                <button type="submit" className="post-form__btn">Create Post</button>
            </form>
            <DevTool control={control}/>
        </div>
    )
};

export default CreatePosts;