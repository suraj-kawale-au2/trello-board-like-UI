import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBBtn , MDBIcon,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';

class BoardHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          collapse: false,
          isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
          collapse: !this.state.collapse,
        });
      }

    render(){
        return(
            
            <MDBNavbar color="bg-primary" dark expand="md" transparent>
              
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                    <MDBNavbarBrand>
                          <strong>Board Name</strong>
                    </MDBNavbarBrand>
                  <MDBNavItem className="ml-1">
                    <MDBBtn outline color="light-blue" className="text-white shadow-sm"><MDBIcon icon="star" /></MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem className="ml-1">
                    <MDBBtn outline color="light-blue" className="text-white shadow-sm"><MDBIcon icon="align-justify" /></MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem className="ml-1">
                    <MDBBtn outline color="light-blue" className="text-white shadow-sm"><MDBIcon icon="users" /> Awesome Team</MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem className="ml-1">
                    <MDBBtn outline color="light-blue" className="text-white shadow-sm"><MDBIcon icon="lock" /> Private</MDBBtn>
                  </MDBNavItem>
                </MDBNavbarNav>
                
              <MDBNavbarNav right>
                  <MDBNavItem className="ml-1">
                  <MDBBtn outline color="light-blue" className="text-white shadow-sm mt-1" onClick={this.props.Handletoggle()}>
                        <MDBIcon icon="ellipsis-h" /> Show Menu
                    </MDBBtn>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          
        )
    }
}

export default BoardHeader;
