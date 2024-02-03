const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        props.onAuth({username: value, secret: value });
    }

}