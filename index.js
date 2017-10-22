import React from 'react';
import ReactDOM from 'react-dom';
import falcor from 'falcor';

const model = new falcor.Model({
  cache: {
    recepies: [
      {
        name: 'Cookies',
        instructions: 'Bake me baby!!'
      },
      {
        name: 'Crema',
        instructions: 'Add eggs'
      }
    ]
  }
});

model.get('recepies[0].name').then(data => console.log(data));

class App extends React.PureComponent {
  render() {
    return (<div>Welcome to React awesome 123!!!</div>)
  }
}

ReactDOM.render(<App />, document.getElementById('target'));
