import { FixtureConfig } from "./fixtureConfigSchema";
import FixtureType from "./FixtureType";
import * as fixtureConfigUnknown from "./kistanFixtures.json";
const fixtureConfig = fixtureConfigUnknown as FixtureConfig;
export default function FixtureTypes() {
    return <>
    {
        Object.entries(fixtureConfig.fixtureTypes).map(
            ([key, conf]) => {
                return FixtureType(conf, key, false)
            }
        )
    }
    </>
}