import React from "react";

const UseStateExample = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    fruit: "",
  });
  const handleChange = (evt) => {
    const updateFormValues = {
      ...formValues,
      [evt.target.id]: evt.target.value,
    };
    setFormValues(updateFormValues);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setShowMessage(true);
  };
  return (
  <>
      <p>Complete the form below and see a nice message about yourself!</p>
      <form onSubmit={handleSubmit}>
            <label htmlFor="name">What should we call you?</label>
            <input id="name" value={formValues['name']} onChange={handleChange} />

            <label htmlFor="age">How old are you?</label>\
            <input id="age" value={formValues['age'] onChange={handleChange} />

            <label htmlFor='fruit'>What's your favorite fruit?</label>
            <select id='fruit' value={formValues['fruit']} onChange={handleChange}>
                <option>Bananas</option>
                <option>Apples</option>
                <option>Oranges</option>
                <option>Strawberries</option>
                <option>Pears</option>
                <option>Dragonfruit</option>
            </select>

            <button>Submit</button>
      </form>
  </>
  );
};

export default UseStateExample;
