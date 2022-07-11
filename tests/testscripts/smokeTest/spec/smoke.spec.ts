import request from 'supertest';
import { GoogleAPI } from '../../common/utils/GoogleAPI';
import {expect} from 'chai'
import { Shared } from '../../common/support/shared';
describe('Google Maps API Tests' , function () {
     it('Verify Google Maps Add Location API' ,async function (){
         let [status , response] = await GoogleAPI.addLocationAPI();
         expect(status).to.be.equal(200)
         expect(response.status).to.be.equal("OK")
      })
      xit('Verify Google Maps Delete Location API' ,async function (){
        let [status , response] = await GoogleAPI.deleteLocationAPI();
         expect(status).to.be.equal(200)
         expect(response.status).to.be.equal("OK")
     })
     xit('Verify Google Maps Get Place API' ,async function (){
        let [locationName,response] = await GoogleAPI.getLocationAPI();
        expect(response.status).to.be.equal(200);
        expect(locationName).to.be.equal('Frontline house')
     })
     it('Verify Google Maps Put Place API' ,async function (){
        const [msg , response]=  await GoogleAPI.updateLoctionAPI();
        let [locationName,getLocResponse] = await GoogleAPI.getLocationAPI();
        expect(response.status).to.be.equal(200);
        expect(msg).to.be.equal('Address successfully updated');
        expect(getLocResponse.body.address).to.be.equal(Shared.updateAddress)
     })
})