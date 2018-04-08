import firebase from 'firebase'

  var config = {
    apiKey: "AIzaSyC1-1i2o0jNnbOK6W0g1WuCGogYzVssR4Q",
    authDomain: "collabedit-f22cc.firebaseapp.com",
    databaseURL: "https://collabedit-f22cc.firebaseio.com",
    projectId: "collabedit-f22cc",
    storageBucket: "collabedit-f22cc.appspot.com",
    messagingSenderId: "915664868189"
  };
  

var fire = firebase.initializeApp(config);

export default fire;