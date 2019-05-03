import React, { Component } from "react";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [{
          
      }],
      firstName: "",
      lastName: ""
    };
  }

  handleChange = event => {
    if (event.target.name === "firstName")
      this.setState({ firstName: event.target.value });
    if (event.target.name === "lastName")
      this.setState({ lastName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  renderEditable = cellInfo => {
    return (
      <div
        style={{ backgroundColor: "#fafafa", borderLeft: '1px solid black' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

  render() {
    const { data } = this.state;
    return (
    <div>
        <ReactTable
            data={data}
            columns={[
                {
                    Header: "Deal Name",
                    accessor: "firstName",
                    Cell: this.renderEditable,
                },
                {
                    Header: "Status",
                    accessor: "lastName",
                    Cell: this.renderEditable,
                },
                {
                    Header: "Start Date",
                    Cell: this.renderEditable,
                },
                {
                    Header: 'End Date',
                    Cell: this.renderEditable,
                },
                {
                    Header: 'Discount #',
                    Cell: this.renderEditable,
                },
                {
                    Header: 'Deal Size',
                    Cell: this.renderEditable,
                },
                {
                    Header: 'QD Turns',
                    Cell: this.renderEditable,
                },
                {
                    Header: 'Cmmt Inv',
                    Cell: this.renderEditable,
                },
                {
                    Header: 'Deal 5wka',
                    Cell: this.renderEditable,
                },
                {
                    Header: 'Deal 1Wk',
                    Cell: this.renderEditable,
                },
                {
                    Header: '2Wk',
                    Cell: this.renderEditable,
                },
                {
                    Header: '3Wk',
                    Cell: this.renderEditable,
                }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    </div>
    );
  }
}
export default App;