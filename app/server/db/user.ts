export interface User {
  id: string;
  email: string;
  password: string;
}

export const users: User[] = [
  {
    id: "1",
    email: "saurabhgawade2529@gmail.com",
    password: "password123",
  },
  {
    id: "2",
    email: "saurabhgawade2925@gmail.com",
    password: "password1234",
  },
];

export const loginUser = (user: User) => {
  const existingUser = users.find((u) => {
    return u.email === user.email && u.password === user.password;
  });
  if (!existingUser) {
    users.push(user);
  }
};
export const findUser = () => {};
export const findUserByEmailPassword = () => {};
export const deleteUser = () => {};
