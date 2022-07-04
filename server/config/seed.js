const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: "movies" },
        { name: "Books" },
        { name: "Video Games"}
    ]);

    console.log("categories seeded");

    await Product.deleteMany();

    const Products = await Product.insertMany([
        {
            name: "Immortals (movies)",
            description:
            `The movie is loosely based on the Ancient Greek mythology stories of Theseus and The Minotaur, the Return of the Heraclids and the Titanomachy.`,
            image: "Immortals.JPG",
            category: "categories[0]._id",
            price: "9.99",
            bidTimeStamp:null,
            bidderName:null,
            bidValue:0
        },
        {
            name: "IntoTheWoods (movie)",
            description:
            `Three days before the rise of a blue moon, they venture into the forest to find the ingredients that will reverse the spell and restore the witch's beauty.`,
            image: "IntoTheWoods.JPG",
            category: "categories[0]._id",
            price: "13.99",
            bidTimeStamp:null,
            bidderName:null,
            bidValue:0
        },
        {
            name: "Spider-Man (movie)",
            description:
            `The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe.`,
            image: "Spider-Man.jpg",
            category: "categories[0]._id",
            price: "5.99",
            bidTimeStamp:null,
            bidderName:null,
            bidValue:0
        },
        {
            name: "Halo The Flood (book)",
            description:
            `It's 2552. Having barely espcaped the final battle for the Reach against the vast alien alliance known as the convenant, crew of the Pillar of Autum,
                incuding Spartan John-117 - The Master chief- and his AI cpmpanion Cortana is force to make a desprate escape in slipspace`,
            image: "HaloTheFlood.JPG",
            category: "categories[1]._id",
            price: "25.99",
            bidTimeStamp:null,
            bidderName:null,
            bidValue:0
        },
        {
            name: "Wicked Beauty (Book)",
            description:
            `A fierce Battle Royale that will test all the hopefuls to the best of their ability. But Helen refuses to be a trophy for any man or woman who would compete.`,
            image: "WickedBeauty.JPG",
            category: "categories[1]._id",
            price: "15.99",
            bidTimeStamp:null,
            bidderName:null,
            bidValue:0
        },
        {
            name: "Ugly Love (Book)",
            description:
            `This is a standalone novel. When Tate Collins meets airline pilot Miles Archer, she doesn't think it's love at first sight.`,
            image: "UglyLove.JPG",
            category: "categories[1]._id",
            price: "13.99",
            bidTimeStamp:null,
            bidderName:null,
            bidValue:0
        },
        {
            name: "It Ends With Us (Book)",
            description:
            `A book that follows a girl named Lily who has just moved and is ready to start her life after college. Lily then meets a guy named Ryle and she falls for him. As she is developing feelings for Ryle, 
                Atlas, her first love, reappears and challenges the relationship between Lily and Ryle.`,
            image: "Immortals.jpg",
            category: "categories[1]._id",
            price: "9.99",
            bidTimeStamp:null,
            bidderName:null,
            bidValue:0
        },
        {
            name: "Sekiro Shadow Die Twice (Ps4)",
            description:
            `Carve your own clever. path to vengeance in an all-new adventure from developer Softrware, creators of Blooodborn and the Dark souls series
                In sekiro: Shadow Die twice your the "One-armed wolf", a disgrace and disfigure warrior rescued from the brink of death. Bound a you lord who is the 
                descendant of an ancient bloodline, you become the target of many vicious enemied, including the dangrous Ashina clan. When the young lord is captured, nothing will stop you on a perilous quest to reagain honor
                not even death itself. `,
            image: "Sekiro-Shadows>JPG",
            category: "categories[2]._id",
            price: "28.99",
            bidTimeStamp:null,
            bidderName:null,
            bidValue:0
        },
        {
            name: "FIFA (Ps4)",
            description:
            `TFIFA 22 introduces "HyperMotion Technology,” which uses motion capture data collected from 22 real-life players playing a complete, high-intensity football match in motion capture suits. The data collected from player movements, tackles, aerial duels and on-ball actions is used to power FIFA 22 gameplay.`,
            image: "Fifa.JPG",
            category: "categories[2]._id",
            price: "34.99",
            bidTimeStamp:null,
            bidderName:null,
            bidValue:0
        },
        {
            name: "PES2021 (Ps4)",
            description:
            `The eFootball PES 2021 Season Update brings you all of the critically acclaimed features that won us E3 2019's "Best Sports Game" award, plus more!
                As the PES franchise celebrates a quarter of a century since its debut in 1995, we invite you to join us once again as we head out onto the pitch for a new action-packed season of football.`,
            image: "Pes.JPG",
            category: "categories[2]._id",
            price: "32.99",
            bidTimeStamp:null,
            bidderName:null,
            bidValue:0
        },
        {
            name: "CALL of DUTY <br> Black OPS <br> COLD WAR (Ps5)",
            description:
            `Warzone's story is intertwined with the seasonal narratives of Modern Warfare, Black Ops Cold War and Vanguard. Verdansk is used as a common setting across various multiplayer maps in Modern Warfare, while Rebirth Island is inspired by locations and stories in previous Black Ops games
                As a first-person shooter, Call of Duty places the player in control of an infantry soldier who makes use of various authentic World War II firearms in combat.`,
            image: "Call-Duty.JPG",
            category: "categories[2]._id",
            price: "37.99",
            bidTimeStamp:null,
            bidderName:null,
            bidValue:0
        },
        {
            name: "UNCHARTED (Ps5)",
            description:
            `
            The series follows the adventures of treasure hunter and fortune seeker Nathan Drake as he sets off to uncover the truths behind numerous mythical treasures and lost cities, resulting in clashes with rival hunters and thieves.`,
            image: "Uncharted.JPG",
            category: "categories[2]._id",
            price: "32.99",
            bidTimeStamp:null,
            bidderName:null,
            bidValue:0
        },
    ])
})