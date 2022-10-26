import axios from "axios";

export async function Send_Data(values){

    let response = axios.post('https://react-project-5a14b-default-rtdb.firebaseio.com/todo.json',values)
    
    values.id = response.name;
    return values;
}

export async function Get_Data(){

    let response = axios.get('https://react-project-5a14b-default-rtdb.firebaseio.com/todo.json')
    .then(({data}) =>{
        let arr = [];
        for(let key in data){
            data[key].id = key;
            arr.push(data[key])
        }
        return arr;
    })
    return response;
}


export async function Remove_Data(id){
    let remove = axios.delete(`https://react-project-5a14b-default-rtdb.firebaseio.com/todo/${id}.json`)
}

export async function Get_Edit_Data(id){
    let response = await axios.get(`https://react-project-5a14b-default-rtdb.firebaseio.com/todo/${id}.json`)
    .then(({data}) =>{
       for(let key in data){
        return data;
       }
    })
    return response;
}