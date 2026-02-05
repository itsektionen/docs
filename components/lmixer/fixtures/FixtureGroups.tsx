import { FixtureConfig } from "./fixtureConfigSchema";
import FixtureGroup from "./FixtureGroup";
import * as fixtureConfigUnknown from "./kistanFixtures.json";
const fixtureConfig = fixtureConfigUnknown as FixtureConfig;
export default function FixtureGroups() {
  return (
    <>
      {Object.entries(fixtureConfig.fixtureGroups).map(([key, conf]) => {
        return FixtureGroup(conf, key);
      })}
    </>
  );
}
