import React from 'react'

function Main() {
    return (
      <div className='main-first'>
      <div className='container main justify-content-center'>
        <div className='container'><a className='btn btn-secondary' href="./create"><h2>Написать заметку</h2></a></div>
        <div className='container'><a className='btn btn-secondary' href="./note"><h2>Просмотреть заметку</h2></a></div>
      </div>
      <div className='text-main container'><b>GetNotes</b> - онлайн-сервис для быстрого обмена зашифрваными заметками
       <p>В разделе "Создать заметку" вы можете ввести любой текст, после этого появится ссылка для того, чтобы поделиться заметкой. 
         Заметка будет доступна до ее просмотра или в течении 15 мин, а после будет удалена. </p>
      <p>Если Вы хотите посмотреть заметку - перейдите по ссылке или введите хэш в разделе "Просмотреть заметку"</p>
      </div>
      </div>

    );
  }
  
  export default Main;
  