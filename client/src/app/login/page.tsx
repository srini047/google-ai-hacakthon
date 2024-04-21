import { Metadata } from "next";
import { UserAuthForm } from "@/app/login/components/user-form-auth";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication form for Virtual Lab AI Assistants",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative flex flex-col items-center justify-center px-4 py-8 mx-auto md:px-8 lg:px-0">
        <div className="w-full max-w-md">
          <div className="mx-auto space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-gray-500">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  );
}
