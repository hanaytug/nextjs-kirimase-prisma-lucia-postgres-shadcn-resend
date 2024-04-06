"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

import { signUpAction } from "@/lib/actions/users";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AuthFormError from "@/components/auth/AuthFormError";
import {cn} from "@/lib/utils";
import {Loader} from "lucide-react";


export default function SignUpPage() {
  const [state, formAction] = useFormState(signUpAction, {
    error: "",
  });

  return (
      <>
          <Card className="mx-auto max-w-sm">
              <CardHeader>
                  <CardTitle className="text-xl">Sign Up</CardTitle>
                  <CardDescription>
                      Enter your information to sign up
                  </CardDescription>
              </CardHeader>
              <CardContent>
                  <AuthFormError state={state}/>
                  <form action={formAction}>
                      <div className="grid gap-4">
                          <div className="grid grid-cols-2 gap-4">
                              <div className="grid gap-2">
                                  <Label htmlFor="first-name">First Name</Label>
                                  <Input name="first-name" id="first-name" placeholder="John" required/>
                              </div>
                              <div className="grid gap-2">
                                  <Label htmlFor="last-name">Last Name</Label>
                                  <Input name="last-name" id="last-name" placeholder="Doe" required/>
                              </div>
                          </div>
                          <div className="grid gap-2">
                              <Label htmlFor="email">Email Address</Label>
                              <Input name="email" id="email" type="email" placeholder="john.doe@domain.com" required/>
                          </div>
                          <div className="grid gap-2">
                              <Label htmlFor="password">Password</Label>
                              <Input type="password" name="password" id="password" placeholder="******" required/>
                          </div>
                          <SubmitButton/>
                      </div>
                      <div className="mt-4 text-center text-sm">
                          Already have an account?{" "}
                          <Link href="/sign-in" className="underline">
                              Sign in
                          </Link>
                      </div>
                  </form>
              </CardContent>
          </Card>
      </>
  );
}

const SubmitButton = () => {
    const {pending} = useFormStatus();
    return (
        <Button className="w-full" type="submit" disabled={pending}>
            Sign{pending ? "ing" : ""} up <Loader className={cn("animate-spin", { hidden: !pending })} />
        </Button>
    );
};
