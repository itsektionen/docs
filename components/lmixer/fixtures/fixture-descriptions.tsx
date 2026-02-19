export interface IDescriptionModel {
  model?: string;
  description?: string;
}
export default function ModelDescriptionToText(
  descriptionModel: IDescriptionModel,
  settings?: {
    addNewLinesAtEnd?: boolean;
  }
) {
  settings = settings ?? {};

  return (
    <>
      {descriptionModel.model && (
        <>
          <b>Model: </b>
          {descriptionModel.model}
        </>
      )}

      {descriptionModel.model && descriptionModel.description && <br />}

      {descriptionModel.description}

      {(descriptionModel.model || descriptionModel.description) &&
        settings.addNewLinesAtEnd && (
          <>
            <br />
            <br />
          </>
        )}
    </>
  );
}
