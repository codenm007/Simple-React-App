import React,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menucom';
import Header from './headercom';
import Footer from './footercom';
import Home from './homecompo';
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
       </Switch>
      
        <Footer />
        </div>
    );
  }
}

export default Main;
