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
</br>Fitur
</br>Tambah (Create): Menambahkan tugas baru dengan judul dan deskripsi.
</br>Baca (Read): Melihat semua tugas aktif dan tugas yang telah diselesaikan dalam bagian terpisah.
</br>Perbarui (Update): Mengedit judul dan deskripsi tugas yang sudah ada.
</br>Hapus (Delete): Menghapus tugas dari daftar.
</br>Ubah Status: Menandai tugas sebagai selesai atau mengembalikannya menjadi aktif.

![Lampiran Tampilan Home Terbaru](Home_baru.png)

![Lampiran Tampilan Tambah](tambah.png)
</br>1. Tambah (Create)
</br>Fungsi: handleSubmit
</br>Proses:
</br>Memvalidasi input untuk memastikan bahwa judul telah diisi.
</br>Memanggil metode addTodo Firestore untuk tugas baru, atau updateTodo untuk tugas yang diperbarui.
</br>Memperbarui UI dan menampilkan notifikasi sukses/gagal.
</br>Trigger: Pengiriman formulir dari komponen InputModal.

![Lampiran Tampilan Hasil Tambah](hasil_tambah.png)
</br>2. Baca (Read)
</br>Fungsi: loadTodos
</br>Proses:
</br>Mengambil semua data tugas dari Firestore dengan menggunakan metode firestoreService.getTodos.
</br>Memisahkan tugas menjadi activeTodos (tugas aktif) dan completedTodos (tugas selesai) menggunakan properti terhitung (computed properties).
</br>Trigger: Saat aplikasi dimuat pertama kali (onMounted) atau saat pengguna menyegarkan halaman.

![Lampiran Tampilan Slide Edit](slide_edit.png)

![Lampiran Tampilan Edit](halaman_edit.png)
</br>3. Perbarui (Update)
</br>Fungsi: handleEdit dan handleSubmit
</br>Proses:
</br>Membuka modal InputModal dengan data tugas yang dipilih.
</br>Memperbarui data di Firestore menggunakan metode updateTodo saat formulir dikirim.
</br>Memuat ulang daftar tugas.
</br>Trigger: Klik tombol edit pada opsi geser (sliding options).

![Lampiran Tampilan Hasil Edit](hasil_edit.png)

![Lampiran Tampilan Slide Hapus](slide_hapus.png)
</br>4. Hapus (Delete)
</br>Fungsi: handleDelete
</br>Proses:
</br>Menghapus tugas yang dipilih dari Firestore dengan metode deleteTodo.
</br>Memuat ulang daftar tugas untuk mencerminkan perubahan.
</br>Trigger: Klik tombol hapus pada opsi geser atau menggunakan gesture geser.

![Lampiran Tampilan Slide Selesai](slide_selesai.png)

![Lampiran Tampilan Selesai](selesai.png)
</br>5. Ubah Status
</br>Fungsi: handleStatus
</br>Proses:
</br>Mengubah status tugas (aktif/sudah selesai) menggunakan metode updateStatus dari Firestore.
</br>Memuat ulang daftar tugas.
</br>Trigger: Klik tombol status atau menggunakan gesture geser.

