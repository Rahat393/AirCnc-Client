export const hostRequest = async (hostData) => {
  const url = `http://localhost:5000/user/${hostData?.email}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(hostData),
  });

  const data = await response.json();

  return data;
};

// Get user role
export const getRole = async (email) => {
  const url = `http://localhost:5000/user/${email}`;

  const response = await fetch(url);

  const user = await response.json();

  return user?.role;
};
