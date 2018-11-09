import { Buffer } from 'buffer'
import { sign as signQuery, derivePublicKey } from 'ed25519.js'
import { sha3_256 as sha3 } from 'js-sha3'
import { Signature } from './proto/primitive_pb'
import * as Queries from './proto/queries_pb'

export class Query {
    private readonly query: Queries.Query;

    constructor(creatorAccountId: string, createdTime: number = Date.now(), queryCounter: number = 1) {
        let meta = new Queries.QueryPayloadMeta();
        meta.setCreatorAccountId(creatorAccountId);
        meta.setCreatedTime(createdTime);
        meta.setQueryCounter(queryCounter);

        let payload = new Queries.Query.Payload();
        payload.setMeta(meta);

        this.query = new Queries.Query();
        this.query.setPayload(payload);
    }

    public getAccount(accountId: string): void {
        let payloadQuery = new Queries.GetAccount();
        payloadQuery.setAccountId(accountId);

        let payload = this.query.getPayload();
        payload.setGetAccount(payloadQuery);
        this.query.setPayload(payload);
    }

    public signAndBuild(privateKeyHex: string): Queries.Query {
        const privateKey = Buffer.from(privateKeyHex, 'hex');
        const publicKey = derivePublicKey(privateKey);

        const payloadHash = Buffer.from(sha3.array(this.query.getPayload().serializeBinary()));

        const signatory = signQuery(payloadHash, publicKey, privateKey);

        let s = new Signature();
        s.setPublicKey(Uint8Array.from(publicKey));
        s.setSignature(Uint8Array.from(signatory));
        this.query.setSignature(s);

        return this.query;
    }
}
