import { useFirebaseUser } from "services/firebase";

import Avatar from "./Avatar";

import "./User.scss";

function User() {
  const { user, isLoading, signIn, signOut } = useFirebaseUser();

  if (isLoading) return null;

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
