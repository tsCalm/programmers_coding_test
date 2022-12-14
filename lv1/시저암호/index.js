/**
 * 문제설명 :
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
 * 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
 * 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
 *
 * 제한사항 :
 * 공백은 아무리 밀어도 공백입니다.
 * s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
 * s의 길이는 8000이하입니다.
 * n은 1 이상, 25이하인 자연수입니다.
 */
//  const upArr = [];
//  const lowArr = [];
//  for (let i = 65; i <= 90; i++) {
//    const obj = {
//      asc: i,
//      str: String.fromCharCode(i),
//    };
//    upArr.push(obj);
//  }
//  for (let i = 97; i <= 122; i++) {
//    const obj = {
//      asc: i,
//      str: String.fromCharCode(i),
//    };
//    lowArr.push(obj);
//  }
const pushChar = (ascNum, pushNum) => {
  if (ascNum === 32) return 32;
  if (ascNum >= 65 && ascNum <= 90) {
    let addNum = ascNum + pushNum;
    return addNum > 90 ? addNum - 26 : addNum;
  }
  let addNum = ascNum + pushNum;
  return addNum > 122 ? addNum - 26 : addNum;
};
function solution(s, n) {
  const sArr = s.split("");
  const answer = sArr.map((char) => pushChar(char.charCodeAt(0), n));
  return answer.map((num) => String.fromCharCode(num)).join("");
}
const param = "a B z";
const param2 = 4;
const result = solution(param, param2);

console.log("result : ", result);
