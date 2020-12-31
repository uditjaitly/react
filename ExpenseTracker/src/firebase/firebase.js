import * as firebase from 'firebase'


var config = {
    apiKey: "AIzaSyDARFrQQL_EuDGJVcN0GKUOmAzWLFW0iMU",
    authDomain: "expensify-9464d.firebaseapp.com",
    databaseURL: "https://expensify-9464d-default-rtdb.firebaseio.com",
    projectId: "expensify-9464d",
    storageBucket: "expensify-9464d.appspot.com",
    messagingSenderId: "922554784540",
    appId: "1:922554784540:web:61ec4d390ed8898bfdb8d9",
    measurementId: "G-VP5BZQZ8DZ"
};
  // Initialize Firebase
  
firebase.initializeApp(config);




const database=firebase.database()

database.ref().remove()

database.ref('notes').push({
    task:"clean room",
    status:"Done"
})
database.ref('notes').push({
    task:"buy food",
    status:"Done"
})

database.ref('notes').on('value',(snapshot)=>{
    const snapshotList=[]

    snapshot.forEach((child)=>{
        snapshotList.push({
            id:child.key,
            ...snapshot.val()
        })
    })
    console.log(snapshotList)
})

