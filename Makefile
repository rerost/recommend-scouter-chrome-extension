# ----- protoc
PROTOC_GEN_TS_PATH := ./node_modules/.bin/protoc-gen-ts
PROTO_DIR := ./api/protos
PROTO_FILES := $(shell ls ${PROTO_DIR} | grep -e ".*\.proto")
PROTO_OUT_DIR := ./api
PROTO_BUNDLE_OUT_DIR := ./app/bundlepb.json

# .PHONY: protoc
# protoc: 
# 	protoc \
# 		--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
# 		--js_out="import_style=commonjs,binary:${PROTO_OUT_DIR}" \
# 		--ts_out=${PROTO_OUT_DIR} \
# 		-I ${PROTO_DIR} \
# 		${PROTO_FILES}

.PHONY: bundlepb
bundlepb:
	./node_modules/protobufjs/bin/pbjs -t json ${PROTO_DIR}/${PROTO_FILES} > ${PROTO_BUNDLE_OUT_DIR}
