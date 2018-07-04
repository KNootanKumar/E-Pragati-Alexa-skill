var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function() { //Executes when a new session is launched
        this.emit('LaunchIntent');
    },

    'LaunchIntent': function() {
        this.emit(':ask', "Namaskaram! The Government of Andhra Pradesh (“GoAP”) has been making pioneering efforts to develop the Sunrise State of Andhra Pradesh as an innovation society of global repute, with a focus on enhancing the quality of life of its citizens, through high-quality education and healthcare, increased productivity in agriculture and allied activities, creation of employment by promoting electronics and information technology, and all, by providing good governance.I can help you find the below topics. Please choose an option About, Mission, Core Platform, Center Of Excellence, Proposals, Careers and Contact");
    },

    'vision': function() {
        this.emit(':ask', "e-Pragati is a framework that provides integrated services tocitizens through free flow of information. It is going to be used to usher in an era of good governance, characterized by efficiency, effectiveness, transparency, and foresight. e-Pragati, the Andhra Pradesh State Enterprise Architecture, is this new paradigm. It is a mission-centric approach and a framework, to galvanize the pan-government ecosystem by transcending boundaries to design and deliver services in a coordinated, integrated, efficient and equitable way that citizens and businesses demand and deserve, aimed to realize the Sunrise Andhra Vision 2022. Please choose an option Home or Bye");
    },
	 'BigPicture': function() {
        this.emit(':ask', "To develop Andhra Pradesh as a society of innovation of global repute, with a focus on enhancing the quality of life of its citizens, through high quality education and healthcare, increased productivity in agriculture and allied activities, creation of requisite employment potential by promoting electronics and IT industries, and above all, by providing good governance. Please choose an option Home or Bye");
    },
	 'AMAZON.StopIntent': function() {
        this.emit(':tell', "Please Rate us, Awesome, Not Good, Good, Poor");
    },
	 'CorePlatform': function() {
        this.emit(':ask', "Core platform - ePragati” is a software platform proposed to be implemented by ePragati Authority, consisting of 72 projects spanning across all major departments and components of GoAP. The meta-model of ePragati therefore, consists of layers of applications, built around the ePragati Core Platform. Please choose an option Home or bye");
    },
	 'IndustrySector': function() {
        this.emit(':ask', "Industry Sector Mission – strengthen un-organised sector, enhancing manufacturing contribution to GSDP, industry parks .The key focus areas of departments under Industry Sector mission include enhancing job opportunities in manufacturing, energy, mines and quarrying sectors by promoting Andhra Pradesh as one of the most attractive investment destinations where employee productivity is high, and it is simpler, faster and easier to do business. Please choose an option Home or Bye");
    },
	 'Infrastructure': function() {
        this.emit(':ask', "Infrastructure Development is critical for economic growth and plays a significant role in setting up an enabling platform for sustainable economic development. It includes services such as water, power and electricity, telecommunications, sewage and sanitation, gas, roads, railways, ports, airports, which promote commercial activities, production and consumption. Further, financial services such as banking, industrial and commercial development, tourism and entertainment and other segments also significantly contribute to the growth process. Please choose an option Home, Bye");
    },
	 'Knowledge_Skills': function() {
        this.emit(':ask', "The Knowledge Mission will be guided by the Honourable Chief Minister’s vision to transform Andhra Pradesh into an education and knowledge hub and develop institutions of higher learning that would conform to international standards and quality. Please choose an option Home, Bye");
    },
	 'Mission': function() {
        this.emit(':ask', "The Mission of e-Pragati, to provide citizen services in below areas.Please choose an option Social Empowerment, Primary Sector, Knowledge and Skills, Urban Development, Industry Sector, Infrastructure or Service Sector. Please choose an option Home or Bye");
    },
	 'PrimarySector': function() {
        this.emit(':ask', "Primary sector mission is reviving the agriculture sector and help the farming community is the most important priority for the state of Andhra Pradesh. The farming sector, despite subjected to frequent crisis, remains the major source of employment, supporting lakhs of farm families. Please choose an option Home,  Bye");
    },
	 'Principles': function() {
        this.emit(':ask', "Tenets for e-Pragati are codified below as general propositions applicable across the government.They form the basis for making decisions on state enterprise architecture. Please choose an option Home,  Bye");
    },

	 'ServiceSector': function() {
        this.emit(':ask', "Service Sector Mission – The mission focuses on enhancing job opportunities, IT based Governance, tourism. The Mission would focus on enhancing job opportunities and boosting GSDP. The key focus area of the departments under Service Sector mission is creating job opportunities by promoting tourism and information technology sectors thereby giving a thrust to tourism, hotel, real estate, banking, IT Services, transport and logistics. Please choose an option Home, Bye");
    },
	 'SocialEmpowerment': function() {
        this.emit(':ask', "Strategic interventions of state are required to establish a healthy society. Andhra Pradesh state despite showing decent economic progress, lags behind its southern counterparts. Reduction of IMR and MMR remain critical – There are 9 lakh births per annum and with MMR of 110 means 990 pregnant women will die in one year. It requires preventing 450 deaths to reach Kerala’s level of MMR of 60. Pregnant women having less than 40 kg weight, less than 21 year age and multiple pregnancies cause is the of concern and government support most critical. Preventing the deaths of infant children is important. Data reveals that the State needs to prevent 25,000 deaths of children every year to reach the level of Kerala. Please choose an option Home, Bye");
    },
	 'Urban Development': function() {
        this.emit(':ask', "Urban Development Mission – cities and towns as engines of growth and development, planned and balanced urbanization to accelerate growth and reduce poverty, urban renewal in a mission mode.The key focus areas of departments under Urban Development mission include developing major cities and towns into Smart cities, which should act as engines of growth and development and lead to planned and balanced urbanization. The mission lays special focus on improved transportation, housing and solid waste management, safety and security of citizens and poverty reduction. Please choose an option Home or Bye");
    },
     'ValueProportion': function() {
        this.emit(':ask', "In future, Governments will be more connected than ever before by being FAST (Flat, Agile, Streamlined, and Tech-Savvy). With its ability to manage complexity, e-Pragati will emerge as the essential means to drive public sector transformation and realize connected government with demonstrable benefits. Please choose an option Home or Bye");
    },

    'AMAZON.CancelIntent': function() {
        this.emit(':ask', " Namaskaram! The Government of Andhra Pradesh (“GoAP”) has been making pioneering efforts to develop the Sunrise State of Andhra Pradesh as an innovation society of global repute, with a focus on enhancing the quality of life of its citizens, through high-quality education and healthcare, increased productivity in agriculture and allied activities, creation of employment by promoting electronics and information technology, and all, by providing good governance.I can help you find the below topics. Please choose an option About, Mission, Core Platform, Center Of Excellence, Proposals, Careers and Contact");
    },
	'AMAZON.HelpIntent': function() {
        this.emit(':ask', " Namaskaram! The Government of Andhra Pradesh (“GoAP”) has been making pioneering efforts to develop the Sunrise State of Andhra Pradesh as an innovation society of global repute, with a focus on enhancing the quality of life of its citizens, through high-quality education and healthcare, increased productivity in agriculture and allied activities, creation of employment by promoting electronics and information technology, and all, by providing good governance.I can help you find the below topics. Please choose an option About, Mission, Core Platform, Center Of Excellence, Proposals, Careers and Contact");
    },

    'Proposals': function() {
        this.emit(':ask', "There are three proposals in e-Pragati. Please choose Empanelment, Cloud Services and Department RFP's. Please choose an option Home or Bye");
    },
    'Empanelment': function() {
      this.emit(':ask', "As part of the Andhra Pradesh state’s “Sunrise AP 2022” mission to enhance the quality of life for its citizens, e-Pragati will bring integrated government services directly to citizens online. This saves time and costs by reducing the need to visit government offices and multiple departments while also eliminating paper-based inefficiencies and manual processes. Please choose an option Home or Bye")
    },
    'CloudServices': function() {
      this.emit(':ask', "page link : http://e-pragati.in/cloud-services/ . Please choose an option Home or Bye");
    },
    'DepartmentRFP': function() {
      this.emit(':ask', "You can find documents on various departments with the help of link given . page link :http://e-pragati.in/department-rfps/ . Please choose an option Home or Bye");
    },
    'Careers': function() {
      this.emit(':ask', "You can find latest available jobs with the help of give link . page link : http://e-pragati.in/jobs/. Please choose an option Home or Bye");
    },
    'Contacts': function() {
      this.emit(':ask', "It is located at 3rd Floor NTR Administrative Block, Pandit Nehru Bus Station NH – 65, Vijayawada – 520001, Andhra Pradesh, India. Please choose an option Home or Bye");

    }

};
