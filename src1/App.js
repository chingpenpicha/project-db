import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
  return (
    <div>
      <div>test</div>
      <li>
        <Link to="/login">About</Link>
        {props.children}
      </li>
    </div>
  );
};

export default App;



/*
const App = React.createClass({

 render: function() {

   const viewStateUi = getViewStateUi(this.state.appState);

    return (
      <div>
        <Header />
        <Link href="/about">About</Link>
        {viewStateUi}
        {this.props.children}
      </div>
    );
  }
})
*/
