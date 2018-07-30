import React, {Component} from 'react';
import { Pie, Sector, Cell } from 'recharts';
import PieChart from 'react-minimal-pie-chart';

class SimplePieChart extends Component{
	render () {	
  	return (
    	<PieChart
		  data={[
		    { value: parseFloat(this.props.stat1), color: '#E38627' },
		    { value: parseFloat(this.props.stat2), color: '#C13C37' }
		  ]}
		/>
    );
  }
}

export default SimplePieChart;