# rust_dfinity_hello

## steps
### start 
terminal 1:
```sh
dfx start --clean
```
### deploy
terminal 2:
```sh
dfx deploy
```

### call
terminal 2:
```sh
dfx canister call rust_dfinity_hello print
()
```
terminal 1:
```sh
Starting webserver on port 50467 for replica at "http://localhost:50467"
binding to: V4(127.0.0.1:8000)
replica(s): http://localhost:50467/
[Canister rrkah-fqaaa-aaaaa-aaaaq-cai] Hello World from DFINITY!
```

note:
should set the src/rust_dfinity_hello/Cargo.toml:
```yml
[dependencies]
ic-cdk = { path = "../../../../cdk-rs/src/ic-cdk", version = "0.2.3" }
ic-cdk-macros = { path = "../../../../cdk-rs/src/ic-cdk-macros", version = "0.2.3" }
```
as yours, download from https://github.com/dfinity/cdk-rs



for more information:
https://sdk.dfinity.org/docs/rust-guide/rust-quickstart.html

