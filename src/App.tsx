import './App.css';
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { getLiffIdToken, getLINEProfile } from './redux/authSlice';
import { createSelector } from "reselect";
import { RootState } from "./redux/store";
import { useAppDispatch } from './redux/store';
import Home from './Home';

function App() {
  const authSelector = (state: RootState) => state.auth;
  const liffIdTokenSelector = createSelector(authSelector, (auth) => {
      return auth.liffIdToken;
    });
  const displayNameSelector = createSelector(authSelector, (auth) => {
    return auth.displayName;
  });

  const pictureUrlSelector = createSelector(authSelector, (auth) => {
    return auth.pictureUrl;
  });

  const dispatch = useAppDispatch();
  const liffIdToken = useSelector(liffIdTokenSelector);
  const displayName = useSelector(displayNameSelector);
  const pictureUrl = useSelector(pictureUrlSelector);

  const lineLogin = useCallback(() => {
    dispatch(getLiffIdToken());
  }, [dispatch]);
  const lineProfile = useCallback(() => {
    dispatch(getLINEProfile());
  }, [dispatch]);

  return (
    <Home
      liffIdToken={liffIdToken}
      displayName={displayName}
      pictureUrl={pictureUrl}
      lineLogin={lineLogin}
      lineProfile={lineProfile}
    />
  );
};

export default App;