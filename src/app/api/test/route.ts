import type { NextApiRequest, NextApiResponse } from "next/types";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.send("Hello world!");
};

export { handler as GET };
