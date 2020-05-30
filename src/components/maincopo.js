import React,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menucom';
import Header from './headercom';
import Footer from './footercom';


class Main extends Component {
  render() {
    return (
     <div>
           <Header />
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">My website</NavbarBrand>
          </div>
        </Navbar>

        <Menu />
        <Footer />
        </div>
    );
  }
}

export default Main;
