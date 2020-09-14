const { Model } = require('objection');

class Auto_Save extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_autosave';
    }
    static get idColumn() {
        return 'autoId';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                autoId: { type: 'integer' },
                step: { type: 'integer'},
                data: { type: 'string' },
                ptw_ref_no: { type: 'string'},
                ptw_id: { type: 'number'},
                status: { type: 'boolean'},
                createdAt: { type: 'date' },
                updaatedAt: { type: 'date' }
             
            }


        };
    }
}
module.exports = Auto_Save;