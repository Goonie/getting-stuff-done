import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { useFirebaseUser } from "services/firebase";

import "./Avatar.scss";

function Avatar() {
  const { user, isLoading } = useFirebaseUser();

  if (isLoading || !user) return null;

  if (user.photoURL) {
    return <img className="Avatar" alt="Profile" src={user.photoURL} />;
  }

  if (user.displayName) {
    return <div className="Avatar letter">{user.displayName.charAt(0)}</div>;
  }

  return (
    <div className="Avatar unknown">
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
}

export default Avatar;
