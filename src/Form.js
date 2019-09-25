import React from "react";

const Form = props => {
  return (
    <section>
      <form>
        <input type="text" value={props.user} />
        <button onClick={event => props.setUser(event.target.value)}>
          Choose
        </button>
      </form>
    </section>
  );
};
