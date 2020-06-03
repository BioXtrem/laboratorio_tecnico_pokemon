import Firebase from 'firebase'

const firebaseConfig = {
apiKey: "AIzaSyCiAuVte5kWwgmAIpxCaKRw9b3AC2IQRgM",
authDomain: "vuefire-5651b.firebaseapp.com",
databaseURL: "https://vuefire-5651b.firebaseio.com",
projectId: "vuefire-5651b",
storageBucket: "vuefire-5651b.appspot.com",
messagingSenderId: "1029123160162",
appId: "1:1029123160162:web:7c9d05900c22eef330393b"
};

let firebaseConnection = Firebase.initializeApp(firebaseConfig);
let db = firebaseConnection.database();

let usersRef = db.ref('users');

export { usersRef };