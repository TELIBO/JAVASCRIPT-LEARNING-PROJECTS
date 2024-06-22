// const request=new XMLHttpRequest();
// //get to get data
// //post to send data
// //pull to update data
// request.addEventListener('readystatechange',()=>{
//     // console.log(request,request.readyState);
//     if(request.readyState===4 && request.status=== 200)
//         {
//             console.log(request.responseText);
//         }
//     else if(request.readyState===4){
//         console.log('could not fetch the data')
//     }
// })
// //when request is succesful status is 200
// // when there is client side error 400's status are there
// // when server side error 500's status code come
// request.open('GET','https://jsonplaceholder.typicode.com/todos/');
// request.send();
// console.log(1);
// console.log(2);
// function gettodos(callback){
//     const request=new XMLHttpRequest();
// request.addEventListener('readystatechange',()=>{
    
//     if(request.readyState===4 && request.status=== 200)
//         {
//             callback(undefined,request.responseText);
//         }
//     else if(request.readyState===4){
//        callback('could not fetch data',undefined);
//     }
// })
// request.open('GET','https://jsonplaceholder.typicode.com/todos/');
// request.send();
// }
// gettodos(function(err,data){
//     console.log(" request fired");
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
// console.log(3);
// console.log(4);

// function gettodos(resource){
//     return new Promise(function(resolve,reject){
//     const request=new XMLHttpRequest();
//     request.addEventListener('readystatechange',()=>{  
//     if(request.readyState===4 && request.status=== 200)
//         {
//             const data=JSON.parse(request.responseText);
//             resolve(data);
//         }
//     else if(request.readyState===4){
//         reject("error");
//     }})
//     request.open('GET',resource);
//     request.send();});
// }

// gettodos('product.json').then((data)=>{
//     console.log(data);
//     return gettodos('user.json')
// }).then((data)=>{
//     console.log(data);
//     return gettodos('weather.json')
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// fetch('product.json').then((response)=>{
//     console.log(response)
//     return response.json()//response.json is also a promise
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// every async function is a promise
const todo= async function(){
    let arr={};
    const response=await fetch('product.json');
    if(response.status!==200){
        throw new Error("request rejected");
    }
    const data1=await response.json();
    const response2=await fetch('user.json');
    if(response2.status!==200){
        throw new Error("request rejected");
    }
    const data2=await response2.json();
    const response3=await fetch('weather.json');
    if(response3.status!==200){
        throw new Error("request rejected");
    }
    const data3=await response3.json();
    arr={
        product:data1,
        user:data2,
        weather:data3
    };
    return arr;
}

todo().then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})
