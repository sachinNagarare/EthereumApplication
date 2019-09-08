const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const  web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/Campaignctory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');


let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach (async ()=> {

accounts = await web3.eth.getAccounts();

factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
          .deploy({data: compiledFactory.bytecode})
          .send({from:accounts[0], gas:'1000000'});

          await factory.methods.createCampaign('100').send({

            from:accounts[0],
            gas : '1000000'

          });

          [campaignAddress] = await factory.methods.getDeployedCampaings().call();
        //  campaignAddress=addresses[0];
campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface),campaignAddress);

});



describe('Camping',()=>{

  it('deploys a factory and a campaing',()=>{


    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  })


it('marks a caller as the manager', async ()=>{

const manager = await  campaign.methods.manager().call();
assert(manager, accounts[0]);


})


it('allows people to contribute money and marks them as approvers', async ()=>{

await campaign.methods.contribute().send({

  value:200,
  from:accounts[1]
});

const isContributor = await campaign.methods.approvers(accounts[1]).call();
assert(isContributor);

});

it('require minimum contributors', async ()=>{
try{

  await campaign.methods.contribute().send({

    value:25,
    from:accounts[1]
  });

  assert(false);

}catch(err){
  assert(err);
}
});


it('allow manager to make payment request', async ()=>{
await campaign.methods.createRequest('Buy battery', '100',accounts[1]).send({

  from:accounts[0],
  gas :1000000
});
const request = await campaign.methods.requests(0).call();

  assert.equal('Buy battery',request.description);
});

});
