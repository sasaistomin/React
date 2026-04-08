import { useRef } from "react";

export default function SimpleForm() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        const name = nameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value;

        if (!name) {
            nameRef.current.focus();
            return;
        }

        if (!email) {
            emailRef.current.focus();
            return;
        }

        if (password.length < 6) {
            alert("Пароль должен быть не менее 6 символов");
            passwordRef.current.focus();
            return;
        }

        alert(`Имя: ${name}\nEmail: ${email}\nПароль: ${password}`);
    }

    return (
        <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
            <div>
                <input
                    type="text"
                    placeholder="Имя"
                    ref={nameRef}
                />
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Email"
                    ref={emailRef}
                />
            </div>

            <div>
                <input
                    type="password"
                    placeholder="Пароль"
                    ref={passwordRef}
                />
            </div>

            <button type="submit">Отправить</button>
        </form>
    );
}