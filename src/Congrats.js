import React from "react";
/**
 * React functional component to display congratulations message
 * @param {Object} - React Props
 * @returns {JSX.Element} - Rendered component if success is true, null if not
 */
const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats">
      {success && (
        <div>
          <div className="alert alert-success" data-test="congrats-message">
            Congratulations! You guessed correctly.
          </div>
        </div>
      )}
    </div>
  );
};

export default Congrats;
