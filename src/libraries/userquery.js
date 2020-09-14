// const users = require('../model/Users');
// const employees = require('../model/Employees');
// const payrollconfig = require('../model/Payroll_config');
// const company = require('../model/Company');
// const rrfresume = require('../model/Rrf_resumes');
const moment = require('moment');
// const common = require('../library/commonfunction');
const { raw } = require('objection');
//const ConfigRoles = require('../models/Config_roles')
// now write all the query which you want to perform here.
// export function getall(callback) {
//     users.query().select('id', 'firstname', 'lastname')
//         .then(result => callback(result))
// };

// n statement
// export function getjoin(username, password) {
//     return new Promise((resolve, reject) => {
//         employees.query()
//             .select('emp_id', 'email', 'gender', 'notice_period_days', 'firstname', 'lastname', 'doj', 'mobile', 'dept_id', 'dept_short_name', 'role as all_roles', 'leave_group', 'locations')
//             .joinRelation('dept')
//             .where('status', '1')
//             .andWhere('emp_id', `${username}`)
//             .andWhere('password', `${password}`)
//             .then(result => {
//                 resolve(result);
//             }).catch((error) => reject(error))
//     })
// };


// export async function getconfigbykey(configkey, callback) {
//     await payrollconfig.query()
//         .select('config_value')
//         .findById(`${configkey}`)
//         .then(result => callback(result))
// };


// export async function companyname(companycode, callback) {
//     await company.query()
//         .select('*')
//         .where('company_code', `${companycode}`)
//         .then(result => callback(result))
// };

// update based on condition in employee table
export function updatelastlogin(tablemap, colname, condkey, condvalue) {
    return new Promise((resolve, reject) => {
        tablemap.query()
            .update(colname)
            .where(condkey, `${condvalue}`)
            .then(result => {
                resolve(result);
            }).catch(error => {
                reject(error);
            })
    })
};
export function updatelastlogingroupby(tablemap, columnlist, colname, condkey, condvalue) {
    return new Promise((resolve, reject) => {
        tablemap.query()
            .select(columnlist)
            .update(colname)
            .where(condkey, `${condvalue}`)
            .then(result => {
                resolve(result);
            }).catch(error => {
                reject(error);
            })
    })
};

//get role list from the table

export function rolelist(Tableparam, selectparam, conditokey, role, orderparam, ordervalue) {

    return new Promise((resolve, reject) => {
        Tableparam.query()
            .select(selectparam)
            .whereIn(conditokey, role)
            .groupBy(conditokey).orderBy(orderparam, ordervalue)
            .then(result => {
                console.log('result', result)
                resolve(result);
            }).catch(error => {
                reject(error);
            })
    })
};
export function selectwithorderby(tablemap, columnlist, conditokey, orconditokey, orderparam, ordervalue) {

    return new Promise((resolve, reject) => {
        tablemap.query()
            .select(columnlist)
            .where(conditokey, orconditokey)
            .orderBy(orderparam, ordervalue)
            .then(result => {
                console.log('result', result)
                resolve(result);
            }).catch(error => {
                reject(error);
            })
    })
};
export function selectwithcondandorderby(tablemap, columnlist, conditokey, conditionvalue, orderparam, ordervalue) {

    return new Promise((resolve, reject) => {
        tablemap.query()
            .select(columnlist)
            .where(conditokey, conditionvalue)
            .orderBy(orderparam, ordervalue)
            .then(result => {
                console.log('result', result)
                resolve(result);
            }).catch(error => {
                reject(error);
            })
    })
};
// check for the rrf resume table for the query
export function rrflogin(username) {
    return new Promise((resolve, reject) => {
        rrfresume.query()
            .select()
            .where('temp_id', `${username}`)
            .then(result => {
                resolve(result);
            }).catch(error => {
                reject(error);
            })
    })
};

export function simpleselect(tablemap, columnlist) {
    return new Promise((resolve, reject) => {
        console.log(tablemap.query()
            .select(columnlist).toString());
        tablemap.query()
            .select(columnlist)
            .then(result => {
                resolve(result);
            }).catch(error => {
                reject(error);
            })
    });
}

export function selectquery(tablemap, modalAlias, columnlist, joinrelationtable, wherecondition, columngroupby, columnorderby) {
    let query = '';
    // console.log(tablemap, modalAlias, columnlist, joinrelationtable);
    return new Promise((resolve, reject) => {
        query = tablemap.query().select(columnlist)
        if (modalAlias) {
            query = query.alias(modalAlias)
        }
        if (joinrelationtable) {
            query = query.joinRelation(joinrelationtable)
        }
        if (wherecondition) {
            query = query.where(wherecondition)
        }
        if (columngroupby) {
            query = query.groupBy(columngroupby)
        }
        if (columnorderby) {
            query = query.orderBy(columnorderby)
        }
        // console.log(query.toString())
        query.then(result => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        })
    });
}
// function to select the based on where clause and groupby a column

