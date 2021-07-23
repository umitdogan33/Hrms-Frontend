import axios from 'axios'

export default class CandidateService{
    addCandidate(candidate){
        let result = axios.post('http://localhost:8080/api/canidate/add', candidate)
        return result;
    }
}