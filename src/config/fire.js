import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD_JdC4Ad--L4-AdXzI3Lpqw-2WZl3jUQM",
  authDomain: "quizauth-b5f37.firebaseapp.com",
  databaseURL: "https://quizauth-b5f37.firebaseio.com",
  projectId: "quizauth-b5f37",
  storageBucket: "",
  messagingSenderId: "869827408541",
  appId: "1:869827408541:web:4b7b96d5a3882d45"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

  export default fire;