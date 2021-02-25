import Link from "next/link"
import {useEffect} from "react";
import {useRouter} from "next/router"
const NotFound = () => {
    const router=useRouter();

    useEffect(() => {
      setTimeout(() => {
        //   router.go(-1,+1) // go one backward and go one for forward
        router.push('/');
      }, 3000);
    }, [])
    return ( 
        <div className="not-found">
            <h1>Oooooops ......</h1>
            <h2>That page can not be found.</h2>
            <p>Go back to <Link href="/"><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;