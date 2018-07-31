
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
        let updateParagraph = '';
        if (this.state.name != this.props.name) {
            updateParagraph = <p>Name Updated</p>;
        }
        return (
            <div>
                <p>{this.state.name}</p>
                <button onClick={this.changeName.bind(this)}>Change Name</button>
                {updateParagraph}
            </div>
        );
    }
}



//const element = React.createElement('p',null,'Max');
ReactDOM.render(<App name="Max"/>, document.querySelector('#app'));