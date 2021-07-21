import React from 'react';
import loginImg from '../../login.svg';
import { Button } from './style-component';
import  { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

export class Login extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      isFocusUsername: false,
      isFocusExtension: false,
    }
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeExtension = this.handleChangeExtension.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChangeUsername(event){
    this.handleChange(event.target.value, 'isFocusUsername');
  }

  handleChangeExtension(event){
    this.handleChange(event.target.value, 'isFocusExtension');
  }

  handleChange(value, stateSelected) {
    if(value.trim().length > 0){
      this.setState({[stateSelected]: true });
    }else{
      this.setState({[stateSelected]: !this.state[stateSelected]} );
    }
  }
  render() {
    const isFocusUsername = this.state.isFocusUsername;
    const isFocusExtension = this.state.isFocusExtension;

    return (
      <div className="base-container">
        <div className="content">
          <div className="image">
            <img alt="login-logo" src={loginImg} />
          </div>
          <div className="form">
            <div className={isFocusUsername ? 'form-group focus': 'form-group'}>
                <div className="icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="input">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="input" id="username"
                         required
                         onBlur={this.handleChangeUsername}
                         onFocus={this.handleChangeUsername}/>
                </div>
            </div>
            <div className={isFocusExtension ? 'form-group focus': 'form-group'}>
              <div className="icon">
                <FontAwesomeIcon icon={faPhoneSquare} />
              </div>
              <div className="input">
                <label htmlFor="extension">Extension</label>
                <input type="number" className="input" id="extension" required
                        onBlur={this.handleChangeExtension}
                        onFocus={this.handleChangeExtension}/>
              </div>
            </div>
            <Button>
              Login
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
