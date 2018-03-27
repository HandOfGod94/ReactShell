import React, {Component} from 'react';
import MShell from './core/components/MShell';
import MUserProfile from './core/views/MUserProfile';
import userProfileStore from "./core/views/UserProfileStore";
import DevTools from "mobx-react-devtools";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MShell content={<MUserProfile store={userProfileStore}/>}/>
        <DevTools highlightTimeout={5000} />
      </div>
    );
  }
}

export default App;
