const firebaseConfig = {
  apiKey: "AIzaSyDl0APPcHMFTlscVR9sdrpPirdOuJ-Uk1o",
  authDomain: "qater-new.firebaseapp.com",
  databaseURL: "https://qater-new-default-rtdb.firebaseio.com",
  projectId: "qater-new",
  storageBucket: "qater-new.firebasestorage.app",
  messagingSenderId: "689958259799",
  appId: "1:689958259799:web:4f547412c5377ca34fe712",
  measurementId: "G-2K616LFFEE"
};

firebase.initializeApp(firebaseConfig);
const firebaseStore = firebase.firestore();

async function saveBooking(orderDetails){
  await firebaseStore.collection('orders').doc(orderDetails.bookingId).set(orderDetails);
}

async function updateBooking(bookingId, orderDetails){
  await firebaseStore.collection('orders').doc(bookingId).update(orderDetails);
}
