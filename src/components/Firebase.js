import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAw1xpf5PnmXKgMXKfqEH_2VAkNDpvv9ZU",
    authDomain: "diseno-138b6.firebaseapp.com",
    databaseURL: "https://diseno-138b6-default-rtdb.firebaseio.com/",
    projectId: "diseno-138b6",
    storageBucket: "diseno-138b6.appspot.com",
    messagingSenderId: "tu_messaging_sender_id",
    appId: "tu_app_id"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const sendCommand = (motor1, motor2) => {
    set(ref(database, 'Motors/motor1'), motor1);
    set(ref(database, 'Motors/motor2'), motor2);
  };
  
export { database, sendCommand };