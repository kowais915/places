import Link  from 'next/link'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Places</h1>
            <div className="links">
                 <Link href="/" className='my-link'>Home</Link>
                 <Link href="/about" className='my-link'>About</Link>
                 <Link href="/blogs" className='my-link'>Create</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;