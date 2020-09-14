const { Model } = require('objection');

class Ra_assessment_ref_list extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ra_assessment_reference_list';
    }
    static get idColumn() {
        return 'reflist_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            //required: ['ra_assessment_id'],
            properties: {
                reflist_id:{ type: 'integer' },
                ra_ref_no:{ type: 'string' },
                ra_id:{type:'integer'},
                team_ref_no:{ type: 'string' },
                ra_role:{ type: 'string' },
                createdBy:{type:'integer'},
                createdAt:{ type: 'datetime' },
                updatedAt:{ type: 'datetime'}
            }
        };
    }
}
module.exports = Ra_assessment_ref_list;
