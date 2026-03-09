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
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const emailField = useForm("email");
  const passwordField = useForm("senhaLogin");
  const [loginError, setLoginError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const isFormValid =
    emailField.value &&
    !emailField.error &&
    passwordField.value &&
    !passwordField.error;

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    const isEmailValid = emailField.validate();
    const isPasswordValid = passwordField.validate();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    setIsSubmitting(true);
    setLoginError(null);

    const { error } = await authClient.signIn.email({
      email: emailField.value,
      password: passwordField.value,
    });

    setIsSubmitting(false);

    if (error) {
      setLoginError(error.message || "Error desconhecido");
      return;
    }

    redirect("/");
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-card text-card-foreground">
        <CardHeader>
          <CardTitle>Acesse sua conta</CardTitle>
          <CardDescription>
            Digite seu e-mail abaixo para acessar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <FieldGroup>
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
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
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
                {loginError && (
                  <p className="mb-2 text-sm text-destructive">{loginError}</p>
                )}
                <Button type="submit" disabled={!isFormValid || isSubmitting}>
                  {isSubmitting ? "Entrando..." : "Entrar"}
                </Button>

                <SignInWithGoogle />

                <FieldDescription className="text-center">
                  Não tem uma conta?{" "}
                  <Link href="/auth/signup" className="text-primary hover:underline">
                    Cadastre-se
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
