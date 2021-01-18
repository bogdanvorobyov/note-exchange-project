import {NavLink} from 'react-router-dom'

function Header() {
    return (
      <div className='navbar-dark div-nav'>
      <div className='container'>  
      <nav className="navbar navbar-expand-xl navbar-dark justify-content-center " >
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a href='/'className="navbar-brand">GetNotes</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01" >
          <ul className="navbar-nav justify-content-center  div-nav" >
            <li className="nav-item">
              <NavLink exact to='/' className="nav-link">Главная</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='./Create' className="nav-link">Создать заметку</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='./Note' className="nav-link" >Просмотреть заметку</NavLink>  
            </li>
            <li className="nav-item">
              <NavLink to='./About' className="nav-link">О нас</NavLink>
            </li>
          </ul>
        </div>
       
    </nav>
         
         
         
         
         
         
         
         
         
         
          {/* <nav className='navbar navbar-expand-lg justify-content-md-center navbar-light bg-light'> 
            <div class="collapse navbar-collapse justify-content-md-center" id="navbarTogglerDemo01">
              <ul className='navig row justify-content-md-center'>
                <li class="nav-item active">
                 <NavLink exact to='/' className="nav-link">Главная</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to='./About' className="nav-link">О нас</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to='./Create' className="nav-link">Создать заметку</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to='./Note' className="nav-link" >Просмотреть заметку</NavLink>
                </li> */}
                  {/* <li className='col-lg nav-link'></li>
                  <li className='col nav-link' ></li>
                  <li className='col nav-link' ></li>
                  <li className='col nav-link' ></li> */}
              {/* </ul>
            </div>
          </nav> */}

      </div> 
          
      </div>
    );
  }
  
  export default Header;
  