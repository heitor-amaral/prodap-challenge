import { Device } from "../@types/device";
import joi from "joi";

const deviceSchema = joi.object({
  usuario: joi.string().required(),
  nomeUsuario: joi.string().required(),
  token: joi.string().required(),
  fazendaSelecionada: joi.number().required(),
  nomeFazendaSelecionada: joi.string().required(),
  plataforma: joi.string(),
  modelo: joi.string(),
  fabricante: joi.string(),
  versao: joi.string(),
});
export function validateDeviceSchema(device: Partial<Device>) {
  return deviceSchema.validateAsync(device, { abortEarly: false });
}
