/* eslint-disable no-console */
import { NextResponse } from "next/server";

// route.ts
export async function GET() {
  const PROJECT_NAME = "toB-no-nikki";
  const PAGE_TITLE = "213";

  const res = await fetch(
    `https://scrapbox.io/api/pages/${PROJECT_NAME}/search/titles`
    // `https://scrapbox.io/api/pages/${PROJECT_NAME}/${PAGE_TITLE}/`
  );
  //   console.log(res);

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }
  //   console.log(NextResponse.json(res));
  const data = await res.json();
  console.log(data);

  return NextResponse.json(data);
}
