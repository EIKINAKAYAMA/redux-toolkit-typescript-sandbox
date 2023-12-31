import './App.css';
import  {useEffect} from "react";


export const Home =  (props: any) => {
  const {liffIdToken, displayName, pictureUrl, lineLogin, lineProfile} =
    props;
  useEffect(() => {
    liffIdToken ?  lineProfile(): lineLogin();
  }, [liffIdToken, lineLogin, lineProfile]);

  return (
    <div className="App">
      <div className="App">
        <header className="App-header">
          <img src={pictureUrl} alt="line profile" width="80" height="80" />
          <p>HELLO, {displayName}</p>
        </header>
      </div>
    </div>
  );
}

export default (Home);