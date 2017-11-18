import { createToken, revokeToken } from './routes/token';

export default function() {
  this.passthrough('/write-coverage');
  this.namespace = '/api'; // make this `/api`, for example, if your API is namespaced

  this.post('/token', createToken);
  this.post('/revoke-token', revokeToken);
}
