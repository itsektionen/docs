import { FixtureConfig } from "./fixtureConfigSchema";
import FixtureInfo from "./FixtureInfo";
import * as fixtureConfigUnknown from "./kistanFixtures.json";
const fixtureConfig = fixtureConfigUnknown as FixtureConfig;
export default function FixtureInfos() {
    return <>
    {
        Object.entries(fixtureConfig.fixtures).map(
            ([key, conf]) => {
                return FixtureInfo(key, conf);
            }
        )
    }
    </>
}