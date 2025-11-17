import './App.css';

// or less ideally
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {useState } from "react";

function App() {

  const [user, setUser] = useState("");
  const [paswd, setPaswd] = useState("");
  const [img, setImg] = useState("");
  

  const handleUser = (e) => {
    setUser(e.target.value)
     
  };

  const handlePaswd = (e) => {
    setPaswd(e.target.value)
     
  };

  const handleImg = (e) => {
    setImg(e.target.value)
     
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if(user.trim().length && paswd.trim().length){
      alert("Succesful")
      
      
    
      setUser("");
      setPaswd("");
      setImg("");
      
      
    }else{
      alert("Xato topildi")

      
    }

  };

  return (



    




    <div className="App">
      

      <div className="App_fouter">
        <div className="App_fouter_2">
        <h3>Controlleed Form</h3>
          <Form onSubmit={handleSubmit} className='w-75' >
      <Form.Group onChange={handleUser} value={user} className="mb-3" controlId="formBasicEmail">
        <Form.Label  >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group onChange={handlePaswd} value={paswd} className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group onChange={handleImg} value={img} className="mb-3" controlId="formBasicPassword">
        <Form.Label  >Message</Form.Label>
        <Form.Control type="text" placeholder="Message" />
      </Form.Group>
      
      
    </Form>

          <FloatingLabel className='w-75' controlId="floatingSelect" label="Selection Option">
      <Form.Select aria-label="Floating label select example">
        <option>Option1</option>
        <option value="1">Option2</option>
        <option value="2">Option3</option>
        <option value="3">Option4</option>
      </Form.Select>
    </FloatingLabel>

    <Button  className='as' variant="primary" type="submit">
        Submit
      </Button>

        </div>
      </div>









      <div className="App_fouter">
        <div className="App_fouter_2">
        <h3>Uncontrolleed Form</h3>
          <Form className='w-75' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Message" />
      </Form.Group>
      
      
    </Form>

          <FloatingLabel className='w-75' controlId="floatingSelect" label="Selection Option">
      <Form.Select aria-label="Floating label select example">
        <option>Option1</option>
        <option value="1">Option2</option>
        <option value="2">Option3</option>
        <option value="3">Option4</option>
      </Form.Select>
    </FloatingLabel>

    <Button className='as' variant="primary" type="submit">
        Submit
      </Button>

        </div>
      </div>


    </div>
  );
}

export default App;
