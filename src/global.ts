export namespace Global {
    export type Service = {
        name: string,
        description: string,
        price: number,
    }
    
    export type Artist = {
        name: string,
        position: string,
        bio?: string,
        imagePath?: string,
        primaryButtonText: string,
        primaryButtonOnClick: () => void,
        secondaryButtonText?: string,
        secondaryButtonOnClick?: () => void,
        services: Service[],
    }

    export const logo_200px = "images/luxehairartistrylogo_transparent-200h.png";
    export const logo_1500px = "images/luxehairartistrylogo_transparent-1500h.png";

    export const artists: Artist[] = [{
        name: "Rhonda Marttunen",
        position: "Hairstylist / Owner",
        bio: "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.",
        imagePath: "images/artist_headshots/rhonda_marttunen.jpg",
        primaryButtonText: "Full List of Services",
        primaryButtonOnClick() {
            return;
        },
        secondaryButtonText: "Text to Book Appointment\n226-998-1227",
        secondaryButtonOnClick() {
            window.open("tel:+12269981227")
        },
        services: [{name: "Men's Haircut", description: "", price: 22}, {name: "Women's Haircut", description: "", price: 30}]
    }, {
        name: "Ria",
        position: "Hairstylist",
        primaryButtonText: "Book Now with Ria",
        primaryButtonOnClick() {
            window.open("https://www.fresha.com/a/luxe-hair-artistry-co-st-thomas-20-churchill-crescent-d3m2puen")
        },
        services: []
    },{
        name: "Kim Ferguson",
        position: "Aesthetician",
        imagePath: "images/artist_headshots/kim_ferguson.jpg",
        primaryButtonText: "See Full Service List",
        primaryButtonOnClick() {
            return;
        },
        services: [{name: "Men's Haircut", description: "", price: 22}, {name: "Women's Haircut", description: "", price: 30}]
    }];
}