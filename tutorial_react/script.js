

let name = 'Max';

function changeName() {
    name = 'Anna'
    const element = (
        <div>
            <p>{name}</p>
            <button onClick={changeName}>Change Name</button>
        </div>);
    //const element = React.createElement('p',null,'Max');
    ReactDOM.render(element, document.querySelector('#app'));
}

const element = (
    <div>
        <p>{name}</p>
        <button onClick={changeName}>Change Name</button>
    </div>);
//const element = React.createElement('p',null,'Max');
ReactDOM.render(element, document.querySelector('#app'));