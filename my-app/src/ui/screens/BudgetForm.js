import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Grid, Form, Segment, Header, Table} from 'semantic-ui-react';
import TopMenu from '../components/TopMenu'


class BudgetForm extends React.Component {
  render() {
    return (
    <div>
        <TopMenu/>
        <Container className="budgetform-container">
          <Grid columns='two' divided>
            <Grid.Row>
              <Grid.Column>
                <Table celled size='small'>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>INCOMING SOURCE</Table.HeaderCell>
                      <Table.HeaderCell>AMOUNT</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell><Header as='h4'>TOTAL: </Header></Table.HeaderCell>
                      <Table.HeaderCell />
                    </Table.Row>
                  </Table.Footer>
                </Table>
              </Grid.Column>

              <Grid.Column>
                <Segment.Group stacked>
                  <Segment><Header as='h4'>NOTES</Header>
                  </Segment>
                  <Segment>
                   <Form> <Form.TextArea placeholder='Type here...' /> </Form>
                  </Segment>
                </Segment.Group>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column stretched >
                  <Table celled size='small'>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell  width={2}>FIXED EXPENSES</Table.HeaderCell>
                        <Table.HeaderCell width={2}>BUDGET</Table.HeaderCell>
                        <Table.HeaderCell width={2}>SPENT</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row>
                        <Table.Cell><Form.Input/></Table.Cell>
                        <Table.Cell><Form.Input/></Table.Cell>
                        <Table.Cell><Form.Input/></Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell><Form.Input/></Table.Cell>
                        <Table.Cell><Form.Input/></Table.Cell>
                        <Table.Cell><Form.Input/></Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell><Form.Input/></Table.Cell>
                        <Table.Cell><Form.Input/></Table.Cell>
                        <Table.Cell><Form.Input/></Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell><Form.Input/></Table.Cell>
                        <Table.Cell><Form.Input/></Table.Cell>
                        <Table.Cell><Form.Input/></Table.Cell>
                      </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                      <Table.Row>
                        <Table.HeaderCell><Header as='h4'>TOTAL</Header></Table.HeaderCell>
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                      </Table.Row>
                    </Table.Footer>
                  </Table>
              </Grid.Column>

              <Grid.Column>
                <Table celled size='small'>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell width={2}>VARIABLE EXPENSES</Table.HeaderCell>
                      <Table.HeaderCell width={2}>BUDGET</Table.HeaderCell>
                      <Table.HeaderCell width={2}>SPENT</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell><Header as='h4'>TOTAL</Header></Table.HeaderCell>
                      <Table.HeaderCell />
                      <Table.HeaderCell />
                    </Table.Row>
                  </Table.Footer>
                </Table>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Table celled size='small'>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>SAVING FOR</Table.HeaderCell>
                      <Table.HeaderCell>SAVED</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell><Header as='h4'>TOTAL SAVED: </Header></Table.HeaderCell>
                      <Table.HeaderCell />
                    </Table.Row>
                  </Table.Footer>
                </Table>
              </Grid.Column>

              <Grid.Column>
                <Table celled size='small'>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>DEBT</Table.HeaderCell>
                      <Table.HeaderCell>PAID</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><Form.Input/></Table.Cell>
                      <Table.Cell><Form.Input/></Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell><Header as='h4'>TOTAL PAID: </Header></Table.HeaderCell>
                      <Table.HeaderCell />
                    </Table.Row>
                  </Table.Footer>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        </div>
    )
  }
}

export default BudgetForm;