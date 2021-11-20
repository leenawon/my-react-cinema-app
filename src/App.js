import React, { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <h1>my react project</h1>
      {loading ? <h3>Loading...</h3> : null}
    </div>
  );
}

export default App;
