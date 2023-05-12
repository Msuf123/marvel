import https from "./https"

export default  function series(s){
    let result=[]
    let a=null;
    let key='&apikey=ac08bd94561f430f895f27cde01380d5&'
let hash='hash=0c7b91e9033c06d4b3091d6a0406cc1f'
   let detail=result.push(s.map(()=>{
    
    a=async (i)=>{
        let final=[]
        let base_url=https(i.resourceURI)
        let url=`${base_url}?ts=1${key}${hash}`
        //console.log(url)
    let aa=await fetch(url).then((a)=>{
        if(a.ok){return a.json()}
        else{console.log('error occured')}
            }).then((b)=>{
                final=[https(b.data.results[0].thumbnail.path)+"."+b.data.results[0].thumbnail.extension,b.data.results[0].startYear,b.data.results[0].endYear]})
                
     console.log(aa)           
    }

}
     
    )
    
    )
   //console.log(result)
    
}