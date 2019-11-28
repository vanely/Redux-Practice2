import React from 'react';

import Posts from './components/Posts.component';
import CreatePost from './components/CreatePost.compnent';

class App extends React.Component {
  render() {
    console.log('App', this.props);
    return (
      <section>
        <CreatePost />
        <Posts/>
      </section>
    );
  }
}

export default App;
