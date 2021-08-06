import axios from 'axios'

export default class EmployerService {
    getIsConfirmFalse(){
        return axios.get('http://localhost:8080/api/employer/getbyisconfirm')
    }

    add(employers){
        return axios.post('http://localhost:8080/api/employer/add',employers)
    }

    confirmEmployer(id){
        return axios.post('http://localhost:8080/api/employer/confirmemployer?id='+id)
    }

    getByUserId(id){
        return axios.get('http://localhost:8080/api/employer/getbyuserid?id='+id)
    }

    update(employer){
        return axios.post("http://localhost:8080/api/employer/update",employer);
    }

    getByUpdatedData(){
        return axios.get("http://localhost:8080/api/employer/getByUpdatedDataNotNull")
    }

    updateConfirm(id){
        return axios.post("http://localhost:8080/api/employer/updateconfirm?id="+id);
    }
}