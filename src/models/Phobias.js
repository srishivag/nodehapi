const { Model } = require('objection');
class Phobias extends Model {
    static get tableName() {
        return '' + PREFIX + 'phobias';
    }
    static get idColumn() {
        return '	id  ';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['phobia'],
            properties: {
                id: { type: 'integer' },
                phob_code: { type: 'string' },
                phobia: { type: 'string' },
                status: { type: 'integer' }
               

            }
        };
    }

}
module.exports = Phobias;