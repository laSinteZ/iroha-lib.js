/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.iroha.protocol.GrantablePermission', null, global);
goog.exportSymbol('proto.iroha.protocol.Peer', null, global);
goog.exportSymbol('proto.iroha.protocol.RolePermission', null, global);
goog.exportSymbol('proto.iroha.protocol.Signature', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iroha.protocol.Signature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iroha.protocol.Signature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Signature.displayName = 'proto.iroha.protocol.Signature';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iroha.protocol.Signature.prototype.toObject = function(opt_includeInstance) {
  return proto.iroha.protocol.Signature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iroha.protocol.Signature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Signature.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: msg.getPublicKey_asB64(),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iroha.protocol.Signature}
 */
proto.iroha.protocol.Signature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Signature;
  return proto.iroha.protocol.Signature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iroha.protocol.Signature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iroha.protocol.Signature}
 */
proto.iroha.protocol.Signature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iroha.protocol.Signature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iroha.protocol.Signature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Signature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.iroha.protocol.Signature.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes public_key = 1;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.iroha.protocol.Signature.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.iroha.protocol.Signature.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.iroha.protocol.Signature.prototype.setPublicKey = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.iroha.protocol.Signature.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.iroha.protocol.Signature.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.iroha.protocol.Signature.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.iroha.protocol.Signature.prototype.setSignature = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iroha.protocol.Peer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iroha.protocol.Peer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Peer.displayName = 'proto.iroha.protocol.Peer';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iroha.protocol.Peer.prototype.toObject = function(opt_includeInstance) {
  return proto.iroha.protocol.Peer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iroha.protocol.Peer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Peer.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    peerKey: msg.getPeerKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iroha.protocol.Peer}
 */
proto.iroha.protocol.Peer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Peer;
  return proto.iroha.protocol.Peer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iroha.protocol.Peer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iroha.protocol.Peer}
 */
proto.iroha.protocol.Peer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPeerKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iroha.protocol.Peer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Peer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iroha.protocol.Peer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Peer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPeerKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.iroha.protocol.Peer.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.iroha.protocol.Peer.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes peer_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.iroha.protocol.Peer.prototype.getPeerKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes peer_key = 2;
 * This is a type-conversion wrapper around `getPeerKey()`
 * @return {string}
 */
proto.iroha.protocol.Peer.prototype.getPeerKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPeerKey()));
};


/**
 * optional bytes peer_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPeerKey()`
 * @return {!Uint8Array}
 */
proto.iroha.protocol.Peer.prototype.getPeerKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPeerKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.iroha.protocol.Peer.prototype.setPeerKey = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.iroha.protocol.RolePermission = {
  CAN_APPEND_ROLE: 0,
  CAN_CREATE_ROLE: 1,
  CAN_DETACH_ROLE: 2,
  CAN_ADD_ASSET_QTY: 3,
  CAN_SUBTRACT_ASSET_QTY: 4,
  CAN_ADD_PEER: 5,
  CAN_ADD_SIGNATORY: 6,
  CAN_REMOVE_SIGNATORY: 7,
  CAN_SET_QUORUM: 8,
  CAN_CREATE_ACCOUNT: 9,
  CAN_SET_DETAIL: 10,
  CAN_CREATE_ASSET: 11,
  CAN_TRANSFER: 12,
  CAN_RECEIVE: 13,
  CAN_CREATE_DOMAIN: 14,
  CAN_READ_ASSETS: 15,
  CAN_GET_ROLES: 16,
  CAN_GET_MY_ACCOUNT: 17,
  CAN_GET_ALL_ACCOUNTS: 18,
  CAN_GET_DOMAIN_ACCOUNTS: 19,
  CAN_GET_MY_SIGNATORIES: 20,
  CAN_GET_ALL_SIGNATORIES: 21,
  CAN_GET_DOMAIN_SIGNATORIES: 22,
  CAN_GET_MY_ACC_AST: 23,
  CAN_GET_ALL_ACC_AST: 24,
  CAN_GET_DOMAIN_ACC_AST: 25,
  CAN_GET_MY_ACC_DETAIL: 26,
  CAN_GET_ALL_ACC_DETAIL: 27,
  CAN_GET_DOMAIN_ACC_DETAIL: 28,
  CAN_GET_MY_ACC_TXS: 29,
  CAN_GET_ALL_ACC_TXS: 30,
  CAN_GET_DOMAIN_ACC_TXS: 31,
  CAN_GET_MY_ACC_AST_TXS: 32,
  CAN_GET_ALL_ACC_AST_TXS: 33,
  CAN_GET_DOMAIN_ACC_AST_TXS: 34,
  CAN_GET_MY_TXS: 35,
  CAN_GET_ALL_TXS: 36,
  CAN_GET_BLOCKS: 42,
  CAN_GRANT_CAN_SET_MY_QUORUM: 37,
  CAN_GRANT_CAN_ADD_MY_SIGNATORY: 38,
  CAN_GRANT_CAN_REMOVE_MY_SIGNATORY: 39,
  CAN_GRANT_CAN_TRANSFER_MY_ASSETS: 40,
  CAN_GRANT_CAN_SET_MY_ACCOUNT_DETAIL: 41
};

/**
 * @enum {number}
 */
proto.iroha.protocol.GrantablePermission = {
  CAN_ADD_MY_SIGNATORY: 0,
  CAN_REMOVE_MY_SIGNATORY: 1,
  CAN_SET_MY_QUORUM: 2,
  CAN_SET_MY_ACCOUNT_DETAIL: 3,
  CAN_TRANSFER_MY_ASSETS: 4
};

goog.object.extend(exports, proto.iroha.protocol);