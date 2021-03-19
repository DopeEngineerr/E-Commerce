import "./App.css";
import { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';

const App = () => {

  // const [Num1, setNum1] = useState(5);

  // const Decrease = () => {
  //   setNum1(Num1 - 1);
  // };

  // const Increase = () => {
  //   setNum1(Num1 + 1);
  // };

  const [Tamount, setTamount] = useState(0);
  //const [Gamount, setGamount] = useState(0);

  let Gamount = 0;
  if (Tamount === 0) {
    Gamount = 0;
  }
  else {
    Gamount = Tamount + 50;
  }


  const [Count1, setCount1] = useState(0);


  const Add1 = () => {
    if ((Count1 + 1) > 5) {
      alert("You can't order more than 5 items of same type");

    }
    else {
      setCount1(Count1 + 1);
      setTamount(Tamount + 23);
    }

  };

  const Sub1 = () => {
    if ((Count1 - 1) < 0) {
      alert("Number of items can't be in zero!")
    }
    else {
      setCount1(Count1 - 1);
      setTamount(Tamount - 23);
    }

  };

  const [Count2, setCount2] = useState(0);


  const Add2 = () => {
    if ((Count2 + 1) > 5) {
      alert("You can't order more than 5 items of same type");
    }
    else {
      setCount2(Count2 + 1);
      setTamount(Tamount + 74);
    }
  };

  const Sub2 = () => {
    if ((Count2 - 1) < 0) {
      alert("Number of items can't be in zero!")
    }
    else {
      setCount2(Count2 - 1);
      setTamount(Tamount - 74);
    }

  };

  const [Count3, setCount3] = useState(0);


  const Add3 = () => {
    if ((Count3 + 1) > 5) {
      alert("You can't order more than 5 items of same type");
    }
    else {
      setCount3(Count3 + 1);
      setTamount(Tamount + 280);
    }
  };

  const Sub3 = () => {
    if ((Count3 - 1) < 0) {
      alert("Number of items can't be in zero!")
    }
    else {
      setCount3(Count3 - 1);
      setTamount(Tamount - 280);
    }

  };

  const [Count4, setCount4] = useState(0);


  const Add4 = () => {
    if ((Count4 + 1) > 5) {
      alert("You can't order more than 5 items of same type");
    }
    else {
      setCount4(Count4 + 1);
      setTamount(Tamount + 20);
    }
  };

  const Sub4 = () => {
    if ((Count4 - 1) < 0) {
      alert("Number of items can't be in zero!")
    }
    else {
      setCount4(Count4 - 1);
      setTamount(Tamount - 20);
    }

  };

  const [Count5, setCount5] = useState(0);


  const Add5 = () => {
    if ((Count5 + 1) > 5) {
      alert("You can't order more than 5 items of same type");
    }
    else {
      setCount5(Count5 + 1);
      setTamount(Tamount + 51);
    }
  };

  const Sub5 = () => {
    if ((Count5 - 1) < 0) {
      alert("Number of items can't be in zero!")
    }
    else {
      setCount5(Count5 - 1);
      setTamount(Tamount - 51);
    }

  };

  const [Count6, setCount6] = useState(0);


  const Add6 = () => {
    if ((Count6 + 1) > 5) {
      alert("You can't order more than 5 items of same type");
    }
    else {
      setCount6(Count6 + 1);
      setTamount(Tamount + 10);
    }
  };

  const Sub6 = () => {
    if ((Count6 - 1) < 0) {
      alert("Number of items can't be in zero!")
    }
    else {
      setCount6(Count6 - 1);
      setTamount(Tamount - 10);
    }

  };

  var KuchBhi = "";
  var kunnu = "";


  const ItemEvent = (event) => {
    //event.preventDefault();
    //setInputList(event.target.value);
    KuchBhi = event.target.value.toString();
  };

  // console.log(InputList);



  const ListOfItems = (event) => {

    // event.preventDefault();
    if (KuchBhi === "KUNNU_DALAL") {
      alert("Coupon Code applied! You will recieve 10% cashback on this transaction!!");

    }
    else {
      alert("Wrong Coupon Code");

    };

    // setInputList("");
  };
  //  const [InputList, setInputList] = useState();

  // setTamount(Tamount + Count1 * 23 + Count2 * 74 + Count3 * 280 + Count4 * 20 + Count5 * 51 + Count6 * 10);

  // var tamt = SetCount1(Count1 * 23);

  const ItemEvent2 = (event) => {
    //event.preventDefault();
    //setInputList(event.target.value);
    // KuchBhi = event.target.value.toString();
  };

  const ListOfItems2 = (event) => {

    // event.preventDefault();
    alert("Thanks for you valuable feedback!")
  };

  const Congrats = () => {
    alert("Congrats! Your items will be delivered within 2-3 business days.");
  }

  return (

    <div className="project">
      {/* <div className="navbar">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper purple">
              <a href="#!" className="brand-logo title" className="kush">
                <h6>KUSHAGRA'S MEGA MART </h6>
              </a>

              <ul className="right hide-on-med-and-down" id="side">
                <li>
                  <a href="">
                    <i className="material-icons left">home</i>Home
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="material-icons left">favorite</i>Favourites
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="material-icons left">assignment</i>Your Orders
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="material-icons left">assignment_ind</i>Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>    
      </div> */}

      <header>
        <nav class="nav-wrapper purple">
          <div class="containers">
            <a href="" class="brand-logo">KUSHAGRA INTERPRISES</a>

            <a href="" class="sidenav-trigger" data-target="mobile-menu">
              <i class="material-icons">menu</i>
            </a>

            <ul class="right hide-on-med-and-down">
              <li><a href="">HOME</a></li>
              <li><a href="">FAVOURITES</a></li>
              <li><a href="#about">LOGIN</a></li>
              <li><a href="#contact">CONTACT US</a></li>

              <li><a href="" class="btn-floating btn-small waves-effect waves-light purple darken-2 tooltipped" data-tooltip="facebook">
                <i class="fab fa-facebook"></i>
              </a>
              </li>
              <li><a href="" class="btn-floating btn-small waves-effect waves-light purple darken-2 tooltipped" data-tooltip="instagram">
                <i class="fab fa-instagram"></i>
              </a>
              </li>
              <li><a href="" class="btn-floating btn-small waves-effect waves-light purple darken-2 tooltipped" data-tooltip="twitter">
                <i class="fab fa-twitter"></i>
              </a>
              </li>
              <li><a href="" class="btn-floating btn-small waves-effect waves-light purple darken-2 tooltipped" data-tooltip="reddit">
                <i class="fab fa-reddit"></i>
              </a>
              </li>
            </ul>
          </div>


        </nav>
      </header>


      <div className="items">
        <div className="container">
          <div className="row">
            <div className="col s12 l5" id="mega">
              <div className="card z-depth-3">

                <div className="card-image " id="helo">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/81JI5O0qB5L._SX522_.jpg" alt="" className="image" />
                </div>


                <div className="card-content">
                  <span className="card-title" id="naam">Maggi 2-Minute Instant Noodles - Masala, 140g</span>

                  <div className="row">
                    <div className="col l5">
                      <p className="">M.R.P.: <span className="mrp">₹24.00 </span></p>
                      <p className="price red-text">Price: ₹23.00</p>
                      <p className="discount">You Save: ₹ 1.00 (4%)
                    Inclusive of all taxes</p>
                    </div>
                    <div className="col l6 center-align offset-l1">
                      <h6 className="center-align">Add Items</h6>

                      <div className="row">
                        <div className="col l4 pull-l1">

                          <Button className="btn-floating btn-small waves-effect waves-light red white-text" onClick={Sub1}><i className="material-icons">remove</i></Button>


                        </div>
                        <div className="col l1" id="dank">
                          <p className="number ">{Count1}</p>
                        </div>
                        <div className="col l3 ">

                          <Button className="btn-floating btn-small  waves-effect waves-light green white-text" onClick={Add1}><i className="material-icons">add</i></Button>


                        </div>
                      </div>

                      {/* <Button className="btn incr left waves-effect waves-light teal lighten-1" onClick={Add}>Increament</Button>
                      <div className="col l1 offset-l1">
                        <p className="number">{Count}</p>
                      </div>
                      <Button className="btn decr right waves-effect waves-light red darken-1" onClick={Sub}>Decrement</Button> */}

                    </div>
                  </div>
                </div>
              </div>




            </div>



            <div className="col s12 l5 offset-l2" id="mega">
              <div className="card z-depth-3">

                <div className="card-image " id="helo">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/81%2Bf-RwSl-L._SX679_.jpg" alt=""
                    className="image" />

                </div>


                <div className="card-content">
                  <span className="card-title" id="naam">Tropolite classNameic White Bread Mix, 500 gm</span>

                  <div className="row">
                    <div className="col l6">
                      <p className="">M.R.P.: <span className="mrp">₹80.00 </span></p>
                      <p className="price red-text">Price: ₹74.00</p>
                      <p className="discount">You Save: ₹ 6.00 (7.5%)
                    Inclusive of all taxes</p>
                    </div>
                    <div className="col l6 center-align">
                      <h6 className="center-align">Add Items</h6>

                      <div className="row">
                        <div className="col l4 pull-l1">

                          <Button className="btn-floating btn-small waves-effect waves-light red white-text" onClick={Sub2}><i className="material-icons">remove</i></Button>


                        </div>
                        <div className="col l1 " id="dank">
                          <p className="number ">{Count2}</p>
                        </div>
                        <div className="col l3 ">

                          <Button className="btn-floating btn-small  waves-effect waves-light green white-text" onClick={Add2}><i className="material-icons">add</i></Button>


                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 l5" id="mega">
              <div className="card z-depth-3">

                <div className="card-image " id="helo">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/61cVvLsFidL._SX679_.jpg" alt="" className="image" />
                </div>


                <div className="card-content">
                  <span className="card-title" id="naam">Combo of 14 Flavored Carbonated | Flavor - Jeeru | 300ML</span>

                  <div className="row">
                    <div className="col l6">
                      <p className="">M.R.P.: <span className="mrp">₹350.00 </span></p>
                      <p className="price red-text">Price: ₹280.00</p>
                      <p className="discount">You Save: ₹ 70.00 (20%)
                    Inclusive of all taxes</p>
                    </div>
                    <div className="col l6 center-align">
                      <h6 className="center-align">Add Items</h6>

                      <div className="row">
                        <div className="col l4 pull-l1">

                          <Button className="btn-floating btn-small waves-effect waves-light red white-text" onClick={Sub3}><i className="material-icons">remove</i></Button>


                        </div>
                        <div className="col l1 " id="dank">
                          <p className="number ">{Count3}</p>
                        </div>
                        <div className="col l3 ">

                          <Button className="btn-floating btn-small  waves-effect waves-light green white-text" onClick={Add3}><i className="material-icons">add</i></Button>


                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>




            </div>


            <div className="col s12 l5 offset-l2" id="mega">
              <div className="card z-depth-3">

                <div className="card-image " id="helo">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/71UU%2B7usPwL._SX679_.jpg" alt=""
                    className="image" />

                </div>


                <div className="card-content">
                  <span className="card-title" id="naam">Lay's Potato Chips - India's Magic Masala, 52g</span>

                  <div className="row">
                    <div className="col l6">
                      <p className="">M.R.P.: <span className="mrp">₹20.00 </span></p>
                      <p className="price red-text">Price: ₹20.00</p>
                      <p className="discount">You Save: ₹ 0.00 (0%)
                    Inclusive of all taxes</p>
                    </div>
                    <div className="col l6 center-align">
                      <h6 className="center-align">Add Items</h6>

                      <div className="row">
                        <div className="col l4 pull-l1">

                          <Button className="btn-floating btn-small waves-effect waves-light red white-text" onClick={Sub4}><i className="material-icons">remove</i></Button>


                        </div>
                        <div className="col l1 " id="dank">
                          <p className="number ">{Count4}</p>
                        </div>
                        <div className="col l3 ">

                          <Button className="btn-floating btn-small  waves-effect waves-light green white-text" onClick={Add4}><i className="material-icons">add</i></Button>


                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 l5" id="mega">
              <div className="card z-depth-3">

                <div className="card-image " id="helo">
                  <img src="https://cdn.shopify.com/s/files/1/1968/5547/products/bajeko-momo_600x.jpg?v=1590253450" alt=""
                    className="image" />
                </div>


                <div className="card-content">
                  <span className="card-title" id="naam">BAJEKO MASALA Momo Masala, 100 Grams</span>

                  <div className="row">
                    <div className="col l6">
                      <p className="">M.R.P.: <span className="mrp">₹60.00 </span></p>
                      <p className="price red-text">Price: ₹51.00</p>
                      <p className="discount">You Save: ₹ 9.00 (15%)
                    Inclusive of all taxes</p>
                    </div>
                    <div className="col l6 center-align">
                      <h6 className="center-align">Add Items</h6>

                      <div className="row">
                        <div className="col l4 pull-l1">

                          <Button className="btn-floating btn-small waves-effect waves-light red white-text" onClick={Sub5}><i className="material-icons">remove</i></Button>


                        </div>
                        <div className="col l1 " id="dank">
                          <p className="number ">{Count5}</p>
                        </div>
                        <div className="col l3 ">

                          <Button className="btn-floating btn-small  waves-effect waves-light green white-text" onClick={Add5}><i className="material-icons">add</i></Button>


                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>




            </div>


            <div className="col s12 l5 offset-l2" id="mega">
              <div className="card z-depth-3">

                <div className="card-image " id="helo">
                  <img src="https://5.imimg.com/data5/OP/GB/PC/SELLER-102894273/frooti-500x500.jpg" alt="" className="image" />

                </div>


                <div className="card-content">
                  <span className="card-title" id="naam">Parle Agro Frooti Mango Drink, Size: 160 Ml</span>

                  <div className="row">
                    <div className="col l6">
                      <p className="">M.R.P.: <span className="mrp">₹10.00 </span></p>
                      <p className="price red-text">Price: ₹10.00</p>
                      <p className="discount">You Save: ₹0.00 (0%)
                    Inclusive of all taxes</p>
                    </div>
                    <div className="col l6 center-align">
                      <h6 className="center-align">Add Items</h6>

                      <div className="row">
                        <div className="col l4 pull-l1">

                          <Button className="btn-floating btn-small waves-effect waves-light red white-text" onClick={Sub6}><i className="material-icons">remove</i></Button>


                        </div>
                        <div className="col l1 " id="dank">
                          <p className="number ">{Count6}</p>
                        </div>
                        <div className="col l3 ">

                          <Button className="btn-floating btn-small  waves-effect waves-light green white-text" onClick={Add6}><i className="material-icons">add</i></Button>


                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>



      <div className="row details">

        <div className="col s12 l4 white z-depth-3" id="ttl">
          <h5 className="total purple-text text-darken-3">Amount details and Grand total </h5>
          <div className="product_amt  purple lighten-5">
            <p className="amt">Total amount
          <span className="amtnum right">₹<span>{Tamount}</span></span>
            </p>
            <p className="ship">Shipping charges
          <span className="shipnum right">₹<span>50</span></span>
            </p>
            <hr />
            <p className="grand">Grand Total
          <span className="grandnum right">₹<span>{Gamount}</span></span>
            </p>
            <button className="btn purple waves-effect waves-light" onClick={Congrats}>Checkout</button>
          </div>
        </div>

        <div className="col s12 l3 white z-depth-3 offset-l1" id="cup">
          <h5 className="coupon purple-text text-darken-3">Have a Coupon Code?</h5>
          <div className="couponnum purple lighten-5 input-field">
            <input placeholder="Coupon" id="first_name" type="text" className="validate" autoComplete="off" onChange={ItemEvent} />
            {/* <p className="result">{kunnu}</p> */}
            <button className="btn purple waves-effect waves-light dank" onClick={ListOfItems}>APPLY</button>
          </div>
        </div>

        <div className="col s12 l3 white z-depth-3 offset-l1" id="del">
          <h5 className=" feedback purple-text text-darken-3">Any suggesions/feedback?</h5>
          <div className="delivery purple lighten-5 input-field">
            <textarea id="textarea1" className="materialize-textarea" placeholder="Feedback" onChange={ItemEvent2}></textarea>
            <button className="btn purple waves-effect waves-light" onClick={ListOfItems2}>SEND</button>
          </div>

        </div>


      </div>
    </div>
  );
};

export default App;