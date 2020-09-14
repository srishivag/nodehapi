const { Model } = require('objection');

class Form3_cost extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'form3_cost';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                id: { type:'integer'},
                temp_id: { type: 'string' },
                incident_id: { type: 'integer' },
                incident_number: { type: 'string' },
                incident_temp_id: { type: 'string' },
                user_id: { type: 'string'},
                form: { type: 'integer' },
                Actual_Damage_cost: { type: 'integer' },
                Actual_Medical_cost: { type: 'integer' },
                Actual_Replacement_cost: { type: 'integer' },
                Actual_Compensation_cost: { type: 'integer' },
                Actual_Prosecution_cost: { type: 'integer' },
                Actual_Losses: { type: 'integer' },
                Actual_Repair_cost: { type: 'integer' },
                Actual_Investigation_cost: { type: 'integer' },
                Actual_Reputation_damage: { type: 'string' },
                Actual_Irreversible_damage: { type: 'string' },
                Actual_Insurance_claimed: { type: 'string' },
                Actual_Loss_morale: { type: 'string' },
                Actual_Other_costs: { type: 'string' },
                Actual_Total_cost: { type: 'integer' },
                Potential_Damage_cost: { type: 'integer' },
                Potential_Medical_cost: { type: 'integer' },
                Potential_Replacement_cost: { type: 'integer' },
                Potential_Compensation_cost: { type: 'integer' },
                Potential_Prosecution_cost: { type: 'integer' },
                Potential_Losses: { type: 'integer' },
                Potential_Repair_cost:{ type: 'integer' },
                Potential_Investigation_cost: { type: 'integer' },
                Potential_Reputation_damage: { type: 'string' },
                Potential_Irreversible_damage: { type: 'string' },
                Potential_Insurance_claimed: { type: 'string' },
                Potential_Loss_morale: { type: 'string' },
                Potential_Other_costs: { type: 'string' },
                Potential_Total_cost: { type: 'integer' },
                Significant_learnings: { type: 'string'},
            }
        };
    }
}
module.exports = Form3_cost;