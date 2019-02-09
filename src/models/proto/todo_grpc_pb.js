// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var todo_pb = require('./todo_pb.js');

function serialize_Proto_Todo_DeleteTodoItemRequest(arg) {
  if (!(arg instanceof todo_pb.DeleteTodoItemRequest)) {
    throw new Error('Expected argument of type Proto.Todo.DeleteTodoItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Proto_Todo_DeleteTodoItemRequest(buffer_arg) {
  return todo_pb.DeleteTodoItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Proto_Todo_DeleteTodoItemResponse(arg) {
  if (!(arg instanceof todo_pb.DeleteTodoItemResponse)) {
    throw new Error('Expected argument of type Proto.Todo.DeleteTodoItemResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Proto_Todo_DeleteTodoItemResponse(buffer_arg) {
  return todo_pb.DeleteTodoItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Proto_Todo_Empty(arg) {
  if (!(arg instanceof todo_pb.Empty)) {
    throw new Error('Expected argument of type Proto.Todo.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Proto_Todo_Empty(buffer_arg) {
  return todo_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Proto_Todo_GetTodoItemRequest(arg) {
  if (!(arg instanceof todo_pb.GetTodoItemRequest)) {
    throw new Error('Expected argument of type Proto.Todo.GetTodoItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Proto_Todo_GetTodoItemRequest(buffer_arg) {
  return todo_pb.GetTodoItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Proto_Todo_GetTodoItemResponse(arg) {
  if (!(arg instanceof todo_pb.GetTodoItemResponse)) {
    throw new Error('Expected argument of type Proto.Todo.GetTodoItemResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Proto_Todo_GetTodoItemResponse(buffer_arg) {
  return todo_pb.GetTodoItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Proto_Todo_GetTodoItemsResponse(arg) {
  if (!(arg instanceof todo_pb.GetTodoItemsResponse)) {
    throw new Error('Expected argument of type Proto.Todo.GetTodoItemsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Proto_Todo_GetTodoItemsResponse(buffer_arg) {
  return todo_pb.GetTodoItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Proto_Todo_PostTodoItemRequest(arg) {
  if (!(arg instanceof todo_pb.PostTodoItemRequest)) {
    throw new Error('Expected argument of type Proto.Todo.PostTodoItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Proto_Todo_PostTodoItemRequest(buffer_arg) {
  return todo_pb.PostTodoItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Proto_Todo_PostTodoItemResponse(arg) {
  if (!(arg instanceof todo_pb.PostTodoItemResponse)) {
    throw new Error('Expected argument of type Proto.Todo.PostTodoItemResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Proto_Todo_PostTodoItemResponse(buffer_arg) {
  return todo_pb.PostTodoItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Proto_Todo_PutTodoItemRequest(arg) {
  if (!(arg instanceof todo_pb.PutTodoItemRequest)) {
    throw new Error('Expected argument of type Proto.Todo.PutTodoItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Proto_Todo_PutTodoItemRequest(buffer_arg) {
  return todo_pb.PutTodoItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Proto_Todo_PutTodoItemResponse(arg) {
  if (!(arg instanceof todo_pb.PutTodoItemResponse)) {
    throw new Error('Expected argument of type Proto.Todo.PutTodoItemResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Proto_Todo_PutTodoItemResponse(buffer_arg) {
  return todo_pb.PutTodoItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoServiceService = exports.TodoServiceService = {
  getTodoItems: {
    path: '/Proto.Todo.TodoService/GetTodoItems',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.Empty,
    responseType: todo_pb.GetTodoItemsResponse,
    requestSerialize: serialize_Proto_Todo_Empty,
    requestDeserialize: deserialize_Proto_Todo_Empty,
    responseSerialize: serialize_Proto_Todo_GetTodoItemsResponse,
    responseDeserialize: deserialize_Proto_Todo_GetTodoItemsResponse,
  },
  getTodoItem: {
    path: '/Proto.Todo.TodoService/GetTodoItem',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.GetTodoItemRequest,
    responseType: todo_pb.GetTodoItemResponse,
    requestSerialize: serialize_Proto_Todo_GetTodoItemRequest,
    requestDeserialize: deserialize_Proto_Todo_GetTodoItemRequest,
    responseSerialize: serialize_Proto_Todo_GetTodoItemResponse,
    responseDeserialize: deserialize_Proto_Todo_GetTodoItemResponse,
  },
  postTodoItem: {
    path: '/Proto.Todo.TodoService/PostTodoItem',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.PostTodoItemRequest,
    responseType: todo_pb.PostTodoItemResponse,
    requestSerialize: serialize_Proto_Todo_PostTodoItemRequest,
    requestDeserialize: deserialize_Proto_Todo_PostTodoItemRequest,
    responseSerialize: serialize_Proto_Todo_PostTodoItemResponse,
    responseDeserialize: deserialize_Proto_Todo_PostTodoItemResponse,
  },
  putTodoItem: {
    path: '/Proto.Todo.TodoService/PutTodoItem',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.PutTodoItemRequest,
    responseType: todo_pb.PutTodoItemResponse,
    requestSerialize: serialize_Proto_Todo_PutTodoItemRequest,
    requestDeserialize: deserialize_Proto_Todo_PutTodoItemRequest,
    responseSerialize: serialize_Proto_Todo_PutTodoItemResponse,
    responseDeserialize: deserialize_Proto_Todo_PutTodoItemResponse,
  },
  deleteTodoItem: {
    path: '/Proto.Todo.TodoService/DeleteTodoItem',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.DeleteTodoItemRequest,
    responseType: todo_pb.DeleteTodoItemResponse,
    requestSerialize: serialize_Proto_Todo_DeleteTodoItemRequest,
    requestDeserialize: deserialize_Proto_Todo_DeleteTodoItemRequest,
    responseSerialize: serialize_Proto_Todo_DeleteTodoItemResponse,
    responseDeserialize: deserialize_Proto_Todo_DeleteTodoItemResponse,
  },
};

exports.TodoServiceClient = grpc.makeGenericClientConstructor(TodoServiceService);
