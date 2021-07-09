import resolve from '../../../utils/resolve';

export default async function pokemon(req, res) {
  const { id } = req.query;
  return await resolve(request.get(`pokemon/${id}`));
}
