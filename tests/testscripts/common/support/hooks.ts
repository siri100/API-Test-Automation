import {before, after} from 'mocha';
import {Shared} from "./shared";


before(async function hooks() {
    try {
        Shared.userName;
        Shared.password;
        Shared.plid;
        
        console.log('********* Test Suite execution Starts! *********');
    } catch (e) {
        console.error(e.message);
    }
});
    
after(async function hooks() {
    console.log('********* Test Suite execution Done! *********');
});