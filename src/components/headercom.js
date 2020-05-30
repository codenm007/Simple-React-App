import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
   constructor(props){
        super(props);
        this.state = {
            isNavOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
   }
toggleNav(){
    this.setState ({
        isNavOpen : !this.state.isNavOpen
    })
}

  render() {
    return(
    <React.Fragment>
      <Navbar dark expand = "md">
        <div className="container">
            <NavbarBrand className = "mr-auto" href="/">
                <img src = "C:\Users\nmaju\Documents\academind reactjs basics\academindtutorial\src\logo.svg" height ="30"
                 width = "20" alt = "Some f "/>
                Ristorante Con Fusion
            </NavbarBrand>
            <NavbarToggler onClick = {this.toggleNav} className = "ml-auto"/>
            <Collapse navbar isOpen = {this.state.isNavOpen} >
           <Nav navbar className = "ml-auto">
               <NavItem>
                   <NavLink className = "nav-link" to = "/home" > Home </NavLink>
               </NavItem>
               <NavItem>
                   <NavLink className = "nav-link" to = "/menu"> Menu </NavLink>
               </NavItem>
           </Nav>
           </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;