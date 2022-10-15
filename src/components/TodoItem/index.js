// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItemList, onDeleteuserTodo} = props
  const {title, id} = todoItemList

  const onDelete = () => {
    onDeleteuserTodo(id)
  }

  return (
    <li className="container">
      <p className="paragraph">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
