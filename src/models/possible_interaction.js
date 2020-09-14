const {Model} = require('objection');

class possible_interaction extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_possible_interaction';
    }

    static get idColumn() {
        return 'ppp_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                ppp_id: {type: 'integer'},
                ptw_ref_id: {type: 'string'},
                ptw_id: {type: 'integer'},
                possible_ptw_id: {type: 'integer'},
                interaction_object:{type:'string'},
                hazardInteraction:{type:'string'},
                relloc:{type:'string'},
                Distance:{type:'string'},
                remark:{type:'string'},
                createdAt: {type: 'datetime'},
                updaatedAt: {type: 'datetime'}
            }
        };
    }
}

module.exports = possible_interaction;
