export class Characters {
    created: Date;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: Location;
    name: string;
    origin: Origin;
    species: string;
    status: string;
    type: string;
    url: string;
}

export class Location {
    name: string;
    url: string;
}

export class Origin {
    name: string;
    url: string;
}
