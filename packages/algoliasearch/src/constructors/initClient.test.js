// @flow
import initClient from './initClient.js';

const validClientParams = {
  appID: 'some_app',
  apiKey: 'some_key',
};

it('initClient throws when it has too little parameters', () => {
  // $FlowFixMe --> type disallows this
  expect(() => initClient({})).toThrow();
  // $FlowFixMe --> type disallows this
  expect(() => initClient({ appID: '' })).toThrowErrorMatchingSnapshot();
  // $FlowFixMe --> type disallows this
  expect(() => initClient({ apiKey: '' })).toThrowErrorMatchingSnapshot();

  expect(() => initClient(validClientParams)).not.toThrow();
});

it('initClient contains the correct methods', () => {
  const client = initClient(validClientParams);
  expect(Object.keys(client)).toMatchSnapshot();
});

it('client.search() works 🐣', async () => {
  const client = initClient(validClientParams);
  const result = await client.search({
    requests: [{ query: 'hello world', indexName: 'some_index' }],
  });
  expect(result).toMatchSnapshot();
});
