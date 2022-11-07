/**
 * 문제 설명: 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
 * 제한사항
3 ≤ numbers의 길이 ≤ 20
direction은 "left" 와 "right" 둘 중 하나입니다.
 */

function solution(numbers, direction) {
  let answer = [];
  if (direction === "right") {
    answer = numbers.slice(0, numbers.length - 1);
    answer.unshift(numbers[numbers.length - 1]);
    return answer;
  }

  answer = numbers.slice(1, numbers.length);
  answer.push(numbers[0]);
  return answer;
}
