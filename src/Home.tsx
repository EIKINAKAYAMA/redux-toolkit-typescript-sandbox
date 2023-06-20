import './App.css';
import  {useEffect} from "react";


export const Home =  (props: any) => {
  const {liffIdToken, displayName, pictureUrl, lineLogin, lineProfile} =
    props;
  useEffect(() => {
    // LINE Login
    if (!liffIdToken) {
      // liffIdToken がReduxに取得できていない場合LINE Login画面に戻る
      lineLogin();
    }
  }, [liffIdToken, lineLogin]);

  useEffect(() => {
    if (liffIdToken) {
      // LINE Profile情報を取得
      lineProfile();
    }
  }, [liffIdToken, lineProfile]);

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

export default Home;