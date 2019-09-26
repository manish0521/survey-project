import React, {Component} from "react";
import {Pie}  from "react-chartjs-2";
 
export default class PieChart extends Component{
 
	constructor(props) {
        super(props)
        this.state = {
            labels: ['male', 'female'],
            datasets: [{
                data: [2000, 4000],
                backgroundColor: ['red', 'blue']
            }]
        }
	}
 
	render() {

        return (
            <div>
                <h1> Gender</h1>

                <Pie 
                    data={{
                        labels: this.state.labels,
                        datasets: this.state.datasets,
                        }}
                    height='50%'
                />
                <br />
            
            </div>
        )
		
	}
}
 
