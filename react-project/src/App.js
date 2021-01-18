import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/About'
import Create from './components/Create'
import Error404 from './components/Error404'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Note from './components/Note'


function App() {
  return (
    <div className='main-container'>
       <Router>
          <Header></Header>
          <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/about' component={About}/>
          <Route path='/create' component={Create}/>
          <Route exact path='/note' component={Note}/>
          <Route exact path='/note/:noteURL' component={Note}/>
          <Route component={Error404}/>
          </Switch>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
