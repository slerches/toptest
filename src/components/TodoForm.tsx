import { useState } from "react";
import TodoList from "./TodoList";

export default function TodoForm() {
  const [todoList, setTodoList] = useState<{ title: string, details: string }[]>([]);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [msg, setMsg] = useState("")

  const addTodo = () => {
    if (title.trim().length == 0 || details.trim().length == 0) {
      setMsg('Title or details required');
      setTimeout(() => {
        setMsg('')
      }, 3500);
      return
    }
    setTodoList(prev => [...prev, { title, details }])
    setTitle("")
    setDetails("");
  }

  return <>
    <div className="m-10">
      <button onClick={addTodo} className="bg-blue-700 text-white rounded-md py-1 px-5">Add Todo</button>
      <span className="text-xs ml-5 text-red-500">{msg}</span>
      <div className="mt-5 space-y-3">
        <input placeholder="Title" value={title} onChange={({ target }) => setTitle(target.value)} className="block border rounded-md p-1 focus:outline-none" />
        <input placeholder="Task Detail" value={details} onChange={({ target }) => setDetails(target.value)} className="border rounded-md p-1 focus:outline-none" />
      </div>

      <div className=" w-fit p-3 mt-10">
        <div className="flex gap-8 mb-3 border-b-2">
          <div className="w-28">Title</div>
          <div>Task Details</div>
        </div>
        <TodoList todoList={todoList} />
      </div>
    </div >
  </>
}