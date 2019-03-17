// Code generated by protoc-gen-go. DO NOT EDIT.
// source: recommend.proto

package com_github_rerost_recommend_scouter_example_with_python_api

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	empty "github.com/golang/protobuf/ptypes/empty"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type User struct {
	Id                   int64             `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Score                float64           `protobuf:"fixed64,2,opt,name=score,proto3" json:"score,omitempty"`
	ScoreDescription     *ScoreDescription `protobuf:"bytes,3,opt,name=score_description,json=scoreDescription,proto3" json:"score_description,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *User) Reset()         { *m = User{} }
func (m *User) String() string { return proto.CompactTextString(m) }
func (*User) ProtoMessage()    {}
func (*User) Descriptor() ([]byte, []int) {
	return fileDescriptor_b22f281c2bb00329, []int{0}
}

func (m *User) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_User.Unmarshal(m, b)
}
func (m *User) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_User.Marshal(b, m, deterministic)
}
func (m *User) XXX_Merge(src proto.Message) {
	xxx_messageInfo_User.Merge(m, src)
}
func (m *User) XXX_Size() int {
	return xxx_messageInfo_User.Size(m)
}
func (m *User) XXX_DiscardUnknown() {
	xxx_messageInfo_User.DiscardUnknown(m)
}

var xxx_messageInfo_User proto.InternalMessageInfo

func (m *User) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *User) GetScore() float64 {
	if m != nil {
		return m.Score
	}
	return 0
}

func (m *User) GetScoreDescription() *ScoreDescription {
	if m != nil {
		return m.ScoreDescription
	}
	return nil
}

