import React, { Component } from "react";
import plywood from "plywood";

var External = plywood.External;
var druidRequesterFactory = require('plywood-druid-requester').druidRequesterFactory;

class App extends Component {

  constructor(props) {
    super(props);
    this.ply = plywood.ply;
    this.$ = plywood.$;
    this.state = {
      jsonAllData: null,
    }
    this.druidRequester = druidRequesterFactory({
      host: 'localhost:8888' // Where ever your Druid may be
    });

    this.wikiDataset = External.fromJS({
      engine: 'druid',
      source: 'transactions',  // The datasource name in Druid
      timeAttribute: 'time',  // Druid's anonymous time attribute will be called 'time',
      context: {
        timeout: 10000 // The Druid context
      }
    }, this.druidRequester);
  }

  componentDidMount() {
    this.getDruidAllData();
  }

  getDruidAllData = () => {
    const thisClass = this;
    var context = {
      transactions: this.wikiDataset
    };
    var ex = this.ply()
      // Define the external in scope with a filter on time and language
      .apply("transactions",
        this.$('transactions').filter(this.$("time").in({
          start: new Date("2020-01-01T00:00:00Z"),
          end: new Date("2021-10-01T00:00:00Z")
        }))
      )
      // Calculate count
      .apply('count', this.$('transactions').count())
      // Calculate the sum of the `added` attribute
      .apply('amount', '$transactions.sum($amount)');
    ex.compute(context).then(function (data) {
      // Log the data while converting it to a readable standard
      // console.log(JSON.stringify(data.toJS(), null, 2));
      thisClass.setState({ jsonAllData: JSON.stringify(data.toJS(), null, 2) });
    });
    // .done();
  }

  getDruidAllData = () => {
    const thisClass = this;
    var context = {
      transactions: this.wikiDataset
    };
    var ex = this.ply()
      // Define the external in scope with a filter on time and language
      .apply("transactions",
        this.$('transactions').filter(this.$("time").in({
          start: new Date("2020-01-01T00:00:00Z"),
          end: new Date("2021-10-01T00:00:00Z")
        }))
      )
      // Calculate count
      .apply('count', this.$('transactions').count())
      // Calculate the sum of the `added` attribute
      .apply('amount', '$transactions.sum($amount)');
    ex.compute(context).then(function (data) {
      // Log the data while converting it to a readable standard
      // console.log(JSON.stringify(data.toJS(), null, 2));
      thisClass.setState({ jsonAllData: JSON.stringify(data.toJS(), null, 2) });
    });
    // .done();
  }

  render() {
    const { jsonAllData } = this.state;
    return <div>
      <button onClick={this.getDruidAllData}>Get All Data</button>


      <table border="2" cellspacing="0" cellpadding="0">
        <tr>
          <th>All Data</th>
        </tr>
        <tr>
          <td>
            <code>
              <pre>
                {jsonAllData}
              </pre>
            </code>
          </td>
        </tr>
      </table>
    </div>;
  }
}

export default App;