import request from 'supertest';
import  * as testData from "../../common/properties/test-data.json";
import { Shared } from '../support/shared';
export class Request {
    
    static GoogleMapsAddAPI(BASE_URL) {
        return request(BASE_URL)
        .post('/maps/api/place/add/json')
        .send(testData.payload)
        .then(response => {
            return response;
      });
    }

    static GoogleMapsDeleteAPI(BASE_URL) {
        return request(BASE_URL)
        .post('/maps/api/place/delete/json')
        .send({"place_id" : Shared.placeId})
        .then(response => {
            return response;
      });
    }

    static GoogleMapsGetLocAPI(BASE_URL) {
        return request(BASE_URL)
        .get('/maps/api/place/get/json?key='+testData.password.key+'&place_id='+Shared.placeId+'')
        .then(response => {
            return response;
      });
    }

    static GoogleMapsPutLocAPI(BASE_URL) {
        return request(BASE_URL)
        .put('/maps/api/place/update/json?key='+testData.password.key+'&place_id='+Shared.placeId+'')
        .send({"address" : Shared.updateAddress , "place_id" : Shared.placeId , "key" : testData.password.key})
        .then(response => {
            return response;
      });
    }
}

