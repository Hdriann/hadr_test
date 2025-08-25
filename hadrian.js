alert("Mohon untuk mengisi data diri anda")
let nama = prompt("Masukkan nama anda")
let tahun_lahir = prompt("Masukkan tahun lahir anda")
let tahun_sekarang = new Date().getFullYear()
let umur = tahun_sekarang - tahun_lahir
let tinggi = prompt("Masukkan tinggi badan anda (tanpa cm)")
let berat = prompt("Masukkan berat badan anda (tanpa kg)")
let tempat = prompt("Masukkan tempat tinggal anda")

alert("Hallo " + nama + ", umur anda sekarang adalah "+ umur + " tahun, tinggi badan anda " + tinggi + " cm, berat badan anda " + berat + " kg, dan anda tinggal di " + tempat + ". Semoga harimu menyenangkan!")