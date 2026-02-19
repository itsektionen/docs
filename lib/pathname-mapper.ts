

export enum DocLocations {
    Default,
    Kistan,
    Init,
}

const docMappings: { matchString: string; location: DocLocations }[] = [
    { matchString: "kistan", location: DocLocations.Kistan },
    { matchString: "heim", location: DocLocations.Init },
    { matchString: "slinky", location: DocLocations.Init },
];

export type LocationInfo = {
    title: string;
    notFoundImage?: {
        imageName: string,
        imageAlt: string
    };
}

const locationInfos: {
    [key in DocLocations]: LocationInfo;
} = {
    [DocLocations.Default]: {
        title: "IT/docs",
    },
    [DocLocations.Kistan]: {
        title: "Kistan/docs",
        notFoundImage: {
            imageName: "SiMoN",
            imageAlt: "SiMoN"
        }
    },
    [DocLocations.Init]: {
        title: "init/docs"
    },
};



export function getMapping(pathName: string): DocLocations {
    pathName = pathName + "/";
    const mapping = docMappings.find((mapping) => {
        return pathName.startsWith("/docs/" + mapping.matchString + "/");
    });
    if (mapping === undefined) {
        return DocLocations.Default;
    }
    return mapping.location;
}

export function getLocationInfo(location: DocLocations): LocationInfo {
    return locationInfos[location]
}