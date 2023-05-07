export default async function  make(nname){
 let name=nname.join('');
 let base_url='https://gateway.marvel.com'
 let add_url='/v1/public/characters?name='
 let key='&apikey=ac08bd94561f430f895f27cde01380d5&'
 let hash='hash=0c7b91e9033c06d4b3091d6a0406cc1f'
 let url=`${base_url}${add_url}${name}&ts=1${key}${hash}`
 //console.log(name)
 
  
  try{let result=await fetch(url).then((json)=>{
  if(json.status===200){
    //console.log(json)
   return json.json()}
   else{
throw Error
   }
 })
 .then((ans)=>{
  //console.log(ans)
  if(ans.data.results.length!==0){
  let array=[[ans.data.results[0],ans.data.results[0].thumbnail],[ans.data.results[0].comics.items]]
  
  //console.log(array)
  return array
}
  else{
    return 'name not found'
  }

 })

 return result}
 catch{
  console.log('error')
 }
}

 