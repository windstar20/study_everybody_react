// import React, {Component} from 'react';
import React from 'react';
// class MyName extends Component {
//   static defaultProps = {
//     name: '기본이름'
//   }
//   render() {
//     return (
//       <div>
//         안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
//         <p>저의 또다른 이름은 {this.props.otherName} 입니다.</p>
//       </div>
//     )
//   }
// }

const MyName = ({name}) => {
  return <div> 제 이름은 {name} 입니다.</div>;
};

MyName.defaultProps = {
  name: '제임스'
  
}



export default MyName;
