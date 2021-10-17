import React, { Component } from "react";
import axios from 'axios';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { JsonToTable } from "react-json-to-table";
class Dashboard2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jsonAllData: [],
      jsonLastMonthData: [],
    }
    this.baseURL = `/druid/v2/sql`;
  }

  componentDidMount() {
    // this.getDruidAllData();
    // this.getDruidLastMonthData();
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
        query: "SELECT amount, customerId FROM transactions LIMIT 10"
      })
      .then(response => {
        thisClass.setState({ jsonLastMonthData: response.data });
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  render() {
    const { jsonAllData, jsonLastMonthData } = this.state;
    return (
      <>
        <Container fluid>
          <br />
          <Row>
            <Col>
            </Col>
            <Col>
              <Card>
                <Card.Header as="h5">Sample Data <Button onClick={this.getDruidLastMonthData} variant="primary">Get Data</Button></Card.Header>
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

export default Dashboard2;