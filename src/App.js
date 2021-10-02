import React from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";

class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
            </div>
        );
    }
};


const Header=()=>{
    return(
        <div>
            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Play Store</strong>
                </MDBNavbarBrand>

                




            </MDBNavbar>

        </div>
    )
}


export default App;