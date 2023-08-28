import { ArtistCardGroupNS } from "./components/ArtistCardGroup";

export namespace Global {
    export const logo_blk_200px = "images/luxehairartistrylogo_transparent-200h.png";
    export const logo_blk_1500px =
        "images/luxehairartistrylogo_transparent-1500h.png";
    export const logo_wht_1500px =
        "images/luxehairartistrylogo_white_transparent-1500h.png";

    export type Links = {
        instagram: string;
        facebook: string;
    }

    export const links = {
        instagram: "https://www.instagram.com/luxehairartistryco/",
        facebook: "https://www.facebook.com/luxehairartistryco/",
    }

    export type HoursOfOp = {
        sunday: string,
        monday: string,
        tuesday: string,
        wednesday: string,
        thursday: string,
        friday: string,
        saturday: string,
        notes?: string,
    };

    export const hoursOfOp: HoursOfOp = {
        sunday: "Closed",
        monday: "10am - 5pm",
        tuesday: "10am - 8:30pm",
        wednesday: "10am - 8:30pm",
        thursday: "10am - 5pm",
        friday: "10am - 5pm",
        saturday: "By Appointment Only",
        notes: "Hours may vary amongst artists. Appointments are recommended."
    };


    export const contactInfo: string[][] = [
        ["Address: ", "20 Churchill Crescent"],
        ["", "St Thomas, ON N5R 1N8"],
        ["Phone: ", "519-207-1111"],
    ]

    export const artists_hairstylists: ArtistCardGroupNS.Artist[] = [
        {
            id: "rhonda-marttunen",
            name: "Rhonda Marttunen",
            position: "Hairstylist & Owner",
            bio: "30 years of experience! Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.",
            imagePath: "images/artist_headshots/rhonda_marttunen.jpg",
            bookNowButtonText:
                "Text: 226-998-1227",
            bookNowButtonLink: "sms:+12269981227",
            secondaryBookNowButtonText:
                "Call: 519-702-1111",
            secondaryBookNowButtonLink: "tel:15192071111",
            services: [
                { type: "group", name: "Haircuts", },
                { type: "item", name: "Woman's Haircut", price: "$30", },
                { type: "item", name: "Men's Haircut", price: "$22", },
                { type: "item", name: "Kid's Haircut", price: "$22", },
                { type: "group", name: "Colours", },
                { type: "item", name: "Colour", price: "$85+", },
                { type: "group", name: "Highlights", },
                { type: "item", name: "Partial Highlights", price: "$55", },
                { type: "item", name: "3/4 Head Highlights", price: "$75", },
                { type: "item", name: "Full Highlights", price: "$95", },
                { type: "group", name: "Combos", },
                { type: "item", name: "Wash & Cut", price: "$35", },
                { type: "item", name: "Wash & Set", price: "$25", },
                { type: "item", name: "Wash, Cut & Style", price: "$45", },
                { type: "group", name: "Toner", },
                { type: "item", name: "Toner", price: "$50", },
                { type: "group", name: "Balayage", },
                { type: "item", name: "Balayage", price: "$150+", },
                { type: "group", name: "Extensions", },
                { type: "item", name: "Extensions", price: "$250+", },

            ],
        },

        {
            id: "ria-butler",
            name: "Victoria Butler",
            position: "Hairstylist",
            bio: "Victoria is a St. Thomas based licensed hairstylist, who has worked in the industry since 2014. She has trained with celebrity hair stylists, worked on magazine photo shoots, and prioritizes the integrity of the hair while achieving your desired look. She specializes in corrective colour and blonding services, also offering a variety of cutting and facial waxing services.",
            imagePath: "images/artist_headshots/ria_butler.jpg",
            bookNowButtonText: "Book Online",
            bookNowButtonLink:
                "https://www.fresha.com/a/luxe-hair-artistry-co-st-thomas-20-churchill-crescent-d3m2puen",
            secondaryBookNowButtonText:
                "Call: 519-702-1111",
            secondaryBookNowButtonLink: "tel:15192071111",
        },
    ];

