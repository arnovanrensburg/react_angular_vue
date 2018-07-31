
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        };
    }
    changeName() {
        this.setState({
            name:'Anna',
        });
    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <button onClick={this.changeName.bind(this)}>Change Name</button>
            </div>
        );
    }
}



//const element = React.createElement('p',null,'Max');
ReactDOM.render(<App name="Max"/>, document.querySelector('#app'));