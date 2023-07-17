import { BsCheckCircle } from 'react-icons/bs'
import { CgRemove } from 'react-icons/cg'
import './TodoItem.css';
import '../TodoIcon.css';


function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className="Icon">
        <BsCheckCircle className={`Icon-check ${props.completed && "Icon-check--active"}`} 
        onClick={props.onComplete} size={'30px'}/>
        </span>
     
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon" onClick={props.onDelete}>
        <CgRemove className='Icon-delete'size={'30px'} / ></span>
    </li>
  );
}

export { TodoItem };