type ListUsersResponse struct {
	Users                []*User  `protobuf:"bytes,1,rep,name=users,proto3" json:"users,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListUsersResponse) Reset()         { *m = ListUsersResponse{} }
func (m *ListUsersResponse) String() string { return proto.CompactTextString(m) }
func (*ListUsersResponse) ProtoMessage()    {}
func (*ListUsersResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_b22f281c2bb00329, []int{1}
}

func (m *ListUsersResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListUsersResponse.Unmarshal(m, b)
}
func (m *ListUsersResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListUsersResponse.Marshal(b, m, deterministic)
}
func (m *ListUsersResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListUsersResponse.Merge(m, src)
}
func (m *ListUsersResponse) XXX_Size() int {
	return xxx_messageInfo_ListUsersResponse.Size(m)
}
func (m *ListUsersResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ListUsersResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ListUsersResponse proto.InternalMessageInfo

func (m *ListUsersResponse) GetUsers() []*User {
	if m != nil {
		return m.Users
	}
	return nil
}

type Blog struct {
	Id                   int64             `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Score                float64           `protobuf:"fixed64,2,opt,name=score,proto3" json:"score,omitempty"`
	ScoreDescription     *ScoreDescription `protobuf:"bytes,3,opt,name=score_description,json=scoreDescription,proto3" json:"score_description,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *Blog) Reset()         { *m = Blog{} }
func (m *Blog) String() string { return proto.CompactTextString(m) }
func (*Blog) ProtoMessage()    {}
func (*Blog) Descriptor() ([]byte, []int) {
	return fileDescriptor_b22f281c2bb00329, []int{2}
}

func (m *Blog) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Blog.Unmarshal(m, b)
}
func (m *Blog) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Blog.Marshal(b, m, deterministic)
}
func (m *Blog) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Blog.Merge(m, src)
}
func (m *Blog) XXX_Size() int {
	return xxx_messageInfo_Blog.Size(m)
}
func (m *Blog) XXX_DiscardUnknown() {
	xxx_messageInfo_Blog.DiscardUnknown(m)
}

var xxx_messageInfo_Blog proto.InternalMessageInfo

func (m *Blog) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Blog) GetScore() float64 {
	if m != nil {
		return m.Score
	}
	return 0
}

func (m *Blog) GetScoreDescription() *ScoreDescription {
	if m != nil {
		return m.ScoreDescription
	}
	return nil
}

type ListBlogsResponse struct {
	Blogs                []*Blog  `protobuf:"bytes,1,rep,name=blogs,proto3" json:"blogs,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListBlogsResponse) Reset()         { *m = ListBlogsResponse{} }
func (m *ListBlogsResponse) String() string { return proto.CompactTextString(m) }
func (*ListBlogsResponse) ProtoMessage()    {}
func (*ListBlogsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_b22f281c2bb00329, []int{3}
}

func (m *ListBlogsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListBlogsResponse.Unmarshal(m, b)
}
func (m *ListBlogsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListBlogsResponse.Marshal(b, m, deterministic)
}
func (m *ListBlogsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListBlogsResponse.Merge(m, src)
}
func (m *ListBlogsResponse) XXX_Size() int {
	return xxx_messageInfo_ListBlogsResponse.Size(m)
}
func (m *ListBlogsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ListBlogsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ListBlogsResponse proto.InternalMessageInfo

func (m *ListBlogsResponse) GetBlogs() []*Blog {
	if m != nil {
		return m.Blogs
	}
	return nil
}

type Score struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Score                float64  `protobuf:"fixed64,2,opt,name=score,proto3" json:"score,omitempty"`
	ScoreFunc            string   `protobuf:"bytes,3,opt,name=score_func,json=scoreFunc,proto3" json:"score_func,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Score) Reset()         { *m = Score{} }
func (m *Score) String() string { return proto.CompactTextString(m) }
func (*Score) ProtoMessage()    {}
func (*Score) Descriptor() ([]byte, []int) {
	return fileDescriptor_b22f281c2bb00329, []int{4}
}

func (m *Score) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Score.Unmarshal(m, b)
}
func (m *Score) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Score.Marshal(b, m, deterministic)
}
func (m *Score) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Score.Merge(m, src)
}
func (m *Score) XXX_Size() int {
	return xxx_messageInfo_Score.Size(m)
}
func (m *Score) XXX_DiscardUnknown() {
	xxx_messageInfo_Score.DiscardUnknown(m)
}

var xxx_messageInfo_Score proto.InternalMessageInfo

func (m *Score) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Score) GetScore() float64 {
	if m != nil {
		return m.Score
	}
	return 0
}

func (m *Score) GetScoreFunc() string {
	if m != nil {
		return m.ScoreFunc
	}
	return ""
}

type ScoreDescription struct {
	Scores               []*Score `protobuf:"bytes,1,rep,name=scores,proto3" json:"scores,omitempty"`
	ScoreFunc            string   `protobuf:"bytes,2,opt,name=score_func,json=scoreFunc,proto3" json:"score_func,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ScoreDescription) Reset()         { *m = ScoreDescription{} }
func (m *ScoreDescription) String() string { return proto.CompactTextString(m) }
func (*ScoreDescription) ProtoMessage()    {}
func (*ScoreDescription) Descriptor() ([]byte, []int) {
	return fileDescriptor_b22f281c2bb00329, []int{5}
}

func (m *ScoreDescription) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ScoreDescription.Unmarshal(m, b)
}
func (m *ScoreDescription) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ScoreDescription.Marshal(b, m, deterministic)
}
func (m *ScoreDescription) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ScoreDescription.Merge(m, src)
}
func (m *ScoreDescription) XXX_Size() int {
	return xxx_messageInfo_ScoreDescription.Size(m)
}
func (m *ScoreDescription) XXX_DiscardUnknown() {
	xxx_messageInfo_ScoreDescription.DiscardUnknown(m)
}

var xxx_messageInfo_ScoreDescription proto.InternalMessageInfo

func (m *ScoreDescription) GetScores() []*Score {
	if m != nil {
		return m.Scores
	}
	return nil
}

func (m *ScoreDescription) GetScoreFunc() string {
	if m != nil {
		return m.ScoreFunc
	}
	return ""
}

func init() {
	proto.RegisterType((*User)(nil), "com.github.rerost.recommend_scouter.example.with_python.api.User")
	proto.RegisterType((*ListUsersResponse)(nil), "com.github.rerost.recommend_scouter.example.with_python.api.ListUsersResponse")
	proto.RegisterType((*Blog)(nil), "com.github.rerost.recommend_scouter.example.with_python.api.Blog")
	proto.RegisterType((*ListBlogsResponse)(nil), "com.github.rerost.recommend_scouter.example.with_python.api.ListBlogsResponse")
	proto.RegisterType((*Score)(nil), "com.github.rerost.recommend_scouter.example.with_python.api.Score")
	proto.RegisterType((*ScoreDescription)(nil), "com.github.rerost.recommend_scouter.example.with_python.api.ScoreDescription")
}

