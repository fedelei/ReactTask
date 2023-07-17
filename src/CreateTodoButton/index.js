import './CreateTodoButton.css'

function CreateTodoButton ({ setOpenModal }) {
    return (
        <button className="btn" 
        type="button" 
        onClick={() => {
            setOpenModal(state => !state);
          }
        }>
        <strong>AGREGAR</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>
      
        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </button>
      
    );
}

export { CreateTodoButton };