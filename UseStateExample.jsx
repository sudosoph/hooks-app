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
  return <></>;
};

export default UseStateExample;
