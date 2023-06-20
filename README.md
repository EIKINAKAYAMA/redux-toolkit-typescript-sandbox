# GET INFO FROM LINE

Sample
<img width="1227" alt="スクリーンショット 2023-06-20 20 05 58" src="https://github.com/EIKINAKAYAMA/redux-toolkit-typescript-sandbox/assets/65437818/593b7563-cc65-4476-a3a8-5ef659d407d9">

### Set env 

create .env.development.local file and set your LIFF ID
```
REACT_APP_LIFF_ID="YOUR LIFE ID"
```

### Run command

HTTPS is nessesary to get callback from LINE API.
Use mkcert and 

``` 
HTTPS=true SSL_CRT_FILE=$(mkcert -CAROOT)/localhost.pem SSL_KEY_FILE=$(mkcert -CAROOT)/localhost-key.pem npm start
```

ref
https://zenn.dev/bulb/articles/d6f629def573f3
