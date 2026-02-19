import { Heading } from "fumadocs-ui/components/heading";
import { FixtureConfig, FixtureSchema } from "./fixture-config-schema";
import * as fixtureConfigUnknown from "./kistan-fixtures.json";
import { Fragment } from "react/jsx-runtime";
import ModelDescriptionToText from "./fixture-descriptions";
import { FixtureTypeAccordion } from "./fixture-type";
const fixtureConfig = fixtureConfigUnknown as FixtureConfig;
export default function FixtureInfos() {
  return (
    <>
      {Object.entries(fixtureConfig.fixtures).map(([key, conf]) => {
        return FixtureInfo(key, conf);
      })}
    </>
  );
}

function FixtureInfo(fixtureInfoId: string, fixtureInfo: FixtureSchema) {
  let displayName = fixtureInfo.displayName;
  if (Object.keys(fixtureInfo.fixtureChannels).length != 1) {
    if (fixtureInfo.displayNamePlural) {
      displayName = fixtureInfo.displayNamePlural;
    } else {
      displayName += "s";
    }
  }

  return (
    <Fragment key={fixtureInfoId}>
      <Heading as="h2" id={"fixture-info" + fixtureInfoId}>
        {displayName}
      </Heading>

      {ModelDescriptionToText(fixtureInfo, { addNewLinesAtEnd: true })}

      {FixtureTypeAccordion(fixtureInfo.type)}

      {FixtureList(fixtureInfo)}
    </Fragment>
  );
}

function FixtureList(fixtureInfo: FixtureSchema) {
  const fixtureType = fixtureConfig.fixtureTypes[fixtureInfo.type];
  const numberOfChannels = Object.keys(fixtureType?.channels ?? {}).length;
  return (
    <table>
      <thead>
        <tr>
          <th>Lua Name</th>
          <th>DMX Channels</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(fixtureInfo.fixtureChannels).map(
          ([fixtureKey, fixtureChannel]) =>
            FixtureListRow(fixtureChannel, fixtureKey, numberOfChannels)
        )}
      </tbody>
    </table>
  );
}

function FixtureListRow(
  fixtureChannel: number,
  fixtureKey: string,
  numberOfChannels: number
) {
  let channelRange = "";
  if (numberOfChannels == 1) {
    channelRange = fixtureChannel.toString();
  } else {
    channelRange =
      fixtureChannel + "-" + (fixtureChannel + numberOfChannels - 1);
  }
  return (
    <tr key={fixtureKey}>
      <td id={"fixture-group" + fixtureChannel}>{fixtureKey}</td>
      <td>{channelRange}</td>
    </tr>
  );
}