export function selectwithWherecondandgroupby(tablemap, columnlist, whereClause, columngroupby) {
    let query = '';
    // console.log(tablemap);
    return new Promise((resolve, reject) => {
        query = tablemap.query().select(columnlist)
        if (whereClause) {
            query = query.where(whereClause)
        }
        if (columngroupby) {
            query = query.groupBy(columngroupby)
        }
        // console.log(query.toString())
        query.then(result => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        })
    });
}
export function selectwithWherecondandorderby(tablemap, columnlist, whereClause, joinrelationtable, columnorderby) {
    let query = '';
    // console.log(tablemap);
    return new Promise((resolve, reject) => {
        query = tablemap.query().select(columnlist)
        if (whereClause) {
            query = query.where(whereClause)
        }
        if (joinrelationtable) {
            query.query.join(joinrelationtable)
        }
        if (columnorderby) {
            query = query.groupBy(columnorderby)
        }
        // console.log(query.toString())
        query.then(result => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        })
    });
}
// function to select the data from table with one condition
export function selectwithcond(tablemap, columnlist, conditionkey) {
    return new Promise((resolve, reject) => {
        tablemap
            .query()
            .select(columnlist)
            .where(conditionkey)
            .then(result => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            })
    });
}

export function selectwithcondparam(tablemap, columnlist, conditionkey, conditionvalue, conditionparam) {
    // console.log('hiiiiiiiiiiiiiii...........')
    return new Promise((resolve, reject) => {
        tablemap
            .query()
            .select(columnlist)
            .where(conditionkey, conditionparam, conditionvalue)
            .then(result => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            })
    });
}

// common join statement with where in
export function commonjoin(tablemap, columnlist, joinrelationtable, conditionvalue) {
    return new Promise((resolve, reject) => {
        tablemap.query()
            .select(columnlist)
            .joinRelation(joinrelationtable)
            .whereRaw(conditionvalue)
            .then(result => {
                resolve(result);
            }).catch((error) => reject(error))
    })
};

// common join statement where
export function commonjoinwithwhere(tablemap, columnlist, joinrelationtable, conditionkey, conditionvalue) {
    return new Promise((resolve, reject) => {
        tablemap.query()
            .select(columnlist)
            .joinRelation(joinrelationtable)
            .where(conditionkey, conditionvalue)
            .then(result => {
                resolve(result);
            }).catch((error) => {
                console.log(error);
                return reject(error);
            })
    })
};

// delete operation
export function deletewithcond(tablemap, conditionkey, conditionvalue) {
    return new Promise((resolve, reject) => {
        tablemap
            .query()
            .delete()
            .where(conditionkey, conditionvalue)
            .then(result => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            })
    });

}

// delete operation with transaction
export function deletewithcondtrx(tablemap, conditionkey, trx) {
    return new Promise((resolve, reject) => {
        tablemap
            .query()
            .delete()
            .where(conditionkey).transacting(trx)
            .then(result => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            })
    });

}

// function to select the data from table with where in conditon
export function selectwithincond(tablemap, columnlist, conditionkey, conditionin, conditionvalue) {
    return new Promise((resolve, reject) => {
        tablemap
            .query()
            .select(columnlist)
            .where(conditionkey)
            .whereIn(conditionin, conditionvalue)
            .then(result => {
                console.log(result);
                resolve(result);
            }).catch((error) => {
                reject(error);
            })
    });
}
// function to select the data from table with where in conditon without where
export function selectwithinwherecond(tablemap, columnlist, conditionin, conditionvalue, alias) {
    return new Promise((resolve, reject) => {
        tablemap
            .query()
            .select(columnlist)
            .whereIn(conditionin, conditionvalue)
            .alias(alias)
            .then(result => {
                console.log(result);
                resolve(result);
            }).catch((error) => {
                reject(error);
            })
    });

}
export function selectwithcondalias(tablemap, columnlist, condition, alias) {
    return new Promise((resolve, reject) => {
        tablemap
            .query()
            .select(columnlist)
            .where(condition)
            .alias(alias)
            .then(result => {
                console.log(result);
                resolve(result);
            }).catch((error) => {
                reject(error);
            })
    });
}
export function selectwithinjoinwherecond(tablemap, columnlist, joinrelationtable, conditionin, conditionvalue, alias) {
    return new Promise((resolve, reject) => {
        tablemap
            .query()
            .select(columnlist)
            .joinRelation(joinrelationtable)
            .whereIn(conditionin, conditionvalue)
            .alias(alias)
            .then(result => {
                console.log(result);
                resolve(result);
            }).catch((error) => {
                reject(error);
            })
    });

}
// function to select the data from table with where and orwhere conditon
export function selectwithorcondparams(tablemap, columnlist, conditionkey, conditionvalue, orconditionkey, orconditionvalue, conditionparam) {
    console.log(conditionkey);
    return new Promise((resolve, reject) => {
        tablemap
            .query()
            .select(columnlist)
            .where(conditionkey, conditionparam, conditionvalue)
            .orWhere(orconditionkey, orconditionvalue)
            .then(result => {
                console.log(result);
                resolve(result);
            }).catch((error) => {
                reject(error);
            })
    });
}

