import {Query} from "./Query";
import {
    QueryServiceClient
} from './proto/endpoint_grpc_pb'
import * as grpc from "grpc";


let query = new Query("admin@test");
query.getAccount("admin@test");

const queryClient = new QueryServiceClient(
    "localhost:50051",
    grpc.credentials.createInsecure()
);

// Sending query with queryHelper
queryClient.find(query.signAndBuild("f101537e319568c765b2cc89698325604991dca57b9716b58016b253506cab70"), (err, response) => {
    if (err) {
        throw err
    } else {
        console.log(JSON.stringify(response))
    }
});