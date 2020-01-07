import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            employees: [{
                
            }]
        }

    }


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"></span>
                <input className="inputLine"></input>
                <button className="confirmationButton"> Filter </button>
                <span className="resultsBox filterObjectRB"></span>
          </div>
        )
    }
}

export default FilterObject