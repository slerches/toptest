export default function TodoList({ todoList }: any) {
  return <div>
    {
      todoList.map((list: any) => {
        return <div className="text-gray-500 flex gap-8 border-b mb-2">
          <div className="w-28">{list.title}</div>
          <div>{list.details}</div>
        </div>
      })
    }
  </div>
}