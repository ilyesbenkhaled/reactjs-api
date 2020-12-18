import React from 'react';
import './footer.style.css';


const Footer = () => (
 <div className="footer">
   
 <h2>What our customers say</h2>
 		  <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
		 
			  <ol class="carousel-indicators">
			    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			    <li data-target="#myCarousel" data-slide-to="1"></li>
			    <li data-target="#myCarousel" data-slide-to="2"></li>
			  </ol>

		      <div class="carousel-inner" role="listbox">
			    <div class="item active">
			    <h4>"This company is the best. I am so happy with the result! Michael Roe, Vice President, Comment Box"</h4>
			    </div>

		     </div>

		  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
		    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		    <span class="sr-only">Previous</span>
		  </a>
		  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
		    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		    <span class="sr-only">Next</span>
		  </a>
		</div>

  </div>
);

export default Footer;
