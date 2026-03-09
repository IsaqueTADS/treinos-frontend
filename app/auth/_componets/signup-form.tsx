"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./password-input";
import { authClient } from "@/app/_lib/auth-client";
import { SignInWithGoogle } from "./sign-in-with-google";
import useForm from "@/hooks/use-form";
import React from "react";
import { redirect } from "next/navigation";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const emailField = useForm("email");
  const nameField = useForm("nome");
  const passwordField = useForm("senhaCadastro");
  const [signupError, setSignupError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const isFormValid =
    emailField.value &&
    !emailField.error &&
    nameField.value &&
    !nameField.error &&
    passwordField.value &&
    !passwordField.error;

  async function handleSignup(event: React.FormEvent) {
    event.preventDefault();

    const isEmailValid = emailField.validate();
    const isNameValid = nameField.validate();
    const isPasswordValid = passwordField.validate();

    if (!isEmailValid || !isNameValid || !isPasswordValid) {
      return;
    }

    setIsSubmitting(true);
    setSignupError(null);

    const { error } = await authClient.signUp.email({
      email: emailField.value,
      name: nameField.value,
      password: passwordField.value,
    });

    setIsSubmitting(false);

    if (error) {
      setSignupError(error.message || "Erro ao criar conta");
      return;
    }

    redirect("/");
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-card text-card-foreground">
        <CardHeader>
          <CardTitle>Crie sua conta</CardTitle>
          <CardDescription>
            Preencha os dados abaixo para criar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Nome</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={nameField.value}
                  onChange={nameField.onChange}
                  onBlur={nameField.onBlur}
                  aria-invalid={!!nameField.error}
                />
                {nameField.error && (
                  <p className="mt-1 text-sm text-destructive">
                    {nameField.error}
                  </p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="email">E-mail</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@exemplo.com"
                  value={emailField.value}
                  onChange={emailField.onChange}
                  onBlur={emailField.onBlur}
                  aria-invalid={!!emailField.error}
                />
                {emailField.error && (
                  <p className="mt-1 text-sm text-destructive">
                    {emailField.error}
                  </p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Senha</FieldLabel>
                <PasswordInput
                  id="password"
                  value={passwordField.value}
                  onChange={passwordField.onChange}
                  onBlur={passwordField.onBlur}
                  aria-invalid={!!passwordField.error}
                />
                {passwordField.error && (
                  <p className="mt-1 text-sm text-destructive">
                    {passwordField.error}
                  </p>
                )}
              </Field>

              <Field>
                {signupError && (
                  <p className="mb-2 text-sm text-destructive">{signupError}</p>
                )}
                <Button type="submit" disabled={!isFormValid || isSubmitting}>
                  {isSubmitting ? "Criando conta..." : "Criar conta"}
                </Button>

                <div className="my-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">
                    ou continue com
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <SignInWithGoogle />

                <FieldDescription className="text-center">
                  Já tem uma conta?{" "}
                  <a href="/auth/login" className="text-primary hover:underline">
                    Fazer login
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
