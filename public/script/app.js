'use strict';

var app = document.getElementById('app');

var visibility = false;

var toggle = function toggle() {
    if (!visibility) {
        visibility = true;
        render();
    } else {
        visibility = false;
        render();
    }
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' Toggle Visibility '
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            ' ',
            visibility ? 'Hide details' : 'Show details',
            ' '
        ),
        visibility && React.createElement(
            'p',
            null,
            ' See You! '
        )
    );

    ReactDOM.render(template, app);
};

render();
