class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            elements: []
        };
    }

    changeName() {
        this.setState({
            name:'Anna',
        });
    }

    addElement(element) {
        const oldElements = this.state.elements;
        this.setState({
            elements: oldElements.concat(oldElements.length+1)
        });
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
                <p className={nameParagraphClass}>{this.state.name}</p>
                {updateParagraph}
                <button onClick={this.changeName.bind(this)}>Change Name</button>
                <button onClick={this.addElement.bind(this)}>Add Element</button>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}



//const element = React.createElement('p',null,'Max');
ReactDOM.render(<App name="Max"/>, document.querySelector('#app'));