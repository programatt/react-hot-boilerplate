import React from 'react';
import ChartComponent from './ChartComponent';
import {Grid,Row,Col,Clearfix} from 'react-bootstrap';

export default class App extends React.Component {
  logIt(e){
    console.log("Hey you clicked this",e);
  }
  getData1(){
    return [
      {name: 'www.site1.com', upload: 200, download: 200, date: "2014-01-01"},
      {name: 'www.site2.com', upload: 100, download: 300, date: "2015-01-01"},
      {name: 'www.site3.com', upload: 300, download: 200, date: "2016-01-01"},
      {name: 'www.site4.com', upload: 400, download: 100, date: "2017-01-01"}
    ];
  }
  render(){
    return(
      <Grid>
        <Row className="show-grid">
          <Col xs={12} lg={4}>
            <ChartComponent 
                      XValue="date"
                      YValue="upload"
                      Height={500}
                      Width={400}
                      Name="Awesome Chart"
                      Type="bar"
                      Data={this.getData1()}
                      onClick={this.logIt.bind(this)}
                    />
          </Col>
          <Col xs={12} lg={8}>
              <ChartComponent 
                      XValue="date"
                      YValue="upload"
                      Height={500}
                      Width={650}
                      Name="Even More"
                      Type="line"
                      Data={this.getData1()}
                      onClick={this.logIt.bind(this)}
                    />
          </Col>
        </Row>
      </Grid>
    );
  }	

}
