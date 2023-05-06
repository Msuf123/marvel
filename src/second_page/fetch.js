export default async function  make(nname){
 let name=nname.join('');
 let base_url='https://gateway.marvel.com'
 let add_url='/v1/public/characters?name='
 let key='&apikey=c98fbeeb5caa55720e4d631e307cd636&'
 let hash='hash=5e398d887de9037c442d6bc0756f96e4'
 let url=`${base_url}${add_url}${name}&ts=1${key}${hash}`
 //console.log(name)
 let result=await fetch(url).then((json)=>{
   return json.json()
 }).catch(()=>{return false})

try{
let array=[[result.data.results[0],result.data.results[0].thumbnail],[result.data.results[0].comics.items]]
console.log(array[0][0].name)
console.log(array[0][0].description)
console.log(array)
return array}
catch{
  if(!result){
  return false}
  else{
    return 'no name found'
  }
}
}