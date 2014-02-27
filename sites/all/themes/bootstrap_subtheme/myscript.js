jQuery(document).ready(function() {
								jQuery( "#edit-field-profile-function-value-wrapper .form-control" ).append( "<div class='funmoreoption'><a href=''><span>Show more</span></a></div>" );
								jQuery( ".form-item-edit-field-profile-function-value-accounting" ).hide();
								jQuery( ".form-item-edit-field-profile-function-value-biz-dev-amp-sales" ).hide();
								jQuery( ".form-item-edit-field-profile-function-value-marketing-amp-pr" ).hide();
								jQuery( ".form-item-edit-field-profile-function-value-operation" ).hide();
								jQuery( ".form-item-edit-field-profile-function-value-other" ).hide();
								jQuery( ".funmoreoption" ).click(function() {
															  
						        	jQuery( ".form-item-edit-field-profile-function-value-accounting" ).toggle();
								jQuery( ".form-item-edit-field-profile-function-value-biz-dev-amp-sales" ).toggle();
								jQuery( ".form-item-edit-field-profile-function-value-marketing-amp-pr" ).toggle();
								jQuery( ".form-item-edit-field-profile-function-value-operation" ).toggle();
								jQuery( ".form-item-edit-field-profile-function-value-other" ).toggle();
								    var $span = jQuery(this).find('span');
    								if($span.text() == "Show more"){
							        $span.text("Show less");
								    } else {
							        $span.text("Show more");
    								}
								
													return false;		  
															  });
								
								jQuery( "#edit-field-profile-industry-value-wrapper .form-control" ).append( "<div class='indmoreoption'><a href=''><span>Show more</span></a></div>" );
								jQuery( ".form-item-edit-field-profile-industry-value-real-estate" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-accounting-amp-auditing" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-real-estate" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-energy-amp-utilities" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-legal-services" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-manufacturing-amp-consumer-goods" ).hide();
								jQuery( ".form-item-edit-field-profile-industry-value-other" ).hide();
								jQuery( ".indmoreoption" ).click(function() {


								jQuery( ".form-item-edit-field-profile-industry-value-real-estate" ).toggle();
                                                                jQuery( ".form-item-edit-field-profile-industry-value-accounting-amp-auditing" ).toggle();
                                                                jQuery( ".form-item-edit-field-profile-industry-value-real-estate" ).toggle();
                                                                jQuery( ".form-item-edit-field-profile-industry-value-energy-amp-utilities" ).toggle();
                                                                jQuery( ".form-item-edit-field-profile-industry-value-legal-services" ).toggle();
                                                                jQuery( ".form-item-edit-field-profile-industry-value-manufacturing-amp-consumer-goods" ).toggle();
                                                                jQuery( ".form-item-edit-field-profile-industry-value-other" ).toggle();								
									
									
								    var $span = jQuery(this).find('span');
    								if($span.text() == "Show more"){
							        $span.text("Show less");
								    } else {
							        $span.text("Show more");
    								}
								
													return false;

																		  });
								
								jQuery( "#edit-field-profile-location-value-wrapper .form-control" ).append( "<div class='locmoreoption'><a href=''><span>Show more</span></a></div>" );
								jQuery( ".form-item-edit-field-profile-location-value-china-other" ).hide();
								jQuery( ".form-item-edit-field-profile-location-value-us-new-york-city" ).hide();
								jQuery( ".form-item-edit-field-profile-location-value-us-other" ).hide();
								
								jQuery( ".locmoreoption" ).click(function() {
																		  
								jQuery( ".form-item-edit-field-profile-location-value-us-new-york-city" ).toggle();
								jQuery( ".form-item-edit-field-profile-location-value-us-other" ).toggle();
								jQuery( ".form-item-edit-field-profile-location-value-china-other" ).toggle();

								var $span = jQuery(this).find('span');
    								if($span.text() == "Show more"){
							        $span.text("Show less");
								    } else {
							        $span.text("Show more");
    								}
								
													return false;
																		  
																		  });
								
								});
