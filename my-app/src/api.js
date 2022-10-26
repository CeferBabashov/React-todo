import axios from "axios";



export async function Get_Data(){
    let response = await axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(({ data }) =>{
        return data;
    })
    return response;
}

export async function Get_Data_Detail (id){
     let response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
     .then(( {data} )=>{
        return data
     })
     return response;

}