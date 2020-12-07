function doThis() {
    let password = prompt('What your password?');
    let currentPassword = 'parol123';

    if(password == currentPassword) {
        alert('Dobro pozhalovat Ushlepok');
    } else(password == null) {
        alert('Please try again later!');
        doThis();
    } else(password !== currentPassword) {
        alert('Password is not correct! Please try again');
        doThis();
    }
}
doThis();
