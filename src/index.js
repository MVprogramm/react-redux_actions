import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({
  id: 1,
  name: "Tom",
}));

store.dispatch(addUser({
  id: 2,
  name: "John",
}));

store.dispatch(deleteUser(1));

