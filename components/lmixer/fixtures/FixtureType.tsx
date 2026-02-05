import { Heading } from "fumadocs-ui/components/heading";
import { FixtureTypeSchema } from "./fixtureConfigSchema";
import styles from "./lmixer.fixture.module.css";
import { Fragment } from "react/jsx-runtime";

export default function FixtureType(
  fixtureType: FixtureTypeSchema,
  fixtureTypeId: string,
  isDropdown?: boolean,
) {
  return (
    <Fragment key={fixtureTypeId}>
      {isDropdown ? (
        <></>
      ) : (
        <Heading id={fixtureTypeId} key={fixtureTypeId} as="h1">
          {fixtureType.displayName}
        </Heading>
      )}
      {fixtureType.model ? (
        <>
          <b>Model: </b>
          {fixtureType.model}
        </>
      ) : (
        <></>
      )}
      {fixtureType.model && fixtureType.description ? (
        <>
          <br></br>
        </>
      ) : (
        <></>
      )}
      {fixtureType.description ? <>{fixtureType.description}</> : <></>}

      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(fixtureType.channels).map(
            ([channelID, channelInfo]) => {
              return (
                <Fragment key={channelID}>
                  <tr>
                    <th>{channelID}</th>
                    <td>
                      {channelInfo.displayName}
                      {channelInfo.rangedFunction ? (
                        <>
                          <div className={styles.fixturechannelrangedfunction}>
                            {Object.entries(channelInfo.rangedFunction).map(
                              ([index, rangedFunction]) => {
                                return (
                                  <Fragment key={index}>
                                    <span
                                      className={
                                        styles.fixturechannelrangedfunctionrange
                                      }
                                    >
                                      {rangedFunction.min ==
                                      rangedFunction.max ? (
                                        rangedFunction.min
                                      ) : (
                                        <>
                                          {rangedFunction.min}-
                                          {rangedFunction.max}
                                        </>
                                      )}
                                    </span>
                                    <span>{rangedFunction.displayName}</span>
                                  </Fragment>
                                );
                              },
                            )}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </td>
                  </tr>
                </Fragment>
              );
            },
          )}
        </tbody>
      </table>
    </Fragment>
  );
}
