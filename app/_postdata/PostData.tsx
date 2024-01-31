
"use client";


import React, { useEffect, useState } from 'react'
import { data } from './data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { db } from '@/config/firebase/utils';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';


interface Item {
    name: string;
    price: number;
    quantity: number;
}
const PostData = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [items, setItems] = useState<Item[]>([]);

    const [success, setsuccess] = useState(false)
    const router = useRouter()

    const Handletoogle = () => {
        const code = document.querySelector('code')
        code?.toggleAttribute('hidden')
    }
    const sendData2Db = async (event: React.FormEvent) => {
        event.preventDefault();

        const data = { name, price, quantity };

        console.log(data);


        // Send data to the database
        // This will depend on how you're connecting to your database
        // For example, with Firebase Firestore, you might do something like this:
        // await firebase.firestore().collection('items').add(data);
        try {

            const docRef = await addDoc(collection(db, "items"), data);
            // console.log("Document written with ID: ", docRef.id);
            if (data) {
                // set true for some min then false
                setsuccess(true)
                setTimeout(() => {
                    setsuccess(false)
                }, 4000);

                // reduct the data
                setName('')

                setPrice(0)

                setQuantity(0)
                //REFRESH THE PAGE
                window.location.reload()
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    };



    // getdata in firestore
    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "items"));
            const data = querySnapshot.docs.map(doc => doc.data() as Item);
            setItems(data);
        }
        getData();
    }, []);

    return (
        <div className=' flex  flex-col  space-x-3 '>
            <h1>Post Data</h1>
            <div className='  mb-5  '>

                <form className=' flex gap-2  ' onSubmit={sendData2Db}>
                    <Input type="text" className='  outline-none bg-background text-foreground ' placeholder="name" value={name} onChange={e => setName(e.target.value)} />
                    <Input type="number" className='   outline-none bg-background text-foreground' placeholder="price" value={price} onChange={e => setPrice(parseFloat(e.target.value))} />
                    <Input type="number" className='  outline-none bg-background text-foreground' placeholder="quantity" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} />
                    <Button type="submit" className='  p-2 m-1 rounded-lg border-2 border-green-500'>{
                        success ? '👌' : '+'
                    }
                    </Button>
                </form>

            </div>




            <table className=' table gap-2 '>
                <thead className='  w-full   text-start  mb-2'>
                    <tr className=' table-row  '>
                        <th className='  text-start hover:underline underline-offset-2  '>name</th>
                        <th className='  text-center hover:underline  underline-offset-2'>price</th>
                        <th className=' text-end hover:underline underline-offset-2'>quantity</th>
                    </tr>
                </thead>



                <tbody className="  ">
                    {
                        items.map((item, index) => (
                            <tr key={index} className=' table-row'>
                                <td className=' capitalize table-cell '>{item.name}</td>
                                <td className='  table-cell text-center '>{item.price}</td>
                                <td className=' table-cell text-end '>{item.quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
            <div className=' w-full mt-10'>
                <div>
                    <button onClick={Handletoogle}>
                        click to see data
                    </button>
                </div>
                <code className='' content='gray' contentEditable contextMenu='data from firebase' hidden>
                    <pre>
                        {items.length > 0 && JSON.stringify(items, null, 2)}
                    </pre>
                </code>

            </div>


        </div>
    )
}

export default PostData