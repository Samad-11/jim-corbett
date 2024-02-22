import React from 'react'


const touristZones = [
    {
        heading: "The Tourist Zones",
        description: " In order to promote tourism in the region Corbett National Park has been divided into five different zones. These are the marked buffer or core area of the park where visitors can be part of wildlife safari and can enjoy the intriguing behavior of the animals with bare eyes at proximity."
    },
    {
        heading: "Bijrani Safari Zone",
        description: " Bijrani Zone is very popular tourist's hub because of its abundant natural beauty and open grasslands. The entry gate of the zone is located at only 01 Km from Ramnagar city."
    },
    {
        heading: "Jhirna Safari Zone ",
        description: "Jhirna is another important tourist zone in the Jim Corbett National park that is open for tourist round the year. Jhirna Gate is located at 16 km from Ramnagar city."
    },
    {
        heading: "Dhela Safari Zone",
        description: "Dhela is a new eco tourism zone in Corbett National Park included in tiger reserve zone in November 2014. This is the only area in the reserve's buffer zone open to tourists in CTR. The zone is retaining the attention of large number of tourist because of its wealthy flora and fauna, open throughout the year, located at an approximate distance of 13 Km from Ramnagar City."
    },
    {
        heading: "Dhikala Zone",
        description: " Being the largest and most varied zone in Corbett, Dhikala is famous for its abundant natural beauty as well as offering the best sight for exotic fauna. The entry gate is 18 km away from Ramnagar city. Night stay inside the Dhikala Tourism Zone is highly recommended for the hard core wildlife enthusiasts."
    },
    {
        heading: "Sitabani Buffer Zone",
        description: " Sitabani Zone doesn't fall under the Corbett Tiger Reserve area. If you are fond of serene ambiance of the natural beauty, must visit Sitabani area."
    },
    {
        heading: "Phato Eco-Tourism Zone ",
        description: "Phato Zone is the densest of Jim Corbett National Park and Uttarakhand’s densest forest, due to which jeep safari in Phato Zone provides a feeling of pleasure. The distance from Corbett City Ramnagar to the gate of the photo zone is just 18 km while crossing this distance, tourists will get the opportunity to see the giant Tumdiya Dam as well as boating in the future. Phato Gate is located at a distance of 24 km from Ramnagar city."
    },
    {
        heading: "Durga Devi Zone ",
        description: "Located on the north-eastern boundary of the Jim Corbett National Park, Durga Devi zone is the heaven on planet earth for those who are fond of bird watching. Entry gate is located at an approximate distance of 36 km from Ramnagar city."
    },
]

const About = () => {
    return (
        <section id="about" className="md:px-8 px-3 py-3 my-2 md:w-[70%] mx-auto">
            <p className="md:text-2xl text-sm text-pretty md:tracking-wider md:leading-8 font-mono">The <span className="text-primary">Corbett National Park</span> is a part of the largest Tiger Reserve; the Project Tiger lies in the Nainital district of Uttarakhand. The Majestic landscape of Corbett is well-known for its tiger richness. Established in the year 1936 as Hailey National Park, Corbett has the glory of being India’s oldest and most prestigious National Park. It is also being honoured as the place where Project Tiger was first launched in the year 1973. This Unique tiger territory is best known as the father who gave birth to Project Tiger in India to safeguard the most endangered species and the Royal wild animal of India called Tigers.</p>
            <div className="my-7 mt-16">
                <h1 className="md:text-3xl text-2xl text-primary  font-semibold border-b-2 pb-3 w-fit mb-8 ">Tourist Zones of Jim Corbett National Park</h1>
                <ul className="md:pl-20 pl-8 max-md:text-sm list-disc leading-7">
                    {
                        touristZones.map((zone) => (
                            <li key={zone.heading} className="mb-3"><p><span className="font-semibold text-secondary">{zone.heading}:</span> {zone.description}</p></li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default About