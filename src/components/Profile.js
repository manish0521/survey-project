import React, { Component } from 'react'
// import Survey from './Survey'

export default class Profile extends Component {
  render() {
    return (
      
        <div className="profile">
            User Profile
            
            <div className="profile-content">
                
            <form className="profile">

                <label  className="sr-only">First Name</label>
                <input type="text" id="inputName" className="form-control" placeholder="First Name" ></input>
                <br />
                <label  className="sr-only">Last Name</label>
                <input type="text" id="inputName" className="form-control" placeholder="Last Name" ></input>
                <br />
                <label  className="sr-only">Age</label>
                <input type="text" id="inputAge" className="form-control" placeholder="Age" ></input>

                <br />
                <label className="sr-only">State</label>
                <input type="text" id="inputAddress" className="form-control" placeholder="Address" name="address"></input>

                <br />
                
                
                

            </form>

            

        </div>
       
         
    </div>
    )
  }
}
