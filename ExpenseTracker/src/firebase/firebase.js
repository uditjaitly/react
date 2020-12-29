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

firebase.database().ref().set({
    name:"udit"
})
