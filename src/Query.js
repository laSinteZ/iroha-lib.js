"use strict";
exports.__esModule = true;
var buffer_1 = require("buffer");
var ed25519_js_1 = require("ed25519.js");
var js_sha3_1 = require("js-sha3");
// import cloneDeep from 'lodash.clonedeep'
// import forEach from 'lodash.foreach'
var primitive_pb_1 = require("./proto/primitive_pb");
var Queries = require("./proto/queries_pb");
// import { capitalize } from './util.js'
var Query = /** @class */ (function () {
    function Query(creatorAccountId, createdTime, queryCounter) {
        if (createdTime === void 0) { createdTime = Date.now(); }
        if (queryCounter === void 0) { queryCounter = 1; }
        var meta = new Queries.QueryPayloadMeta();
        meta.setCreatorAccountId(creatorAccountId);
        meta.setCreatedTime(createdTime);
        meta.setQueryCounter(queryCounter);
        var payload = new Queries.Query.Payload();
        payload.setMeta(meta);
        this.query = new Queries.Query();
        this.query.setPayload(payload);
    }
    Query.prototype.getAccount = function (accountId) {
        var payloadQuery = new Queries.GetAccount();
        payloadQuery.setAccountId(accountId);
        var payload = this.query.getPayload();
        payload.setGetAccount(payloadQuery);
        this.query.setPayload(payload);
    };
    Query.prototype.signAndBuild = function (privateKeyHex) {
        var privateKey = buffer_1.Buffer.from(privateKeyHex, 'hex');
        var publicKey = ed25519_js_1.derivePublicKey(privateKey);
        var payloadHash = buffer_1.Buffer.from(js_sha3_1.sha3_256.array(this.query.getPayload().serializeBinary()));
        var signatory = ed25519_js_1.sign(payloadHash, publicKey, privateKey);
        var s = new primitive_pb_1.Signature();
        s.setPublicKey(Uint8Array.from(publicKey));
        s.setSignature(Uint8Array.from(signatory));
        this.query.setSignature(s);
        return this.query;
    };
    return Query;
}());
exports.Query = Query;
