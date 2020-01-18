import { module, test } from 'qunit';
import { visit, waitFor, click, settled } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.dom('.loading').doesNotExist('Done');
    assert.dom('.done').doesNotExist('Done');

    click('.do-something'); // Intentionally no await

    await waitFor('.loading');

    assert.dom('.loading').includesText('Please wait...');
    assert.dom('.done').doesNotExist('Done');

    await settled();

    assert.dom('.loading').doesNotExist();
    assert.dom('.done').exists();
  });
});
