const test = require('node:test');
const propertyValueAliases = require('../index.js');

test('unicode-property-value-aliases-ecmascript', t => {
	t.assert.ok(
		propertyValueAliases.get('General_Category').get('L'),
		'Letter'
	);
	t.assert.ok(
		propertyValueAliases.get('General_Category').get('Lu'),
		'Uppercase_Letter'
	);
	t.assert.ok(
		propertyValueAliases.get('General_Category').get('C'),
		'Other'
	);
	t.assert.ok(
		propertyValueAliases.get('General_Category').get('Cn'),
		'Unassigned'
	);
	t.assert.ok(
		propertyValueAliases.get('Script').get('Aghb'),
		'Caucasian_Albanian'
	);
	t.assert.ok(
		propertyValueAliases.get('Script_Extensions').get('Aghb'),
		'Caucasian_Albanian'
	);
	// Unicode 10
	t.assert.ok(
		propertyValueAliases.get('Script_Extensions').get('Gonm'),
		'Masaram_Gondi'
	);
	// Unicode 11
	t.assert.ok(
		propertyValueAliases.get('Script_Extensions').get('Dogr'),
		'Dogra'
	);
	// Unicode 12
	t.assert.ok(
		propertyValueAliases.get('Script_Extensions').get('Elym'),
		'Elymaic'
	);
	// Unicode 13
	t.assert.ok(
		propertyValueAliases.get('Script_Extensions').get('Yezi'),
		'Yezidi'
	);
	// Unicode 14
	t.assert.ok(
		propertyValueAliases.get('Script_Extensions').get('Cpmn'),
		'Cypro_Minoan'
	);
	// Unicode 15
	t.assert.ok(
		propertyValueAliases.get('Script_Extensions').get('Kawi'),
		'Kawi'
	);
	// Unicode 16
	t.assert.ok(
		propertyValueAliases.get('Script_Extensions').get('Gara'),
		'Garay'
	);
	// Unicode 17
	t.assert.ok(
		propertyValueAliases.get('Script_Extensions').get('Berf'),
		'Beria_Erfe'
	);
});
