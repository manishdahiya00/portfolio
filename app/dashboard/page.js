import ProjectsDashboard from "@/components/ProjectDashboard";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("auth-token")?.value.trim();

  if (authToken !== "true") {
    redirect("/login/admin");
  }

  return <ProjectsDashboard />;
}
