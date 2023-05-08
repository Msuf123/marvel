export default async function  make(nname){
 let name=nname.join('');
 let base_url='https://gateway.marvel.com'
 let add_url='/v1/public/characters?name='
//      let key='&apikey=c98fbeeb5caa55720e4d631e307cd636&'
//  let hash='hash=5e398d887de9037c442d6bc0756f96e4'
let key='&apikey=ac08bd94561f430f895f27cde01380d5&'
let hash='hash=0c7b91e9033c06d4b3091d6a0406cc1f'

 let url=`${base_url}${add_url}${name}&ts=1${key}${hash}`
 //console.log(name)
 
  
  try{let result=await fetch(url).then((json)=>{
  if(json.status===200){
    //console.log(json)
   return json.json()}
   else if(json.status===429){
    return 'over limit'
   }
   else{
throw Error
   }
 })
 .then((ans)=>{
  //console.log(ans)
  if(ans.data.results.length!==0){
    
  let array=[[ans.data.results[0],ans.data.results[0].thumbnail],[ans.data.results[0].comics.items],[ans.data.results[0].series.items]]
  
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
  return 'error';
 }
}

 