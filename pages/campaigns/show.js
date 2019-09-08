import React,{Component} from 'react';
import Layout from '../../components/Layout';
import Campign from '../../ethereum/campign';
import {Card, Grid, Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';
class CampaingShow extends Component {

  static async getInitialProps(props){
const campaign = Campign(props.query.address);
const summary = await campaign.methods.getSummary().call();

return {
  address:props.query.address,
  minimumContribution : summary[0],
  balance : summary[1],
  requestsCount : summary[2],
  approversCount : summary[3],
  manager : summary[4]
};

}
renderCards(){
const {balance,manager,minimumContribution,requestsCount,approversCount} = this.props;
  const items = [
{
  header:manager,
  meta:'add of manager',
  description: 'manager wants to send money',
  style:{overflowWrap : 'break-word'}
},
{
  header:minimumContribution,
  meta:'minimumContribution for this contract',
  description: 'you need this much money to be a part of this Campign',
  style:{overflowWrap : 'break-word'}
},

{
  header:requestsCount,
  meta:'number of requests',
  description: 'A request tries to  widraw moeny from the contract.Request must be approved by approvers',
  style:{overflowWrap : 'break-word'}
},
{
  header:approversCount,
  meta:'number of approvers',
  description: 'number of people who already contributed to this request',
  style:{overflowWrap : 'break-word'}
},

{
  header:web3.utils.fromWei(balance,'ether'),
  meta:'add of manager',
  description: 'manager wants to send money',
  style:{overflowWrap : 'break-word'}
}

];

  return <Card.Group items={items} />;
};

render(){
  return(
  <Layout>
   <h3> show camp</h3>
   <Grid>
   <Grid.Row>
   <Grid.Column width={10}>
      {this.renderCards()}

      </Grid.Column>

   <Grid.Column width={6}>
     <ContributeForm address={this.props.address}/>
     </Grid.Column>
     </Grid.Row>
     <Grid.Row>
     <Grid.Column>
     <Link route={`/campaigns/${this.props.address}/requests`}>
     <a>
     <Button primary>View Requests</Button>
     </a>
</Link>
</Grid.Column>
     </Grid.Row>
   </Grid>

   </Layout>
 );

}
}

export default CampaingShow;
