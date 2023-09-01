import "./Footer.css";
let Footer = ()=>{

    return(
        <div className="Footer_class">
            <div className="child_1">
                <img src="images/logo-footer.png" alt="footer-logo" id="footer-logo"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium nulla fugit animi deserunt illo rem laborum ipsum facilis sed ea necessitatibus cum quam repellendus, atque, odio dolor quas dignissimos enim recusandae officiis tenetur unde consequatur velit! Fuga ut illum, eum consequatur dolorem doloribus veniam est nostrum, et tempore debitis?</p>


            </div>
            <div className="child_2">
                <div className="ul_div">
                    <h3 className="footer_heading">Useful Links</h3>
                    <ul>
                        <li id="footer-li"><a href="" id="footer-link">Career</a></li>
                        <li id="footer-li"><a href="" id="footer-link">About Us</a></li>
                        <li id="footer-li"><a href="" id="footer-link">Contact Us</a></li>
                        <li id="footer-li"><a href="" id="footer-link">More ...</a></li>
                    </ul>

                </div>
                <div className="ul_div">
                <h3 className="footer_heading">Useful Links</h3>
                    <ul>
                    <li id="footer-li"><a href=""  id="footer-link">Career</a></li>
                        <li id="footer-li"><a href="" id="footer-link">About Us</a></li>
                        <li id="footer-li"><a href="" id="footer-link">Contact Us</a></li>
                        <li id="footer-li"><a href="" id="footer-link">More ...</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Footer;