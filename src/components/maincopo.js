import React,{Component} from 'react';
import Menu from './menucom';
import Header from './headercom';
import Footer from './footercom';
import Home from './homecompo';
import Contact from './contactcompo';
import {Switch,Route,Redirect} from 'react-router-dom';


class Main extends Component {
  render() {
      const HomePage = () =>{
          return(
              <Home />
          )
      }
    return (
     <div>
           <Header />
       
       <Switch>
           <Route path = "/home" component = {HomePage} />
           <Route exact path = "/menu" component = {Menu} />
           <Route exact path = "/contactus" component = {Contact} />
           <Redirect to = "/home" />
       </Switch>
      
        <Footer />
        </div>
    );
  }
}

export default Main;
