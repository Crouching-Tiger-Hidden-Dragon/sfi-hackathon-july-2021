import { useSession } from 'next-auth/client';

export default function useToken() {
  const [session, loading] = useSession();
  const { accessToken, name } = session ?? {};
  return { accessToken, name, loading };
}
