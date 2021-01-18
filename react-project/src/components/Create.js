import React from 'react'
import {useState} from 'react'
import env from '../env.json'

function Create() {
  const [url,setUrl] = useState()
  const[lineClass, setLineClass ] = useState('hide')
  const[formClass, setFormClass ] = useState('')

    function sendDatatoBack (obj){ 
      setLineClass('');
      setFormClass('hide')
      
      fetch (env.urlBack, { 
        method: 'POST', 
        headers: { 
          'content-type': 'application/x-www-form-urlencoded',
        }, 
        body: JSON.stringify(obj)
      })
      .then(response => response.json())
      .then(response=>{ 
         if(response.result){ 
           setUrl(env.url+'/'+response.url)
         }
      })
    }


    function formHandler (event){ 
      event.preventDefault(); 
      let note = event.target.elements.textData.value;
      note.trim()
      if (note === ''){
        alert('Введите заметку')
        return false;
      }
      sendDatatoBack({'note':note})
      
    }
    return (
      <div className='note'>
        <form className={formClass}  onSubmit = {formHandler} action="">
            <label className='label-note'htmlFor=""><h2>Введите заметку</h2></label>
            <br/>
            <textarea className='note-area'name="textData" id="textData" placeholder='Начните вводить текст'defaultValue=''></textarea>
            <br/>
            <button className='btn btn-secondary' type='submit'>Создать заметку</button>
        </form>
        <div className={lineClass}>
          <div className='new-note-create'>
            <h3>Ваша заметка по ссылке - </h3>
          <div className='link-note'><h3><a href={url} >{url}</a></h3></div>
          <div>
            <button className='btn btn-secondary' onClick={function(){window.location.reload()}}>Создать новую заметку</button>
            </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Create;
  