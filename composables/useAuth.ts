import { ISession } from './../types/ISession';
export async function signUpWithEmail(
  username: string,
  name: string,
  email: string,
  password: string
): Promise<FormValidation> {
  try {
    const res = await $fetch<ISession>('api/auth/sign/up', {
      method: 'POST',
      body: { username, name, email, password },
    });
    if (res) {
      useState('user').value = res;
      await useRouter().push('/');
    } else {
      const errorMap = new Map<string, { check: InputValidation }>(
        Object.entries(res)
      );
      return { hasErrors: true, errors: errorMap };
    }
  } catch (e) {
    console.log('error: ', e.toString());
  }
}
