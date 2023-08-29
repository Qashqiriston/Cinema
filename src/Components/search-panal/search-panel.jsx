import { useState } from 'react'
import './search-panel.css'

const SearchPanel = props =>{
  const [term, setTerm] = useState('')

  const updateTermHendler =(e)=>{
  const term = e.target.value
  setTerm(term)
  props.updateTermHendler(term)
  }
  return <input type="text" className="form-control search-input app-info" placeholder="Kinolarni qidirish"  onChange={updateTermHendler} value={term}/>
}

export default SearchPanel