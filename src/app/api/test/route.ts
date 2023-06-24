import { NextRequest, NextResponse } from "next/server";

const handler = async (req: NextRequest) => {
  await new Promise((resolve) => setTimeout(resolve, 20000));

  return NextResponse.json({ text: "Hello world!" });
};

export { handler as GET };
