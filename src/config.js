let config = {};

console.log(process.env.NODE_ENV ,"JKHGFDCHVJB");

if (process.env.NODE_ENV === "developmenrrt") {
    config.getquery = "http://172.31.99.206:5000/query/get-query";
    config.createquery = "http://172.31.99.206:5000/query/create-query";
    config.createcallback="http://172.31.99.206:5000/query/create-callback";
    config.sendotp="http://spark.kuants.in/v1/agent/mobile/send-otp";
    config.verify="http://spark.kuants.in/v1/agent/mobile/verify";


}
 else if (process.env.NODE_ENV === "staging") {

    config.createquery = "http://172.31.99.206:5000/query/create-query";
    config.createcallback="http://172.31.99.206:5000/query/create-callback";
    config.sendotp="http://spark.kuants.in/v1/agent/mobile/send-otp";


} 
else {
    config.createquery = "https://spark.kuants.in/query/create-query";
    config.createcallback="https://spark.kuants.in/query/create-callback";
    config.sendotp="https://spark.kuants.in/v1/agent/mobile/send-otp";
    config.verify="https://spark.kuants.in/v1/agent/mobile/verify";


}

export default config;
