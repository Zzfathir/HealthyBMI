// deklarasi variable
const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const male = document.getElementById("m");
const female = document.getElementById("f");
const form = document.getElementById("form");
let resultArea = document.querySelector(".comment");
modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

function calculate() {
  if (age.value == "" || height.value == "" || weight.value == "" || (male.checked == false && female.checked == false)) {
    modal.style.display = "flex";
    modalText.innerHTML = `All fields are required!`;
  } else {
    countBmi();
  }
}

//
function countBmi() {
  
  // mengkalkulasikan bmi
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }

  var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

  // menentukan tinggi yang ideal
  const idealHeight = height.value / 100;
  const minW = (18.5 * idealHeight * idealHeight).toFixed(1);
  const maxW = (24.9 * idealHeight * idealHeight).toFixed(1);

  // pengkondisian bmi
  var result = "";

  if (bmi < 18.5) {
    result = "Underweight";
    document.getElementById("container").innerHTML = `<div data-aos="fade-left"  data-aos-duration="700" class=" font-light rounded-lg p-5 text-gray-500 sm:text-lg">
            <h2 class="text-2xl mb-5 tracking-tight font-extrabold text-green-900">HealthyBot says</h2>
            <hr class="border">
            <h2 class="text-2xl mt-5 tracking-tight font-extrabold text-green-900">Underweight(BMI less than 18.5)</h2>
            <p class="mb-5 text-base">Anda terlalu kurus untuk tinggi badan Anda. Penting untuk menjaga agar tetap berada dalam kisaran berat badan sehat Anda. Berada dalam kisaran berat badan yang sehat akan meningkatkan kemampuan tubuh Anda untuk melawan infeksi atau penyakit.</p>
            <h2 class="text-2xl tracking-tight font-extrabold text-green-900">Talk to your GP</h2>
            <p class="mb-5 text-base">Jika Anda khawatir dengan berat badan Anda atau Anda menurunkan berat badan tanpa berusaha, bicarakan dengan dokter umum dan ahli diet Anda untuk memastikan tidak ada masalah lain yang menyebabkan hal ini.</p>
            <div class="rounded-lg p-6 w-[300px] bg-green-200 text-center">
              <p class="text-base text-gray-600">Your ideal weight range</p>
              <p class="font-bold text-gray-600">${minW}Kg - ${maxW}Kg</p>
            </div>
            </div>`;
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "Healthy";
    document.getElementById("container").innerHTML = `<div data-aos="fade-left"  data-aos-duration="700" class=" font-light rounded-lg p-5 text-gray-500 sm:text-lg">
            <h2 class="text-2xl mb-5 tracking-tight font-extrabold text-green-900">HealthyBot says</h2>
            <hr class="border ">
            <h2 class="text-2xl mt-5 tracking-tight font-extrabold text-green-900">Healthy Weight(BMI 18.5 to 25)</h2>
            <p class="mb-5 text-base">Anda memiliki berat badan yang sehat untuk tinggi badan Anda. Namun sebaiknya Anda juga memeriksa ukuran pinggang Anda. Usahakan untuk tetap berada dalam kisaran berat badan ideal dengan mengonsumsi makanan sehat dan seimbang serta berolahraga secara teratur.</p>
            <p class="mb-5 text-base">Kebanyakan orang dewasa harus aktif selama 30 menit hampir setiap hari. Bagi warga lanjut usia di Australia, kesehatan Anda secara umum mungkin lebih penting daripada kelebihan berat badan. Beberapa peneliti berpendapat bahwa kisaran BMI 22-26 dapat diterima oleh orang Australia yang lebih tua.</p>
            </div>`;
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "Overweight";
    document.getElementById("container").innerHTML = `<div data-aos="fade-left"  data-aos-duration="700" class=" font-light rounded-lg p-5 text-gray-500 sm:text-lg">
    <h2 class="text-2xl mb-5 tracking-tight font-extrabold text-green-900">HealthyBot says</h2>
    <hr class="border ">
    <h2 class="text-2xl mt-5 tracking-tight font-extrabold text-green-900">Overweight(BMI 25 to 30)</h2>
    <p class="mb-5 text-base">Kelebihan berat badan meningkatkan risiko terkena penyakit jantung koroner, serta kondisi kesehatan lainnya seperti diabetes. Menjaga berat badan yang sehat akan membantu Anda mengontrol tekanan darah dan kadar kolesterol.</p>
    <p class="mb-5 text-base">Berat badan Anda turun jika jumlah energi yang masuk ke tubuh Anda lebih sedikit dari yang digunakan oleh tubuh Anda. Bertujuan untuk berolahraga lebih banyak dan makan makanan sehat seimbang. Untuk saran medis dan diet individual, konsultasikan dengan dokter umum dan ahli gizi Anda.</p>
    <div class="rounded-lg p-6 w-[300px] bg-green-200 text-center">
              <p class="text-base text-gray-600">Your ideal weight range</p>
              <p class="font-bold text-gray-600">${minW}Kg - ${maxW}Kg</p>
            </div>
    </div>`;
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "Obese";
    document.getElementById("container").innerHTML = `<div data-aos="fade-left"  data-aos-duration="700" class=" font-light rounded-lg p-5 text-gray-500 sm:text-lg">
    <h2 class="text-2xl mb-5 tracking-tight font-extrabold text-green-900">HealthyBot says</h2>
    <hr class="border ">
    <h2 class="text-2xl mt-5 tracking-tight font-extrabold text-green-900">Obese(BMI 30+)</h2>
    <p class="mb-5 text-base">Ketika BMI Anda meningkat, risiko Anda terkena penyakit jantung koroner, diabetes, dan beberapa jenis kanker juga meningkat. Penting bagi Anda untuk mengambil langkah-langkah untuk mengurangi berat badan Anda.</p>
    <p class="mb-5 text-base">Kabar baiknya adalah menurunkan sedikit berat badan pun dapat bermanfaat bagi kesehatan Anda. Berat badan Anda turun jika jumlah energi yang masuk ke tubuh Anda lebih sedikit dari yang digunakan oleh tubuh Anda. Bertujuan untuk berolahraga lebih banyak dan makan makanan sehat seimbang.</p>
    <h2 class="text-2xl tracking-tight font-extrabold text-green-900">Talk to your GP</h2>
    <p class="mb-5 text-base">Untuk saran medis dan diet individual, konsultasikan dengan dokter umum dan ahli gizi Anda. Jika BMI Anda lebih dari 35, dokter Anda mungkin memberi tahu Anda tentang opsi tambahan yang tersedia untuk mendukung Anda menurunkan berat badan.</p>
    <div class="rounded-lg p-6 w-[300px] bg-green-200 text-center">
              <p class="text-base text-gray-600">Your ideal weight range</p>
              <p class="font-bold text-gray-600">${minW}Kg - ${maxW}Kg</p>
            </div>
    </div>`;
  }

  // menampilkan hasil bmi & status
  resultArea.style.display = "flex";
  document.querySelector(".comment").innerHTML = `<p class="border-2 w-96 text-xl mb-2 border-gray-600 rounded-lg border-dashed p-3">You are <span class="text-green-500">${result}</span></p>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

// menutup modal
span.onclick = function () {
  modal.style.display = "none";
};
