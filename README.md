## Halaman Tampilan Awal
![Lampiran Tampilan Awal](tampilan_awal.png)
### 1. Proses Autentikasi Login
</br>Ketika pengguna menekan tombol "Sign In With Google", aplikasi memulai proses login menggunakan Firebase Authentication.
</br>Firebase menyediakan metode signInWithPopup atau signInWithRedirect untuk menangani autentikasi ini. **GoogleAuthProvider** digunakan untuk menghubungkan Firebase dengan layanan autentikasi Google.

## Sign In Google
![Lampiran Sign In Googlel](sign_in.png)
### 2. Google Sign-In
</br>Firebase mengarahkan pengguna ke halaman login Google.
</br>Pengguna memasukkan kredensial akun Google mereka (email dan password) di halaman Google.
</br>Google memverifikasi kredensial tersebut.
</br>Jika berhasil, Google mengembalikan token autentikasi kepada Firebase.

## Halaman Home
![Lampiran Tampilan Homel](home.png)
### 3. Firebase Mendapatkan Informasi Pengguna
</br>Firebase menggunakan token dari Google untuk mendapatkan detail akun pengguna melalui metode signInWithPopup.
</br>Firebase menghasilkan user object, yang merupakan representasi dari data pengguna.
</br>Objek ini mencakup informasi penting seperti:
</br>displayName: Nama lengkap pengguna.
</br>email: Alamat email pengguna.
</br>photoURL: URL foto profil pengguna.
</br>uid: ID unik pengguna di Firebase.

## Halaman Profile
![Lampiran Tampilan Profile](profile.png)
### 4. Aplikasi Mendapatkan Data Profil
</br>Setelah login berhasil, aplikasi menerima user object dari Firebase. Data ini langsung bisa digunakan atau disimpan untuk keperluan lain.
</br>Contoh data profil yang bisa diakses:
</br>user.displayName; // Nama lengkap pengguna
</br>user.email;       // Email pengguna
</br>user.photoURL;    // URL foto profil pengguna
</br>user.uid;         // ID unik pengguna

### 5. Menyimpan Status Login
</br>Firebase menyediakan fitur pemantauan status autentikasi menggunakan onAuthStateChanged. Dengan ini, aplikasi dapat mengetahui apakah pengguna masih dalam keadaan login atau tidak.
</br>Saat aplikasi dimuat ulang, status login pengguna tetap dipertahankan tanpa memerlukan login ulang, kecuali pengguna melakukan logout.

### 6. Logout
</br>Ketika pengguna menekan tombol "Logout", aplikasi memanggil metode signOut dari Firebase.
</br>Firebase akan menghapus token autentikasi pengguna, sehingga mereka tidak lagi dianggap sebagai pengguna yang login.

# CRUD
![Lampiran Tampilan Home Terbaru](Home_baru.png)
