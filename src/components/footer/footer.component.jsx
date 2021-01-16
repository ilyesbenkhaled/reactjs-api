import React from 'react';
import './footer.style.css';


const Footer = () => (
 <div className="footer">

 <h2>What our customers say</h2>
 		  <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">

			  <ol className="carousel-indicators">
			    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
			    <li data-target="#myCarousel" data-slide-to="1"></li>
			    <li data-target="#myCarousel" data-slide-to="2"></li>
			  </ol>

		      <div className="carousel-inner" role="listbox">
			    <div className="item active">
			    <h4>"This company is the best. I am so happy with the result! Michael Roe, Vice President, Comment Box"</h4>
			    </div>

		     </div>

		  <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
		    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		    <span className="sr-only">Previous</span>
		  </a>
		  <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
		    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		    <span className="sr-only">Next</span>
		  </a>
		</div>

  </div>
);

export default Footer;
