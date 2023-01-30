import React, { Component }from 'react';
import ReactDOM from 'react-dom';

class Table extends Component {

constructor(props){
  super(props);

  this.state ={
    customer:[],
  }
}


getcustomerlist = () => {

}



  render (){
    return (
      <div className="container">
          <div className="row justify-content-center">
          <table class="table table-dark table-hover">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
</tbody>
</table>
          </div>
      </div>
  );
  }
}
function cyric() {
   
}

export default Table;
