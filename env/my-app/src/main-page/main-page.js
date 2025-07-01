import './main-page.css'

function Main() {
    return (
        <>
            <img alt="doc" className="main-pic" src="../pics/dentist-banner.jpg">

            </img>
            <div style={{ width: '1200px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left',position: 'relative' }}>
                <div style={{ position: 'absolute',top:'350px' }}>
                    <div className="main-pic-head">Complete Dental Solutions <br />
                        Dental Care - A Soothing Touch</div>
                    <div className="main-pic-text">
                        Lorem ipsum
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main;
