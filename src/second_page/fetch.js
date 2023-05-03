export default function make(){
 let name='iron%20man';
 let base_url='https://gateway.marvel.com'
 let add_url='/v1/public/characters?name='
 let key='&apikey=c98fbeeb5caa55720e4d631e307cd636&'
 let hash='hash=5e398d887de9037c442d6bc0756f96e4'
 let url=`${base_url}${add_url}${name}&ts=1${key}${hash}`
 console.log(url)
 fetch(url).then((a)=>{return a.json()}).then((b)=>{console.log(b)})
}