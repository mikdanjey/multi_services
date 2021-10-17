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
      isWidgetLoaderVisible1: true,
      jsonLastMonthData: [],
    }
    this.baseURL = `/druid/v2/sql`; // ${window.location.host}
  }

  sleeper = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  componentDidMount() {
    // this.getDruidWidget1();
    // this.getDruidLastMonthData();
  }

  getDruidWidget1 = async () => {
    const thisClass = this;
    await thisClass.sleeper(100);
    thisClass.setState({ isWidgetLoaderVisible1: true });
    axios.post(this.baseURL,
      {
        query: "SELECT COUNT(*) AS TotalRecords FROM transactions"
      })
      .then(response => {
        thisClass.setState({ isWidgetLoaderVisible1: false, widgetData1: JSON.stringify(response.data, null, 2) });
      })
      .catch(error => {
        thisClass.setState({ isWidgetLoaderVisible1: true });
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
    const { widgetData1, isWidgetLoaderVisible1 } = this.state;
    return (
      <>
        <Container fluid style={{ padding: 20 }}>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">January 2020</h5>
                    </div>
                    <div className="col text-end">
                      <Button onClick={this.getDruidWidget1} variant="primary">Get Data</Button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Loader
                    type="Circles"
                    color="#50C878"
                    height={100}
                    width={100}
                    visible={isWidgetLoaderVisible1}
                  />
                  {!isWidgetLoaderVisible1 &&
                    <code>
                      <pre>
                        {widgetData1}
                      </pre>
                    </code>
                  }
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header>
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">February 2020</h5>
                    </div>
                    <div className="col text-end">
                      <Button onClick={this.getDruidWidget1} variant="primary">Get Data</Button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Loader
                    type="Circles"
                    color="#50C878"
                    height={100}
                    width={100}
                    visible={isWidgetLoaderVisible1}
                  />
                  {!isWidgetLoaderVisible1 &&
                    <code>
                      <pre>
                        {widgetData1}
                      </pre>
                    </code>
                  }
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header>
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">March 2020</h5>
                    </div>
                    <div className="col text-end">
                      <Button onClick={this.getDruidWidget1} variant="primary">Get Data</Button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Loader
                    type="Circles"
                    color="#50C878"
                    height={100}
                    width={100}
                    visible={isWidgetLoaderVisible1}
                  />
                  {!isWidgetLoaderVisible1 &&
                    <code>
                      <pre>
                        {widgetData1}
                      </pre>
                    </code>
                  }
                </Card.Body>
              </Card>
            </Col>

          </Row>
          <br />
          <Row>

            <Col>
              <Card>
                <Card.Header>
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">May 2020</h5>
                    </div>
                    <div className="col text-end">
                      <Button onClick={this.getDruidWidget1} variant="primary">Get Data</Button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Loader
                    type="Circles"
                    color="#50C878"
                    height={100}
                    width={100}
                    visible={isWidgetLoaderVisible1}
                  />
                  {!isWidgetLoaderVisible1 &&
                    <code>
                      <pre>
                        {widgetData1}
                      </pre>
                    </code>
                  }
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header>
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">June 2020</h5>
                    </div>
                    <div className="col text-end">
                      <Button onClick={this.getDruidWidget1} variant="primary">Get Data</Button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Loader
                    type="Circles"
                    color="#50C878"
                    height={100}
                    width={100}
                    visible={isWidgetLoaderVisible1}
                  />
                  {!isWidgetLoaderVisible1 &&
                    <code>
                      <pre>
                        {widgetData1}
                      </pre>
                    </code>
                  }
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header>
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">July 2020</h5>
                    </div>
                    <div className="col text-end">
                      <Button onClick={this.getDruidWidget1} variant="primary">Get Data</Button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Loader
                    type="Circles"
                    color="#50C878"
                    height={100}
                    width={100}
                    visible={isWidgetLoaderVisible1}
                  />
                  {!isWidgetLoaderVisible1 &&
                    <code>
                      <pre>
                        {widgetData1}
                      </pre>
                    </code>
                  }
                </Card.Body>
              </Card>
            </Col>

          </Row>


        </Container>
      </>
    )
  }
}

export default Page1;