import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

function page() {
  const route = useRouter();
  const id = route.query.id;
  return (
    <div className="text-xl mt-50 text-center">
      {id}
      <Link href={"./"}> this is a new page</Link>
    </div>
  );
}

export default page;
