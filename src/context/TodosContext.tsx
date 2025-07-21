import { createContext, useEffect, useState } from "react";
import { dummyFetch, type Todo } from "../data/dummyFetch";

interface TodosContextProps {
    todos: Todo[]
    loading: boolean;
    error: string | null
    markAsDone: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodosContext = createContext<TodosContextProps | null>(null)

export const TodosProvider = ({children} : {children : React.ReactNode}) => {
    const [ todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [ error, setError] = useState<string | null>(null)

    useEffect(() =>{
        const fetchTodos = async () => {
        setLoading(true)
         try {
            const response = await dummyFetch('https://example.com/api/todos')
            if(response.status === 200){
                setTodos(response.data.todos)
            } 
         } catch (error) {
            setError(error instanceof Error ? error.message : 'something went wrong')
         } finally {
            setLoading(false)
         }
        }
        fetchTodos()
    }, [])

    const markAsDone = (id: number) => {
        setTodos(prev => prev.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    }

    const deleteTodo = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return <TodosContext.Provider value={{todos, loading, error, markAsDone, deleteTodo}}>{children}</TodosContext.Provider>
    
}
export default TodosContext;