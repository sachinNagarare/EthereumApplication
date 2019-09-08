import web3 from './web3';
import CampaignFactory from './build/Campaignctory';
const instance = new web3.eth.Contract(


  JSON.parse(CampaignFactory.interface),'0xFDb29a5b1f8E365243f87a362FD1c4E078200a21'

);

export default instance ;
