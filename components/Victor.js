import Image from "next/image"

export default function Victor() {

    return (
        <div className="layout">
            <h1>VICTOR</h1>
            <Image src="/leu3.webp" width={400} height={400} />
            <div className="div1">
                <h2>LEUL</h2>
                <p>LEUL ESTE ANIMALUL MEU PREFERAT PENTRU CĂ ÎMI PLAC MULT PICIOARELE LUI MARI ȘI PUTERNICE.</p>
                <p>ÎMI PLACE ȘI COADA LEULUI, PRECUM ȘI COAMA LUI FRUMOASĂ.</p>
            </div>
            <div className="row-bottom"></div>
            <hr />
            <div className="div2">
                <p>LEUL TRĂIEȘTE ÎN JUNGLELE DIN AFRICA.</p>
                <Image src="/leu1.jpg" width={300} height={200} />
                <p>LEUL ESTE UN ANIMAL CARNIVOR, CEEA CE ÎNSEAMNĂ CĂ SE HRĂNEȘTE CU ALTE ANIMALE PRECUM:</p>
                <ul>
                    <li>CĂPRIOARE</li>
                    <li>GIRAFE</li>
                    <li>MAIMUȚE</li>
                </ul>
            </div>
            <div className="div3">
                <Image src="/caprioara.jpg" width={250} height={200} />
                <Image src="/girafa.jpg" width={250} height={270} />
                <Image src="/maimuta.jpg" width={220} height={270} />
            </div>
            <div className="row-bottom"></div>
            <div className="div4">
                <p>LEUL ÎȘI PRINDE HRANA ALERGÂND DUPĂ EA CU VITEZE DE PÂNĂ LA 50 KM/ORĂ.</p>
                <Image src="/leu2.jpg" width={400} height={240} />
            </div>
            <div className="div5">
                <Image src="/leu4.jpg" width={300} height={240} />
                <p>DEȘI ESTE UN ANIMAL FIOROS, SUNT MULTE DESENE AMUZANTE CU LEUL, PRECUM ACESTA.</p>
            </div>
        </div>
    )
}