import React, {Component} from 'react';
import {Button, Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component{

  static async getInitialProps(props){
    console.log('called');
    const {address} = props.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestCount().call();
    console.log('request count :: ' + requestCount);
    const approvarsCount = await campaign.methods.appoversCount().call();

    const requests = await Promise.all(
Array(requestCount).fill().map((element,index)=>{

  return campaign.methods.requests(index).call()
})

    );
console.log(requests);
    return {address,requests,requestCount,approvarsCount};
  }


  renderRow(){

    return this.props.requests.map((request,index)=>{

      return <RequestRow key={index} id={index} request={request} address={this.props.address}
        approvarsCount={this.props.approvarsCount} / >
    })
  }
  render(){


const {Header,Row,HeaderCell,Body}=Table;

    return(
        <Layout>
        <h3> Request List</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
        <a><Button primary floated="right">Add Request</Button></a>
        </Link>
        <Table>
        <Header>
        <Row>
        <HeaderCell>ID</HeaderCell>
          <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
                <HeaderCell>approvalCount</HeaderCell>
                  <HeaderCell>Approve</HeaderCell>
                    <HeaderCell>Finalize</HeaderCell>
        </Row>
        </Header>
        <Body>
        {this.renderRow()}
        </Body>
        </Table>
        <div>Found {this.props.requestCount} requests!</div>
      </Layout>
      );

  }
}


export default RequestIndex;
