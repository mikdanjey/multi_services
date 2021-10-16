import React, { Component } from "react";
import axios from 'axios';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jsonAllData: null,
      jsonLastMonthData: null,
    }
    this.baseURL = `/druid/v2/sql`; // ${window.location.host}
  }

  componentDidMount() {
    this.getDruidAllData();
    this.getDruidLastMonthData();
  }

  getDruidAllData = () => {
    const thisClass = this;
    axios.post(this.baseURL,
      {
        query: "SELECT COUNT(*) AS TotalRecords FROM transactions"
      })
      .then(response => {
        thisClass.setState({ jsonAllData: JSON.stringify(response.data, null, 2) });
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  getDruidLastMonthData = () => {
    const thisClass = this;
    axios.post(this.baseURL,
      {
        query: "SELECT COUNT(*) AS TotalRecords FROM transactions"
      })
      .then(response => {
        thisClass.setState({ jsonLastMonthData: JSON.stringify(response.data, null, 2) });
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  render() {
    const { jsonAllData, jsonLastMonthData } = this.state;
    return <div>
      <table border="2" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th>All Data <button onClick={this.getDruidAllData}>Get Data</button></th>
            <th>Last Month Data <button onClick={this.getDruidLastMonthData}>Get Data</button></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="280px">
              <code>
                <pre>
                  {jsonAllData}
                </pre>
              </code>
            </td>

            <td width="280px">
              <code>
                <pre>
                  {jsonLastMonthData}
                </pre>
              </code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>;
  }
}

export default App;