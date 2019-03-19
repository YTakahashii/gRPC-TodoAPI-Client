/* tslint:disable */
/**
 * @fileoverview gRPC-Web generated client stub for Proto.Todo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  DeleteTodoItemRequest,
  DeleteTodoItemResponse,
  Empty,
  GetTodoItemRequest,
  GetTodoItemResponse,
  GetTodoItemsResponse,
  PostTodoItemRequest,
  PostTodoItemResponse,
  PutTodoItemRequest,
  PutTodoItemResponse} from './todo_pb';

export class TodoServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetTodoItems = new grpcWeb.AbstractClientBase.MethodInfo(
    GetTodoItemsResponse,
    (request: Empty) => {
      return request.serializeBinary();
    },
    GetTodoItemsResponse.deserializeBinary
  );

  getTodoItems(
    request: Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetTodoItemsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Proto.Todo.TodoService/GetTodoItems',
      request,
      metadata || {},
      this.methodInfoGetTodoItems,
      callback);
  }

  methodInfoGetTodoItem = new grpcWeb.AbstractClientBase.MethodInfo(
    GetTodoItemResponse,
    (request: GetTodoItemRequest) => {
      return request.serializeBinary();
    },
    GetTodoItemResponse.deserializeBinary
  );

  getTodoItem(
    request: GetTodoItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetTodoItemResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Proto.Todo.TodoService/GetTodoItem',
      request,
      metadata || {},
      this.methodInfoGetTodoItem,
      callback);
  }

  methodInfoPostTodoItem = new grpcWeb.AbstractClientBase.MethodInfo(
    PostTodoItemResponse,
    (request: PostTodoItemRequest) => {
      return request.serializeBinary();
    },
    PostTodoItemResponse.deserializeBinary
  );

  postTodoItem(
    request: PostTodoItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PostTodoItemResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Proto.Todo.TodoService/PostTodoItem',
      request,
      metadata || {},
      this.methodInfoPostTodoItem,
      callback);
  }

  methodInfoPutTodoItem = new grpcWeb.AbstractClientBase.MethodInfo(
    PutTodoItemResponse,
    (request: PutTodoItemRequest) => {
      return request.serializeBinary();
    },
    PutTodoItemResponse.deserializeBinary
  );

  putTodoItem(
    request: PutTodoItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PutTodoItemResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Proto.Todo.TodoService/PutTodoItem',
      request,
      metadata || {},
      this.methodInfoPutTodoItem,
      callback);
  }

  methodInfoDeleteTodoItem = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteTodoItemResponse,
    (request: DeleteTodoItemRequest) => {
      return request.serializeBinary();
    },
    DeleteTodoItemResponse.deserializeBinary
  );

  deleteTodoItem(
    request: DeleteTodoItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteTodoItemResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Proto.Todo.TodoService/DeleteTodoItem',
      request,
      metadata || {},
      this.methodInfoDeleteTodoItem,
      callback);
  }

}

