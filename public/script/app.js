'use strict';

var appRoot = document.getElementById('app');

var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' Count: ',
            count,
            ' '
        ),
        React.createElement(
            'button',
            { id: 'my-id', className: 'button', onClick: addOne },
            ' + 1 '
        ),
        React.createElement(
            'button',
            { id: 'my-id', className: 'button', onClick: minusOne },
            ' - 1 '
        ),
        React.createElement(
            'button',
            { id: 'my-id', className: 'button', onClick: reset },
            ' reset '
        )
    );

    ReactDOM.render(template, appRoot);
};

renderCounterApp();
