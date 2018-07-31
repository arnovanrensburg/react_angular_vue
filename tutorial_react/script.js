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
        if (this.state.name != this.props.name) {
            updateParagraph = <p>Name Updated</p>;
        }
        let list = this.state.elements.map(
            (el) -> return <li>{el}</li>
    );
        return (
            <div>
                <p>{this.state.name}</p>
                <button onClick={this.changeName.bind(this)}>Change Name</button>
                <button onClick={this.addElement.bind(this)}>Add Element</button>
                {updateParagraph}
                <ul>
                    {list}
                </ul>

            </div>
        );
    }
}