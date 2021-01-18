

import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import env from '../env.json'

function Note() {
  const [text, setUrl]= useState()
  let {noteURL} = useParams()
  const[lineClass, setLineClass ] = useState('hide')
  const[formClass, setFormClass ] = useState('hide')
  const[errorClass, setErrorClass ] = useState('hide')


  useEffect(()=>{
    if(noteURL!==undefined){ 
      fetch (env.urlBack, { 
        method: 'POST', 
        headers: { 
          'content-type': 'application/x-www-form-urlencoded',
        }, 
        body: JSON.stringify({'url':noteURL})
      })
      .then(response => response.json())
      .then(response=>{ 
         if(response.result){ 
           console.log(response)
           setUrl(response.note)
           setLineClass('')
           setFormClass('hide')
           setErrorClass('hide')
         }
         else if(!response.result){ 
          setLineClass('hide')
          setFormClass('hide')
          setErrorClass('')
         }
      })
    }
          else{
          setLineClass('hide')
          setFormClass('')
          setErrorClass('hide')
          }
  },[])
  function getNote(event){ 
      event.preventDefault(); 
      let url = event.target.elements.url.value; 
      url.trim();
      if(url===''){ 
        alert('Введите заметку')
        return false;
        }
      noteURL = url;
      window.location.href = env.url +'/'+url
      }
    function lookMore (){ 
      window.location.href = env.url
    }
    return (
      <div>
        <div className={lineClass}>
          <div className='find-note-form'>
            <h3>Note:</h3>
            <div className='text-note'>
              {text}
            </div> 
            <div><button className='btn btn-secondary'onClick={lookMore}>Cмотреть еще одну заметку</button></div>
          </div>
        </div>
        <div className={errorClass}><p>Произошла ошибка!</p></div>
        <div className={formClass}>
          <div className='find-note-form'>
          <form action="" onSubmit={getNote} className='div-input-note'>
          <label htmlFor="url"><h3>Введите хеш (номер) Вашей заметки</h3></label>
         <div ><input type="text" name='url' id='url' className='form-control input-note'/></div> 
         <div><button className='btn btn-secondary' type='submit'>Искать заметку</button></div>
          </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Note;
  