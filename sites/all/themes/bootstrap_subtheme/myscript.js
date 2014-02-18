jQuery(document).ready(function() {
								//alert('helloooooooooooo111');
								jQuery( "#edit-field-profile-function-value-wrapper .form-control" ).append( "<div class='funmoreoption'><a href=''><span>Show more</span></a></div>" );
								jQuery( ".form-item-edit-field-profile-function-value-entrepreneurowner" ).hide();
								jQuery( ".form-item-edit-field-profile-function-value-finance" ).hide();
								jQuery( ".form-item-edit-field-profile-function-value-general-management" ).hide();
								jQuery( ".form-item-edit-field-profile-function-value-human-resources" ).hide();
								jQuery( ".form-item-edit-field-profile-function-value-investor" ).hide();
								jQuery( ".form-item-edit-field-profile-function-value-marketing-pr" ).hide();
								jQuery( ".form-item-edit-field-profile-function-value-operation" ).hide();
								jQuery( ".form-item-edit-field-profile-function-value-product" ).hide();
								jQuery( ".funmoreoption" ).click(function() {
															  
						        	jQuery( ".form-item-edit-field-profile-function-value-entrepreneurowner" ).toggle();
								jQuery( ".form-item-edit-field-profile-function-value-finance" ).toggle();
								jQuery( ".form-item-edit-field-profile-function-value-general-management" ).toggle();
								jQuery( ".form-item-edit-field-profile-function-value-human-resources" ).toggle();
								jQuery( ".form-item-edit-field-profile-function-value-investor" ).toggle();
								jQuery( ".form-item-edit-field-profile-function-value-marketing-pr" ).toggle();
								jQuery( ".form-item-edit-field-profile-function-value-operation" ).toggle();
								jQuery( ".form-item-edit-field-profile-function-value-product" ).toggle();
								
								    var $span = jQuery(this).find('span');
    								if($span.text() == "Show more"){
							        $span.text("Show less");
								    } else {
							        $span.text("Show more");
    								}
								
													return false;		  
															  });
								
								jQuery( "#edit-field-profile-industry-value-wrapper .form-control" ).append( "<div class='indmoreoption'><a href=''><span>Show more</span></a></div>" );
								jQuery( ".form-item-edit-field-profile-industry-value-bio-science-chemistry" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-consulting" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-education" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-energy" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-entertainment" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-governmentnon-profit" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-hardwaremanufacturing" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-healthcaremedical" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-human-resources" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-investment" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-leisure" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-legal" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-real-estate" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-bio-science-chemistry" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-softwaretechnology" ).hide();
								
								jQuery( ".indmoreoption" ).click(function() {


									jQuery( ".form-item-edit-field-profile-industry-value-bio-science-chemistry" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-consulting" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-education" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-energy" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-entertainment" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-governmentnon-profit" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-hardwaremanufacturing" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-healthcaremedical" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-human-resources" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-investment" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-leisure" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-legal" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-real-estate" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-bio-science-chemistry" ).toggle();
									jQuery( ".form-item-edit-field-profile-industry-value-softwaretechnology" ).toggle();
									
									
									
								    var $span = jQuery(this).find('span');
    								if($span.text() == "Show more"){
							        $span.text("Show less");
								    } else {
							        $span.text("Show more");
    								}
								
													return false;

																		  });
								
								jQuery( "#edit-field-profile-location-value-wrapper .form-control" ).append( "<div class='locmoreoption'><a href=''><span>Show more</span></a></div>" );
								
								jQuery( ".form-item-edit-field-profile-location-value-us-new-york-city" ).hide();
								jQuery( ".form-item-edit-field-profile-location-value-us-san-francisco" ).hide();
								
								jQuery( ".locmoreoption" ).click(function() {
																		  
								jQuery( ".form-item-edit-field-profile-location-value-us-new-york-city" ).toggle();
								jQuery( ".form-item-edit-field-profile-location-value-us-san-francisco" ).toggle();
								
								var $span = jQuery(this).find('span');
    								if($span.text() == "Show more"){
							        $span.text("Show less");
								    } else {
							        $span.text("Show more");
    								}
								
													return false;
																		  
																		  });
								
								});