import './Button.css';

const Button = (props) => {
  return (
    <div className='btn-container'>
      <button onClick={props.onAdd}
      className={props.btnClassname}>{props.formBool ? "Close" : "Add Book"}
      </button>
    </div>
  )
}

export default Button