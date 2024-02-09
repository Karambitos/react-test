import React, {Component} from 'react'
import {format, add } from 'date-fns'


class StopWatch extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        date: new Date(0, 0, 0, 0, 0, 0),
      };

      this.inprogres = true
    }
  
    start = () => {
        this.timeoutlId = setTimeout(this.tick, 1000);

    };
  
    // stop = () => {
    //     clearTimeout(this.timeoutlId);
    //     this.timeoutlId = null;
    // };
  
    tick = () => {

       if (this.inprogres) {
            console.log('tick');
            const { date } = this.state;
            const newDate = add(date, { seconds: 1 });
            this.setState({
                date: newDate,
            });
            clearTimeout(this.timeoutlId);
        }
 
    };

    // customSetInterval = (func, interval) => {
    //     function intervalFunction() {
    //         func();
    //         setTimeout(intervalFunction, interval);
    //       }
    //       setTimeout(intervalFunction, interval);
    //     return {
    //     clear: function() {
    //         clearTimeout(intervalFunction);
    //     }
    //     };
    // }
  
    componentDidMount() {
      this.start();
    }
  
    // componentWillUnmount() {
    //   this.stop();
    // }
  
    render() {
      const { date } = this.state;
      const timeText = format(date, 'HH:mm:ss');

    //   let value = 1

    //   this.customSetInterval(function() {
    //     value ++
    //     console.log(value);
    //   }, 1000);
  
      return (
        <div>
          <p>{timeText}</p>
          <button onClick={this.start}>Start</button>
          {/* <button onClick={this.stop}>Stop</button> */}
        </div>
      );
    }
  }
  
  export default StopWatch;


//TODO! ---------------------------------------
// import React, { Component } from 'react';
// import { add, format } from 'date-fns';

// class StopWatch extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       date: new Date(0, 0, 0, 0, 0, 0),
//     };

//     this.timeoutId = null;
//   }

//   start = () => {
//     if (!this.timeoutId) {
//       this.tick();
//     }
//   };

//   stop = () => {
//     if (this.timeoutId) {
//       clearTimeout(this.timeoutId);
//       this.timeoutId = null;
//       console.log("Timer stopped");
//     }
//   };

//   tick = () => {
//     const { date } = this.state;

//     const newDate = add(date, { seconds: 1 });

//     this.setState({
//       date: newDate,
//     });

//     this.timeoutId = setTimeout(this.tick, 1000);
//   };

//   componentDidMount() {
//     this.start();
//   }

//   componentWillUnmount() {
//     this.stop();
//   }

//   render() {
//     const { date } = this.state;

//     const timeText = format(date, 'HH:mm:ss');

//     return (
//       <div>
//         <p>{timeText}</p>
//         <button onClick={this.start}>Start</button>
//         <button onClick={this.stop}>Stop</button>
//       </div>
//     );
//   }
// }

// export default StopWatch;
