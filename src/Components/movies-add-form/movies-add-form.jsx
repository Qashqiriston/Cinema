import {useState,} from "react";
import "./movies-add-form.css";

const MoviesAddForm =({addForm}) =>{
  const [state, setState] = useState({name: '', views: ''})
  
  const changeHendlerInput =(e)=>{
    setState({...state, [e.target.name]: e.target.value,})
  }

  const addFormHendler = e =>{
    e.preventDefault()
    if(state.name === "" || state.name === Number || state.views === "") return
    const data ={name: state.name, viewers: state.views}
    addForm(data)
    setState({name: '' , viewers: ''})
  } 

  return (
    <div className="movie-add-form">
      <h3>Yanggi kino qoshish</h3>
      <form className="add-form d-flex" onSubmit={addFormHendler}>
        <input
          onChange={changeHendlerInput}
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino?"
          name="name"
          value={state.name}
        />
        <input
          onChange={changeHendlerInput}
          type="number"
          className="form-control new-post-label"
          placeholder="Necha marotaba korilgan?"
          name="views"
          value={state.views}
        />
        <button type="submit" className="btn btn-outline-dark">
          Qoshish
        </button>
      </form>
    </div>
  );

}

export default MoviesAddForm;
