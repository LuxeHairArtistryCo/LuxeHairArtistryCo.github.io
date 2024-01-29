import { HoursOfOp } from "./datatypes";

export namespace Colors {
    export const primary = "#3D5949";
    export const secondary = "#CFDED7";
    export const tertiary = "#DAE7E1";
    export const light = "#FFFFFF";
    export const dark = "#212529";
    export const dark_a66 = "#212529AA";
    export const dark_a50 = "#2125297F";
    export const dark_a33 = "#21252955";
    export const dark_a10 = "#2125291A";
}

export namespace Images {
    export const logo: string =
        "images/logo/luxe_logo_transparent_1500x600.png";
    export const icon: string =
        "images/icon/luxe_icon.png";
    export const hero_images: string[] = [
        "images/hero_images/luxe_hero_01.webp",
        "images/hero_images/luxe_hero_02.webp",
        "images/hero_images/luxe_hero_03.webp",
    ]
    export const artist_headshot_path: string = "images/artist_headshots/"
    export const artist_headshot_filetype: string = ".webp"
}

export namespace Links {
    export const instagram: string = "https://www.instagram.com/luxehairartistryco/";
    export const facebook: string = "https://www.facebook.com/luxehairartistryco/";
}

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