import Response from 'ember-cli-mirage/response';

export function createToken(schema, request) {
  const { requestBody } = request;

  if (requestBody !== 'grant_type=password&username=user&password=password') {
    return new Response(
      400,
      { 'Content-Type': 'application/json' },
      {
        message: 'Invalid credentials'
      }
    );
  }

  return new Response(
    201,
    { 'Content-Type': 'application/json' },
    {
      access_token: 'my bearer token'
    }
  );
}

export function revokeToken() {
  return new Response(204);
}
