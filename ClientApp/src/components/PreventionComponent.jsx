import React, { Component } from 'react';

export default class PreventionComponent extends Component{
    
    render(){
        return(
            <div id="content">
                <div>
                    <h3>Basic protective measures against the new coronavirus</h3>
                    <div className="preventionContents">
                        <p>Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Most people who become infected experience mild illness and recover, but it can be more severe for others. Take care of your health and protect others by doing the following:</p>
                        
                        <div className="iframeContainer">
                            <iframe width="550" height="300" src="https://www.youtube.com/embed/bPITHEiFWLc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>

                        <div>
                            <h3>Wash your hands frequently</h3>
                            <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.</p><p><strong>Why? </strong>Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.</p>
                            
                            <h3>Maintain social distancing</h3>
                            <p>Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.</p><p><strong>Why?</strong> When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.</p>
                            
                            <h3>Avoid touching eyes, nose and mouth</h3>
                            <p><strong>Why? </strong>Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.</p>
                            
                            <h3>Practice respiratory hygiene</h3>
                            <p>Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.</p>
                            <p><strong>Why? </strong>Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.</p>
                            
                            <h3>If you have fever, cough and difficulty breathing, seek medical care early</h3>
                            <p>Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.</p>
                            <p><strong>Why? </strong>National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.</p>
                            
                            <h3>Stay informed and follow advice given by your healthcare provider</h3>
                            <p>Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on how to protect yourself and others from COVID-19.</p>
                            <p><strong>Why? </strong>National and local authorities will have the most up to date information on whether COVID-19 is spreading in your area. They are best placed to advise on what people in your area should be doing to protect themselves.</p>
                        </div>

                    </div>
                </div>
            </div>                
        );
    }
}