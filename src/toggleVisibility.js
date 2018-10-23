const app = document.getElementById('app');


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState)=>{
            return {
                visibility : !(prevState.visibility)
            }
        })
    }

    render() {
        return (
            <div>
                <h1> Toggle Visibility </h1>
                <button onClick={this.handleToggleVisibility}> {this.state.visibility ? 'Hide details' : 'Show details'} </button>
                {this.state.visibility && <p> See You! </p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, app);
