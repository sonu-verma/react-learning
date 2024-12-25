import React from 'react'

class Contact extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      users: null
    }
  }

  async componentDidMount(){
    const gitUser = await fetch("https://api.github.com/users/sonu-verma")
    const json = await gitUser.json();
    console.log(json)
    this.setState({
      users: json
    });
  }

  render(){

    const { bmenu } = this.props;
    const { counter, users } = this.state;

    return <>
        <div className='contact-top-bar'>
            <h2>Contact Us</h2>
            <span>{ bmenu } </span>
        </div>
        <div className='contact-container'>
            <ul>
              <li><button className='counterBtn' onClick={() => this.setState({
                counter: counter + 1
              }) }>+</button>{counter}<button className='counterBtn' onClick={() => this.setState({
                counter: (counter > 0)?counter - 1:0
              }) }>-</button></li>
              <li>Contact Name: Sonu Verma</li>
              <li>Contact No: 9784651321</li>
              <li>Contact Email: codehunt0715@gmail.com</li>
            </ul>

            { users && 
                <ul>
                  <li>Git Info</li>
                  <li>Name:{users.login}</li>
                  <li>Contact No: 9784651321</li>
                  <li>Contact Email: codehunt0715@gmail.com</li>
                </ul>
            }
            
        </div>
    </>
  }
}

export default Contact
