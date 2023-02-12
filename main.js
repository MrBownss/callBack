let search = "https://jsonplaceholder.typicode.com/users";

function getData(url, cb) {
    let req = new XMLHttpRequest();
    req.onload = function () {
        if ( req.status === 200 ) {
            let response = req.responseText;
            return cb( JSON.parse(response));
        }
        // if(req.status === 200) {
        //     let result = req.responseText;
        //     return cb(JSON.parse(result));
        // };
    };
    req.open("get", url);
    req.send();
};

let task = document.getElementById("taskCallBack")
getData(search, succes => {
    let booststrap = '';

    succes.forEach(biju => {
        booststrap += `
        <tr>
                <th scope="row">${biju.id}</th>
                <td>${biju.name}</td>
                <td>${biju.username}</td>
                <td>${biju.email}</td>
                <td>
                    ${biju.address.street}, 
                    ${biju.address.suite},
                    ${biju.address.city}
                </td>
                <td>${biju.company.name}</td>
            </tr>
        `
    });

    task.innerHTML = booststrap;
    console.log(succes);
});
// getData(search, (data) => {
//     console.log(data)
// });