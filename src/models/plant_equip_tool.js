
const { Model } = require('objection');

class ptw_plantequiptool extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_plantequiptool';
    }
    static get idColumn() {
        return 'pet_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                pet_id: { type: 'integer' },
                ptw_ref_id:{ type: 'string' },
                ptw_id:{type:'integer'},
                assetsrequired: { type: 'integer' },
                quantity:{ type: 'integer' },
                status:{ type: 'boolean' },
                createdBy:{type:'string'},
                createdAt: { type: 'datetime' },
                updaatedAt: { type: 'datetime'}
            }
        };
    }
}
module.exports = ptw_plantequiptool;
