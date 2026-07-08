import { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {

  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <div
        className="card"
        style={{ width: "500px", margin: "40px auto" }}
      >

        <h2>Profile</h2>

        <h3>{user?.name}</h3>

        <p>{user?.email}</p>

      </div>
    </>
  );
};

export default Profile;