/*import React from "react";

function App() {
  const [fname,setfname]=React.useState("");
  const [lname,setlname]=React.useState("");
  const [email,setemail]=React.useState("");
  function updatefname(event)
  {
    const newfname=event.target.value;
    setfname(newfname);
  }
  function updatelname(event)
  {
    const newlname=event.target.value;
    setlname(newlname);
  }
  function updateemail(event)
  {
    const newemail=event.target.value;
    setemail(newemail);
  }
  
  

  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}
      </h1>
      <p>{email}</p>
      <form>
        <input onChange={updatefname} name="fName" placeholder="First Name" />
        <input onChange={updatelname} name="lName" placeholder="Last Name" />
        <input onChange={updateemail} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
*/

import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
