import { useRouter } from 'next/router'
import Link from 'next/link'

import firebase from "firebase/app"
import "firebase/firestore"
import { firebaseConfig } from "./../../firebaseConfig"

export default function Index({ data }) {
    const router = useRouter();
    const { shop } = router.query;
    const { img, coupons } = data;

    return (
      <div style={{ padding: "20px" }}>
            <div style={{ border: "1px solid #CCC", padding: "30px", marginBottom: "1rem" }}>
                <img src={img} width="120" height="60" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", columnGap: "1rem" }}>
                <div>
                    {coupons && coupons.length > 0 && coupons.map((item, index) => (
                        <div key={index} style={{ position: "relative", padding: "2rem", border: "1px solid #CCC", marginBottom: "1rem", display: "flex", alignItems: "center", }}>
                            {item.label && (
                                <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "#089adc", color: "#FFF", padding: "10px" }}>{item.label}</div>
                            )}

                            <img src={img}  width="120" height="60" />

                            <div style={{ margin: "0 1rem", flexGrow: 1 }}>
                                <h2 style={{ marginTop: 0, marginBottom: ".5rem" }}>{item.title}</h2>
                                <span><strong>Regras:</strong> {item.rules}</span>
                            </div>
                            
                            <div>
                                {item.slug && (
                                    <>
                                        <span style={{ backgroundColor: "#00d200", color: "#FFF" }}>
                                            <Link href={`/open/${shop}/coupons/${item.slug}`}>Ver oferta</Link>
                                        </span><br/>
                                    </>
                                )}
                                <small style={{ color: "#CCC" }}>Cód. oculto: {item.code}</small>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div>
                    {coupons && coupons.length > 0 && coupons.filter(item => item.featured).map((item, index) => (
                        <div key={index} style={{ border: "1px solid #CCC", marginBottom: "1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={img} width="120" height="60" />

                            <div style={{ backgroundColor: "#005dbf", color: "#FFF", width: "100%", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
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

                                {item.slug && (
                                    <span style={{ backgroundColor: "#00d200", color: "#FFF", marginBottom: ".25rem" }}>
                                        <Link href={`/open/${shop}/coupons/${item.slug}`}>Ver oferta</Link>
                                    </span>
                                )}

                                <small style={{ color: "#CCC" }}>Cód. oculto: {item.code}</small>
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

    const response = await db.doc(`shops/${shop}`).get();

    return {
        props: {
            data: {
                ...response.data(),
                coupons: [
                    {
                        label: "10%",
                        title: "10% OFF Extra em Nike (destacada)",
                        rules: "10% OFF Extra em Nike",
                        code: "NIKE10",
                        slug: "10-off-extra-em-nike",
                        featured: true
                    },
                    {
                        title: "10% OFF Extra em Nike (destacada 2)",
                        rules: "10% OFF Extra em Nike",
                        code: "NIKE10",
                        slug: "10-off-extra-em-nike",
                        featured: true
                    },
                    {
                        label: "10%",
                        title: "10% OFF Extra em Nike",
                        rules: "10% OFF Extra em Nike",
                        code: "NIKE10",
                        slug: "10-off-extra-em-nike",
                        featured: false
                    }
                ]
            }
        }
    }
}