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
  const response = await fetch(`http://localhost:5000/user/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  const user = await response.json();
  return user.role;
};

// get all users
export const getAllUsers = async () => {
  const response = await fetch(`http://localhost:5000/users`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  console.log("test");

  const users = await response.json();

  return users;
};

export const makeHost = async (user) => {
  delete user._id;
  const response = await fetch(`http://localhost:5000/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...user, role: "host" }),
  });
  const users = await response.json();

  return users;
};
