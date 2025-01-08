const calMean = (diem1, diem2, diem3) => (
  (diem1 + diem2 + diem3) / 3
)

const diemDolphins = calMean(96, 108, 89);
const diemKoalas = calMean(88, 91, 110);

console.log("Điểm Dolphins: ", diemDolphins.toFixed(2));
console.log("Điểm Koalas: ", diemKoalas.toFixed(2));

if (diemDolphins > diemKoalas && diemDolphins >= 100) {
  console.log("Dolphins thắng");
} else if (diemDolphins < diemKoalas && diemKoalas >= 100) {
  console.log("Koalas thắng");
} else if (
  diemDolphins >= 100 &&
  diemKoalas >= 100 &&
  diemDolphins === diemKoalas
) {
  console.log("Hòa!");
} else {
  console.log("2 đội không đạt điều kiện");
}
