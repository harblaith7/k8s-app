import { useState } from "react"
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios"

interface IProps {
  habits: {
    _id: string,
    habit: string,
    completed: boolean
  }[],
  setHabits: React.Dispatch<React.SetStateAction<{
      _id: string,
      habit: string;
      completed: boolean;
  }[]>>
}

type Habit = {
  _id: string,
  habit: string,
  completed: boolean
}

function AddModal({ habits, setHabits }: IProps) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [habit, setHabit] = useState("")

    const handleAdd = async () => {
      if(habit){
        const response: {
          data: Habit
        } = await axios.post('/api/habit', {
          habit: {
            habit,
            completed: false
          }
        });
        console.log(response.data)
        setHabits([
          ...habits,
          response.data
        ]);
        setShow(false);
        setHabit("")
      }
    }
  
    return (
      <>
        <button onClick={handleShow}>Add</button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new habit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Habit"
                onChange={(e) => {setHabit(e.target.value)}}
                value={habit}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default AddModal