import rust_dfintiy_hello from 'ic:canisters/rust_dfintiy_hello';

rust_dfintiy_hello.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
