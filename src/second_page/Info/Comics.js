import stylee from './detail.module.css'
export default function(props){
    let name=props.value[0]
    return(
        <div className={stylee.main}>
            {name.map((i)=>{
                let title=i.name
                return <div className={stylee.items} key={name.indexOf(i)}>
                    <span>{title}</span>
                    {false?<img></img>:null}
                    <span>Price:$</span>
                </div>
            })}
        </div>
    )
}