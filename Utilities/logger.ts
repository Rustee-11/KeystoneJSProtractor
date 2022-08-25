import { configure, getLogger } from "log4js";


configure({
    appenders: {
        out : {type : 'stdout'},
        app : {type : 'file', filename : './report/webapp.log'},
    },
    categories: {
        default:{
            appenders:['app','out'],
            level : 'debug'
        }
    }
})

const logger = getLogger();

export default logger;