func init() { proto.RegisterFile("recommend.proto", fileDescriptor_b22f281c2bb00329) }

var fileDescriptor_b22f281c2bb00329 = []byte{
	// 418 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xd4, 0x93, 0x41, 0x8b, 0xd4, 0x30,
	0x14, 0xc7, 0x49, 0x67, 0x67, 0xb0, 0x59, 0x58, 0x67, 0x83, 0x48, 0x19, 0x15, 0x4a, 0x4f, 0x3d,
	0xa5, 0x30, 0x1e, 0x3d, 0xb9, 0xa8, 0x27, 0x15, 0xc9, 0x22, 0x82, 0x97, 0xa1, 0x4d, 0xdf, 0x76,
	0x02, 0x6d, 0x12, 0x92, 0x54, 0x5d, 0x8f, 0x7a, 0xf6, 0xe4, 0xdd, 0xb3, 0xdf, 0xc7, 0xaf, 0xe0,
	0x07, 0x91, 0xa4, 0x33, 0xa3, 0x53, 0xf1, 0x54, 0x3d, 0x78, 0x4b, 0x5e, 0xc2, 0x3f, 0xbf, 0xf7,
	0xcf, 0xff, 0xe1, 0x9b, 0x06, 0xb8, 0xea, 0x3a, 0x90, 0x35, 0xd5, 0x46, 0x39, 0x45, 0x1e, 0x70,
	0xd5, 0xd1, 0x46, 0xb8, 0x6d, 0x5f, 0x51, 0x03, 0x46, 0x59, 0x47, 0x0f, 0x57, 0x36, 0x96, 0xab,
	0xde, 0x81, 0xa1, 0xf0, 0xae, 0xec, 0x74, 0x0b, 0xf4, 0xad, 0x70, 0xdb, 0x8d, 0xbe, 0x76, 0x5b,
	0x25, 0x69, 0xa9, 0xc5, 0xea, 0x6e, 0xa3, 0x54, 0xd3, 0x42, 0x51, 0x6a, 0x51, 0x94, 0x52, 0x2a,
	0x57, 0x3a, 0xa1, 0xa4, 0x1d, 0xa4, 0x57, 0x77, 0x76, 0xa7, 0x61, 0x57, 0xf5, 0x57, 0x05, 0x74,
	0xda, 0x5d, 0x0f, 0x87, 0xd9, 0x57, 0x84, 0x4f, 0x5e, 0x5a, 0x30, 0xe4, 0x0c, 0x47, 0xa2, 0x4e,
	0x50, 0x8a, 0xf2, 0x19, 0x8b, 0x44, 0x4d, 0x6e, 0xe1, 0xb9, 0xe5, 0xca, 0x40, 0x12, 0xa5, 0x28,
	0x47, 0x6c, 0xd8, 0x90, 0xf7, 0xf8, 0x3c, 0x2c, 0x36, 0x35, 0x58, 0x6e, 0x84, 0xf6, 0xef, 0x24,
	0xb3, 0x14, 0xe5, 0xa7, 0xeb, 0x67, 0x74, 0x42, 0x0b, 0xf4, 0xd2, 0xab, 0x3e, 0xfa, 0x29, 0xca,
	0x96, 0x76, 0x54, 0xc9, 0x5a, 0x7c, 0xfe, 0x54, 0x58, 0xe7, 0x69, 0x2d, 0x03, 0xab, 0x95, 0xb4,
	0x40, 0x5e, 0xe1, 0x79, 0xef, 0x0b, 0x09, 0x4a, 0x67, 0xf9, 0xe9, 0xfa, 0xe1, 0x24, 0x08, 0x2f,
	0xcd, 0x06, 0xbd, 0x60, 0xcc, 0x45, 0xab, 0x9a, 0xff, 0xc7, 0x18, 0x4f, 0x7b, 0x64, 0x4c, 0xe5,
	0x0b, 0x7f, 0xc5, 0x18, 0x2f, 0xcd, 0x06, 0xbd, 0xec, 0x05, 0x9e, 0x07, 0x26, 0x42, 0xf0, 0x89,
	0x2c, 0x3b, 0x08, 0xd6, 0xc4, 0x2c, 0xac, 0xff, 0x60, 0xce, 0x3d, 0x8c, 0x07, 0x73, 0xae, 0x7a,
	0xc9, 0x83, 0x2b, 0x31, 0x8b, 0x43, 0xe5, 0x49, 0x2f, 0x79, 0xf6, 0x09, 0xe1, 0xe5, 0xb8, 0x4d,
	0xf2, 0x1a, 0x2f, 0xc2, 0x8d, 0x7d, 0x03, 0x17, 0xd3, 0x5d, 0x64, 0x3b, 0xc5, 0x11, 0x4f, 0x34,
	0xe2, 0x59, 0x7f, 0x89, 0xf0, 0x92, 0xed, 0xa5, 0x2f, 0xc1, 0xbc, 0x11, 0x1c, 0xc8, 0x47, 0x84,
	0xe3, 0x43, 0xfc, 0xc8, 0x6d, 0x3a, 0x0c, 0x15, 0xdd, 0x0f, 0x15, 0x7d, 0xec, 0x87, 0x6a, 0xf5,
	0x7c, 0x12, 0xe5, 0x6f, 0xf1, 0xce, 0xce, 0x3e, 0x7c, 0xfb, 0xfe, 0x39, 0xba, 0x41, 0x16, 0x45,
	0x48, 0xe5, 0x81, 0x22, 0xfc, 0xf5, 0x3f, 0xa4, 0x38, 0xca, 0xd2, 0x2f, 0x14, 0x21, 0x02, 0xd5,
	0x22, 0xbc, 0x77, 0xff, 0x47, 0x00, 0x00, 0x00, 0xff, 0xff, 0xf0, 0xe4, 0xdb, 0xd0, 0xc6, 0x04,
	0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// RecommendServiceClient is the client API for RecommendService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type RecommendServiceClient interface {
	ListUsers(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ListUsersResponse, error)
	ListBlogs(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ListBlogsResponse, error)
}

