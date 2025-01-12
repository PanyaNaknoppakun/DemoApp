
import React from 'react';
import { View, Text, Button } from 'react-native';

class LifecycleWithClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: 'Initial Message'
    };
    console.log('constructor: Component is being created');
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps: State or Props changed');
    if (nextState.count === 5) {
      return { message: 'Count reached 5!' }; // Update state based on props or state
    }
    return null; // Return null to avoid changing state unnecessarily
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Deciding if the component should re-render');
    if (nextState.count === this.state.count) {
      return false; // Skip re-render if count hasn't changed
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Before the DOM is updated');
    return null; // You can return a value to be passed to componentDidUpdate
  }

  componentDidMount() {
    console.log('componentDidMount: Component mounted to the screen');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component has been updated');
    if (this.state.count === 5) {
      console.log('Count has reached 5, updating the message.');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed');
  }

  render() {
    console.log('render: Rendering UI');
    return (
      <View style={{ padding: 20 }}>
        <Text>Current Count: {this.state.count}</Text>
        <Text>{this.state.message}</Text>
        <Button
          title="Increment Count"
          onPress={() => this.setState({ count: this.state.count + 1 })}
        />
      </View>
    );
  }
}

export default LifecycleWithClassExample;