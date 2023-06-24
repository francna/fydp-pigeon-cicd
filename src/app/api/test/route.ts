import { NextRequest, NextResponse } from "next/server";

const handler = (req: NextRequest) => {
  return NextResponse.json({ text: "Hello world!" });
};

export { handler as GET };
