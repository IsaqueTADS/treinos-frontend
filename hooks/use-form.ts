import React from "react";
import { z } from "zod";

type ValidacaoObrigatorioMinMax = {
  tipo: "obrigatorioMinMax";
  min: number;
  max: number;
};

type TipoValidacao =
  | "cep"
  | "email"
  | "senha"
  | "senhaLogin"
  | "senhaCadastro"
  | "nome"
  | "telefone"
  | "instagram"
  | "obrigatorio"
  | ValidacaoObrigatorioMinMax
  | false;

interface UseFormRetorno {
  value: string;
  error: string | null;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: () => boolean;
  validate: () => boolean;
  setValue: (valor: string) => void;
}

const schemasFixos: Record<string, z.ZodString> = {
  cep: z.string().regex(/^\d{5}-?\d{3}$/, "CEP inválido"),

  email: z.string().email("Email inválido"),

  senha: z
    .string()
    .regex(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "A senha deve conter entre 6 e 16 caracteres, incluir pelo menos um número e um caractere especial."
    ),

  senhaLogin: z.string().min(1, "Preencha um valor"),

  senhaCadastro: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(16, "A senha deve ter no máximo 16 caracteres"),

  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),

  telefone: z
    .string()
    .regex(
      /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
      "Telefone inválido. Ex: (11) 91234-5678"
    ),

  instagram: z
    .string()
    .regex(
      /^@(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9._]{1,30}$/,
      "Usuário do Instagram inválido."
    ),

  obrigatorio: z.string().min(1, "Preencha um valor"),
};

function obterSchema(tipoValidacao: TipoValidacao): z.ZodString | null {
  if (tipoValidacao === false) return null;

  if (typeof tipoValidacao === "string") {
    return schemasFixos[tipoValidacao] ?? null;
  }

  if (tipoValidacao.tipo === "obrigatorioMinMax") {
    return z
      .string()
      .min(tipoValidacao.min, `Mínimo de ${tipoValidacao.min} caracteres`)
      .max(tipoValidacao.max, `Máximo de ${tipoValidacao.max} caracteres`);
  }

  return null;
}

const useForm = (tipoValidacao: TipoValidacao): UseFormRetorno => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  function validar(valor: string): boolean {
    const schema = obterSchema(tipoValidacao);

    if (!schema) {
      setError(null);
      return true;
    }

    if (!valor.trim()) {
      setError("Preencha um valor");
      return false;
    }

    const resultado = schema.safeParse(valor);

    if (!resultado.success) {
      setError(resultado.error.issues[0].message);
      return false;
    }

    setError(null);
    return true;
  }

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const novoValor = event.target.value;
    if (error) validar(novoValor);
    setValue(novoValor);
  }

  return {
    value,
    error,
    onChange,
    onBlur: () => validar(value),
    validate: () => validar(value),
    setValue,
  };
};

export default useForm;