// update with multiple update condtion
export function updatemultiple(tablemap, colname, condkey) {
    return new Promise((resolve, reject) => {
        tablemap.query()
            .update(colname)
            .where(condkey)
            .then(result => {
                resolve(result);
            }).catch(error => {
                reject(error);
            })
    })
};


// delete operation whth where in condition
export function deletewithwherincond(tablemap, wherecondition, conditionin, conditionvalue) {
    return new Promise((resolve, reject) => {
        let mod = tablemap
            .query()
            .delete()
            .whereRaw(wherecondition)
        if (conditionvalue) {
            mod = mod.whereIn(conditionin, conditionvalue)
        }
        mod.then(result => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        })
    });

}

// following two function testing pending..
// is client ip blocked or not verification function
export function isLoginIpBlocked(ipaddress, blocked_ips) {
    return new Promise((resolve, reject) => {
        blocked_ips.query()
            .select(raw(`count(*) as count`))
            .where(blocked_ips.ip_address, '=', ipaddress)
            .where(blocked_ips.remarks, '=', 'Invalid Credentials')
            .where(builder => builder.where(blocked_ips.upto_dttm, '=', null).orWhere(blocked_ips.upto_dttm, '<', 'CURRENT_TIMESTAMP'))
            .then(result => {
                if (result[0].count > 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }).catch((error) => {
                reject(error);
            });
    });
}

// failed login tracking and ip block if failed cases are exceeds limit
export function ipBlockVerification(ipaddress, loginHist, blockIps, blockIpsSett) {
    return new Promise(async (resolve, reject) => {
        let attempt_limit;
        let block_mins;
        await common.commonSelectQuery(blockIpsSett, null, {
            limit: 1
        }).then(result => {
            attempt_limit = result[0].wrong_attempts_allow;
            block_mins = result[0].wrong_attempt_block_mins;
        }).catch((error) => {
            reject(error);
        });
        await common.commonSelectQuery(loginHist, null, {
            where: ` ip_address = '${ipaddress}' and remarks = 'Invalid Credentials' `,
            limit: attempt_limit
        }).then(async result => {
            if (result[0].sum >= attempt_limit) {
                const d1 = new Date();
                let d2 = new Date(d1);
                d2.setMinutes(d1.getMinutes() + block_mins);
                d2 = moment(d2).format('YYYY-MM-DD HH:mm:ss');
            } else {
                resolve(false);
            }
        })
    })
}
// common join statement where with alias
export function commonjoinwithwherealias(tablemap, columnlist, joinrelationtable, conditionkey, conditionvalue, alias) {
    return new Promise((resolve, reject) => {
        tablemap.query()
            .select(columnlist)
            .joinRelation(joinrelationtable)
            .where(conditionkey, conditionvalue)
            .alias(alias)
            .then(result => {
                resolve(result);
            }).catch((error) => reject(error))
    })
};


// export function configroles(columnlist, innerJoin1, innerJoin2, innerJoin3, condition) {
//     // const folder = config.employeImages;

//     return new Promise((resolve, reject) => {
//         ConfigRoles.query(cr)
//             .select(columnlist)
//             .innerJoinRelation(innerJoin1)
//             .innerJoinRelation(innerJoin2)
//             .innerJoinRelation(innerJoin3)
//             .where(condition)
//             .then(result => {
//                 resolve(result);
//             }).catch(function (error) {
//                 reject(error);
//             })
//     });
// }
export function selectwithwherecondandrelations(tablemap, columnlist, innerJoinRelation, leftJoinRelation, condition) {
    // const folder = config.employeImages;

    return new Promise((resolve, reject) => {
        tablemap.query(cr)
            .select(columnlist)
            .innerJoinRelation(innerJoinRelation)
            .leftJoinRelation(leftJoinRelation)
            .where(condition)
            .then(result => {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            })
    });
}
export function selectwithwherecondandleftjoin(tablemap, columnlist, leftJoinRelation, condition) {
    // const folder = config.employeImages;

    return new Promise((resolve, reject) => {
        tablemap.query(cr)
            .select(columnlist)
            .leftJoinRelation(leftJoinRelation)
            .where(condition)
            .then(result => {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            })
    });
}
export function joinswithwherecond(Tablemap, parameterlist, innerjoinrelation, wherecondition, conditionon) {


    return new Promise((resolve, reject) => {
        Tablemap.query()
            .select(parameterlist)
            .on(conditionon)
            .innerJoinRelation(innerjoinrelation)
            .where(wherecondition)
            .then(result => {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            })
    });

}
