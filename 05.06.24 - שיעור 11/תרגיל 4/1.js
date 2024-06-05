function getInfo(name) {
     new Promise
    fetch(`https://jsonplaceholder.typicode.com/users/?username=${name}`)
    .then((res) => 
        res.json()
    )
    .then((res) => 
        console.log(res)
    )
    .then((data) => console.log(data))
    .catch((error) => 
        console.log(error)
    );


}


try{


}
catch{

}



