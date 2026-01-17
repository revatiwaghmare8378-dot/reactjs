import React from "react";

function PureComponents(params) {
  return (
    <div>
      <h1>Keeping Pure Components</h1>
    </div>
  );
}
export default React.memo(PureComponents);
