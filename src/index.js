"use strict";
exports.__esModule = true;
var Query_1 = require("./Query");
var endpoint_grpc_pb_1 = require("./proto/endpoint_grpc_pb");
var grpc = require("grpc");
var query = new Query_1.Query("admin@test");
query.getAccount("admin@test");
var queryClient = new endpoint_grpc_pb_1.QueryServiceClient("localhost:50051", grpc.credentials.createInsecure());
// Sending query with queryHelper
queryClient.find(query.signAndBuild("f101537e319568c765b2cc89698325604991dca57b9716b58016b253506cab70"), function (err, response) {
    if (err) {
        throw err;
    }
    else {
        console.log(JSON.stringify(response));
    }
});
