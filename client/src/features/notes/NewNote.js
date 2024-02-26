import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersApiSlice'
import NewNoteForm from './NewNoteForm'

const NewNote = () => {
    const users = useSelector(selectAllUsers)

    const content = users ? <NewNoteForm users={users} /> : <p>No Users to assign the task</p>

    return content
}
export default NewNote