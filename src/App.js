import React from 'react';
import './style.css';
import { useState } from 'react';

let dynamicContent = 'Aditya';
function Header(props) {
  return (
    <div>
      <div>{props.compName}</div>
      <div>{props.compDesc}</div>
    </div>
  );
}

function Notes(props) {
  return <button onClick={props.buttonClicked}>{props.children}</button>;
}
function Header1() {
  return (
    <header>
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  let [dynamicContent, dynamicContentChange] = useState('aditya');
  function notesClicked(data) {
    dynamicContentChange(data);
  }
  return (
    <div>
      <Header1 />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <div class="headerComp">
        <Header
          compName="Components"
          compDesc="Learning about Components"
        ></Header>
        <Header compName="JSX" compDesc="Learning about JSX"></Header>
        <Header compName="Props" compDesc="Learning about Props"></Header>
        <Header compName="State" compDesc="Learning about State"></Header>
      </div>
      <br />
      <br />
      <span>Examples</span>

      <div class="headerComp">
        <Notes
          buttonClicked={() => {
            notesClicked('Components');
          }}
        >
          Components
        </Notes>
        <Notes
          buttonClicked={() => {
            notesClicked('JSX');
          }}
        >
          JSX
        </Notes>
        <Notes
          buttonClicked={() => {
            notesClicked('Props');
          }}
        >
          Props
        </Notes>
        <Notes
          buttonClicked={() => {
            notesClicked('State');
          }}
        >
          State
        </Notes>
      </div>
      <p>{dynamicContent}</p>
    </div>
  );
}

export default App;