type recommendServiceClient struct {
	cc *grpc.ClientConn
}

func NewRecommendServiceClient(cc *grpc.ClientConn) RecommendServiceClient {
	return &recommendServiceClient{cc}
}

func (c *recommendServiceClient) ListUsers(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ListUsersResponse, error) {
	out := new(ListUsersResponse)
	err := c.cc.Invoke(ctx, "/com.github.rerost.recommend_scouter.example.with_python.api.RecommendService/ListUsers", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *recommendServiceClient) ListBlogs(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ListBlogsResponse, error) {
	out := new(ListBlogsResponse)
	err := c.cc.Invoke(ctx, "/com.github.rerost.recommend_scouter.example.with_python.api.RecommendService/ListBlogs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// RecommendServiceServer is the server API for RecommendService service.
type RecommendServiceServer interface {
	ListUsers(context.Context, *empty.Empty) (*ListUsersResponse, error)
	ListBlogs(context.Context, *empty.Empty) (*ListBlogsResponse, error)
}

// UnimplementedRecommendServiceServer can be embedded to have forward compatible implementations.
type UnimplementedRecommendServiceServer struct {
}

func (*UnimplementedRecommendServiceServer) ListUsers(ctx context.Context, req *empty.Empty) (*ListUsersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListUsers not implemented")
}
func (*UnimplementedRecommendServiceServer) ListBlogs(ctx context.Context, req *empty.Empty) (*ListBlogsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListBlogs not implemented")
}

func RegisterRecommendServiceServer(s *grpc.Server, srv RecommendServiceServer) {
	s.RegisterService(&_RecommendService_serviceDesc, srv)
}

func _RecommendService_ListUsers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(empty.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecommendServiceServer).ListUsers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/com.github.rerost.recommend_scouter.example.with_python.api.RecommendService/ListUsers",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecommendServiceServer).ListUsers(ctx, req.(*empty.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _RecommendService_ListBlogs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(empty.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecommendServiceServer).ListBlogs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/com.github.rerost.recommend_scouter.example.with_python.api.RecommendService/ListBlogs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecommendServiceServer).ListBlogs(ctx, req.(*empty.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

var _RecommendService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "com.github.rerost.recommend_scouter.example.with_python.api.RecommendService",
	HandlerType: (*RecommendServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListUsers",
			Handler:    _RecommendService_ListUsers_Handler,
		},
		{
			MethodName: "ListBlogs",
			Handler:    _RecommendService_ListBlogs_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "recommend.proto",
}