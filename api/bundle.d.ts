import * as $protobuf from "protobufjs";
/** Namespace com. */
export namespace com {

    /** Namespace github. */
    namespace github {

        /** Namespace rerost. */
        namespace rerost {

            /** Namespace recommend_scouter. */
            namespace recommend_scouter {

                /** Namespace api. */
                namespace api {

                    /** Properties of a Score. */
                    interface IScore {

                        /** Score name */
                        name?: (string|null);

                        /** Score score */
                        score?: (number|null);

                        /** Score scoreFunc */
                        scoreFunc?: (string|null);
                    }

                    /** Represents a Score. */
                    class Score implements IScore {

                        /**
                         * Constructs a new Score.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.github.rerost.recommend_scouter.api.IScore);

                        /** Score name. */
                        public name: string;

                        /** Score score. */
                        public score: number;

                        /** Score scoreFunc. */
                        public scoreFunc: string;

                        /**
                         * Creates a new Score instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Score instance
                         */
                        public static create(properties?: com.github.rerost.recommend_scouter.api.IScore): com.github.rerost.recommend_scouter.api.Score;

                        /**
                         * Encodes the specified Score message. Does not implicitly {@link com.github.rerost.recommend_scouter.api.Score.verify|verify} messages.
                         * @param message Score message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.github.rerost.recommend_scouter.api.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Score message, length delimited. Does not implicitly {@link com.github.rerost.recommend_scouter.api.Score.verify|verify} messages.
                         * @param message Score message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.github.rerost.recommend_scouter.api.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Score message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Score
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.github.rerost.recommend_scouter.api.Score;

                        /**
                         * Decodes a Score message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Score
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.github.rerost.recommend_scouter.api.Score;

                        /**
                         * Verifies a Score message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Score message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Score
                         */
                        public static fromObject(object: { [k: string]: any }): com.github.rerost.recommend_scouter.api.Score;

                        /**
                         * Creates a plain object from a Score message. Also converts values to other types if specified.
                         * @param message Score
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.github.rerost.recommend_scouter.api.Score, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Score to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ScoreDescription. */
                    interface IScoreDescription {

                        /** ScoreDescription scores */
                        scores?: (com.github.rerost.recommend_scouter.api.IScore[]|null);

                        /** ScoreDescription scoreFunc */
                        scoreFunc?: (string|null);
                    }

                    /** Represents a ScoreDescription. */
                    class ScoreDescription implements IScoreDescription {

                        /**
                         * Constructs a new ScoreDescription.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.github.rerost.recommend_scouter.api.IScoreDescription);

                        /** ScoreDescription scores. */
                        public scores: com.github.rerost.recommend_scouter.api.IScore[];

                        /** ScoreDescription scoreFunc. */
                        public scoreFunc: string;

                        /**
                         * Creates a new ScoreDescription instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ScoreDescription instance
                         */
                        public static create(properties?: com.github.rerost.recommend_scouter.api.IScoreDescription): com.github.rerost.recommend_scouter.api.ScoreDescription;

                        /**
                         * Encodes the specified ScoreDescription message. Does not implicitly {@link com.github.rerost.recommend_scouter.api.ScoreDescription.verify|verify} messages.
                         * @param message ScoreDescription message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.github.rerost.recommend_scouter.api.IScoreDescription, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ScoreDescription message, length delimited. Does not implicitly {@link com.github.rerost.recommend_scouter.api.ScoreDescription.verify|verify} messages.
                         * @param message ScoreDescription message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.github.rerost.recommend_scouter.api.IScoreDescription, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ScoreDescription message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ScoreDescription
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.github.rerost.recommend_scouter.api.ScoreDescription;

                        /**
                         * Decodes a ScoreDescription message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ScoreDescription
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.github.rerost.recommend_scouter.api.ScoreDescription;

                        /**
                         * Verifies a ScoreDescription message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ScoreDescription message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ScoreDescription
                         */
                        public static fromObject(object: { [k: string]: any }): com.github.rerost.recommend_scouter.api.ScoreDescription;

                        /**
                         * Creates a plain object from a ScoreDescription message. Also converts values to other types if specified.
                         * @param message ScoreDescription
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.github.rerost.recommend_scouter.api.ScoreDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ScoreDescription to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }
}
