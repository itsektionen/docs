export enum DocLocations {
  Default,
  Kistan,
  Init,
}

const docMappings: { matchString: string; location: DocLocations }[] = [
  { matchString: "locale", location: DocLocations.Kistan },
  { matchString: "software/heim", location: DocLocations.Init },
  { matchString: "software/slinky", location: DocLocations.Init },
];

export type LocationInfo = {
  title: string;
  notFoundImage?: {
    imageName: string;
    imageAlt: string;
  };
};

const locationInfos: {
  [key in DocLocations]: LocationInfo;
} = {
  [DocLocations.Default]: {
    title: "it/docs",
  },
  [DocLocations.Kistan]: {
    title: "kistan/docs",
    notFoundImage: {
      imageName: "SiMoN",
      imageAlt: "SiMoN",
    },
  },
  [DocLocations.Init]: {
    title: "init/docs",
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
  return locationInfos[location];
}
