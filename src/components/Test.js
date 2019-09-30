import React, {Component} from "react";
import {Pie}  from "react-chartjs-2";
 
export default class PieChart extends Component{
 
	constructor(props) {
        super(props)
        this.state = {
            labels1: ['male', 'female'],
            labels2: ['HS', 'College'],
            datasets1: [{
                data: [2000, 4000],
                backgroundColor: ['pink', 'blue']
            }],
            datasets2: [{
                data: [1000, 4000],
                backgroundColor: ['black', 'white']
            }]
        }
	}
 
	render() {

        return (
            <div>
                <h1> Gender</h1>

                <Pie 
                    data={{
                        labels1: this.state.labels1,
                        datasets: this.state.datasets1,
                        
                        }}
                    height='50%'
                />
                <br />
                <h1> Education</h1>
                <Pie 
                    data={{
                        
                        labels2: this.state.labels2,
                        dataset2: this.state.datasets2,
                        }}
                    height='75%'
                />
            
            </div>
        )
		
	}
}
 
