// package: Proto.Todo
// file: todo.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as todo_pb from "./todo_pb";

interface ITodoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTodoItems: ITodoServiceService_IGetTodoItems;
    getTodoItem: ITodoServiceService_IGetTodoItem;
    postTodoItem: ITodoServiceService_IPostTodoItem;
    putTodoItem: ITodoServiceService_IPutTodoItem;
    deleteTodoItem: ITodoServiceService_IDeleteTodoItem;
}

interface ITodoServiceService_IGetTodoItems extends grpc.MethodDefinition<todo_pb.Empty, todo_pb.GetTodoItemsResponse> {
    path: string; // "/Proto.Todo.TodoService/GetTodoItems"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.Empty>;
    requestDeserialize: grpc.deserialize<todo_pb.Empty>;
    responseSerialize: grpc.serialize<todo_pb.GetTodoItemsResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.GetTodoItemsResponse>;
}
interface ITodoServiceService_IGetTodoItem extends grpc.MethodDefinition<todo_pb.GetTodoItemRequest, todo_pb.GetTodoItemResponse> {
    path: string; // "/Proto.Todo.TodoService/GetTodoItem"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.GetTodoItemRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.GetTodoItemRequest>;
    responseSerialize: grpc.serialize<todo_pb.GetTodoItemResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.GetTodoItemResponse>;
}
interface ITodoServiceService_IPostTodoItem extends grpc.MethodDefinition<todo_pb.PostTodoItemRequest, todo_pb.PostTodoItemResponse> {
    path: string; // "/Proto.Todo.TodoService/PostTodoItem"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.PostTodoItemRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.PostTodoItemRequest>;
    responseSerialize: grpc.serialize<todo_pb.PostTodoItemResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.PostTodoItemResponse>;
}
interface ITodoServiceService_IPutTodoItem extends grpc.MethodDefinition<todo_pb.PutTodoItemRequest, todo_pb.PutTodoItemResponse> {
    path: string; // "/Proto.Todo.TodoService/PutTodoItem"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.PutTodoItemRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.PutTodoItemRequest>;
    responseSerialize: grpc.serialize<todo_pb.PutTodoItemResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.PutTodoItemResponse>;
}
interface ITodoServiceService_IDeleteTodoItem extends grpc.MethodDefinition<todo_pb.DeleteTodoItemRequest, todo_pb.DeleteTodoItemResponse> {
    path: string; // "/Proto.Todo.TodoService/DeleteTodoItem"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.DeleteTodoItemRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.DeleteTodoItemRequest>;
    responseSerialize: grpc.serialize<todo_pb.DeleteTodoItemResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.DeleteTodoItemResponse>;
}

export const TodoServiceService: ITodoServiceService;

export interface ITodoServiceServer {
    getTodoItems: grpc.handleUnaryCall<todo_pb.Empty, todo_pb.GetTodoItemsResponse>;
    getTodoItem: grpc.handleUnaryCall<todo_pb.GetTodoItemRequest, todo_pb.GetTodoItemResponse>;
    postTodoItem: grpc.handleUnaryCall<todo_pb.PostTodoItemRequest, todo_pb.PostTodoItemResponse>;
    putTodoItem: grpc.handleUnaryCall<todo_pb.PutTodoItemRequest, todo_pb.PutTodoItemResponse>;
    deleteTodoItem: grpc.handleUnaryCall<todo_pb.DeleteTodoItemRequest, todo_pb.DeleteTodoItemResponse>;
}

export interface ITodoServiceClient {
    getTodoItems(request: todo_pb.Empty, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoItemsResponse) => void): grpc.ClientUnaryCall;
    getTodoItems(request: todo_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoItemsResponse) => void): grpc.ClientUnaryCall;
    getTodoItems(request: todo_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoItemsResponse) => void): grpc.ClientUnaryCall;
    getTodoItem(request: todo_pb.GetTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoItemResponse) => void): grpc.ClientUnaryCall;
    getTodoItem(request: todo_pb.GetTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoItemResponse) => void): grpc.ClientUnaryCall;
    getTodoItem(request: todo_pb.GetTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoItemResponse) => void): grpc.ClientUnaryCall;
    postTodoItem(request: todo_pb.PostTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.PostTodoItemResponse) => void): grpc.ClientUnaryCall;
    postTodoItem(request: todo_pb.PostTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.PostTodoItemResponse) => void): grpc.ClientUnaryCall;
    postTodoItem(request: todo_pb.PostTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.PostTodoItemResponse) => void): grpc.ClientUnaryCall;
    putTodoItem(request: todo_pb.PutTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.PutTodoItemResponse) => void): grpc.ClientUnaryCall;
    putTodoItem(request: todo_pb.PutTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.PutTodoItemResponse) => void): grpc.ClientUnaryCall;
    putTodoItem(request: todo_pb.PutTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.PutTodoItemResponse) => void): grpc.ClientUnaryCall;
    deleteTodoItem(request: todo_pb.DeleteTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoItemResponse) => void): grpc.ClientUnaryCall;
    deleteTodoItem(request: todo_pb.DeleteTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoItemResponse) => void): grpc.ClientUnaryCall;
    deleteTodoItem(request: todo_pb.DeleteTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoItemResponse) => void): grpc.ClientUnaryCall;
}

export class TodoServiceClient extends grpc.Client implements ITodoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getTodoItems(request: todo_pb.Empty, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoItemsResponse) => void): grpc.ClientUnaryCall;
    public getTodoItems(request: todo_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoItemsResponse) => void): grpc.ClientUnaryCall;
    public getTodoItems(request: todo_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoItemsResponse) => void): grpc.ClientUnaryCall;
    public getTodoItem(request: todo_pb.GetTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoItemResponse) => void): grpc.ClientUnaryCall;
    public getTodoItem(request: todo_pb.GetTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoItemResponse) => void): grpc.ClientUnaryCall;
    public getTodoItem(request: todo_pb.GetTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoItemResponse) => void): grpc.ClientUnaryCall;
    public postTodoItem(request: todo_pb.PostTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.PostTodoItemResponse) => void): grpc.ClientUnaryCall;
    public postTodoItem(request: todo_pb.PostTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.PostTodoItemResponse) => void): grpc.ClientUnaryCall;
    public postTodoItem(request: todo_pb.PostTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.PostTodoItemResponse) => void): grpc.ClientUnaryCall;
    public putTodoItem(request: todo_pb.PutTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.PutTodoItemResponse) => void): grpc.ClientUnaryCall;
    public putTodoItem(request: todo_pb.PutTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.PutTodoItemResponse) => void): grpc.ClientUnaryCall;
    public putTodoItem(request: todo_pb.PutTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.PutTodoItemResponse) => void): grpc.ClientUnaryCall;
    public deleteTodoItem(request: todo_pb.DeleteTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoItemResponse) => void): grpc.ClientUnaryCall;
    public deleteTodoItem(request: todo_pb.DeleteTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoItemResponse) => void): grpc.ClientUnaryCall;
    public deleteTodoItem(request: todo_pb.DeleteTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoItemResponse) => void): grpc.ClientUnaryCall;
}
