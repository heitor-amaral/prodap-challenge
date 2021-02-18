import express from "express";
import faker from "faker";
import { Device } from "../../@types/device";

export const mockedDevice: Device = {
  usuario: faker.internet.userName(),
  nomeUsuario: faker.name.firstName(),
  token: faker.random.uuid(),
  fazendaSelecionada: faker.random.number(),
  nomeFazendaSelecionada: faker.company.companyName(),
  plataforma: faker.lorem.slug(),
  modelo: faker.lorem.slug(),
  fabricante: faker.company.companyName(),
  versao: "1.5",
};

export const invalidMockedDevice: Partial<Device> = {
  usuario: faker.internet.userName(),
  nomeUsuario: undefined,
  token: undefined,
  fazendaSelecionada: faker.random.number(),
  nomeFazendaSelecionada: faker.company.companyName(),
  plataforma: faker.lorem.slug(),
  modelo: faker.lorem.slug(),
  fabricante: faker.company.companyName(),
  versao: "1.5",
};

export const expectedErrorFromMockedDevices = [
  {
    message: "\"nomeUsuario\" is required",
    path: ["nomeUsuario"],
    type: "any.required",
    context: { label: "nomeUsuario", key: "nomeUsuario" },
  },
  {
    message: "\"token\" is required",
    path: ["token"],
    type: "any.required",
    context: { label: "token", key: "token" },
  },
];

export const mockedPUTRequest = { method: "PUT" };
export const mockedPOSTRequest = { method: "POST" };
export const mockedGETRequest = { method: "GET" };
export const mockedDELETERequest = { method: "DELETE" };
export const mockedPATCHRequest = { method: "PATCH" };
