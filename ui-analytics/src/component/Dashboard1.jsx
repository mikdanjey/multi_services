import React, { Component } from "react";
import axios from 'axios';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { JsonToTable } from "react-json-to-table";
import Loader from "react-loader-spinner";

class Dashboard1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      widgetData1: [],
      isWidgetLoaderVisible1: true,

      widgetData2: [],
      isWidgetLoaderVisible2: true,

      widgetData3: [],
      isWidgetLoaderVisible3: true,

      widgetData4: [],
      isWidgetLoaderVisible4: true,

      widgetData5: [],
      isWidgetLoaderVisible5: true,

      widgetData6: [],
      isWidgetLoaderVisible6: true,
    }
    this.baseURL = `/druid/v2/sql`;

  }

  sleeper = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  componentDidMount() {
    // this.getDruidWidget1();
    // this.getDruidWidget2();
    // this.getDruidWidget3();
    // this.getDruidWidget4();
    // this.getDruidWidget5();

  }

  getMonth = (year, month) => {
    const months = ["", "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return `${year} ${months[month]}`;
  }

  getDruidWidget1 = async () => {
    const thisClass = this;
    thisClass.setState({ isWidgetLoaderVisible1: true });
    // await thisClass.sleeper(100);
    let response = [];
    let widgetData1 = [];
    try {
      response = await axios.post(this.baseURL, {
        query: `
        SELECT EXTRACT(Year FROM __time) as "Per year", COUNT(*) as "Total Count", ROUND(SUM(amount), 0) as "Total Volume"
        FROM transactions WHERE __time BETWEEN '2020-01-01' AND '2021-12-31'
        GROUP BY 1
        ORDER BY 1 ASC
        `
      });
      widgetData1 = response.data;
      thisClass.setState({ isWidgetLoaderVisible1: false, widgetData1: widgetData1 });
    } catch (error) {
      thisClass.setState({ isWidgetLoaderVisible1: true });
      console.error('There was an error!', error);
    }
  }

  getDruidWidget2 = async () => {
    const thisClass = this;
    thisClass.setState({ isWidgetLoaderVisible2: true });
    // await thisClass.sleeper(100);
    let response = [];
    let widgetData2 = [];
    try {
      response = await axios.post(this.baseURL, {
        query: `
        SELECT EXTRACT(YEAR FROM __time) as "Per Year", EXTRACT(Month FROM __time) as "Per Month", COUNT(*) as "Total Count", ROUND(SUM(amount), 0) as "Total Volume"
        FROM transactions WHERE __time BETWEEN '2020-01-01' AND '2021-12-31'
        GROUP BY 1,2
        ORDER BY 1 ASC
        `
      });
      widgetData2 = response.data;
      widgetData2 = widgetData2.map((item) => {
        return { "Per Month": this.getMonth(item["Per Year"], item["Per Month"]), "Total Count": item["Total Count"], "Total Volume": item["Total Volume"] }
      });
      thisClass.setState({ isWidgetLoaderVisible2: false, widgetData2 });
    } catch (error) {
      thisClass.setState({ isWidgetLoaderVisible2: true });
      console.error('There was an error!', error);
    }
  }

  getDruidWidget3 = async () => {
    const thisClass = this;
    thisClass.setState({ isWidgetLoaderVisible3: true });
    // await thisClass.sleeper(100);
    let response = [];
    let widgetData3 = [];
    try {
      response = await axios.post(this.baseURL, {
        query: `
        SELECT customerId as "Customer", COUNT(*) as "Total Count", ROUND(SUM(amount), 0) as "Total Volume"
        FROM transactions WHERE __time BETWEEN '2020-01-01' AND '2021-12-31'
        GROUP BY 1
        ORDER BY 1 ASC
        `
      });
      widgetData3 = response.data;
      thisClass.setState({ isWidgetLoaderVisible3: false, widgetData3 });
    } catch (error) {
      thisClass.setState({ isWidgetLoaderVisible3: true });
      console.error('There was an error!', error);
    }
  }

  getDruidWidget4 = async () => {
    const thisClass = this;
    thisClass.setState({ isWidgetLoaderVisible4: true });
    // await thisClass.sleeper(100);
    let response = [];
    let widgetData4 = [];
    try {
      response = await axios.post(this.baseURL, {
        query: `
        SELECT channel as "Channel", COUNT(*) as "Total Count", ROUND(SUM(amount), 0) as "Total Volume"
        FROM transactions WHERE __time BETWEEN '2020-01-01' AND '2021-12-31'
        GROUP BY 1
        ORDER BY 1 ASC
        `
      });
      widgetData4 = response.data;
      thisClass.setState({ isWidgetLoaderVisible4: false, widgetData4 });
    } catch (error) {
      thisClass.setState({ isWidgetLoaderVisible4: true });
      console.error('There was an error!', error);
    }
  }

  getDruidWidget5 = async () => {
    const thisClass = this;
    thisClass.setState({ isWidgetLoaderVisible5: true });
    // await thisClass.sleeper(100);
    let response = [];
    let widgetData5 = [];
    try {
      response = await axios.post(this.baseURL, {
        query: `
        SELECT deviceType as "Device Type", COUNT(*) as "Total Count", ROUND(SUM(amount), 0) as "Total Volume"
        FROM transactions WHERE __time BETWEEN '2020-01-01' AND '2021-12-31'
        GROUP BY 1
        ORDER BY 1 ASC
        `
      });
      widgetData5 = response.data;
      thisClass.setState({ isWidgetLoaderVisible5: false, widgetData5 });
    } catch (error) {
      thisClass.setState({ isWidgetLoaderVisible5: true });
      console.error('There was an error!', error);
    }
  }

  getDruidWidget6 = async () => {
    const thisClass = this;
    thisClass.setState({ isWidgetLoaderVisible6: true });
    // await thisClass.sleeper(100);
    let response = [];
    let widgetData6 = [];
    try {
      response = await axios.post(this.baseURL, {
        query: `
        SELECT COUNT(*) as "Total Count", ROUND(SUM(amount), 0) as "Total Volume"
        FROM transactions WHERE __time BETWEEN '2020-01-01' AND '2021-12-31'
        `
      });
      widgetData6 = response.data;
      thisClass.setState({ isWidgetLoaderVisible6: false, widgetData6 });
    } catch (error) {
      thisClass.setState({ isWidgetLoaderVisible6: true });
      console.error('There was an error!', error);
    }
  }

  render() {
    const { widgetData1, isWidgetLoaderVisible1, widgetData2, isWidgetLoaderVisible2, widgetData3, isWidgetLoaderVisible3, widgetData4, isWidgetLoaderVisible4, widgetData5, isWidgetLoaderVisible5, widgetData6, isWidgetLoaderVisible6, } = this.state;
    return (
      <>
        <Container fluid style={{ padding: 20 }}>
          <Row>

          <Col>
              <Card>
                <Card.Header>
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">By Overall Data</h5>
                    </div>
                    <div className="col text-end">
                      <Button onClick={this.getDruidWidget6} variant="primary">Get Data</Button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Loader
                    type="Circles"
                    color="#50C878"
                    height={100}
                    width={100}
                    visible={isWidgetLoaderVisible6}
                  />
                  {!isWidgetLoaderVisible6 &&
                    <JsonToTable json={widgetData6} />
                  }
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header>
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">By Yearly Data</h5>
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
                    <JsonToTable json={widgetData1} />
                  }
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header>
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">By Channel Data</h5>
                    </div>
                    <div className="col text-end">
                      <Button onClick={this.getDruidWidget4} variant="primary">Get Data</Button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Loader
                    type="Circles"
                    color="#50C878"
                    height={100}
                    width={100}
                    visible={isWidgetLoaderVisible4}
                  />
                  {!isWidgetLoaderVisible4 &&
                    <JsonToTable json={widgetData4} />
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
                      <h5 className="card-title">By Device Type Data</h5>
                    </div>
                    <div className="col text-end">
                      <Button onClick={this.getDruidWidget5} variant="primary">Get Data</Button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Loader
                    type="Circles"
                    color="#50C878"
                    height={100}
                    width={100}
                    visible={isWidgetLoaderVisible5}
                  />
                  {!isWidgetLoaderVisible5 &&
                    <JsonToTable json={widgetData5} />
                  }
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header>
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">By Customer Data</h5>
                    </div>
                    <div className="col text-end">
                      <Button onClick={this.getDruidWidget3} variant="primary">Get Data</Button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Loader
                    type="Circles"
                    color="#50C878"
                    height={100}
                    width={100}
                    visible={isWidgetLoaderVisible3}
                  />
                  {!isWidgetLoaderVisible3 &&
                    <JsonToTable json={widgetData3} />
                  }
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header>
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">By Monthly Data</h5>
                    </div>
                    <div className="col text-end">
                      <Button onClick={this.getDruidWidget2} variant="primary">Get Data</Button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Loader
                    type="Circles"
                    color="#50C878"
                    height={100}
                    width={100}
                    visible={isWidgetLoaderVisible2}
                  />
                  {!isWidgetLoaderVisible2 &&
                    <JsonToTable json={widgetData2} />
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

export default Dashboard1;