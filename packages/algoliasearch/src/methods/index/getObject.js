// @flow

import type {
  RequestMethod,
  IndexName,
  ObjectID,
  GetObjectOptions,
} from '../../types';

export default function getObjects(
  req: RequestMethod,
  indexName: IndexName,
  objectID: ObjectID,
  options: GetObjectOptions
) {
  const { attributesToRetrieve: attrs } = options;
  const attributesToRetrieve = attrs.join(',');

  return req({
    method: 'GET',
    path: `/1/indexes/${indexName}/${objectID}`,
    qs: { attributes: attributesToRetrieve },
  });
}