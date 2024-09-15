import Login from "@/components/Login";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function page() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("auth-token")?.value.trim();

  if (authToken === "true") {
    redirect("/dashboard");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <Login />
    </div>
  );
}
