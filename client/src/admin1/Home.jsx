import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Content from './Content'
import Card from './Card'
// import Alllogo from './Alllogo'
function Home() {
  return (
    <div>  
      <>
      <div className="theme-loader">
    <div className="loader-track">
      <div className="preloader-wrapper">
        <div className="spinner-layer spinner-blue">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
        <div className="spinner-layer spinner-red">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
        <div className="spinner-layer spinner-yellow">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
        <div className="spinner-layer spinner-green">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Pre-loader end */}
  <div id="pcoded" className="pcoded">
    <div className="pcoded-overlay-box" />
    <div className="pcoded-container navbar-wrapper">
      
      {/* navbar */}
      <Navbar/>
      
      {/* <div className="pcoded-main-container"> */}
        <div className="pcoded-wrapper">
          {/* sidebar */}
          <Sidebar/>
          <div className="pcoded-content">
            {/* Page-header start */}
             {/* Page-header end */}
            <div className="pcoded-inner-content">
              {/* Main-body start */}
              <div className="main-body">
                <div className="page-wrapper">
                  {/* Page-body start */}
                  <div className="page-body">
                    <br></br>
                    <br></br>
                    <Card/>
                  
                  </div>
                  {/* Page-body end */}
                </div>
                <div id="styleSelector"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* </div>/ */}
      </>
    </div>
  )
}
export default Home