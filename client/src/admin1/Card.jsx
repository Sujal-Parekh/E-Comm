import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Card() {
  // const [user, setUser] = useState();
  const [product, setProduct] = useState('');
  const [user, setUser] = useState('')
  const [cat, setCat] = useState('')
  const [admin, setadmin] = useState('')
  const [pending, setPending] = useState('')
  const [dispatch, setDispatch] = useState('')
  const [arrived, setArrived] = useState('')
  const [subcat, setSubcat] = useState('')



  // const [category, setCategory] = useState();
  useEffect(() => {
    dat()
    // show();

  }, []);
  const dat = async () => {
    try {
      const res = await axios.get("http://localhost:5000/total")
      // console.log(res.data)
      setProduct(res.data.totproduct);
      setUser(res.data.totuser)
      setCat(res.data.totcat)
      setadmin(res.data.totadmin)
      setPending(res.data.tpen)
      setDispatch(res.data.tdis)
      setArrived(res.data.tari)
setSubcat(res.data.totsubcat)
    } catch (error) {
      console.log("data fond", error)
    }
  }
  return (
    <>


      <div>
        <div className="row">
          {/* task, page, download counter  start */}
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-block">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h4 className="text-c-purple">Admin</h4>
                    <h6 className="text-muted m-b-0">Wlcome to Admin</h6>
                  </div>
                  <div className="col-4 text-right">
                    {/* <i className="fa fa-bar-chart f-28" /> */}
                  </div>
                </div>
              </div>
              <div className="card-footer bg-c-purple">
                <div className="row align-items-center">
                  <div className="col-9">
                    <p className="text-white m-b-0">Admin side is here</p>
                  </div>
                  <div className="col-3 text-right">
                    {/* <i className="fa fa-line-chart text-white f-16" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-block">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h4 className="text-c-green">{pending}</h4>
                    <h6 className="text-muted m-b-0">Total pendings</h6>
                  </div>
                  <div className="col-4 text-right">
                    <i className="fa fa-file-text-o f-28" />
                  </div>
                </div>
              </div>
              <div className="card-footer bg-c-green">
                <div className="row align-items-center">
                  <div className="col-9">
                    <p className="text-white m-b-0">Pendings</p>
                  </div>
                  <div className="col-3 text-right">
                    <i className="fa fa-line-chart text-white f-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-block">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h4 className="text-c-red">{arrived}</h4>
                    <h6 className="text-muted m-b-0">Order Completed</h6>
                  </div>
                  <div className="col-4 text-right">
                    <i className="fa fa-calendar-check-o f-28" />
                  </div>
                </div>
              </div>
              <div className="card-footer bg-c-red">
                <div className="row align-items-center">
                  <div className="col-9">
                    <p className="text-white m-b-0">Complete</p>
                  </div>
                  <div className="col-3 text-right">
                    <i className="fa fa-line-chart text-white f-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-block">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h4 className="text-c-blue">{dispatch}</h4>
                    <h6 className="text-muted m-b-0">Order placed</h6>
                  </div>
                  <div className="col-4 text-right">
                    <i className="fa fa-hand-o-down f-28" />
                  </div>
                </div>
              </div>
              <div className="card-footer bg-c-blue">
                <div className="row align-items-center">
                  <div className="col-9">
                    <p className="text-white m-b-0">Delivered</p>
                  </div>
                  <div className="col-3 text-right">
                    <i className="fa fa-line-chart text-white f-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* task, page, download counter  end */}
          {/*  sale analytics start */}


          {/*  sale analytics end */}

          {/*  project and team member end */}
        </div>
        <div className="row">
          {/* task, page, download counter  start */}
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-block">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h4 className="text-c-purple">{product}</h4>
                    <h6 className="text-muted m-b-0">Total Products</h6>
                  </div>
                  <div className="col-4 text-right">
                    {/* <i className="fa fa-bar-chart f-28" /> */}
                  </div>
                </div>
              </div>
              <div className="card-footer bg-c-purple">
                <div className="row align-items-center">
                  <div className="col-9">
                    <p className="text-white m-b-0">Products</p>
                  </div>
                  <div className="col-3 text-right">
                    {/* <i className="fa fa-line-chart text-white f-16" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-block">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h4 className="text-c-green">{user}</h4>
                    <h6 className="text-muted m-b-0">Normal Users</h6>
                  </div>
                  <div className="col-4 text-right">
                    {/* <i className="fa fa-file-text-o f-28" /> */}
                  </div>
                </div>
              </div>
              <div className="card-footer bg-c-green">
                <div className="row align-items-center">
                  <div className="col-9">
                    <p className="text-white m-b-0">Users</p>
                  </div>
                  <div className="col-3 text-right">
                    {/* <i className="fa fa-line-chart text-white f-16" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-block">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h4 className="text-c-red">{admin}</h4>
                    <h6 className="text-muted m-b-0">Admin Users</h6>
                  </div>
                  <div className="col-4 text-right">
                    {/* <i className="fa fa-calendar-check-o f-28" /> */}
                  </div>
                </div>
              </div>
              <div className="card-footer bg-c-red">
                <div className="row align-items-center">
                  <div className="col-9">
                    <p className="text-white m-b-0">Admin</p>
                  </div>
                  <div className="col-3 text-right">
                    {/* <i className="fa fa-line-chart text-white f-16" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-block">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h4 className="text-c-blue">{cat}</h4>
                    <h6 className="text-muted m-b-0">categories</h6>
                  </div>
                  <div className="col-4 text-right">
                    {/* <i className="fa fa-hand-o-down f-28" /> */}
                  </div>
                </div>
              </div>
              <div className="card-footer bg-c-blue">
                <div className="row align-items-center">
                  <div className="col-9">
                    <p className="text-white m-b-0">categories</p>
                  </div>
                  <div className="col-3 text-right">
                    {/* <i className="fa fa-line-chart text-white f-16" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* task, page, download counter  end */}
          {/*  sale analytics start */}


          {/*  sale analytics end */}

          {/*  project and team member end */}
        </div>
        
      </div>


    </>





  )

}
export default Card;
