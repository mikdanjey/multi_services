import React, { Component } from "react";
import axios from 'axios';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import Loader from "react-loader-spinner";

class Dashboard2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      widgetData1: [],
      isWidgetLoaderVisible1: true,
      jsonLastMonthData: [],
    }
    this.baseURL = `/druid/v2/sql`;
  }

  sleeper = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  componentDidMount() {
  }

  getDruidWidget1 = async () => {
    const thisClass = this;
    await thisClass.sleeper(100);
    thisClass.setState({ isWidgetLoaderVisible1: true });
    axios.post(this.baseURL,
      {
        query: `
        SELECT SUM(amount) as "Total Volume" FROM transactions 
        WHERE transactionDate >= 2021-09-16T12:51:09.458Z - INTERVAL '1' DAY
        `
      })
      .then(response => {
        thisClass.setState({ isWidgetLoaderVisible1: false, widgetData1: JSON.stringify(response.data, null, 2) });
      })
      .catch(error => {
        thisClass.setState({ isWidgetLoaderVisible1: true });
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

            </Col>

            <Col>
              <Card>
                <Card.Header>
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">Sample Data</h5>
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

            </Col>

          </Row>
        </Container>
      </>
    )
  }
}

export default Dashboard2;