export default function https(a){
  let c=a.split(':')
  c[0]='https'
  return c.join(":")
}