import React from "react";

const Form = ({ user, setUser }) => {
  return (
    <section>
      <form>
        <input type="text" value={user} />
        <button onClick={event => setUser(event.target.value)}>Choose</button>
      </form>
    </section>
  );
};

export default Form;
