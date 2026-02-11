import { Fragment } from "react/jsx-runtime";
import { FixtureConfig, FixtureGroupSchema } from "./fixture-config-schema";
import * as fixtureConfigUnknown from "./kistan-fixtures.json";
import { Heading } from "fumadocs-ui/components/heading";
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

function FixtureGroup(fixtureGroup: FixtureGroupSchema, luaName: string) {
  return (
    <Fragment key={luaName}>
      <Heading as="h2" id={"fixture-group-" + luaName}>
        {luaName}
      </Heading>
      <table>
        <thead>
          <tr>
            <th>Fixtures in group</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(fixtureGroup.fixtures).map(([index, fixture]) => {
            return (
              <tr key={index}>
                <td>{fixture}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}
