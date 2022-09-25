import request from 'supertest';
import  * as testData from "../../common/properties/petStore_testData.json";
export class Request_1 {
    
    static PetStoreuploadImageAPI(BASE_URL) {
        return request(BASE_URL)
        .post('/'+testData.pet_id+'/uploadImage?additionalMetadata='+testData.metaData+'')
        .attach('file', testData.imageLoc)
        .then(response => {
            return response;
      });
    }
    static PetStoreaddNewPetAPI(BASE_URL) {
        return request(BASE_URL)
        .post('')
        .send(testData.add_newPet_payload)
        .then(response => {
            return response;
      });
    }


}

