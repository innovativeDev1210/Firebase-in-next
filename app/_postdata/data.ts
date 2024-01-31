



// 10 items with price & quantity& name

import { collection, getDocs, getFirestore } from "firebase/firestore";


export const data=[
    { name: 'apple', price: 1.20, quantity: 2 },
    { name: 'orange', price: 1.90, quantity: 3 },
    { name: 'banana', price: 0.90, quantity: 1 },
    { name: 'mango', price: 2.90, quantity: 2 },
    { name: 'grape', price: 1.20, quantity: 2 },
    { name: 'pineapple', price: 1.20, quantity: 2 },
    { name: 'watermelon', price: 1.20, quantity: 2 },
    { name: 'strawberry', price: 1.20, quantity: 2 },
    { name: 'cherry', price: 1.20, quantity: 2 },
    { name: 'peach', price: 1.20, quantity: 2 },
]


const fetchDataFromDb = async () => {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "items"));
    const items = querySnapshot.docs.map(doc => doc.data());
    console.log(items);
};

export default fetchDataFromDb;