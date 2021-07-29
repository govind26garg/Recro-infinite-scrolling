export const getUsers = async (page) => {
  const users = await (
    await fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
    )
  ).json();
  return users.data;
};
