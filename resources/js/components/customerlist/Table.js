import axios from 'axios';
import { functionsIn } from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TableRow from './TableRow';

class Table extends Component {

constructor(props){
  super(props);

  this.state = {
    customers: [],
  }
}

componentDidMount() {
  this.getcustomerlist();
}

getcustomerlist = () => {
  let self = this;
  axios.get('/get/customer/list').then(function(response){
    self.setState({
      customers:response.data
    });
  })
}

  render(){
    return (
      <div className="container">
          <div className="row justify-content-center">
          <table class="table table-dark table-hover">
<thead>
  <tr>
    <th scope="col" width="100px">#</th>
    <th scope="col" width="100px">First</th>
    <th scope="col" width="100px">depth</th>
    <th scope="col" width="100px">Actions</th>
  </tr>
</thead>
<tbody>
  {
    this.state.customers.map(function (x, i) {
     return <TableRow key={i} data={x}/>
    })
  }
  
</tbody>
</table>
          </div>
      </div>
  );
  }
}

export default Table;
