import  * as testData from "../../common/properties/petStore_testData.json";
import {Request_1} from "./request_1";

export class PetStoreAPI {
    static async uploadImageAPI(){
        try {
            let response = await Request_1.PetStoreuploadImageAPI(testData.BASE_URL);
            const reponseText = JSON.parse(response.text);
             const statusCode = response.status;
             return [statusCode ,reponseText]
        } catch (error) {
            console.log(error);
        }
       
    }
    static async addNewPetAPI(){
        try {
            let response = await Request_1.PetStoreaddNewPetAPI(testData.BASE_URL);
            const reponseText = JSON.parse(response.text); 
             const statusCode = response.status;
             console.log(response.get);
             return [statusCode ,reponseText,response]
        } catch (error) {
            console.log(error);
        }
       
    }
    
}