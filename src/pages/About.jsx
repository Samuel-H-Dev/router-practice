import NavList from "../components/NavList";

const imgURI = process.env.PUBLIC_URL+"/images/"

export default function About(){

    return(
        <>
        <h2>About</h2>
        <NavList />
        <img src={imgURI+"img1.jpg"} alt="" />
        </>
    )
}