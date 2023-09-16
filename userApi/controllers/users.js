import { v4 as uuidv4 } from "uuid";
let userData = [];
//showUser
export const getUser = (req, res) => {
  res.send(userData);
};
//creaate
export const createUser = (req, res) => {
  const user = req.body;

  userData.push({ ...user, id: uuidv4() });
  res.send(`New Account Username ${user.fname} is created`);
};
//delete
export const deleteUser = (req, res) => {
  const { id } = req.params;
  userData = userData.filter((user) => user.id !== id);
  res.send(`The user of id: ${id} has been deleted from the array`);
};
//findUser
export const findUser = (req, res) => {
  const { id } = req.params;
  const foundUser = userData.find((user) => user.id === id);
  res.send(foundUser);
};
//update
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { fname, lname, age } = req.body;

  const user = userData.find((user) => user.id === id);

  if (!user) {
    res.status(404).send(`User with id ${id} not found`);
  } else {
    if (fname) {
      user.fname = fname;
    }

    if (lname) {
      user.lname = lname;
    }

    if (age) {
      user.age = age;
    }
    res.send(`User with id : ${id} has been updated`);
  }
};
