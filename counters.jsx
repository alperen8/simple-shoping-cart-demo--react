import React, { Component } from 'react';
import Counter from "./counter";
class Counters extends Component {
    state = {  
        counters : [
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
    ]
};

handleIncrement=counter=>{
const counters=[...this.state.counters];
const counterIndex=counters.indexOf(counter);
counters[counterIndex].value++;
this.setState({counters});

};
handleDecrement=counter=>{

    if(counter.value>0){
    const counters=[...this.state.counters];
    const counterIndex=counters.indexOf(counter);
    counters[counterIndex].value--;
    this.setState({counters});
    }
    else{
        return counter;
    }
};
handleDelete=(counterId)=>{
    const counters=this.state.counters.filter(c=>c.id!==counterId);
    this.setState({counters});
};
SetItToZero=(counter)=>{
    const counters=[...this.state.counters];
    const counterIndex=counters.indexOf(counter);
    counters[counterIndex].value=0;
    this.setState({counter});
};
resetAll=()=>{
    const counters=[...this.state.counters];
    for(let i=0;i<counters.length;i++){
            counters[i].value=0;
    }
    this.setState(counters);
};


    render() { 
      
        return (
            
       <div class="p-3 mb-2 bg-dark text-white">
       <button 
       onClick={this.resetAll} 
       className="btn btn-primary btn-sm m-2">
           Reset</button>


       {this.state.counters.map(counter => 
       <Counter 
       key ={counter.id} 
       counter={counter} 
       value={counter.value} 
       id={counter.id}
       onIncrement={this.handleIncrement} 
       onDelete={this.handleDelete} 
       onDecrement={this.handleDecrement}
       onSetZero={this.SetItToZero}
       onReset={this.resetAll}
       >
       </Counter>
       )}
       </div>
         );
    }
}
 
export default Counters ;
