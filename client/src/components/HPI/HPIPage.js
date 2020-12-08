import React, { Component } from 'react';

import { Container, Row, Col } from "react-bootstrap";

class HPIPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        clicks: 0,
        show: true
      };
    }
    render() {
        return (
            <Container>
              <Row>
                <Col>
                  <h3>HPI Generated</h3>
                  <p>Your HPI summary has been generated.<br />
                    Please present it to your doctor or nurse.</p>
                </Col>
              </Row>
              <Row>
                <div class="col-lg-12">
                  <div class="primary-form">
                    <form action="home.html">
                      <div class="form-group">
                          <label for="HPItextarea">HPI</label>
                            <textarea class="form-control" id="HPI-text-area" rows="10">Patient is a 44-year old female who reports neck pain for 5 days. She reports looking down at her computer screen for long periods of time. She describes her pain as spasms and aching with no radiation. She rates her pain a 7/10 and is intermittent. Her pain is worse at the end of the day and better with rest, ice, and stretching. She denies fever, cough, nausea, or loss of bowel or bladder. She admits to headaches. She currently takes ibuprofen for her pain with mild relief. Her visit is via telemedicine today due to COVID-19 pandemic precautions.
                            </textarea>
                        </div>
                        <div class="mt-4 mb-5">
                            <button type="button" class=" btn btn-lg btn-outline-secondary mr-2">
                                <i class="far fa-copy "></i> Copy
                            </button>

                            <button type="button" class="btn btn-lg btn-outline-primary">
                                <i class="fas fa-file-download"></i> Download PDF
                            </button>
                        </div>
                      <div class="form-submit">
                        <button type="submit" class="primary-btn">Done</button>
                      </div>
                    </form>
                  </div>
                </div>
					    </Row>
            </Container>
        );
        }
}

export default HPIPage;