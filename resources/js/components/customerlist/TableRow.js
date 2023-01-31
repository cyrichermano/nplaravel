
import React, { Component } from 'react';


class TableRow extends Component {
    constructor(props){
        super(props);
    }
render() {
    return (
        <tr>
    <th>{this.props.data.id}</th>
    <th>{this.props.data.name}</th>
    <th>{this.props.data.depth}</th>
    <td>@mdo</td>
  </tr>
    )
        
    
}
}

export default TableRow;