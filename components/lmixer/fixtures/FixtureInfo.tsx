import { Fragment } from "react/jsx-runtime";
import { FixtureSchema } from "./fixtureConfigSchema";
import { FixtureConfig } from "./fixtureConfigSchema";
import * as fixtureConfigUnknown from "./kistanFixtures.json";
import { Heading } from "fumadocs-ui/components/heading";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import FixtureType from "./FixtureType";
const fixtureConfig = fixtureConfigUnknown as FixtureConfig;

export default function FixtureInfo(
  fixtureInfoId: string,
  fixtureInfo: FixtureSchema,
) {
  let displayName = fixtureInfo.displayName;
  if (Object.keys(fixtureInfo.fixtureChannels).length != 1) {
    if (fixtureInfo.displayNamePlural) {
      displayName = fixtureInfo.displayNamePlural;
    } else {
      displayName += "s";
    }
  }
  const fixtureType = fixtureConfig.fixtureTypes[fixtureInfo.type];
  const numberOfChannels = Object.keys(fixtureType?.channels ?? {}).length;

  return (
    <Fragment key={fixtureInfoId}>
      <Heading as="h2" id={"fixture-info" + fixtureInfoId}>{displayName}</Heading>
      {fixtureInfo.model ? (
        <>
          <b>Model: </b>
          {fixtureInfo.model}
        </>
      ) : (
        <></>
      )}
      {fixtureInfo.model && fixtureInfo.description ? (
        <>
          <br></br>
        </>
      ) : (
        <></>
      )}
      {fixtureInfo.description ? <>{fixtureInfo.description}</> : <></>}
      
      {fixtureInfo.model || fixtureInfo.description ? (
        <>
          <br></br>
          <br></br>
        </>
      ) : (
        <></>
      )}

      <Accordions type="single">
        <Accordion title={"FixtureType: " + fixtureType.displayName}>
          {FixtureType(
            fixtureConfig.fixtureTypes[fixtureInfo.type],
            fixtureInfo.type,
            true,
          )}
        </Accordion>
      </Accordions>

      <table>
        <thead>
          <tr>
            <th>Lua Name</th>
            <th>DMX Channels</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(fixtureInfo.fixtureChannels).map(
            ([fixtureKey, fixtureChannel]) => {
              return (
                <tr key={fixtureKey}>
                  <td id={"fixture-group" + fixtureChannel}>{fixtureKey}</td>
                  <td>
                    {numberOfChannels == 1 ? (
                      <>{fixtureChannel}</>
                    ) : (
                      <>
                        {fixtureChannel}-{fixtureChannel + numberOfChannels - 1}
                      </>
                    )}
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </Fragment>
  );
}
