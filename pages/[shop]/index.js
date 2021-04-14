import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import firebase from "firebase/app"
import "firebase/firestore"
import { firebaseConfig } from "./../../firebaseConfig"

export default function Index({ data }) {
    const router = useRouter();
    const { shop } = router.query;
    const { name, img, itemsMini, itemsBig } = data;

    useEffect(() => {
        document.title = name || "Sem título"
    }, [])

    return (
      <div style={{ padding: "20px" }}>
            <div style={{ border: "1px solid #CCC", padding: "30px", marginBottom: "1rem" }}>
                <img src={img} width="120" height="60" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", columnGap: "1rem" }}>
                <div>
                    {itemsMini && itemsMini.length > 0 && itemsMini.map(item => (
                        <div key={item.id} style={{ position: "relative", padding: "2rem", border: "1px solid #CCC", marginBottom: "1rem", display: "flex", alignItems: "center", }}>
                            {item.label && (
                                <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "orange", color: "#FFF", padding: "10px" }}>{item.label}</div>
                            )}

                            <img src={img}  width="120" height="60" />

                            <div style={{ margin: "0 1rem", flexGrow: 1 }}>
                                <h2 style={{ marginTop: 0, marginBottom: ".5rem" }}>{item.title}</h2>
                                <span><strong>Regras:</strong> {item.rules}</span>
                            </div>
                            
                            <div>
                                <span style={{ backgroundColor: "#00d200", color: "#FFF" }}>
                                    <Link href={`/open/${shop}/coupons/${item.id}`}>Ver oferta</Link>
                                </span><br/>
                                <small style={{ color: "#CCC" }}>Cód. oculto: {item.code}</small>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div>
                    {itemsBig && itemsBig.length > 0 && itemsBig.map(item => (
                        <div key={item.id} style={{ border: "1px solid #CCC", marginBottom: "1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={img} width="120" height="60" />

                            <div style={{ backgroundColor: "orange", color: "#FFF", width: "100%", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                {item.label && (
                                    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                        <span>{item.title}</span>
                                        <div style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "1rem" }}>{item.label}</div>
                                    </div>
                                )}

                                {!item.label && (
                                    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{item.title}</span>
                                    </div>
                                )}

                                <span style={{ backgroundColor: "#00d200", color: "#FFF", marginBottom: ".25rem" }}>
                                    <Link href={`/open/${shop}/coupons/${item.id}`}>Ver oferta</Link>
                                </span>

                                <small>Cód. oculto: {item.code}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </div>
    )
}

export const getServerSideProps = async (props) => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();
    const { shop } = props.params;

    try {
        const responseShop = await db.doc(`shops/${shop}`).get();
        const responseItemsMini = await db.collection(`shops/${shop}/items`).where("orderMini", "!=", null).orderBy("orderMini").get();
        const responseItemsBig = await db.collection(`shops/${shop}/items`).where("orderBig", "!=", null).orderBy("orderBig").get();

        const itemsMini = []
        responseItemsMini.forEach(async item => {
            itemsMini.push({
                id: item.id,
                ...item.data()
            })
        })

        const itemsBig = []
        responseItemsBig.forEach(async item => {
            itemsBig.push({
                id: item.id,
                ...item.data()
            })
        })

        return {
            props: {
                data: {
                    ...responseShop.data(),
                    itemsMini,
                    itemsBig
                }
            }
        }
    } catch (error){
        console.log(error)

        return {
            props: {
                data: {}
            }
        }
    }
}