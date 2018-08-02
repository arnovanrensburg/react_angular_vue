function Hobby(props) {
	return (
  <li  
    onClick={ () => {props.hobbyClickHandler(props.hobbyName)} } >
    {props.hobbyName}
  </li>
  
  );
}

class App extends React.Component {
	constructor(props) {
  	super(props);
		this.state = {
    	hobbies: ["one","two"],
      newHobby: '',
      hobbyDeleted: false,
    }
  }
  
  addHobby(element) {
  	const oldHobbies = this.state.hobbies;
    this.setState({
    	hobbies: oldHobbies.concat(this.state.newHobby)
    });
  }
  
  removeHobby(hobby) {
  	const oldHobbies = this.state.hobbies;
    const position = oldHobbies.indexOf(hobby);
    this.setState({
    	hobbies: oldHobbies.filter((h,index) => {return index != position}),
      hobbyDeleted: true
    });
  
  }
  
  newHobbyChanged(event) {
  	this.setState({
    	newHobby: event.target.value
    });
  }
  
  
  render() {
  	let hobbyDeleted = '';
    
    if (this.state.hobbyDeleted) {
    	hobbyDeleted = <p>Hobby Deleted</p>;
    }
    
    let counterColour = '';
    if (this.state.hobbies.length > 3) {
    	counterColour = 'moreThanThree'
    }
    
  	let hobbyList = this.state.hobbies.map (
    	(hobby, index) => {
      	return <Hobby 
          key={index}
          hobbyName={hobby} 
          hobbyClickHandler={this.removeHobby.bind(this)}
          />
      } 
    );
  	return (
    	<div>
        <p className={counterColour}>Hobbies: {this.state.hobbies.length}</p>
    	  <p>{hobbyDeleted}</p>
        <ul>
          {hobbyList}
        </ul>
        <input 
          type="text"
          value={this.state.newHobby}
          onChange={this.newHobbyChanged.bind(this)}
        >
        </input>
        <button onClick={this.addHobby.bind(this)}>
          Add Hobby
        </button>
    	</div>
    );
  }
}

ReactDOM.render(<App name="Max"/>, document.querySelector('#app'));