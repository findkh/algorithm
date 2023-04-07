function solution(chicken) {
  let coupon = chicken; // 시켜먹은 치킨 수 만큼 쿠폰 발급
  let service = 0; // 서비스 치킨 수

  while (coupon >= 10) { // 쿠폰 10장 모을 때마다 서비스 치킨 1마리 발급
    const chickenForCoupon = Math.floor(coupon / 10); // 10장의 쿠폰을 받을 수 있는 만큼 시켜먹은 치킨 수에서 빼기
    service += chickenForCoupon;
    coupon -= chickenForCoupon * 10;
    coupon += chickenForCoupon; // 발급된 쿠폰 수만큼 추가 발급
  }

  return service;
}