// package: Proto.Todo
// file: todo.proto

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Todo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getIscomplete(): boolean;
  setIscomplete(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Todo.AsObject;
  static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Todo;
  static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
  export type AsObject = {
    id: string,
    name: string,
    iscomplete: boolean,
  }
}

export class GetTodoItemsResponse extends jspb.Message {
  clearTodosList(): void;
  getTodosList(): Array<Todo>;
  setTodosList(value: Array<Todo>): void;
  addTodos(value?: Todo, index?: number): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoItemsResponse): GetTodoItemsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTodoItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoItemsResponse;
  static deserializeBinaryFromReader(message: GetTodoItemsResponse, reader: jspb.BinaryReader): GetTodoItemsResponse;
}

export namespace GetTodoItemsResponse {
  export type AsObject = {
    todosList: Array<Todo.AsObject>,
  }
}

export class GetTodoItemRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoItemRequest): GetTodoItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTodoItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoItemRequest;
  static deserializeBinaryFromReader(message: GetTodoItemRequest, reader: jspb.BinaryReader): GetTodoItemRequest;
}

export namespace GetTodoItemRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetTodoItemResponse extends jspb.Message {
  hasTodo(): boolean;
  clearTodo(): void;
  getTodo(): Todo | undefined;
  setTodo(value?: Todo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoItemResponse): GetTodoItemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTodoItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoItemResponse;
  static deserializeBinaryFromReader(message: GetTodoItemResponse, reader: jspb.BinaryReader): GetTodoItemResponse;
}

export namespace GetTodoItemResponse {
  export type AsObject = {
    todo?: Todo.AsObject,
  }
}

export class PostTodoItemRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostTodoItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostTodoItemRequest): PostTodoItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostTodoItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostTodoItemRequest;
  static deserializeBinaryFromReader(message: PostTodoItemRequest, reader: jspb.BinaryReader): PostTodoItemRequest;
}

export namespace PostTodoItemRequest {
  export type AsObject = {
    name: string,
  }
}

export class PostTodoItemResponse extends jspb.Message {
  hasTodo(): boolean;
  clearTodo(): void;
  getTodo(): Todo | undefined;
  setTodo(value?: Todo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostTodoItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostTodoItemResponse): PostTodoItemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostTodoItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostTodoItemResponse;
  static deserializeBinaryFromReader(message: PostTodoItemResponse, reader: jspb.BinaryReader): PostTodoItemResponse;
}

export namespace PostTodoItemResponse {
  export type AsObject = {
    todo?: Todo.AsObject,
  }
}

export class PutTodoItemRequest extends jspb.Message {
  hasTodo(): boolean;
  clearTodo(): void;
  getTodo(): Todo | undefined;
  setTodo(value?: Todo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutTodoItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutTodoItemRequest): PutTodoItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutTodoItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutTodoItemRequest;
  static deserializeBinaryFromReader(message: PutTodoItemRequest, reader: jspb.BinaryReader): PutTodoItemRequest;
}

export namespace PutTodoItemRequest {
  export type AsObject = {
    todo?: Todo.AsObject,
  }
}

export class PutTodoItemResponse extends jspb.Message {
  hasTodo(): boolean;
  clearTodo(): void;
  getTodo(): Todo | undefined;
  setTodo(value?: Todo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutTodoItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutTodoItemResponse): PutTodoItemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutTodoItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutTodoItemResponse;
  static deserializeBinaryFromReader(message: PutTodoItemResponse, reader: jspb.BinaryReader): PutTodoItemResponse;
}

export namespace PutTodoItemResponse {
  export type AsObject = {
    todo?: Todo.AsObject,
  }
}

export class DeleteTodoItemRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTodoItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTodoItemRequest): DeleteTodoItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTodoItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTodoItemRequest;
  static deserializeBinaryFromReader(message: DeleteTodoItemRequest, reader: jspb.BinaryReader): DeleteTodoItemRequest;
}

export namespace DeleteTodoItemRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteTodoItemResponse extends jspb.Message {
  hasTodo(): boolean;
  clearTodo(): void;
  getTodo(): Todo | undefined;
  setTodo(value?: Todo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTodoItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTodoItemResponse): DeleteTodoItemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTodoItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTodoItemResponse;
  static deserializeBinaryFromReader(message: DeleteTodoItemResponse, reader: jspb.BinaryReader): DeleteTodoItemResponse;
}

export namespace DeleteTodoItemResponse {
  export type AsObject = {
    todo?: Todo.AsObject,
  }
}

