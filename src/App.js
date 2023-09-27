// import { Database, child, get, ref } from "firebase/database";
import Layout from "./components/Layout/Layout";
function App() {
  // const dbRef = ref(Database());
  // get(child(dbRef, `users`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // function App() {
  return <Layout />;
}

export default App;
