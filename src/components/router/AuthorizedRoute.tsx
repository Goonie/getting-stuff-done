import { Route, RouteProps } from "react-router-dom";

import { useFirebaseUser } from "services/firebase";

import Unauthorized from "pages/Unauthorized";

function AuthorizedRoute({ ...props }: RouteProps) {
  const { user, isLoading } = useFirebaseUser();

  if (isLoading) return null;

  if (user) {
    return <Route {...props} />;
  }

  return <Route {...props} component={Unauthorized} />;
}

export default AuthorizedRoute;
