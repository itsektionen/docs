import { Heading } from "fumadocs-ui/components/heading";
import {
  ChannelRangedFunction,
  FixtureChannelSchema,
  FixtureConfig,
  FixtureTypeSchema,
} from "./fixture-config-schema";
import styles from "./lmixer.fixture.module.css";
import { Fragment } from "react/jsx-runtime";
import ModelDescriptionToText from "./fixture-descriptions";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import * as fixtureConfigUnknown from "./kistan-fixtures.json";
const fixtureConfig = fixtureConfigUnknown as FixtureConfig;

export default function FixtureType(
  fixtureType: FixtureTypeSchema,
  fixtureTypeId: string,
  isDropdown?: boolean,
) {
  isDropdown = isDropdown ?? false;
  return (
    <Fragment key={fixtureTypeId}>
      {!isDropdown && (
        <Heading id={fixtureTypeId} key={fixtureTypeId} as="h1">
          {fixtureType.displayName}
        </Heading>
      )}

      {ModelDescriptionToText(fixtureType)}

      {FixtureTypeTable(fixtureType)}
    </Fragment>
  );
}

export function FixtureTypeAccordion(fixtureTypeId: string) {
  let fixtureType = fixtureConfig.fixtureTypes[fixtureTypeId];
  return (
    <Accordions type="single">
      <Accordion title={"FixtureType: " + fixtureType.displayName}>
        {FixtureType(fixtureType, fixtureTypeId, true)}
      </Accordion>
    </Accordions>
  );
}

function FixtureTypeTable(fixtureType: FixtureTypeSchema) {
  return (
    <table>
      <thead>
        <tr>
          <th>Channel</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(fixtureType.channels).map(([channelID, channelInfo]) =>
          FixtureChannelRow(channelID, channelInfo),
        )}
      </tbody>
    </table>
  );
}

function FixtureChannelRow(
  channelID: string,
  channelInfo: FixtureChannelSchema,
) {
  return (
    <tr key={channelID}>
      <th>{channelID}</th>
      <td>
        {channelInfo.displayName}
        {RangeFunctionedChannel(channelInfo)}
      </td>
    </tr>
  );
}

function RangeFunctionedChannel(channelInfo: FixtureChannelSchema) {
  if (channelInfo.rangedFunction == null) {
    return <></>;
  }
  return (
    <div className={styles.fixturechannelrangedfunction}>
      {channelInfo.rangedFunction.map((rangedFunction, index) => {
        return ChannelFunctionBlock(rangedFunction, index);
      })}
    </div>
  );
}

function ChannelFunctionBlock(
  rangedFunction: ChannelRangedFunction,
  index: number,
) {
  let range = "";
  if (rangedFunction.min == rangedFunction.max) {
    range = rangedFunction.min.toString();
  } else {
    range = rangedFunction.min + "-" + rangedFunction.max;
  }
  return (
    <Fragment key={index}>
      <span className={styles.fixturechannelrangedfunctionrange}>{range}</span>
      <span>{rangedFunction.displayName}</span>
    </Fragment>
  );
}
