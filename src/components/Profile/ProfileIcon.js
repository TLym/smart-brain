import React from 'react'; 
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class ProfileIcon extends React.Component {
    constructor(props) {
        super(props); 
        // this.toggle = this.toggle.bind(this); //not necessary when the toggle funtion/method is set up using arrow functions. 
        this.state = {
            dropdownOpen: false
        };
    };

    //this is a call back function, which is necessary when ever updating state based on a previous state. 
    //always include the prior state, and make updates according to the prior state recieved. 
    toggle = () => { //when setting this up as an arrow function, binding the toggle in the constructor method is not necessary (arrow functions implicitly bind the method to this class).
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen //recieving the full prior state, we are interested in the vlaue of dropdownOpen. 
        }));
    };

    render () {
        const {onRouteChange, toggleModal} = this.props; 
        return (
            <div className='pa4 tc'>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle         
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownOpen}
                    >
                        <img
                            src="http://tachyons.io/img/logo.jpg"
                            className="br-100 ba h3 w3 dib" alt="avatar" />
                    </DropdownToggle>
                    <DropdownMenu 
                        right
                        className="b--transparent shadow-5" 
                        style={{marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
                    >
                        <DropdownItem onClick={toggleModal}>Profile</DropdownItem>
                        <DropdownItem onClick={() => onRouteChange('signout')}>Sign Out</DropdownItem> {/* onClick requires a function, so you cannot just run the onRounteChange function immediately */}
                    </DropdownMenu>
                </Dropdown>            

            </div>
        );
    }
};

export default ProfileIcon;