export function isLoggedIn() {
    const loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
    if (loginDetails && loginDetails !== '' && loginDetails !== null) {
        return loginDetails;
    } else {
        return false;
    }
}
