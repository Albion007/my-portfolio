import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

export default function Trainings() {
    const [trainingsData, setTrainingsData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "trainings"]{
            title,
            datestart,
            dateend,
            place,
            company,
            description,
            projectType,
            link,
            tags,
        }`
        )
        .then((data) => setTrainingsData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Trajnimet!</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Nese deshironi te lexoni me shume rreth trajnimeve qe kam ndjekur. Ju lutem shikoni me poshte!.</h2>
                <section className="grid grid-cols-2 gap-8">
                    {trainingsData && trainingsData.map((trainings, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a 
                            href={trainings.link}
                            alt={trainings.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{trainings.title}</a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Ka filluar më</strong>:{" "}
                                {new Date(trainings.datestart).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Ka mbaruar më</strong>:{" "}
                                {new Date(trainings.dateend).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Vendi</strong>: {trainings.place}
                            </span>
                            <span>
                                <strong className="font-bold">Kompania</strong>: {trainings.company}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {trainings.description}
                            </p>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}