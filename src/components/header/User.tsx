import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { useFirebaseUser } from "services/firebase";

import Avatar from "./Avatar";

import "./User.scss";

function User() {
  const { user, isLoading, signIn, signOut } = useFirebaseUser();

  if (isLoading) {
    return (
      <section className="User loading">
        <FontAwesomeIcon icon={faSpinner} />
      </section>
    );
  }

  if (user) {
    return (
      <section className="User" onClick={signOut}>
        <Avatar />
      </section>
    );
  }

  return (
    <section className="User">
      <button onClick={signIn}>Sign In</button>
    </section>
  );
}

export default User;
