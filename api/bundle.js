/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.github = (function() {

        /**
         * Namespace github.
         * @memberof com
         * @namespace
         */
        var github = {};

        github.rerost = (function() {

            /**
             * Namespace rerost.
             * @memberof com.github
             * @namespace
             */
            var rerost = {};

            rerost.recommend_scouter = (function() {

                /**
                 * Namespace recommend_scouter.
                 * @memberof com.github.rerost
                 * @namespace
                 */
                var recommend_scouter = {};

                recommend_scouter.api = (function() {

                    /**
                     * Namespace api.
                     * @memberof com.github.rerost.recommend_scouter
                     * @namespace
                     */
                    var api = {};

                    api.Score = (function() {

                        /**
                         * Properties of a Score.
                         * @memberof com.github.rerost.recommend_scouter.api
                         * @interface IScore
                         * @property {string|null} [name] Score name
                         * @property {number|null} [score] Score score
                         * @property {string|null} [score_func] Score score_func
                         */

                        /**
                         * Constructs a new Score.
                         * @memberof com.github.rerost.recommend_scouter.api
                         * @classdesc Represents a Score.
                         * @implements IScore
                         * @constructor
                         * @param {com.github.rerost.recommend_scouter.api.IScore=} [properties] Properties to set
                         */
                        function Score(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Score name.
                         * @member {string} name
                         * @memberof com.github.rerost.recommend_scouter.api.Score
                         * @instance
                         */
                        Score.prototype.name = "";

                        /**
                         * Score score.
                         * @member {number} score
                         * @memberof com.github.rerost.recommend_scouter.api.Score
                         * @instance
                         */
                        Score.prototype.score = 0;

                        /**
                         * Score score_func.
                         * @member {string} score_func
                         * @memberof com.github.rerost.recommend_scouter.api.Score
                         * @instance
                         */
                        Score.prototype.score_func = "";

                        /**
                         * Creates a new Score instance using the specified properties.
                         * @function create
                         * @memberof com.github.rerost.recommend_scouter.api.Score
                         * @static
                         * @param {com.github.rerost.recommend_scouter.api.IScore=} [properties] Properties to set
                         * @returns {com.github.rerost.recommend_scouter.api.Score} Score instance
                         */
                        Score.create = function create(properties) {
                            return new Score(properties);
                        };

                        /**
                         * Encodes the specified Score message. Does not implicitly {@link com.github.rerost.recommend_scouter.api.Score.verify|verify} messages.
                         * @function encode
                         * @memberof com.github.rerost.recommend_scouter.api.Score
                         * @static
                         * @param {com.github.rerost.recommend_scouter.api.IScore} message Score message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Score.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && message.hasOwnProperty("name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.score != null && message.hasOwnProperty("score"))
                                writer.uint32(/* id 2, wireType 1 =*/17).double(message.score);
                            if (message.score_func != null && message.hasOwnProperty("score_func"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.score_func);
                            return writer;
                        };

                        /**
                         * Encodes the specified Score message, length delimited. Does not implicitly {@link com.github.rerost.recommend_scouter.api.Score.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.github.rerost.recommend_scouter.api.Score
                         * @static
                         * @param {com.github.rerost.recommend_scouter.api.IScore} message Score message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Score.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Score message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.github.rerost.recommend_scouter.api.Score
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.github.rerost.recommend_scouter.api.Score} Score
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Score.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.github.rerost.recommend_scouter.api.Score();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                case 2:
                                    message.score = reader.double();
                                    break;
                                case 3:
                                    message.score_func = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Score message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.github.rerost.recommend_scouter.api.Score
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.github.rerost.recommend_scouter.api.Score} Score
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Score.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Score message.
                         * @function verify
                         * @memberof com.github.rerost.recommend_scouter.api.Score
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Score.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.score != null && message.hasOwnProperty("score"))
                                if (typeof message.score !== "number")
                                    return "score: number expected";
                            if (message.score_func != null && message.hasOwnProperty("score_func"))
                                if (!$util.isString(message.score_func))
                                    return "score_func: string expected";
                            return null;
                        };

                        /**
                         * Creates a Score message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.github.rerost.recommend_scouter.api.Score
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.github.rerost.recommend_scouter.api.Score} Score
                         */
                        Score.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.github.rerost.recommend_scouter.api.Score)
                                return object;
                            var message = new $root.com.github.rerost.recommend_scouter.api.Score();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.score != null)
                                message.score = Number(object.score);
                            if (object.score_func != null)
                                message.score_func = String(object.score_func);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Score message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.github.rerost.recommend_scouter.api.Score
                         * @static
                         * @param {com.github.rerost.recommend_scouter.api.Score} message Score
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Score.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.name = "";
                                object.score = 0;
                                object.score_func = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.score != null && message.hasOwnProperty("score"))
                                object.score = options.json && !isFinite(message.score) ? String(message.score) : message.score;
                            if (message.score_func != null && message.hasOwnProperty("score_func"))
                                object.score_func = message.score_func;
                            return object;
                        };

                        /**
                         * Converts this Score to JSON.
                         * @function toJSON
                         * @memberof com.github.rerost.recommend_scouter.api.Score
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Score.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Score;
                    })();

                    api.ScoreDescription = (function() {

                        /**
                         * Properties of a ScoreDescription.
                         * @memberof com.github.rerost.recommend_scouter.api
                         * @interface IScoreDescription
                         * @property {Array.<com.github.rerost.recommend_scouter.api.IScore>|null} [scores] ScoreDescription scores
                         * @property {string|null} [score_func] ScoreDescription score_func
                         */

                        /**
                         * Constructs a new ScoreDescription.
                         * @memberof com.github.rerost.recommend_scouter.api
                         * @classdesc Represents a ScoreDescription.
                         * @implements IScoreDescription
                         * @constructor
                         * @param {com.github.rerost.recommend_scouter.api.IScoreDescription=} [properties] Properties to set
                         */
                        function ScoreDescription(properties) {
                            this.scores = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ScoreDescription scores.
                         * @member {Array.<com.github.rerost.recommend_scouter.api.IScore>} scores
                         * @memberof com.github.rerost.recommend_scouter.api.ScoreDescription
                         * @instance
                         */
                        ScoreDescription.prototype.scores = $util.emptyArray;

                        /**
                         * ScoreDescription score_func.
                         * @member {string} score_func
                         * @memberof com.github.rerost.recommend_scouter.api.ScoreDescription
                         * @instance
                         */
                        ScoreDescription.prototype.score_func = "";

                        /**
                         * Creates a new ScoreDescription instance using the specified properties.
                         * @function create
                         * @memberof com.github.rerost.recommend_scouter.api.ScoreDescription
                         * @static
                         * @param {com.github.rerost.recommend_scouter.api.IScoreDescription=} [properties] Properties to set
                         * @returns {com.github.rerost.recommend_scouter.api.ScoreDescription} ScoreDescription instance
                         */
                        ScoreDescription.create = function create(properties) {
                            return new ScoreDescription(properties);
                        };

                        /**
                         * Encodes the specified ScoreDescription message. Does not implicitly {@link com.github.rerost.recommend_scouter.api.ScoreDescription.verify|verify} messages.
                         * @function encode
                         * @memberof com.github.rerost.recommend_scouter.api.ScoreDescription
                         * @static
                         * @param {com.github.rerost.recommend_scouter.api.IScoreDescription} message ScoreDescription message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ScoreDescription.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.scores != null && message.scores.length)
                                for (var i = 0; i < message.scores.length; ++i)
                                    $root.com.github.rerost.recommend_scouter.api.Score.encode(message.scores[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.score_func != null && message.hasOwnProperty("score_func"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.score_func);
                            return writer;
                        };

                        /**
                         * Encodes the specified ScoreDescription message, length delimited. Does not implicitly {@link com.github.rerost.recommend_scouter.api.ScoreDescription.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.github.rerost.recommend_scouter.api.ScoreDescription
                         * @static
                         * @param {com.github.rerost.recommend_scouter.api.IScoreDescription} message ScoreDescription message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ScoreDescription.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ScoreDescription message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.github.rerost.recommend_scouter.api.ScoreDescription
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.github.rerost.recommend_scouter.api.ScoreDescription} ScoreDescription
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ScoreDescription.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.github.rerost.recommend_scouter.api.ScoreDescription();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.scores && message.scores.length))
                                        message.scores = [];
                                    message.scores.push($root.com.github.rerost.recommend_scouter.api.Score.decode(reader, reader.uint32()));
                                    break;
                                case 2:
                                    message.score_func = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ScoreDescription message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.github.rerost.recommend_scouter.api.ScoreDescription
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.github.rerost.recommend_scouter.api.ScoreDescription} ScoreDescription
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ScoreDescription.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ScoreDescription message.
                         * @function verify
                         * @memberof com.github.rerost.recommend_scouter.api.ScoreDescription
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ScoreDescription.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.scores != null && message.hasOwnProperty("scores")) {
                                if (!Array.isArray(message.scores))
                                    return "scores: array expected";
                                for (var i = 0; i < message.scores.length; ++i) {
                                    var error = $root.com.github.rerost.recommend_scouter.api.Score.verify(message.scores[i]);
                                    if (error)
                                        return "scores." + error;
                                }
                            }
                            if (message.score_func != null && message.hasOwnProperty("score_func"))
                                if (!$util.isString(message.score_func))
                                    return "score_func: string expected";
                            return null;
                        };

                        /**
                         * Creates a ScoreDescription message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.github.rerost.recommend_scouter.api.ScoreDescription
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.github.rerost.recommend_scouter.api.ScoreDescription} ScoreDescription
                         */
                        ScoreDescription.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.github.rerost.recommend_scouter.api.ScoreDescription)
                                return object;
                            var message = new $root.com.github.rerost.recommend_scouter.api.ScoreDescription();
                            if (object.scores) {
                                if (!Array.isArray(object.scores))
                                    throw TypeError(".com.github.rerost.recommend_scouter.api.ScoreDescription.scores: array expected");
                                message.scores = [];
                                for (var i = 0; i < object.scores.length; ++i) {
                                    if (typeof object.scores[i] !== "object")
                                        throw TypeError(".com.github.rerost.recommend_scouter.api.ScoreDescription.scores: object expected");
                                    message.scores[i] = $root.com.github.rerost.recommend_scouter.api.Score.fromObject(object.scores[i]);
                                }
                            }
                            if (object.score_func != null)
                                message.score_func = String(object.score_func);
                            return message;
                        };

                        /**
                         * Creates a plain object from a ScoreDescription message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.github.rerost.recommend_scouter.api.ScoreDescription
                         * @static
                         * @param {com.github.rerost.recommend_scouter.api.ScoreDescription} message ScoreDescription
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ScoreDescription.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.scores = [];
                            if (options.defaults)
                                object.score_func = "";
                            if (message.scores && message.scores.length) {
                                object.scores = [];
                                for (var j = 0; j < message.scores.length; ++j)
                                    object.scores[j] = $root.com.github.rerost.recommend_scouter.api.Score.toObject(message.scores[j], options);
                            }
                            if (message.score_func != null && message.hasOwnProperty("score_func"))
                                object.score_func = message.score_func;
                            return object;
                        };

                        /**
                         * Converts this ScoreDescription to JSON.
                         * @function toJSON
                         * @memberof com.github.rerost.recommend_scouter.api.ScoreDescription
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ScoreDescription.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return ScoreDescription;
                    })();

                    return api;
                })();

                return recommend_scouter;
            })();

            return rerost;
        })();

        return github;
    })();

    return com;
})();

module.exports = $root;
