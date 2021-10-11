// updating state
this.setState({
    someProperty: 'some value'
});

// using state
<p>The value is {this.state.someProperty}</p>;

// initial declaration
const [nameOfValue, setNameOfValue] = useState('initial value here');

// updating state
setNameOfValue('a new value');

// using state
<p>The value in state is {nameOfValue}</p>;

// multiple values
const [itemCount, setItemCount] = useState(0);
const [data, setData] = useState([]);
const [balance, setBalance] = useState(null);

// grouped values
const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
});

const [name, setName] = ''
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');