/**@module Login-Script */
/**
 * Membuat variabel loginFormElement untuk tampilan form
 * @constant {HTMLElement}
 */
const loginFormElement = document.querySelector('#loginForm');

/**
 * Membuat variabel inputEmailElement untuk tampilan input email.
 * @constant {HTMLElement}
 */
const inputEmailElement = document.querySelector('#inputEmail');

/**
 * Membuat variabel inputPasswordElement untuk tampilan input password.
 * @constant {HTMLElement}
 */
const inputPasswordElement = document.querySelector('#inputPassword');

/**
 * Membuat variabel expectedEmail untuk menyimpan infromasi email sementara.
 * @constant {string}
 */
const expectedEmail = 'admin@dicoding.com';

/**
 * Membuat variabel expextedPassword untuk menyimpan informasi password sementara.
 * @constant {string} 
 */
const expectedPassword = 'superpassword';

/* Comment : Menambahkan aksi klik button. */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    
    /**
     * Membuat variabel email untuk menyimpan nilai email yang didaptkan saat button ditekan.
     * @constant {string}
     */
    const email = inputEmailElement.value;

    /**
     * Mmebuat variabel password untuk menyimpan nilai password yang didapatkan saat button ditekan.
     * @constant {string}
     */
    const password = inputPasswordElement.value;

    /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan.*/
    if (email == expectedEmail && password == expectedPassword) {

      /* Comment : Jika sesuai  makan program akan berpindah ke halaman home.*/
      goToHome();

    } else

    /* Comment : Namun jika tidak sesuai makan akan menampilkan informasi bahwa input salah.*/
    showPopUp();
});
