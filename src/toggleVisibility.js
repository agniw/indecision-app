const app = document.getElementById('app');

let visibility = false;

const toggle = () => {
    if (!visibility) {
        visibility = true;
        render();
    } else {
        visibility = false;
        render();
    }
};

const render = () => {
    const template = (
        <div>
            <h1> Toggle Visibility </h1>
            <button onClick={toggle}> {visibility ? 'Hide details' : 'Show details'} </button>
            {visibility && <p> See You! </p>}
        </div>
    );

    ReactDOM.render(template, app);
};

render();

cl