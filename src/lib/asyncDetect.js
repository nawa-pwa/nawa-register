export default function(){
    try {
        new Function('async function test() {}')();
      } catch (e) {
        return false;
      }
      return true;
}