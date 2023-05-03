import { initializeApp } from "firebase/app";
import { getFirestore ,collection, getDocs, query, where, addDoc,orderBy } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBR6kCLIaTqcMYOHIMwnsI8HCzVxZEBqRQ",
  authDomain: "photo-tagging-app-255ad.firebaseapp.com",
  projectId: "photo-tagging-app-255ad",
  storageBucket: "photo-tagging-app-255ad.appspot.com",
  messagingSenderId: "162041610154",
  appId: "1:162041610154:web:ecd90b5d8f34c5117175d3"
};

let app,db;
const initializeFirebase= async ()=>{
  app = initializeApp(firebaseConfig);
  db=getFirestore();
  console.log(db);
}

const getLocation = async(character)=>{
    const colRef=collection(db,"location");
    const q=query(colRef,where("id","==",character));
    const snapshot= await getDocs(q);
    return (snapshot.docs[0].data());
}

const addScore= async(name,time,map)=>{
  const colRef=collection(db,map+"-scoreboard");
  await addDoc(colRef,{name:name,time:time});
}

const getMapScoreboard= async(mapName)=>{
  await initializeFirebase();
  const colRef=collection(db,mapName+"-scoreboard");
  const  snapshot= await getDocs(colRef);
  let data=[];
  snapshot.forEach((doc)=>{data.push(doc.data())});
  return data;
}

export {initializeFirebase,getLocation,addScore,getMapScoreboard};