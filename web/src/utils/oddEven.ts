export default function oddEven(n: number) {
  if (n & 1) {
    return "even";
  } else {
    return "odd";
  }
}
