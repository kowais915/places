import Link  from 'next/link'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Places</h1>
            <div className="links">
                 <Link href="/">Home</Link>
                 <Link href="/about">About</Link>
                 <Link href="/blogs">Create</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;