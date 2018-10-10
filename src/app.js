const appRoot = document.getElementById('app');

let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const template = (
        <div>
            <h1> Count: {count} </h1>
            <button id='my-id' className='button' onClick={addOne}> + 1 </button>
            <button id='my-id' className='button' onClick={minusOne}> - 1 </button>
            <button id='my-id' className='button' onClick={reset}> reset </button>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderCounterApp();
