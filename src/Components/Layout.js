
import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';


const Layout = (props) => {
    return (
        <>
            <Navigation />

            <main className="main" role="main">
                {props.children}
            </main>

            <Footer />

        </>

    )
}

export default Layout
