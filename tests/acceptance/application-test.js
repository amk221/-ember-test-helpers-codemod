import { module, test } from 'qunit';
import { visit, waitFor, click, settled } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.dom('.loading').doesNotExist();
    assert.dom('.done').doesNotExist();

    click('.do-something'); // Intentionally no await

    await waitFor('.loading');

    assert.dom('.loading').exists();
    assert.dom('.done').doesNotExist();

    await settled();

    assert.dom('.loading').doesNotExist();
    assert.dom('.done').exists();
  });
});
