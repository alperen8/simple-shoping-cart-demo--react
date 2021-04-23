import React, { Component } from 'react';
import counters from "./counters";

class Counter extends Component {
    render() {                     
        return (                  
        <div>
            <h4>Counter#{this.props.id}</h4>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={()=>this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm m-2">
                Increment!
             </button>

            <button 
            onClick={()=>this.props.onDecrement(this.props.counter)} 
            className="btn btn-secondary btn-sm m-2">
                Decrement!
            </button>

            <button 
            onClick={()=>this.props.onSetZero(this.props.counter)} 
            className="btn btn-secondary btn-sm m-2" >
                set it to zero!
            </button>

            <button onClick={()=>this.props.onDelete(this.props.id)} 
            className="btn btn-danger btn-sm m-2">
                Delete!
            </button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";       //
        if (this.props.counter.value === 0) {       //
            classes += "warning";              //
        }                                      // classes+= this.props.counter===0 ? "warning":"primary"
        else {                                   //
            classes += "primary";              //
        }                                     //
        return classes;
    }

    formatCount(){
        const {value: count}= this.props.counter;

        if(count===0){          //
            return "zero";      //
        }                       // return count ===0 ? 'zero' : count; 
        else                    //
        return count;           //
        
    }
}
 
export default Counter;