export function GET(_request: Request) {
  return Response.json({
    data: {
      ENV_A: process.env.ENV_A,
      ENV_B: process.env.ENV_B,
    },
  });
}
