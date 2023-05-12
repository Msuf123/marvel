import https from "./https"

export default  function series(s){
    //console.log('hi')
    let result=[]
    let a=null;
    let b=null;
    let key='&apikey=ac08bd94561f430f895f27cde01380d5&'
let hash='hash=0c7b91e9033c06d4b3091d6a0406cc1f'
   s.map(
    
    
      async (i)=>{
        let final=[]
        let base_url=https(i.resourceURI)
        let url=`${base_url}?ts=1${key}${hash}`
        let a=await fetch(url).then((a)=>{
        if(a.ok){//console.log(a)
            return a.json()}
        else{console.log('error occured')}
            }).then((b)=>{
        return final=[https(b.data.results[0].thumbnail.path)+"."+b.data.results[0].thumbnail.extension,b.data.results[0].startYear,b.data.results[0].endYear,b.data.results[0].title]})
             // console.log(a)
              result.push(a)
              //console.log(result)
    return a
    }


     
    )
   return result
}