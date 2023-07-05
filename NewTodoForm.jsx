import { useState } from 'react'
export default function NewTodoForm(props)
{
    props.onSubmit
    const [newItem,setNewItem]=useState()

    function handleSubmit(e)
    {
        if(newItem==="") return
      e.preventDefault()
      
       props.onSubmit(newItem)
    // addTodos(newItem)

    setNewItem("")
    
    }

    return (
 
        <form onSubmit={handleSubmit} className='new-item-form'>
          <div className='form-row'>
            <label htmlFor='item'>New Item</label>
            <input type='text' value={newItem}  onChange={e=>setNewItem(e.target.value)} id='item'></input>
    
            <button className='btn'>Add</button>
          </div>
        </form>
        
       
       
    )
}