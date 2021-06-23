import React from "react";
import LoginScreen from "./components/LoginScreen";
import TaskApp from "./TaskApp";
import RealmApolloProvider from "./graphql/RealmApolloProvider";
import { useRealmApp, RealmAppProvider } from "./RealmApp";

export const APP_ID = "tasktracker-vstrw";

const RequiredLoggedInUser = ({ children }: { children: any }) => {
  // Only render childern if there is a logged in user
  const app = useRealmApp();
  return app.currentUser ? children : <LoginScreen />;
};

export default function App() {
  return (
    <RealmAppProvider appId={APP_ID}>
      <RequiredLoggedInUser>
        <RealmApolloProvider>
          <TaskApp />
        </RealmApolloProvider>
      </RequiredLoggedInUser>
    </RealmAppProvider>
  );
}
