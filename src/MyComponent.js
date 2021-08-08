import React, {Component} from 'react';

class MyComponent extends Component {
  state = {
    value: 0
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  //업데이트를 막아주는 함수: 이 함수를 작성하지 않으면 기본은 true이다.
  shouldComponentUpdate(nextProps, prevState) {
    if(nextProps.value === 10) return false;
    return true;
    
  }

  //컴포넌트가 업데이트 돼서 돔에 반영되기 직전에 호출: 
  //업데이트 직전 돔상태를 리턴시켜서 리턴된 값을 컴포넌트에서 받아올 수 있다.
  // getSnapshotBeforeUpdate() {

  // }


  //컴포넌트가 업데이트 되고 난 다음에(render) 이후에 호출되는 함수
  componentDidUpdate(prevProps, nextState) {
    if(this.props.value !== prevProps.value) {
      console.log('value 값이 바뀌었다.', this.props.value);
    }
  }

  //컴포넌트가 불필요해지면 나타나는 함수
  componentWillUnmount() {
    console.log('Good Bye!');
  }




  render() {
    return (
      <div>
        {this.props.missing.something}
        <p>props : {this.props.value}</p>
        <p>state: {this.state.value}</p>
      </div>
    );
  }
}
export default MyComponent;