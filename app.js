function saveData(e) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    event.preventDefault(e);
    const student = {
        name: name,
        email: email,
        password: password
    }
    firebase.database().ref('student').child("student1").push(student);
    // console.log(student);
}

//for get data once:

// function getFirebaseData() {
    //     firebase.database().ref('student').once('value',function(data){
        //         console.log(data.val());
//     })
// }


// function getFirebaseData() {
//     firebase.database().ref('student').on('child_added',function(data){
//         console.log(data.val());
//     })
// }

// getFirebaseData();



function removeData(){
    firebase.database().ref('student').remove()
}

function editData(){
    firebase.database().ref('student').child('student1/-Mg_tm29pEJbu-YQgkfa').set({
        name:"Zalima",
        email:"coca@gmail.com",
        password:"123"
    })
}
editData()




