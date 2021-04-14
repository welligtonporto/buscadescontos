import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import firebase from "firebase/app"
import "firebase/firestore"
import { firebaseConfig } from "./../../../../firebaseConfig"

export default function Index({ code, img }) {
    const router = useRouter();

    return (
      <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "orange" }}>
            <div style={{ border: "2px dotted #FFF", padding: "1rem 5rem", marginBottom: "5rem" }}>
                {code}
            </div>

            <div style={{ background: "#FFF", padding: "2rem 6rem" }}>
                <img src={img} width="120" height="60" />
            </div>
      </div>
    )
}

export const getServerSideProps = async (props) => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();
    const { shop, slug } = props.params;

    const responseItem = await db.doc(`shops/${shop}/items/${slug}`).get();
    const responseShop = await db.doc(`shops/${shop}`).get();

    return {
        props: {
            code: responseItem.data().code,
            img: responseShop.data().img
        }
    }
}