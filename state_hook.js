import React, { useState } from 'react'; // Haven't seen this before!
import ReactDOM from 'react-dom';

export default function ColorPicker() { // Example color picker "app"
const [color, setColor] = useState(); // useState is a React function which allows you
// to read the current state and set the current state. The function returns an array

 const divStyle = {backgroundColor: color};

  return ( // Take some time to memorise this inline function syntax - looks a little funky
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
    </div>
  );
}

// A refactored example of the above code

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose', 'Tomato'];

export default function ColorPicker() {
  const [color, setColor] = useState('Tomato'); // Passing an argument to the function means that it will load in with a Tomato background!

 const divStyle = {backgroundColor: color};

  return ( // A simpler rendering of the colorNames array which iterates and creates a button for each
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button
          onClick={() => setColor(colorName)}
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}

// Example phone number validity checker which disallows numbers >10

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
  // declare current state and state setter
const [phone, setPhone] = useState('');
  const handleChange = ({ target })=> {
    const newPhone = target.value; // Value of the form input
    const isValid = validPhoneNumber.test(newPhone); // Tests against the regexp
    if (isValid) {
        setPhone(newPhone) // Sets phone's state
    }
    // just ignore the event, when new value is invalid
  };

  return (
    <div className='phone'>
      <label for='phone-input'>Phone: </label>
      <input id='phone-input' value={phone} onChange={handleChange} />
    </div>
  );
}

// Example navbar for a quiz interface

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers
  const goBack = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1); // Seems as though prevQuestionIndex comes with the state function
  const goToNext = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1); // The syntax for these is a little confusing!

  // determine if on the first question or not
const onFirstQuestion = questionIndex === 0;
const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button disabled={onFirstQuestion} onClick={goBack}>
          Go Back
        </button>
        <button disabled={onLastQuestion} onClick={goToNext}>
          Next Question
        </button>
      </div>
    </nav>
  );
}

// Some quick array state updating logic

export default function GroceryCart() {
  const [cart, setCart] = useState([]) // Initialises cart as an empty array

  const addItem = (item) => {
    setCart((prev) => {
      return [item, ...prev] // The spread syntax (...) copies over data from previous
    }) // array, since we are making a new one here!
   };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex)
    })
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => ( // Maps array into a list
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}

// Basic AJAX form

export default function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile((prevProfile) => ({ // Again, bringing previous data into new entry
      ...prevProfile,
      [name]: value // Sets the state
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        value={profile.bday || ''}
        type="date"
        name="bday"
        onChange={handleChange}
      />
      <input
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Example of refactored code using multiple state variables

function Musical() {
  const [state, setState] = useState({
   title: "Best Musical Ever",
   actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
   locations: {
     Chicago: {
       dates: ["1/1", "2/2"],
       address: "chicago theater"},
     SanFrancisco: {
       dates: ["5/2"],
       address: "sf theater"
     }
   }
 })
}

// In this way, values are grouped together more logically and there is less margin for error
// when data is being modified / read. This also makes it easier to pass ONLY the data you need
// between components.

function MusicalRefactored() {
 const [title, setTitle] = useState('Best Musical Ever')
 const [actors, setActors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"])
 const [locations, setLocations] = useState({
     Chicago: {
       dates: ["1/1", "2/2"],
       address: "chicago theater"},
     SanFrancisco: {
       dates: ["5/2"],
       address: "sf theater"
     }})
}

// Example React app written as a function rather than a class. This saves a lot of confusion (especially for beginners)
// as it cuts out all the class middleman syntax which can get in the way.

export default function AppFunction() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value })); // Creation of new task state
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return; // This part I found very confusing. Need to revise.
    setAllTasks((prev) => [newTask, ...prev]); // Adding new task to all tasks array
    setNewTask({});
  };

   const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter( // Adding every task which isn't removed to a new array
      (task) => task.id !== taskIdToRemove
    ));
  };

    return ( // No render()
      <main>
        <h1>Tasks</h1>
        <NewTask
          newTask={newTask}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <TasksList
          allTasks={allTasks}
          handleDelete={handleDelete}
        />
      </main>
    );
}

// For reference, here is the same app written as a JS class:

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = { // If nothing else, the removal of the hundreds of 'this' calls is a great relief.
      newTask: {}, // Empty object + array being initialised as state variables
      allTasks: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange({ target }){
    const { name, value } = target;
    this.setState((prevState) => ({
      ...prevState,
      newTask: {
        ...prevState.newTask,
        [name]: value,
        id: Date.now()
      }
    }));
  }

  handleSubmit(event){
    event.preventDefault();
    if (!this.state.newTask.title) return;
    this.setState((prevState) => ({
      allTasks: [prevState.newTask, ...prevState.allTasks],
      newTask: {}
    }));
  }

  handleDelete(taskIdToRemove){
    this.setState((prevState) => ({
      ...prevState,
      allTasks: prevState.allTasks.filter((task) => task.id !== taskIdToRemove)
    }));
  }

  render() {
    return (
      <main>
        <h1>Tasks</h1>
        <NewTask
          newTask={this.state.newTask}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TasksList
          allTasks={this.state.allTasks}
          handleDelete={this.handleDelete}
        />
      </main>
    );
  }
}
