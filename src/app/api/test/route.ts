import { NextRequest, NextResponse } from "next/server";

const handler = async (req: NextRequest) => {
  await new Promise((resolve) => setTimeout(resolve, 200000));

  return NextResponse.json({ text: "Ralph is good looking" });
};

export { handler as GET };
