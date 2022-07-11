import request from 'supertest';
import { Shared } from '../support/shared';
import {Request} from "./request";

export class GoogleAPI {
    static async addLocationAPI(){
        let response = await Request.GoogleMapsAddAPI('https://rahulshettyacademy.com')
        const reponseText = JSON.parse(response.text);
         const statusCode = response.status;
         Shared.placeId = reponseText.place_id;
         console.log(Shared.placeId);
         return [statusCode ,reponseText]
    }
    static async deleteLocationAPI(){
        let response = await Request.GoogleMapsDeleteAPI('https://rahulshettyacademy.com')
        const reponseText = JSON.parse(response.text);
        return [response.status , reponseText]
        
    }
    static async getLocationAPI(){
        let response = await Request.GoogleMapsGetLocAPI('https://rahulshettyacademy.com')
        const locationName = response.body.name
        return [ locationName, response]
    }

    static async updateLoctionAPI(){
        let response = await Request.GoogleMapsPutLocAPI('https://rahulshettyacademy.com')
        const msg = response.body.msg;
        return [msg , response];

    }
}