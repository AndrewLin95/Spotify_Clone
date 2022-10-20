export default function formatFollowers(followers: number) {
  return parseInt(followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}