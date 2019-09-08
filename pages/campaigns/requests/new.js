import React , {Component} from 'react';
import {Form, Input,Message, Button} from 'semantic-ui-react';
import Campign from '../../../ethereum/campign';
import web3 from '../../../ethereum/web3';
import {Link,Router} from '../../../routes';
import Layout from '../../../components/Layout';
class RequestNew extends Component {

    state = {
          value:'',
          description:'',
          recepient:'',
          loading: false,
          errorMessage:''

    };

  static async getInitialProps(props){

    const {address} = props.query;
    return {address};
  }



onSubmit = async event => {
  event.preventDefault();


  const campaign = Campign(this.props.address);
  const { description, value, recepient} = this.state;
  this.setState({loading:true,errorMessage:''});
  try{
        const accounts = await web3.eth.getAccounts();

         await campaign.methods.createRequest(description,
           web3.utils.toWei(value, 'ether'),recepient).
           send({from: accounts[0]});
           Router.pushRoute(`/campaigns/${this.props.address}/requests`);


  }catch(err){

    this.setState({ errorMessage : err.message });

  }
  this.setState({loading:false});
};


render(){

  return (
<Layout>
<Link route={`/campaigns/${this.props.address}/Requests`}>
<a>
 Back
</a>
</Link>
<h3>Create a request!</h3>
   <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

   <Form.Field>
   <label>Description</label>
   <Input value={this.props.description}
   onChange={event =>this.setState({description:event.target.value})}

   />
   </Form.Field>
   <Form.Field>
   <label>Value in ether</label>
   <Input value={this.props.value}
   onChange={event =>this.setState({value:event.target.value})}

   />
   </Form.Field>
   <Form.Field>
   <label>Recipient</label>
   <Input value={this.props.recepient}
   onChange={event =>this.setState({recepient:event.target.value})}

   />
   </Form.Field>

   <Message error header="oops!"  content = {this.state.errorMessage} />
   <Button primary loading={this.state.loading}>Create!</Button>

   </Form>
   </Layout>
  );
}


}


export default RequestNew;
