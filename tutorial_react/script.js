

function App(props) {
    return (
        <div>
            <p>{props.name}</p>
            <button>Change Name</button>
        </div>
    );
}

//const element = React.createElement('p',null,'Max');
ReactDOM.render(<App name="Max"/>, document.querySelector('#app'));