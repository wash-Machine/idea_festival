function goToSignUp() {
    const loginin = document.getElementById("login-in");
    const loginup = document.getElementById("login-up");

    if (loginin && loginup) {
        loginin.classList.remove("block");
        loginin.classList.add("none");
        loginup.classList.remove("none");
        loginup.classList.add("block");

        setTimeout(() => {
            window.location.href = 'signup.html'; // 회원가입 페이지로 이동
        }, 1000); // 1초 후 이동 (시간은 필요에 따라 조정 가능)
    } else {
        console.error("Error: Elements not found!");
    }
}