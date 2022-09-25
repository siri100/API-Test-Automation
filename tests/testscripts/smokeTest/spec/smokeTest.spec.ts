import request from 'supertest';
import { PetStoreAPI } from '../../common/utils/PetStoreAPI';
import {expect} from 'chai'
import  * as testData from "../../common/properties/petStore_testData.json";
describe('PetStore API Tests' , function () {
    this.timeout(2000);
     it('Verify PetStore uploadImage API' ,async function (){
         let [status , response] = await PetStoreAPI.uploadImageAPI();
         expect(status).to.be.equal(200);
         expect(response.code).to.be.equal(200);
         expect(response.type).to.be.equal('unknown');
         expect(response.message).to.have.string('./profile_pic.jpg');

      })
      it('Verify PetStore AddNewPet to store API' ,async function (){
        let [status , responseBody , responseHeaders] = await PetStoreAPI.addNewPetAPI();
         expect(status).to.be.equal(200);
         expect(responseBody.category.name).to.be.equal('simba');
         expect(responseHeaders.headers['content-type']).equal('application/json')
         expect(responseHeaders.headers['server']).equal(testData.server)
     })
     
})