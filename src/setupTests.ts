import "@testing-library/jest-dom";

import * as firebaseService from "services/firebase";

beforeEach(function () {
  jest
    .spyOn(firebaseService, "useFirebaseUser")
    .mockImplementation(function () {
      return {
        user: null,
        isLoading: true,
        signIn: jest.fn(),
        signOut: jest.fn(),
      };
    });
});
