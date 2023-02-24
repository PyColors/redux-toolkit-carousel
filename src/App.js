import React from "react";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";

import BackgroundImageLeftControl from "./features/backgroundImage/components/BackgroundImageLeftControl";
import BackgroundImageRightControl from "./features/backgroundImage/components/BackgroundImageRightControl";

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <header>
    
 
      </header>
      <aside>
        <BackgroundImageLeftControl />
      </aside>
      <main>
 
      </main>
      <aside>
        <BackgroundImageRightControl />
      </aside>
     
    </div>
  );
}

export default App;
