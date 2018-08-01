function Username(props) {
    return (
        <p onClick={() => {return props.nameClickedHandler(props.username)}}>{ props.username } </p>
    );
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            elements: [],
            message: '',
        };
    }

    changeName() {
        this.setState({
            name:'Danika',
        });
    }

    addElement(element) {
        const oldElements = this.state.elements;
        this.setState({
            elements: oldElements.concat(oldElements.length+1)
        });
    }

    changeMessageInput(event) {
        this.setState({
            message: event.target.value
        });
    }

    userWasClicked(name) {
        alert(name);
    }

    render() {
        let updateParagraph = '';
        let nameParagraphClass = '';
        if (this.state.name != this.props.name) {
            updateParagraph = <p>Name Updated</p>;
            nameParagraphClass = 'updated';
        }



        let list = this.state.elements.map(
            (el) => {
                const liStyle = {
                    backgroundColor: el % 2 == 0 ?  'blue' : 'green'
                };
                return <li key={el} style={ liStyle }>Number {el}</li>
            }
        );

        return (
            <div>
                <Username username="Chris" nameClickedHandler={this.userWasClicked}/>
                <Username username="Anna" nameClickedHandler={this.userWasClicked}/>
                <p className={nameParagraphClass}>{this.state.name}</p>
                {updateParagraph}
                <button onClick={this.changeName.bind(this)}>Change Name</button>
                <button onClick={this.addElement.bind(this)}>Add Element</button>
                <ul>
                    {list}
                </ul>
                <input
                    type="text"
                    value={this.state.message}
                    onChange={this.changeMessageInput.bind(this)}
                >
                </input>
                <p>{this.state.message}</p>
            </div>
        );
    }
}



//const element = React.createElement('p',null,'Max');
ReactDOM.render(<App name="Max"/>, document.querySelector('#app'));
