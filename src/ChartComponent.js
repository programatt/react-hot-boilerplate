import React,{PropTypes} from 'react';
import c3 from 'c3';
import * as d3 from 'd3';
import {Grid,Row,Col,Clearfix} from 'react-bootstrap';

class ChartComponent extends React.Component{
	componentDidMount(){
		this.buildChart();
	}
	componentWillUpdate(){
		this.buildChart();
	}
	buildChartId(){
		let trimTitle = this.props.Name.replace(" ","");
		return "chart"+trimTitle;
	}

	buildChart(){
		c3.generate({
			bindto: "#"+this.buildChartId(),
			size:{
				height:this.props.Height,
				width: this.props.Width
			},
			data: 
			{
			    json: this.props.Data,
			    keys: {
			      x: this.props.XValue, // it's possible to specify 'x' when category axis
			      value: [this.props.YValue]
			    },
			    onclick:this.props.onClick,
				type:this.props.Type
  			},
			axis: {
			    x: { type: 'category' },
			    y: {
			    	label: this.props.YLabel
			    }
			},
		});
	}
	render()	{
		return(
			<div>
				<div className='centered'>{this.props.Name}</div>
			<Grid>
			<Row>
				<Col xs={12} md={12}>
					<div id={this.buildChartId()}></div>
				</Col>
			</Row>
			</Grid>
			</div>
		);
	}
}

ChartComponent.propTypes = {
}

export default ChartComponent;