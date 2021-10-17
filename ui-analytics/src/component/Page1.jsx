import React, { Component } from "react";
import axios from 'axios';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { JsonToTable } from "react-json-to-table";
import Loader from "react-loader-spinner";

class Page1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      widgetData1: [],
      isWidgetLoaderVisible: true,
      jsonLastMonthData: [],
    }
    this.baseURL = `/druid/v2/sql`; // ${window.location.host}
  }

  sleeper = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  componentDidMount() {
    // this.getDruidAllData();
    // this.getDruidLastMonthData();
  }

  getDruidAllData = async () => {
    const thisClass = this;
    await thisClass.sleeper(100);
    thisClass.setState({ isWidgetLoaderVisible: true });
    axios.post(this.baseURL,
      {
        query: "SELECT COUNT(*) AS TotalRecords FROM transactions"
      })
      .then(response => {
        thisClass.setState({ isWidgetLoaderVisible: false, jsonAllData: JSON.stringify(response.data, null, 2) });
      })
      .catch(error => {
        thisClass.setState({ isWidgetLoaderVisible: true });
        console.error('There was an error!', error);
      });
  }

  getDruidLastMonthData = () => {
    const thisClass = this;
    axios.post(this.baseURL,
      {
        query: "SELECT amount, channel, customerId, deviceType,  ownerId, tpn, transactionDate FROM transactions LIMIT 100"
      })
      .then(response => {
        thisClass.setState({ jsonLastMonthData: response.data });
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  render() {
    const { jsonAllData, jsonLastMonthData, isWidgetLoaderVisible } = this.state;
    return (
      <>
        <Container fluid>
          <br />
          <Row>
            <Col>
              <Card>
                <Card.Header as="h5">All Data <Button onClick={this.getDruidAllData} variant="primary">Get Data</Button></Card.Header>
                <Card.Body>
                  <Loader
                    type="Circles"
                    color="#50C878"
                    height={100}
                    width={100}
                    visible={isWidgetLoaderVisible}
                  />
                  {!isWidgetLoaderVisible &&
                    <code>
                      <pre>
                        {jsonAllData}
                      </pre>
                    </code>
                  }
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header as="h5">Last Month Data <Button onClick={this.getDruidLastMonthData} variant="primary">Get Data</Button></Card.Header>
                <Card.Body>
                  <JsonToTable json={jsonLastMonthData} />
                </Card.Body>
              </Card>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Page1;