    export const artists_aestheticians: ArtistCardGroupNS.Artist[] = [
        {
            id: "kim-ferguson",
            name: "Kim Ferguson",
            position: "Aesthetician",
            bio: "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.",
            imagePath: "images/artist_headshots/kim_ferguson.jpg",
            bookNowButtonText: "Text: 705-627-5135",
            bookNowButtonLink: "sms:+7056275135",
            services: [
                { type: "group", name: "Natural Nail Enhancements", },
                { type: "subgroup", name: "BioSculpture Gel", description: "BioSculpture Gel is a Superior product making nails beautiful, flexible and durable, without any Damage. It is a one step system that strengthens and promotes the growth of natural nails. It is applied onto the natural nail or used to create strong and comfortable tips for added length. ", },
                { type: "item", name: "Full Cover Tips", price: "$95", description: "Instantly creating perfect shape and length natural looking nails. BioSculptures Full Cover tips use soft gel adhesion technology to bring you the strongest most comfortable tips on the market. No Glue, odours, dust, fumes or excessive filing to preserve the health of your natural nail. ", },
                { type: "item", name: "Overlay", price: "$65", description: "BioSculpture Gel is applied to the natural nail, it strengthens and promotes natural nail growth.  The Gel is cured under a UV light, leaving the nail strong but flexible with a natural glossy or high shine finish.", },
                { type: "item", name: "Fill or Soak Off with Reapplication", price: "$70", description: "Reapplication of BioSculpture overlay. Depending on your nail type the gel will be rebalanced or removed with gel remover before a new application of nourishing gel. ", },
                { type: "subgroup", name: "Evo by BioSculpture", description: "Evo is a revolutionary colour system that has evolved from the BioSculpture gel system. It boasts the latest technology in gel Formulations. Infused with Vitamin A and E leaving the naIl nourished and rehydrated  Evos medical grade formula maintains and promotes healthy natural nails. ", },
                { type: "item", name: "Evo Gel Polish Manicure", price: "$65", description: "The Gel polish system consists of three base gels, each having a unique texture and purpose to treat different nail types. Applied to the Natural nail it is extremely durable, long lasting, high shine gel.", },
                { type: "item", name: "Evo Gel Polish Pedicure  ", price: "$75", description: "Upgrade your signature pedicure for a long lasting, durable gel polish on your toes.  Service includes foot soak, nails trimmed and shaped, cuticle and callus work. Gel is applied to the nails. Complete the pedicure with a relaxing massage and exfoliation with sugar scrub then wrapped in a hot towel. ", },
                { type: "subgroup", name: "Add-Ons", },
                { type: "item", name: "Add Full Cover Tip", price: "$5 per Nail", },
                { type: "item", name: "Advanced Nail Design", price: "$5 per Nail, $20 per 5 Nails, $30 per 10 Nails", },
                { type: "group", name: "Fingers & Toes", },
                { type: "item", name: "Express Mani", price: "$30", description: "Nails trimmed and shaped,finished with a hydrating cream.", },
                { type: "item", name: "Spa Manicure", price: "$50", description: "Nails shaped, cuticle work. Hands are massaged. Finish the treatment with a polish application.", },
                { type: "item", name: "Express Pedi", price: "$40", description: "Foot soak, Nail trimmed and shaped finished with a hydrating cream.", },
                { type: "item", name: "Sports Pedicure", price: "$55", description: "Foot soak, Nails trimmed and shaped, cuticle and callus work. Finished with a massage.", },
                { type: "item", name: "Spa Pedicure", price: "$65 (Without Polish $60)", description: "Foot soak, Nails trimmed and shaped, cuticle and callus work. Feet are massaged and  exfoliated with sugar scrub wrapped in a hot towel. Finish the treatment with a polish application.", },
                { type: "item", name: "Gentleman's Pedicure", price: "$60", description: "Foot soak, Nails trimmed and shaped, cuticle and callus work. Feet are massaged and  exfoliated with sugar scrub wrapped in a hot towel. ", },
                { type: "group", name: "The B/S Brace System", description: "A NON-Surgical, corrective procedure that will eliminate pain and help correct the curvature of the nail", },
                { type: "item", name: "Add Brace Nail", price: "$30", },
                { type: "item", name: "Add 2 Brace Nails", price: "$50", },
                { type: "group", name: "Lash Extensions", },
                { type: "item", name: "Full Set", price: "$160", },
                { type: "item", name: "2 Week Fill", price: "$60", },
                { type: "item", name: "3 Week Fill", price: "$70", },
                { type: "item", name: "4 Week Fill", price: "$80", },
                { type: "group", name: "Waxing & Sugaring", },
                { type: "subgroup", name: "Face", },
                { type: "item", name: "Brows", price: "$24", },
                { type: "item", name: "Upper Lip", price: "$15", },
                { type: "item", name: "Chin", price: "$18", },
                { type: "item", name: "Full Face", price: "$45", },
                { type: "subgroup", name: "Body", },
                { type: "item", name: "Brazilian", price: "$70", },
                { type: "item", name: "Bikini", price: "$45", },
                { type: "item", name: "Extended Bikini", price: "$55", },
                { type: "item", name: "Underarms", price: "$20", },
                { type: "item", name: "Full Arm", price: "$30", },
                { type: "item", name: "Full Leg", price: "$80", },
                { type: "item", name: "Half Leg", price: "$45", },
                { type: "subgroup", name: "Combo", },
                { type: "item", name: "Brazilian + Full Leg", price: "$130", },
                { type: "item", name: "Bikini + Full Leg", price: "$115", },
                { type: "item", name: "Brazilian + Underarms", price: "$85", },
                { type: "item", name: "Brows + Upper Lip", price: "$34", },
                { type: "subgroup", name: "Men", },
                { type: "item", name: "Chest", price: "$50", },
                { type: "item", name: "Back", price: "$50", },
                { type: "group", name: "Tinting", },
                { type: "item", name: "Eyelashes", price: "$35", },
                { type: "item", name: "Brows", price: "$25", },
                { type: "item", name: "Brow Wax & Tint", price: "$35", },

            ],
        },
    ];
}