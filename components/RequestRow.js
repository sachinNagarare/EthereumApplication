import React, {Component} from 'react';
import { Table, Button} from 'semantic-ui-react';
import Campaign from '../ethereum/campign';
import web3 from '../ethereum/web3';
class RequestRow extends Component{


  onApprove = async () => {

const campaign = Campaign(this.props.address);
const accounts = await web3.eth.getAccounts();
await campaign.methods.approveReqest(this.props.id).send(
  {

    from:accounts[0]
  });

};


onFinalize = async () => {
  console.log('called');
  const campaign = Campaign(this.props.address);
  const accounts = await web3.eth.getAccounts();
  await campaign.methods.finalizeRequest(this.props.id).send(
    {

      from:accounts[0]
    });


};
  render(){
const {Row,Cell} =  Table;


    return (
<Row>
<Cell>{ this.props.id}</Cell>
<Cell>{this.props.request.description}</Cell>
<Cell>{web3.utils.fromWei(this.props.request.value,'ether')}</Cell>
<Cell>{this.props.request.recepient }</Cell>
<Cell>{this.props.request.approvalCount}/{this.props.approvarsCount}</Cell>
<Cell>
{ this.props.request.complete ? null : (
<Button basic color="green" onClick={this.onApprove}>Approve</Button>

)}
</Cell>
<Cell>
<Button basic color="teal" onClick={this.onFinalize}>Finalize</Button>
</Cell>
</Row>

    );
  }
}

export default RequestRow;
