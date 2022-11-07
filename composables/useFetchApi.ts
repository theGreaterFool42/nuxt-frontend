export default (url: string, options?: { headers: {} }) => {
  const { useAuthToken } = useAuth();
  return $fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${useAuthToken().value}`,
    },
  });
};
