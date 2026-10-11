import { FixtureConfig } from "./fixture-config-schema";
import FixtureType from "./fixture-type";
import * as fixtureConfigUnknown from "./kistan-fixtures.json";
const fixtureConfig = fixtureConfigUnknown as FixtureConfig;
export default function FixtureTypes() {
  return (
    <>
      {Object.entries(fixtureConfig.fixtureTypes).map(([key, conf]) => {
        return FixtureType(conf, key, false);
      })}
    </>
  );
}
