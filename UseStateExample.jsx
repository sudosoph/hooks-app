// updating state
this.setState({
    someProperty: 'some value'
});

// using state
<p>The value is {this.state.someProperty}</p>;

// initial declaration
const [nameOfValue, setNameOfValue] = useState('initial value here');

// updating state
