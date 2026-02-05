import { Fragment } from "react/jsx-runtime";
import { FixtureGroupSchema } from "./fixtureConfigSchema";
import { Heading } from "fumadocs-ui/components/heading";

export default function FixtureGroup(
  fixtureGroup: FixtureGroupSchema,
  luaName: string,
) {
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
