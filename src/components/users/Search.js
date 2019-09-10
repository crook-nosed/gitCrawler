import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  // In class based component we use state as shown below as we already know.
  // state = {
  //   text: ""
  // };

  // When we refactor it to functional component, we use useState hook as shown below:
  const [text, setText] = useState("");
  // now every instance of setState in class based component can be replaced with our own defined setText function

  const onChange = e => {
    // if we only have one input field like below i.e text, we can set state as below but if we have multiple input fields like name,email etc. in such case it is better to use e.target.name as the key value as we have done below
    // this.setState({ text: e.target.value });
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users....'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn-btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
