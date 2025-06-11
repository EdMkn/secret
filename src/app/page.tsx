import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const firstName = user?.firstName;
  const id = user?.id;

  const welcomeSuffix = firstName ? `, ${firstName} ${id}` : '';
  
  return (
    <div>
      Welcome {welcomeSuffix}
    </div>
  );
}
