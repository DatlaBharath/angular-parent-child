import { Observable } from "rxjs";
export class ObservableTest{
    createOb():Observable<Object>{
    return new Observable((obs)=>{
        obs.next("1234");
        obs.next("4567");
        obs.next("Hello")
    })}

    obd: Observable<Object> = new Observable((obs)=>{
        setTimeout(()=>{
            obs.next("Hello")
        },1000);
        setTimeout(()=>{
            obs.next("Hello2")
        },2000);
        setTimeout(()=>{
            obs.next("Hello3")
        },3000);
        setTimeout(()=>{
            obs.next("Hello4")
        },4000);
        // obs.next("1234");
        // obs.next("4567");
        // obs.next("Hello")
    })

    subscribeToObservable(ob: Observable<Object>){
        ob.subscribe((data)=>{
            console.log(data)
        })
    }
    
}