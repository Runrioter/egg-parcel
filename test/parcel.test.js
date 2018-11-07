'use strict';

const mock = require('egg-mock');

describe('test/parcel.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/parcel-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, parcel')
      .expect(200);
  });
});
