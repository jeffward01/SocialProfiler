webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var app = angular.module('app',
	    [
	        'ui.router', 'LocalStorageModule', 'angular-loading-bar', 'ui.bootstrap', 'ngSanitize', 'angularSpinner',
	        'rzModule', '720kb.tooltips'
	    ])
	    .config([
	        'tooltipsConfProvider', function configConf(tooltipsConfProvider) {
	            tooltipsConfProvider.configure({
	                'smart': true,
	                'size': 'large',
	                'speed': 'fast',
	                'tooltipTemplateUrlCache': true
	                //etc...
	            });
	        }
	    ]);

	//Custom Filters
	app.filter('timezone', function () {
	    return function (val) {
	        if (val == null) {
	            return;
	        }
	        var date = new Date(val);
	        return new Date(date.getUTCFullYear(),
	                        date.getUTCMonth(),
	                        date.getUTCDate(),
	                        date.getUTCHours(),
	                        date.getUTCMinutes(),
	                        date.getUTCSeconds());
	    };
	});


	//Custom Directives



	//Router
	app.config(function ($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/home');
	    $stateProvider.state('Home',
	    {
	        url: "/home",
	        templateUrl: "app/views/home.html",
	        controller: "homeController",
	        data:
	        {
	            displayName: "Home"
	        }
	    });

	    $stateProvider.state('About',
	  {
	      url: "/about-us",
	      templateUrl: "app/views/about.html",
	      controller: "aboutController",
	      data:
	      {
	          displayName: "About"
	      }
	  });

	    $stateProvider.state('Contact',
	  {
	      url: "/contact-us",
	      templateUrl: "app/views/contact.html",
	      controller: "contactController",
	      data:
	      {
	          displayName: "Contact Us"
	      }
	  });


	    __webpack_require__(1);
	    __webpack_require__(7);

	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(2);

	angular.module('app').controller('aboutController', __webpack_require__(4));
	angular.module('app').controller('contactController', __webpack_require__(5));
	angular.module('app').controller('homeController', __webpack_require__(6));

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	'use strict'
	app.controller('aboutController', ['$scope', function ($scope) {






	}]);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict'
	app.controller('contactController', ['$scope', function ($scope) {
	    





	}]);

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict'
	app.controller('homeController',
	[
	    '$scope', 'toastrService', 'demoTextService', function ($scope, toastrService, demoTextService) {
	        $scope.PageTitle = "Social Profiler";
	        $scope.emotionalRangeViewAll = false;
	        $scope.opennessViewAll = false;
	        $scope.conscientiousnessViewAll = false;
	        $scope.introVersionExtroViewAll = false;
	        $scope.aggreeabilitynessViewAll = false;
	        $scope.expandConsumerNeeds = false;
	        $scope.inputText = demoTextService.getObamaText();

	        $scope.toggleObamaText = function() {
	            $scope.inputText = demoTextService.getObamaText();
	        }

	        $scope.toggleMichText = function() {
	            $scope.inputText = demoTextService.getMichikiusaText();
	        }

	        $scope.toggleGandhiText = function() {
	            $scope.inputText = demoTextService.getGahndiText();
	        }

	        $scope.toggleCustomText = function() {
	            $scope.inputText = "";
	        }

	        $scope.toggleConsumerNeeds = function () {
	            $scope.expandConsumerNeeds = !$scope.expandConsumerNeeds;
	        }
	        $scope.teggleEmotionalRange = function () {
	            $scope.emotionalRangeViewAll = !$scope.emotionalRangeViewAll;
	        }

	        $scope.toggleOpenness = function () {
	            $scope.opennessViewAll = !$scope.opennessViewAll;
	        }

	        $scope.toggleConscientiousness = function () {
	            $scope.conscientiousnessViewAll = !$scope.conscientiousnessViewAll;
	        }

	        $scope.toggleIntroExtra = function () {
	            $scope.introVersionExtroViewAll = !$scope.introVersionExtroViewAll;
	        }

	        $scope.toggleAgreeability = function () {
	            $scope.aggreeabilitynessViewAll = !$scope.aggreeabilitynessViewAll;
	        }

	        $scope.analyze = function(inputText) {
	            //do work
	        }

	        $scope.emotionalRange = {
	            value: 80,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };
	        //EmotionalRanges
	        $scope.melancholy = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.impulsiveness = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.selfConsciousness = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.stress = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Fiery = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };
	        $scope.worry = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        //Openness
	        $scope.openness = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Intellect = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Authority = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Adventurousness = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Artistic = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Emotianlity = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Imagination = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        //Conscientiousness
	        $scope.Conscientiousness = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Cautiousness = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Effiacy = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Achievement = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Discipline = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Dutifulness = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Orderliness = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        //Introversion/Extraversion
	        $scope.InTraExtraversion = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Assertivness = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Activity = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Outgoing = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Gregariousness = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Cherrfulness = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Excitment = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        //Agreeableness
	        $scope.Agreeableness = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Sympathy = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Uncompromising = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Altruism = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Cooperation = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Trust = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Modesty = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        //Consumer needs
	        $scope.Structure = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Curosity = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Challenge = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Practicality = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Stability = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Ideal = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Excitement = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Liberty = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Closeness = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Harmony = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Love = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.SelfExpression = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        //Values
	        $scope.Stimulation = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Tradition = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Helping = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Pleasurelife = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        $scope.Achievement = {
	            value: 70,
	            options: {
	                floor: 0,
	                ceil: 100,
	                readOnly: true
	            }
	        };

	        //Descriptions
	        //Personality
	        $scope.EmotionalRangeDescription = "Higher: More likely to have negative emotions or get upset. It could mean they are going through a tough time. Lower: More calm and less likely to get upset. It does not mean they are positive, or happy people.";
	        $scope.MelancholyDescription = "Normal tendency to experience feelings of guilt, sadness, hopelessness, or loneliness. Note: this application cannot diagnose a mental illness.";
	        $scope.ImpulsivnessDescription = "Tendency to act on cravings and urges rather over resisting them or delaying gratification.";
	        $scope.SelfConsciousnessDescription = "Concern with rejection, embarrassment; shyness.";
	        $scope.StressDescription = "Difficulty in coping with stress or pressure in difficult situations.";
	        $scope.FieryDescription = "Tendency to experience–but not necessarily express–anger or frustration.";
	        $scope.WorryDescription = "Tendency to dwell on difficulty or troubles; easily experience unease or concern.";

	        $scope.opennessDescription = "Openness to experience. Higher: Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things. Lower: Preferring the plain, straightforward, and obvious over the complex, ambiguous, and subtle.";
	        $scope.intellectDescription = "Intellectual curiosity; openness to new ideas.";
	        $scope.AuthorityDescription = "Openness to re-examine own values and traditions; readiness to challenge authority.";
	        $scope.AdventousnessDescription = "Eagerness to trying new activities and experiencing new things.";
	        $scope.ArtisticInterests = "Appreciation for art and beauty, both man-made and in nature.";
	        $scope.EmotionalDescription = "Emotional availability; awareness of own feelings.";
	        $scope.imaginagationDescription = "Openness to creating an inner world of fantasy.";

	        $scope.ConscientousnessDescription = "Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations. Lower: More likely to prefer the spontaneous over the planned.";
	        $scope.cautiousnessDescription = "Tendency to think things through before acting or speaking.";
	        $scope.selfEfficentyDescription = "Belief in one's own competence.";
	        $scope.AchievementStrivingDesciption = "The need for personal achievement and sense of direction.";
	        $scope.selfDisiplineDescription = "Will-power; the capacity to begin tasks and follow through to completion in spite of boredom or distractions.";
	        $scope.dutifullnessDescription = "Sense of duty; amount of emphasis placed on fulfilling obligations.";
	        $scope.OrderlinessDescription = "Personal organization, tidiness, neatness.";

	        $scope.IntroVersionExtraDescription = "Higher: More energetic and pronounced engagement with the external world. Likes high group visibility, talking, and asserting themselves. Lower: Needs less stimulation and are more independent of their social world. It does not mean they are shy, un-friendly, or antisocial.";
	        $scope.AssertivnessDesctiption = "Forcefulness of expression; pursuit of leadership and social ascendancy; desire to direct the activities of others.";
	        $scope.activityLevleDescription = "Pace of living; level of busyness.";
	        $scope.outgoingDescription = "Interest in and friendliness towards others; socially confident.";
	        $scope.gregiousnessDescription = "Fondness for the company of others; sociability.";
	        $scope.cheerfullnessDescription = "Tendency to experience or express positive emotions.";
	        $scope.excitmentSeekingDescription = "A need for environmental stimulation.";

	        $scope.AggreeablenessDescription = "Higher: Value getting along with others. They have a more optimistic view of human nature. Lower: Value self interests over others. They are more skeptical of others' motives.";
	        $scope.SympathyDescription = "Attitude of compassion for others; kindness.";
	        $scope.uncompromisingDescription = "Frank and genuine in expression; candid, blunt.";
	        $scope.altruismDescription = "Active and genuine concern for the welfare of others.";
	        $scope.cooperationDescription = "Dislike of confrontations. Responding to interpersonal conflict with a willingness to compromise.";
	        $scope.trustDescription = "Level of belief in the sincerity and good intentions of others.";
	        $scope.ModestyDescription = "Tendency to be unassuming and play down own achievements; humility.";

	        //Consumer Needs
	        $scope.structureDescription = "A need for organization, planning, and things that have a clear purpose.";
	        $scope.curosityDescription = "A need to pursue experiences that foster learning, exploration, and growth.";
	        $scope.challengeDescription = "A desire to achieve, succeed, compete, or pursue experiences that test one's abilities.";
	        $scope.practicalityDescription = "A desire for getting the job done, skill, and efficiency.";
	        $scope.StabilityDescription = "A need for the sensible, tried and tested, with a good track record and a known history.";
	        $scope.idealDescription = "A desire to satisfy one's idea of perfection in a lifestyle or experience, oftentimes seen as pursuing a sense of community.";
	        $scope.excitmentDescription = "A need to pursue experiences or lead a lifestyle that arouses enthusiasm and eagerness.";
	        $scope.libertyDescription = "A need to escape, a desire for new experiences, new things.";
	        $scope.closnessDescription = "A need to nurture or be nurtured; a feeling of belonging.";
	        $scope.harmonyDescription = "A need to appreciate or please other people, their viewpoints, and feelings.";
	        $scope.loveDescription = "Social contact, whether one-to-one or one-to-many.";
	        $scope.selfExpressionDescription = "A desire to discover and assert one's identity.";

	        //Values
	        $scope.stimulationDescription = "Excitement, novelty, and challenge in life.";
	        $scope.traditionDescription = "Respect, commitment, and acceptance of the customs and ideas that one's culture and/or religion provides.";
	        $scope.helpingotherDescription =
	            "Preserving and enhancing the welfare of those with whom one is in frequent personal contact.";
	        $scope.pleasureDescription = "Pleasure or sensuous gratification for oneself.";
	        $scope.achievementDescription = "Personal success through demonstrating competence according to social standards.";

	        
	    }
	]);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(2);

	angular.module('app').factory('demoTextService', __webpack_require__(8));
	angular.module('app').factory('toastrService', __webpack_require__(9));


/***/ },
/* 8 */
/***/ function(module, exports) {

	angular.module('app').factory('demoTextService', function() {

	    var demoTextFactory = {};


	    var obamaDemoText = "Well, thank you very much, Jim, for this opportunity. I want to thank Governor Romney and the University\
	        of Denver for your hospitality.\
	        There are a lot of points I want to make tonight, but the most important one is that 20 years ago I\
	        became the luckiest man on Earth because Michelle Obama agreed to marry me.\
	        And so I just want to wish, Sweetie, you happy anniversary and let you know that a year from\
	        now we will not be celebrating it in front of 40 million people.\
	        You know, four years ago we went through the worst financial crisis since the Great Depression.\
	        Millions of jobs were lost, the auto industry was on the brink of collapse. The financial system\
	        had frozen up.\
	        And because of the resilience and the determination of the American people, we've begun to\
	        fight our way back. Over the last 30 months, we've seen 5 million jobs in the private sector\
	        created. The auto industry has come roaring back. And housing has begun to rise.\
	        But we all know that we've still got a lot of work to do. And so the question here tonight is not\
	        where we've been, but where we're going.\
	        Governor Romney has a perspective that says if we cut taxes, skewed towards the wealthy, and\
	        roll back regulations, that we'll be better off. I've got a different view.\
	        I think we've got to invest in education and training. I think it's important for us to develop new\
	        sources of energy here in America, that we change our tax code to make sure that we're helping\
	        small businesses and companies that are investing here in the United States, that we take some of\
	        the money that we're saving as we wind down two wars to rebuild America and that we reduce\
	        our deficit in a balanced way that allows us to make these critical investments.\
	        Now, it ultimately is going to be up to the voters — to you — which path we should take. Are we\
	        going to double on top-down economic policies that helped to get us into this mess or do we\
	        embrace a new economic patriotism that says America does best when the middle class does\
	        best? And I'm looking forward to having that debate.\
	Well, let me talk specifically about what I think we need to do. First, we've\
	got to improve our education system and we've made enormous progress drawing on ideas both\
	from Democrats and Republicans that are already starting to show gains in some of the toughest\
	to deal with schools. We've got a program called Race to the Top that has prompted reforms in\
	46 states around the country, raising standards, improving how we train teachers.\
	So now I want to hire another 100,000 new math and science teachers, and create 2 million more\
	        slots in our community colleges so that people can get trained for the jobs that are out there right\
	        now. And I want to make sure that we keep tuition low for our young people.\
	        When it comes to our tax code, Governor Romney and I both agree that our corporate tax rate is\
	        too high, so I want to lower it, particularly for manufacturing, taking it down to 25 percent. But I\
	        also want to close those loopholes that are giving incentives for companies that are shipping jobs\
	        overseas. I want to provide tax breaks for companies that are investing here in the United States.\
	        On energy, Governor Romney and I, we both agree that we've got to boost American energy\
	        production, and oil and natural gas production are higher than they've been in years. But I also\
	        believe that we've got to look at the energy sources of the future, like wind and solar and\
	        biofuels, and make those investments.\
	        So all of this is possible. Now, in order for us to do it, we do have to close our deficit, and one of\
	        the things I'm sure we'll be discussing tonight is, how do we deal with our tax code? And how do\
	we make sure that we are reducing spending in a responsible way, but also, how do we have\
	enough revenue to make those investments?\
	And this is where there's a difference, because Governor Romney's central economic plan calls\
	for a $5 trillion tax cut — on top of the extension of the Bush tax cuts — that's another trillion\
	dollars — and $2 trillion in additional military spending that the military hasn't asked for. That's\
	$8 trillion. How we pay for that, reduce the deficit, and make the investments that we need to\
	        make, without dumping those costs onto middle-class Americans, I think is one of the central\
	        questions of this campaign.\
	        When you add up all the loopholes and deductions that upper-income\
	        individuals can — are currently taking advantage of, you take those all away, you don't come\
	        close to paying for $5 trillion in tax cuts and $2 trillion in additional military spending.\
	            OBAMA: And that's why independent studies looking at this said the only way to meet\
	        Governor Romney's pledge of not reducing the deficit or -- or — or not adding to the deficit is by\
	        burdening middle-class families. The average middle-class family with children would pay about               \
	        $2,000 more.                                                                                                 \
	        Now, thats not my analysis. Thats the analysis of economists who have looked at this. And —                \
	        and that kind of top — top-down economics, where folks at the top are doing well, so the average             \
	        person making $3 million is getting a $250,000 tax break, while middle-class families are                    \
	        burdened further, thats not what I believe is a recipe for economic growth.                                 \
	        Well, for 18 months hes been running on this tax plan. And now, five                                        \
	        weeks before the election, hes saying that his big, bold idea is, Never mind.                             \
	        And the fact is that if you are lowering the rates the way you described, Governor, then it is not           \
	        possible to come up with enough deductions and loopholes that only affect high-income                        \
	        individuals to avoid either raising the deficit or burdening the middle class. Its — its math. Its        \
	        arithmetic.                                                                                                  \
	        Now, Governor Romney and I do share a deep interest in encouraging small-business growth. So                 \
	        at the same time that my tax plan has already lowered taxes for 98 percent of families, I also               \
	        lowered taxes for small businesses 18 times. And what I want to do is continue the tax rates —               \
	        the tax cuts that we put into place for small businesses and families.                                       \
	        But I have said that for incomes over $250,000 a year, that we should go back to the rates that we           \
	        had when Bill Clinton was president, when we created 23 million new jobs, went from deficit to               \
	        surplus, and created a whole lot of millionaires to boot.                                                    \
	        And the reason this is important is because by doing that, we cannot only reduce the deficit, we             \
	        cannot only encourage job growth through small businesses, but were also able to make the                   \
	        investments that are necessary in education or in energy.                                                    \
	        And we do have a difference, though, when it comes to definitions of small business. Under —                 \
	        under my plan, 97 percent of small businesses would not see their income taxes go up. Governor               \
	        Romney says, well, those top 3 percent, theyre the job creators, theyd be burdened.                        \
	        But under Governor Romneys definition, there are a whole bunch of millionaires and                          \
	        billionaires who are small businesses. Donald Trump is a small business. Now, I know Donald                  \
	        Trump doesnt like to think of himself as small anything, but — but thats how you define small              \
	        businesses if youre getting business income.                                                                \
	        And that kind of approach, I believe, will not grow our economy, because the only way to pay                 \
	        for it without either burdening the middle class or blowing up our deficit is to make drastic cuts           \
	        in things like education, making sure that we are continuing to invest in basic science and                  \
	        research, all the things that are helping America grow. And I think that would be a mistake.                 \
	        Jim, I — you may want to move onto another topic, but I — I would just say                                   \
	        this to the American people. If you believe that we can cut taxes by $5 trillion and add $2 trillion         \
	        in additional spending that the military is not asking for, $7 trillion — just to give you a sense,          \
	        over 10 years, thats more than our entire defense budget — and you think that by closing                    \
	        loopholes and deductions for the well-to-do, somehow you will not end up picking up the tab,                 \
	        then Governor Romneys plan may work for you.                                                                \
	                                                                                                                     \
	        But I think math, common sense, and our history shows us thats not a recipe for job growth.                 \
	        Look, weve tried this. Weve tried both approaches. The approach that Governor Romneys                     \
	        talking about is the same sales pitch that was made in 2001 and 2003, and we ended up with the               \
	        slowest job growth in 50 years, we ended up moving from surplus to deficits, and it all                      \
	        culminated in the worst financial crisis since the Great Depression.                                         \
	                                                                                                                     \
	        Bill Clinton tried the approach that Im talking about. We created 23 million new jobs. We went              \
	        from deficit to surplus. And businesses did very well. So, in some ways, weve got some data on              \
	        which approach is more likely to create jobs and opportunity for Americans and I believe that the            \
	        economy works best when middle-class families are getting tax breaks so that theyve got some                \
	        money in their pockets, and those of us who have done extraordinarily well because of this                   \
	        magnificent country that we live in, that we can afford to do a little bit more to make sure were           \
	        not blowing up the deficit.                                                                                  \
	                                                                                                                     \
	        I like it.                                                                                                   \
	                                                                                                                     \
	        When I walked into the Oval Office, I had more than a trillion-dollar deficit                                \
	        greeting me. And we know where it came from: two wars that were paid for on a credit card; two               \
	        tax cuts that were not paid for; and a whole bunch of programs that were not paid for; and then a            \
	        massive economic crisis.                                                                                     \
	                                                                                                                     \
	        And despite that, what weve said is, yes, we had to take some initial emergency measures to                 \
	        make sure we didnt slip into a Great Depression, but what weve also said is, lets make sure that          \
	        we are cutting out those things that are not helping us grow.                                                \
	                                                                                                                     \
	        So 77 government programs, everything from aircrafts that the Air Force had ordered but werent              \
	        working very well, 1 8 government —18 government programs for education that were well-                      \
	        intentioned, not werent helping kids learn, we went after medical fraud in Medicare and                     \
	        Medicaid very aggressively, more aggressively than ever before, and have saved tens of billions              \
	        of dollars, $50 billion of waste taken out of the system.                                                    \
	                                                                                                                     \
	        And I worked with Democrats and Republicans to cut a trillion dollars out of our discretionary               \
	        domestic budget. Thats the largest cut in the discretionary domestic budget since Dwight                    \
	        Eisenhower.                                                                                                               \
	        Now, we all know that weve got to do more. And so Ive put forward a specific $4 trillion deficit           \
	        reduction plan. Its on a website. You can look at all the numbers, what cuts we make and what         revenue we raise.                                                                                            \
	                                                                                                                     \
	        And the way we do it is $2.50 for every cut, we ask for $1 of additional revenue, paid for, as I             \
	        indicated earlier, by asking those of us who have done very well in this country to contribute a             \
	        little bit more to reduce the deficit. Governor Romney earlier mentioned the Bowles-Simpson                  \
	        commission. Well, thats how the commission — bipartisan commission that talked about how we                 \
	        should move forward suggested we have to do it, in a balanced way with some revenue and some                 \
	        spending cuts. And this is a major difference that Governor Romney and I have.                               \
	                                                                                                                     \
	        Let — let me just finish their point, because youre looking for contrast. You know, when                    \
	        Governor Romney stood on a stage with other Republican candidates for the nomination and he                  \
	        was asked, would you take $10 of spending cuts for just $1 of revenue? And he said no.                       \
	                                                                                                                     \
	        Now, if you take such an unbalanced approach, then that means you are going to be gutting our                \
	        investments in schools and education. It means that Governor Romney...                                       \
	                                                                                                                     \
	        ... talked about Medicaid and how we could send it back to the states, but                                   \
	        effectively this means a 30 percent cut in the primary program we help for seniors who are in                \
	        nursing homes, for kids who are with disabilities.                                                           \
	                                                                                                                     \
	        And — and that is not a right strategy for us to move forward.                                               \
	                                                                                                                     \
	        Sorry.                                                                                                       \
	                                                                                                                     \
	        Thats what weve done, made some adjustments to it, and were putting it                                    \
	        forward before Congress right now, a $4 trillion plan...                                                     \
	                                                                                                                     \
	        Well, weve had this discussion before.                                                                      \
	                                                                                                                     \
	        There has to be revenue in addition to cuts. Now, Governor Romney has                                        \
	        ruled out revenue. Hes ruled out revenue.                                                                   \
	                                                                                                                     \
	        If — if were serious, weve got to take a balanced, responsible approach.                                   \
	        And by the way, this is not just when it comes to individual taxes. Lets talk about corporate               \
	        taxes.                                                                                                       \
	                                                                                                                     \
	        Now, Ive identified areas where we can, right away, make a change that I believe would actually             \
	        help the economy.                                                                                            \
	                                                                                                                     \
	        The oil industry gets $4 billion a year in corporate welfare. Basically, they get deductions that            \
	        those small businesses that Governor Romney refers to, they dont get.                                       \
	                                                                                                                     \
	        Now, does anybody think that ExxonMobil needs some extra money, when theyre making                          \
	        money every time you go to the pump? Why wouldnt we want to eliminate that? Why wouldnt                    \
	        we eliminate tax breaks for corporate jets? My attitude is, if you got a corporate jet, you can              \
	        probably afford to pay full freight, not get a special break for it.                                         \
	                                                                                                                     \
	        When it comes to corporate taxes, Governor Romney has said he wants to, in a revenue neutral                 \
	        way, close loopholes, deductions — he hasnt identified which ones they are -- but that thereby              \
	        bring down the corporate rate.                                                                               \
	                                                                                                                     \
	        Well, I want to do the same thing, but Ive actually identified how we can do that. And part of the          \
	        way to do it is to not give tax breaks to companies that are shipping jobs overseas.                         \
	                                                                                                                     \
	        Right now, you can actually take a deduction for moving a plant overseas. I think most                       \
	        Americans would say that doesnt make sense. And all that raises revenue.                                    \
	                                                                                                                     \
	        And so if we take a balanced approach, what that then allows us to do is also to help young                  \
	        people, the way we already have during my administration, make sure that they can afford to go               \
	        to college.                                                                                                  \
	                                                                                                                     \
	        It means that the teacher that I met in Las Vegas, a wonderful young lady, who describes to me —             \
	        shes got 42 kids in her class. The first two weeks shes got them, some of them sitting on the              \
	        floor until finally they get reassigned. Theyre using text books that are 10 years old.                     \
	                                                                                                                     \
	        That is not a recipe for growth. Thats not how America was built. And so budgets reflect                    \
	        choices.                                                                                                     \
	                                                                                                                     \
	        Ultimately, were going to have to make some decisions. And if were asking for no revenue, then             \
	        that means that weve got to get rid of a whole bunch of stuff.                                              \
	                                                                                                                     \
	        And the magnitude of the tax cuts that youre talking about, Governor, would end up resulting in             \
	        severe hardship for people, but more importantly, would not help us grow.                                    \
	                                                                                                                     \
	        As I indicated before, when you talk about shifting Medicaid to states, were talking about                  \
	        potentially a 30 — a 30 percent cut in Medicaid over time.                                                   \
	                                                                                                                     \
	        Now, you know, that may not seem like a big deal when it just is, you know, numbers on a sheet               \
	        of paper, but if were talking about a family whos got an autistic kid and is depending on that             \
	        Medicaid, thats a big problem.                                                                              \
	                                                                                                                     \
	        And governors are creative. Theres no doubt about it. But theyre not creative enough to make               \
	        up for 30 percent of revenue on something like Medicaid. What ends up happening is some                      \
	        people end up not getting help.                                                                              \
	                                                                                                                     \
	        Its time to end it.                                                                                         \
	                                                                                                                     \
	        OK.                                                                                                          \
	                                                                                                                     \
	        You know, I suspect that, on Social Security, weve got a somewhat similar                                   \
	        position. Social Security is structurally sound. Its going to have to be tweaked the way it was by          \
	        Ronald Reagan and Speaker — Democratic Speaker Tip ONeill. But it is — the basic structure is               \
	        sound.                                                                                                       \
	                                                                                                                     \
	        But — but I want to talk about the values behind Social Security and Medicare, and then talk                 \
	        about Medicare, because thats the big driver of our deficits right now.                                     \
	                                                                                                                     \
	        You know, my grandmother — some of you know — helped to raise me. My grandparents did.                       \
	        My grandfather died a while back. My grandmother died three days before I was elected                        \
	        president. And she was fiercely independent. She worked her way up, only had a high school                   \
	        education, started as a secretary, ended up being the vice president of a local bank. And she                \
	        ended up living alone by choice.                                                                             \
	                                                                                                                     \
	        And the reason she could be independent was because of Social Security and Medicare. She had                 \
	        worked all her life, put in this money, and understood that there was a basic guarantee, a floor             \
	        under which she could not go.                                                                                \
	                                                                                                                     \
	        And thats the perspective I bring when I think about whats called entitlements. You know, the              \
	        name itself implies some sense of dependency on the part of these folks. These are folks whove              \
	        worked hard, like my grandmother, and there are millions of people out there who are counting                \
	        on this.                                                                                                     \
	                                                                                                                     \
	        So my approach is to say, how do we strengthen the system over the long term? And in                         \
	        Medicare, what we did was we said, we are going to have to bring down the costs if were going               \
	        to deal with our long-term deficits, but to do that, lets look where some of the moneys going.             \
	                                                                                                                     \
	        $716 billion we were able to save from the Medicare program by no longer overpaying insurance                \
	        companies by making sure that we werent overpaying providers. And using that money, we                      \
	        were actually able to lower prescription drug costs for seniors by an average of $600, and we                \
	        were also able to make a -- make a significant dent in providing them the kind of preventive care            \
	        that will ultimately save money through the — throughout the system.                                         \
	                                                                                                                     \
	        So the way for us to deal with Medicare in particular is to lower health care costs. When it comes           \
	        to Social Security, as I said, you dont need a major structural change in order to make sure that           \
	        Social Security is there for the future.                                                                     \
	                                                                                                                     \
	        First of all, I think its important for Governor Romney to present this plan                                \
	        that he says will only affect folks in the future.                                                           \
	                                                                                                                     \
	        And the essence of the plan is that you would turn Medicare into a voucher program. Its called              \
	        premium support, but its understood to be a voucher program. His running mate...                            \
	                                                                                                                     \
	        I dont. And let me explain why.                                                                             \
	                                                                                                                     \
	        I understand.                                                                                                \
	                                                                                                                     \
	        For — so if youre — if youre 54 or 55, you might want to listen cause this -                              \
	        - this will affect you.                                                                                      \
	                                                                                                                     \
	        The idea, which was originally presented by Congressman Ryan, your running mate, is that we                  \
	        would give a voucher to seniors and they could go out in the private marketplace and buy their               \
	        own health insurance.                                                                                        \
	                                                                                                                     \
	        The problem is that because the voucher wouldnt necessarily keep up with health care inflation,             \
	        it was estimated that this would cost the average senior about $6,000 a year.                                \
	                                                                                                                     \
	        Now, in fairness, what Governor Romney has now said is hell maintain traditional Medicare                   \
	        alongside it. But theres still a problem, because what happens is, those insurance companies are            \
	        pretty clever at figuring out who are the younger and healthier seniors. They recruit them,                  \
	        leaving the older, sicker seniors in Medicare. And every health care economist that looks at it              \
	        says, over time, whatll happen is the traditional Medicare system will collapse.                            \
	                                                                                                                     \
	        And then what youve got is folks like my grandmother at the mercy of the private insurance                  \
	        system precisely at the time when they are most in need of decent health care.                               \
	                                                                                                                     \
	        So, I dont think vouchers are the right way to go. And this is not my own — only my opinion.                \
	        AARP thinks that the — the savings that we obtained from Medicare bolster the system, lengthen               \
	        the Medicare trust fund by eight years. Benefits were not affected at all. And ironically, if you            \
	        repeal Obamacare, and I have become fond of this term, Obamacare, if you repeal it, what                   \
	        happens is those seniors right away are going to be paying $600 more in prescription care.                   \
	        Theyre now going to have to be paying copays for basic checkups that can keep them healthier.               \
	                                                                                                                     \
	        And the primary beneficiary of that repeal are insurance companies that are estimated to gain                \
	        billions of dollars back when they arent making seniors any healthier. And I dont think thats the         \
	        right approach when it comes to making sure that Medicare is stronger over the long term.                    \
	                                                                                                                     \
	        Jim, if I — if I can just respond very quickly, first of all, every study has                                \
	        shown that Medicare has lower administrative costs than private insurance does, which is why                 \
	        seniors are generally pretty happy with it.                                                                  \
	                                                                                                                     \
	        And private insurers have to make a profit. Nothing wrong with that. Thats what they do. And so             \
	        youve got higher administrative costs, plus profit on top of that. And if you are going to save             \
	        any money through what Governor Romneys proposing, what has to happen is, is that the money                 \
	        has to come from somewhere.                                                                                  \
	                                                                                                                     \
	        And when you move to a voucher system, you are putting seniors at the mercy of those insurance               \
	        companies. And over time, if traditional Medicare has decayed or fallen apart, then theyre stuck.           \
	                                                                                                                     \
	        And this is the reason why AARP has said that your plan would weaken Medicare substantially.                 \
	        And thats why they were supportive of the approach that we took.                                            \
	                                                                                                                     \
	        One last point I want to make. We do have to lower the cost of health care, not just in Medicare             \
	        and Medicaid...                                                                                              \
	                                                                                                                     \
	        ... but - but -- but overall.                                                                                \
	                                                                                                                     \
	        And so...                                                                                                    \
	                                                                                                                     \
	        Is that a — is that a separate topic?                                                                        \
	                                                                                                                     \
	        Im sorry.                                                                                                   \
	                                                                                                                     \
	        Absolutely.                                                                                                  \
	                                                                                                                     \
	        I think this is a great example. The reason we have been in such a enormous                                  \
	        economic crisis was prompted by reckless behavior across the board.                                          \
	                                                                                                                     \
	        Now, it wasnt just on Wall Street. You had loan officers were — that were giving loans and                  \
	        mortgages that really shouldnt have been given, because the folks didnt qualify. You had people            \
	        who were borrowing money to buy a house that they couldnt afford. You had credit agencies                   \
	        that were stamping these as Al great investments when they werent.                                          \
	                                                                                                                     \
	        But you also had banks making money hand over fist, churning out products that the bankers                   \
	        themselves didnt even understand, in order to make big profits, but knowing that it made the                \
	        entire system vulnerable.                                                                                    \
	                                                                                                                     \
	        So what did we do? We stepped in and had the toughest reforms on Wall Street since the 1930s.                \
	        We said youve got — banks, youve got to raise your capital requirements. You cant engage in               \
	        some of this risky behavior that is putting Main Street at risk. Weve going to make sure that               \
	        youve got to have a living will so — so we can know how youre going to wind things down if                 \
	        you make a bad bet so we dont have other taxpayer bailouts.                                                 \
	                                                                                                                     \
	        In the meantime, by the way, we also made sure that all the help that we provided those banks                \
	        was paid back every single dime, with interest.                                                              \
	                                                                                                                     \
	        Now, Governor Romney has said he wants to repeal Dodd-Frank.                                                 \
	                                                                                                                     \
	        And, you know, I appreciate and it appears weve got some agreement that a marketplace to work               \
	        has to have some regulation. But in the past, Governor Romney has said he just want to repeal                \
	        Dodd- Frank, roll it back.                                                                                   \
	                                                                                                                     \
	        And so the question is: Does anybody out there think that the big problem we had is that there               \
	        was too much oversight and regulation of Wall Street? Because if you do, then Governor                       \
	        Romney is your candidate. But thats not what I believe.                                                     \
	                                                                                                                     \
	        Well, four years ago, when I was running for office, I was traveling around                                  \
	        and having those same conversations that Governor Romney talks about. And it wasnt just that                \
	        small businesses were seeing costs skyrocket and they couldnt get affordable coverage even if               \
	        they wanted to provide it to their employees. It wasnt just that this was the biggest driver of our         \
	        federal deficit, our overall health care costs, but it was families who were worried about going             \
	        bankrupt if they got sick, millions of families, all across the country.                                     \
	                                                                                                                     \
	        If they had a pre-existing condition, they might not be able to get coverage at all. If they did have        \
	        coverage, insurance companies might impose an arbitrary limit. And so as a consequence, theyre              \
	        paying their premiums, somebody gets really sick, lo and behold, they dont have enough money                \
	        to pay the bills, because the insurance companies say that theyve hit the limit.                            \
	                                                                                                                     \
	        So we did work on this, alongside working on jobs, because this is part of making sure that                  \
	        middle-class families are secure in this country.                                                            \
	                                                                                                                     \
	        And let me tell you exactly what Obamacare did. Number one, if youve got health insurance, it               \
	        doesnt mean a government takeover. You keep your own insurance. You keep your own doctor.                   \
	        But it does say insurance companies cant jerk you around. They cant impose arbitrary lifetime              \
	        limits. They have to let you keep your kid on their insurance — your insurance plan until youre             \
	        26 years old. And it also says that youre going to have to get rebates if insurance companies are           \
	        spending more on administrative costs and profits than they are on actual care.                              \
	                                                                                                                     \
	        Number two, if you dont have health insurance, were essentially setting up a group plan that               \
	        allows you to benefit from group rates that are typically 1 8 percent lower than if youre out there         \
	        trying to get insurance on the individual market.                                                            \
	                                                                                                                     \
	        Now, the last point Id make before...                                                                       \
	                                                                                                                     \
	        No, I think — I had five seconds before you interrupted me, was ...                                          \
	                                                                                                                     \
	        ... the irony is that weve seen this model work really well in Massachusetts, because Governor              \
	        Romney did a good thing, working with Democrats in the state to set up what is essentially the               \
	        identical model and as a consequence people are covered there. It hasnt destroyed jobs. And as a            \
	                                                                                                                     \
	        consequence, we now have a system in which we have the opportunity to start bringing down                    \
	        costs, as opposed to just leaving millions of people out in the cold.                                        \
	                                                                                                                     \
	        Governor Romney said this has to be done on a bipartisan basis. This was a                                   \
	        bipartisan idea. In fact, it was a Republican idea. And Governor Romney at the beginning of this             \
	        debate wrote and said what we did in Massachusetts could be a model for the nation.                          \
	                                                                                                                     \
	        And I agree that the Democratic legislators in Massachusetts might have given some advice to                 \
	        Republicans in Congress about how to cooperate, but the fact of the matter is, we used the same              \
	        advisers, and they say its the same plan.                                                                   \
	                                                                                                                     \
	        It — when Governor Romney talks about this board, for example, unelected board that weve                    \
	        created, what this is, is a group of health care experts, doctors, et cetera, to figure out, how can         \
	        we reduce the cost of care in the system overall?                                                            \
	                                                                                                                     \
	        Because there — there are two ways of dealing with our health care crisis. One is to simply leave            \
	        a whole bunch of people uninsured and let them fend for themselves, to let businesses figure out             \
	        how long they can continue to pay premiums until finally they just give up, and their workers are            \
	        no longer getting insured, and thats been the trend line.                                                   \
	                                                                                                                     \
	        Or, alternatively, we can figure out, how do we make the cost of care more effective? And there              \
	        are ways of doing it.                                                                                        \
	                                                                                                                     \
	        So at Cleveland Clinic, one of the best health care systems in the world, they actually provide              \
	        great care cheaper than average. And the reason they do is because they do some smart things.                \
	        They — they say, if a patients coming in, lets get all the doctors together at once, do one test           \
	        instead of having the patient run around with 10 tests. Lets make sure that were providing                 \
	        preventive care so were catching the onset of something like diabetes. Lets — lets pay providers          \
	        on the basis of performance as opposed to on the basis of how many procedures theyve —                      \
	        theyve engaged in.                                                                                          \
	                                                                                                                     \
	        Now, so what this board does is basically identifies best practices and says, lets use the                  \
	        purchasing power of Medicare and Medicaid to help to institutionalize all these good things that             \
	        we do.                                                                                                       \
	                                                                                                                     \
	        And the fact of the matter is that, when Obamacare is fully implemented, were going to be in a              \
	        position to show that costs are going down. And over the last two years, health care premiums                \
	        have gone up — its true — but theyve gone up slower than any time in the last 50 years. So were           \
	        already beginning to see progress. In the meantime, folks out there with insurance, youre already           \
	        getting a rebate.                                                                                            \
	                                                                                                                     \
	        Let me make one last point. Governor Romney says, we should replace it, Im just going to                    \
	        repeal it, but — but we can replace it with something. But the problem is, he hasnt described               \
	        what exactly wed replace it with, other than saying were going to leave it to the states.                  \
	                                                                                                                     \
	        But the fact of the matter is that some of the prescriptions that hes offered, like letting you buy         \
	        insurance across state lines, theres no indication that that somehow is going to help somebody              \
	        whos got a pre-existing condition be able to finally buy insurance. In fact, its estimated that by         \
	        repealing Obamacare, youre looking at 50 million people losing health insurance...                          \
	                                                                                                                     \
	        ... at a time when its vitally important.                                                                   \
	                                                                                                                     \
	        Let me just point out first of all this board that were talking about cant                                 \
	        make decisions about what treatments are given. Thats explicitly prohibited in the law. But lets           \
	        go back to what Governor Romney indicated, that under his plan, he would be able to cover                    \
	        people with preexisting conditions.                                                                          \
	                                                                                                                     \
	        Well, actually Governor, that isnt what your plan does. What your plan does is to duplicate                 \
	        whats already the law, which says if you are out of health insurance for three months, then you             \
	        can end up getting continuous coverage and an insurance company cant deny you if youve — if                \
	        its been under 90 days.                                                                                     \
	                                                                                                                     \
	        But thats already the law and that doesnt help the millions of people out there with preexisting           \
	        conditions. Theres a reason why Governor Romney set up the plan that he did in Massachusetts.               \
	        It wasnt a government takeover of health care. It was the largest expansion of private insurance.           \
	        But what it does say is that insurers, youve got to take everybody.                                       \
	                                                                                                                     \
	        Now, that also means that youve got more customers. But when — when Governor Romney says                    \
	        that hell replace it with something, but cant detail how it will be in fact replaced and the reason        \
	        he set up the system he did in Massachusetts was because there isnt a better way of dealing with            \
	        the preexisting conditions problem.                                                                          \
	                                                                                                                     \
	        It just reminds me of, you know, he says that hes going to close deductions and loopholes for his           \
	        tax plan. Thats how its going to be paid for, but we dont know the details. He says that hes             \
	        going to replace Dodd-Frank, Wall Street reform, but we dont know exactly which ones. He                    \
	        wont tell us. He now says hes going to replace Obamacare and ensure that all the good things               \
	        that are in it are going to be in there and you dont have to worry.                                         \
	                                                                                                                     \
	        And at some point, I think the American people have to ask themselves, is the reason that                    \
	        Governor Romney is keeping all these plans to replace secret because theyre too good? Is it — is            \
	        it because that somehow middle-class families are going to benefit too much from them?                       \
	                                                                                                                     \
	        No. The reason is, is because, when we reform Wall Street, when we tackle the problem of pre-                \
	        existing conditions, then, you know, these are tough problems and weve got to make choices.                 \
	        And the choices weve made have been ones that ultimately are benefiting middle-class families               \
	        all across the country.                                                                                      \
	                                                                                                                     \
	        Well, I definitely think there are differences.                                                              \
	                                                                                                                     \
	        The first role of the federal government is to keep the American people                                      \
	        safe. Thats its most basic function. And as commander-in-chief, that is something that Ive                 \
	        worked on and thought about every single day that Ive been in the Oval Office.                              \
	                                                                                                                     \
	        But I also believe that government has the capacity, the federal government has the capacity to              \
	        help open up opportunity and create ladders of opportunity and to create frameworks where the                \
	        American people can succeed.                                                                                 \
	                                                                                                                     \
	        Look, the genius of America is the free enterprise system and freedom and the fact that people               \
	        can go out there and start a business, work on an idea, make their own decisions.                            \
	                                                                                                                     \
	        But as Abraham Lincoln understood, there are also some things we do better together. So, in the              \
	        middle of the Civil War, Abraham Lincoln said, lets help to finance the Transcontinental                    \
	        Railroad, lets start the National Academy of Sciences, lets start land grant colleges, because we          \
	        want to give these gateways of opportunity for all Americans, because if all Americans are                   \
	                                                                                                                     \
	        getting opportunity, were all going to be better off. That doesnt restrict peoples freedom. That          \
	        enhances it.                                                                                                 \
	                                                                                                                     \
	        And so what Ive tried to do as president is to apply those same principles.                                 \
	                                                                                                                     \
	        And when it comes to education what Ive said is weve got to reform schools that are not                    \
	        working. We use something called Race to the Top. Wasnt a top-down approach, Governor.                      \
	        What weve said is to states, well give you more money if you initiate reforms. And as a                    \
	        consequence, you had 46 states around the country who have made a real difference.                           \
	                                                                                                                     \
	        But what Ive also said is lets hire another 100,000 math and science teachers to make sure we              \
	        maintain our technological lead and our people are skilled and able to succeed. And hard-pressed             \
	        states right now cant all do that. In fact weve seen layoffs of hundreds of thousands of teachers          \
	        over the last several years, and Governor Romney doesnt think we need more teachers. I do,                  \
	        because I think that that is the kind of investment where the federal government can help.                   \
	                                                                                                                     \
	        It cant do it all, but it can make a difference. And as a consequence well have a better trained           \
	        workforce and that will create jobs because companies want to locate in places where weve got a             \
	        skilled workforce. Well, as Ive indicated, I think that it has a significant role to play. Through          \
	        our Race to the Top program, weve worked with Republican and Democratic governors to                        \
	        initiate major reforms, and theyre having an impact right now.                                              \
	                                                                                                                     \
	        You know, this is where budgets matter, because budgets reflect choices.                                     \
	        So when Governor Romney indicates that he wants to cut taxes and potentially benefit folks like              \
	        me and him, and to pay for it were having to initiate significant cuts in federal support for               \
	        education, that makes a difference.                                                                          \
	                                                                                                                     \
	        You know, his — his running mate, Congressman Ryan, put forward a budget that reflects many                  \
	        of the principles that Governor Romneys talked about. And it wasnt very detailed. This seems to            \
	        be a trend. But — but what it did do is to — if you extrapolated how much money were talking                \
	        about, youd look at cutting the education budget by up to 20 percent.                                       \
	                                                                                                                     \
	        When it comes to community colleges, we are seeing great work done out there all over the                    \
	        country because we have the opportunity to train people for jobs that exist right now. And one of            \
	        the things I suspect Governor Romney and I probably agree on is getting businesses to work with              \
	        community colleges so that theyre setting up their training programs...                                     \
	                                                                                                                     \
	        Let me just finish the point.                                                                                \
	                                                                                                                     \
	        The — where theyre partnering so that theyre designing training programs.                                  \
	        And people who are going through them know that theres a job waiting for them if they                       \
	        complete it. That makes a big difference, but that requires some federal support.                            \
	                                                                                                                     \
	        Let me just say one final example. When it comes to making college affordable, whether its two-             \
	        year or four-year, one of the things that I did as president was we were sending $60 billion to              \
	        banks and lenders as middlemen for the student loan program, even though the loans were                      \
	        guaranteed. So there was no risk for the banks or the lenders, but they were taking billions out of          \
	        the system.                                                                                                  \
	                                                                                                                     \
	        And we said, Why not cut out the middleman? And as a consequence, what weve been able to                  \
	        do is to provide millions more students assistance, lower or keep low interest rates on student              \
	        loans. And this is an example of where our priorities make a difference.                                     \
	                                                                                                                     \
	        Governor Romney, I genuinely believe cares about education, but when he tells a student that,                \
	        you know, you should borrow money from your parents to go to college, you know, that                       \
	        indicates the degree to which, you know, there may not be as much of a focus on the fact that                \
	        folks like myself, folks like Michelle, kids probably who attend University of Denver, just dont            \
	        have that option.                                                                                            \
	                                                                                                                     \
	        And for us to be able to make sure that theyve got that opportunity and they can walk through               \
	        that door, that is vitally important not just to those kids. Its how were going to grow this               \
	        economy over the long term.                                                                                  \
	                                                                                                                     \
	        Youve done a great job.                                                                                     \
	                                                                                                                     \
	        Well, first of all, I think Governor Romneys going to have a busy first day,                                \
	        because hes also going to repeal Obamacare, which will not be very popular among Democrats                  \
	        as youre sitting down with them.                                                                            \
	                                                                                                                     \
	        But, look, my philosophy has been, I will take ideas from anybody, Democrat or Republican, as                \
	        long as theyre advancing the cause of making middle-class families stronger and giving ladders              \
	        of opportunity to the middle class. Thats how we cut taxes for middle- class families and small             \
	        businesses. Thats how we cut a trillion dollars of spending that wasnt advancing that cause.               \
	        Thats how we signed three trade deals into law that are helping us to double our exports and sell           \
	        more American products around the world. Thats how we repealed dont ask/dont tell.\ Thats               \
	        how we ended the war in Iraq, as I promised, and thats how were going to wind down the war in              \
	        Afghanistan. Thats how we went after Al Qaida and bin Laden.                                                \
	                                                                                                                     \
	        So weve — weve seen progress even under Republican control of the House of Representatives.                \
	        But, ultimately, part of being principled, part of being a leader is, A, being able to describe              \
	                                                                                                                     \
	        exactly what it is that you intend to do, not just sayi\
	        down,  but you have to have a           \
	        plan.                                                                                                        \
	                                                                                                                     \
	        Number two, whats important is occasionally youve got to say no, to — to — to folks both in                \
	        your own party and in the other party. And, you know, yes, have we had some fights between me                \
	        and the Republicans when — when they fought back against us reining in the excesses of Wall                  \
	        Street? Absolutely, because that was a fight that needed to be had.                                          \
	                                                                                                                     \
	        When — when we were fighting about whether or not we were going to make sure that                            \
	        Americans had more security with their health insurance and they said no, yes, that was a fight              \
	        that we needed to have.                                                                                      \
	                                                                                                                     \
	        And so part of leadership and governing is both saying what it is that you are for, but                      \
	        also being willing to say no to some things. And Ive got to tell you, Governor Romney, when it              \
	        comes to his own party during the course of this campaign, has not displayed that willingness to             \
	        say no to some of the more extreme parts of his party.                                                       \
	                                                                                                                     \
	        Well, Jim, I want to thank you, and I want to thank Governor Romney,                                         \
	        because I think was a terrific debate, and I very much appreciate it. And I want to thank the                \
	        University of Denver.                                                                                        \
	                                                                                                                     \
	        You know, four years ago, we were going through a major crisis. And yet my faith and                         \
	        confidence in the American future is undiminished. And the reason is because of its people,                  \
	        because of the woman I met in North Carolina who decided at 55 to go back to school because                  \
	        she wanted to inspire her daughter and now has a job from that new training that shes gotten;               \
	        because a company in Minnesota who was willing to give up salaries and perks for their                       \
	        executives to make sure that they didnt lay off workers during a recession.                                 \
	                                                                                                                     \
	        The auto workers that you meet in Toledo or Detroit take such pride in building the best cars in             \
	        the world, not just because of a paycheck, but because it gives them that sense of pride, that               \
	        theyre helping to build America. And so the question now is how do we build on those strengths.             \
	        And everything that Ive tried to do, and everything that Im now proposing for the next four                \
	        years in terms of improving our education system or developing American energy or making                     \
	        sure that were closing loopholes for companies that are shipping jobs overseas and focusing on              \
	        small businesses and companies that are creating jobs here in the United States, or closing our              \
	        deficit in a responsible, balanced way that allows us to invest in our future.                               \
	                                                                                                                     \
	        All those things are designed to make sure that the American people, their genius, their grit, their         \
	        determination, is — is channeled and — and they have an opportunity to succeed. And                          \
	        everybodys getting a fair shot. And everybodys getting a fair share — everybodys doing a fair             \
	        share, and everybodys playing by the same rules.                                                            \
	                                                                                                                     \
	        You know, four years ago, I said that Im not a perfect man and I wouldnt be a perfect president.           \
	        And thats probably a promise that Governor Romney thinks Ive kept. But I also promised that                \
	        Id fight every single day on behalf of the American people, the middle class, and all those who             \
	        were striving to get into the middle class. Ive kept that promise and if youll vote for me, then I         \
	        promise Ill fight just as hard in a second term.                                                            \
	        ";

	    var gahndiDemoText =
	        "For more than twenty years past I have been paying special attention to the question of Health. While in England, I had to make my own arrangements for food and drink, and I can say, therefore, that my experience is quite reliable. I have arrived at certain definite conclusions from that experience, and I now set them down for the benefit of my readers. As the familiar saying goes, ‘Prevention is better than cure.’ It is far easier and safer to prevent illness by the observance of the laws of health than to set about curing the illness which has been brought on by our own ignorance and carelessness. Hence it is the duty of all thoughtful men to understand aright the laws of health, and the object of the following pages is to give an account of these laws. We shall also consider the best methods of cure for some of the most common diseases. As Milton says, the mind can make a hell of heaven or a heaven of hell. So heaven is not somewhere above the clouds, and hell somewhere [Pg 2] underneath the earth! We have this same idea expressed in the Sanskrit saying, Mana êva Manushayanâm Kâranam Bandha Mokshayoh—man’s captivity or freedom is dependant on the state of his mind. From this it follows that whether a man is healthy or unhealthy depends on himself. Illness is the result not only of our actions but also of our thoughts. As has been said by a famous doctor, more people die for fear of diseases like small-pox, cholera and plague than out of those diseases themselves. Ignorance is one of the root-causes of disease. Very often we get bewildered at the most ordinary diseases out of sheer ignorance, and in our anxiety to get better, we simply make matters worse. Our ignorance of the most elementary laws of health leads us to adopt wrong remedies or drives us into the hands of the veriest quacks. How strange (and yet how true) it is that we know much less about things near at hand than things at a distance. We know hardly anything of our own village, but we can give by rote the names of the rivers and mountains of England! We take so much trouble to learn the names of the stars in the sky, while we hardly think it worth while to know the things that are in our own homes! We never care a jot for the splendid pageantry of Nature before our very eyes, while we are so anxious to witness the [Pg 3] puerile mummeries of the theatre! And in the same way, we are not ashamed to be ignorant of the structure of our body, of the way in which the bones and muscles, grow, how the blood circulates and is rendered impure, how we are affected by evil thoughts and passions, how our mind travels over illimitable spaces and times while the body is at rest, and so on. There is nothing so closely connected with us as our body, but there is also nothing perhaps of which our ignorance is so profound, or our indifference so complete. It is the duty of every one of us to get over this indifference. Everyone should regard it as his bounden duty to know something of the fundamental facts concerning his body. This kind of instruction should indeed be made compulsory in our schools. At present, we know not how to deal with the most ordinary scalds and wounds; we are helpless if a thorn runs into our foot; we are beside ourselves with fright and dismay if we are bitten by an ordinary snake! Indeed, if we consider the depth of our ignorance in such matters, we shall have to hang down our heads in shame. To assert that the average man cannot be expected to know these things is simply absurd. The following pages are intended for such as are willing to learn. I do not pretend that the facts mentioned by me have not been said before. But my readers will [Pg 4] find here in a nutshell the substance of several books on the subject. I have arrived at my conclusions after studying these books, and after a series of careful experiments. Moreover, those who are new to this subject will also be saved the risk of being confounded by the conflicting views held by writers of such books. One writer says for instance, that hot water is to be used under certain circumstances, while another writer says that, exactly under the same circumstances, cold water is to be used. Conflicting views of this kind have been carefully considered by me, so that my readers may rest assured of the reliability of my own views. We have got into the habit of calling in a doctor for the most trivial diseases. Where there is no regular doctor available, we take the advice of mere quacks. We labour under the fatal delusion that no disease can be cured without medicine. This has been responsible for more mischief to mankind than any other evil. It is of course, necessary that our diseases should be cured, but they cannot be cured by medicines. Not only are medicines merely useless, but at times even positively harmful. For a diseased man to take drugs and medicines would be as foolish as to try to cover up the filth that has accumulated in the inside of the house. The more we cover up the filth, the [Pg 5] more rapidly does putrefaction go on. The same is the case with the human body. Illness or disease is only Nature’s warning that filth has accumulated in some portion or other of the body; and it would surely be the part of wisdom to allow Nature to remove the filth, instead of covering it up by the help of medicines. Those who take medicines are really rendering the task of Nature doubly difficult. It is, on the other hand, quite easy for us to help Nature in her task by remembering certain elementary principles,—by fasting, for instance, so that the filth may not accumulate all the more, and by vigorous exercise in the open air, so that some of the filth may escape in the form of perspiration. And the one thing that is supremely necessary is to keep our minds strictly under control. We find from experience that, when once a bottle of medicine gets itself introduced into a home, it never thinks of going out, but only goes on drawing other bottles in its train. We come across numberless human beings who are afflicted by some disease or other all through their lives in spite of their pathetic devotion to medicines. They are to-day under the treatment of this doctor, to-morrow of that. They spend all their life in a futile search after a doctor who will cure them for good. As the late Justice Stephen (who was for some time in [Pg 6] India) said, it is really astonishing that drugs of which so little is known should be applied by doctors to bodies of which they know still less! Some of the greatest doctors of the West themselves have now come to hold this view. Sir Astley Cooper, for instance, admits that the ‘science’ of medicine is mostly mere guess-work; Dr. Baker and Dr. Frank hold that more people die of medicines than of diseases; and Dr. Masongood even goes to the extent of saying that more men have fallen victims to medicine than to war, famine and pestilence combined! It is also a matter of experience that diseases increase in proportion to the increase in the number of doctors in a place. The demand for drugs has become so widespread that even the meanest papers are sure of getting advertisements of quack medicines, if of nothing else. In a recent book on the Patent Medicines we are told that the Fruit-salts and syrups, for which we pay from Rs. 2 to Rs. 5, cost to their manufacturers only from a quarter of an anna to one anna! No wonder, then, that their compositions should be so scrupulously kept a secret. We will, therefore, assure our readers that there is absolutely no necessity for them to seek the aid of doctors. To those, however, who may not be willing to boycott doctors and medicines altogether, we will say, “As far as possible, possess your [Pg 7] souls in patience, and do not trouble the doctors. In case you are forced at length to call in the aid of a doctor, be sure to get a good man; then, follow his directions strictly, and do not call in another doctor, unless by his own advice. But remember, above all, that the curing of your disease does not rest ultimately in the hands of any doctor.” A GUIDE TO HEALTH THE MEANING OF HEALTH Ordinarily that man is considered healthy who eats well and moves about, and does not resort to a doctor. But a little thought will convince us that this idea is wrong. There are many cases of men being diseased, in spite of their eating well and freely moving about. They are under the delusion that they are healthy, simply because they are too indifferent to think about the matter. In fact, perfectly healthy men hardly exist anywhere over this wide world. As has been well said, only that man can be said to be really healthy, who has a sound mind in a sound body. The relation between the body and the mind is so intimate that, if either of them got out of order, the whole system would suffer. Let us take the analogy of the rose-flower. Its colour stands to its fragrance in the same way as the body [Pg 10] to the mind or the soul. No one regards an artificial paper-flower as a sufficient substitute for the natural flower, for the obvious reason that the fragrance, which forms the essence of the flower, cannot be reproduced. So too, we instinctively honour the man of a pure mind and a noble character in preference to the man who is merely physically strong. Of course, the body and the soul are both essential, but the latter is far more important than the former. No man whose character is not pure can be said to be really healthy. The body which contains a diseased mind can never be anything but diseased. Hence it follows that a pure character is the foundation of health in the real sense of the term; and we may say that all evil thoughts and evil passions are but different forms of disease. Thus considered, we may conclude that that man alone is perfectly healthy whose body is well formed, whose teeth as well as eyes and ears are in good condition, whose nose is free from dirty matter, whose skin exudes perspiration freely and without any bad smell, whose mouth is also free from bad smells, whose hands and legs perform their duty properly, who is neither too fat nor too thin, and whose mind and senses are constantly under his control. As has already been said, it is very hard to gain such health, but it is harder [Pg 11] still to retain it, when once it has been acquired. The chief reason why we are not truly healthy is that our parents were not. An eminent writer has said that, if the parents are in perfectly good condition their children would certainly be superior to them in all respects. A perfectly healthy man has no reason to fear death; our terrible fear of death shows that we are far from being so healthy. It is, however, the clear duty of all of us to strive for perfect health. We will, therefore, proceed to consider in the following pages how such health can be attained, and how, when once attained, it can also be retained for ever. THE HUMAN BODY The world is compounded of the five elements,—earth, water, air, fire, and ether. So too is our body. It is a sort of miniature world. Hence the body stands in need of all the elements in due proportion,—pure earth, pure water, pure fire or sunlight, pure air, and open space. When any one of these falls short of its due proportion, illness is caused in the body. The body is made up of skin and bone, as well as flesh and blood. The bones constitute the frame-work of the body; but for them we could [Pg 12] not stand erect and move about. They protect the softer parts of the body. Thus the skull gives protection to the brain, while the ribs protect the heart and the lungs. Doctors have counted 238 bones in the human body. The outside of the bones is hard, but the inside is soft and hollow. Where there is a joint between two bones, there is a coating of marrow, which may be regarded as a soft bone. The teeth, too, are to be counted among the bones. When we feel the flesh at some points, we find it to be tough and elastic. This part of the flesh is known as the muscle. It is the muscles that enable us to fold and unfold our arms, to move our jaws, and to close our eyes. It is by means of the muscles, again, that our organs of perception do their work. It is beyond the province of this book to give a detailed account of the structure of the body; nor has the present writer enough knowledge to give such an account. We will, therefore, content ourselves with just as much information as is essential for our present purpose. The most important portion of the body is the stomach. If the stomach ceases to work even for a single moment, the whole body would collapse. The work of the stomach is to digest the food, and so to provide nourishment to the body. Its relation [Pg 13] to the body is the same as that of the steam engine to the Railway train. The gastric juice which is produced in the stomach helps the assimilation of nutritious elements in the food, the refuse being sent out by way of the intestines in the form of urine and fæces. On the left side of the abdominal cavity is the spleen, while to the right of the stomach is the liver, whose function is the purification of the blood and the secretion of the bile, which is so useful for digestion. In the hollow space enclosed by the ribs are situated the heart and the lungs. The heart is between the two lungs, but more to the left than the right. There are on the whole 24 bones in the chest; the action of the heart can be felt between the fifth and the sixth rib. The lungs are connected with the windpipe. The air which we inhale is taken into the lungs through the windpipe, and the blood is purified by it. It is of the utmost importance to breathe through the nose, instead of through the mouth. On the circulation of the blood depend all activities of the body. It is the blood that provides nourishment to the body. It extracts the nutritious elements out of the food, and ejects the refuse through the intestines, and so keeps the body warm. The blood is incessantly circulating all over the body, along the veins and the arteries. [Pg 14] The beatings of the pulse are due to the circulation of the blood. The pulse of a normal adult man beats some 75 times a minute. The pulses of children beat faster, while those of old men are slower. The chief agency for keeping the blood pure is the air. When the blood returns to the lungs after one complete round over the body, it is impure and contains poisonous elements. The oxygen of the air which we inhale purifies this blood and is assimilated into it, while the nitrogen absorbs the poisonous matter and is breathed out. This process goes on incessantly. As the air has a very important function to perform in the body, we shall devote a separate chapter to a detailed consideration of the same. AIR Of the three things that are indispensable for the subsistence of man,—namely, air, water, and food—the first is the most important. Hence it is that God has created it in such large quantities as to make it available to all of us for nothing. Modern civilisation, however, has rendered even fresh air somewhat costly, for, in order to breathe fresh air, we have to go out of towns, and this means [Pg 15] expense. The residents of Bombay, for instance, distinctly improve in health in the air of Matheran or, still better, of the Malabar Hills; but they cannot go to these places without money. Hence, in these days, it would be hardly true to say that we get fresh air gratis, as we used to in the old days. But, whether fresh air is available gratis or not, it is undeniable that we cannot get on without it. We have already seen that the blood circulates over the body, returns to the lungs, and after being purified, starts on its round again. We breathe out the impure air, and take in oxygen from the outside, which purifies the blood. This process of inspiration and expiration goes on for ever, and on it depends man’s life. When drowned in water we die, because, then we are unable to let out the impure air in the body and take in pure air from outside. The divers go down into the water in what is known as a diving bell, and they take in fresh air through a tube which leads to the top. Hence it is that they are able to remain under water for a long time. It has been ascertained by experiments that no man can live without air for as long as five minutes. We often hear of the death of little children, when they are held so close to the bosom by ignorant mothers as to make it impossible for them to breathe. We should all be as much against the breathing of impure air as we are against the drinking of dirty water and the eating of dirty food; but the air we breathe is, as a rule, far more impure than the water we drink or the food we eat. We are all worshippers of concrete objects; those things that can be seen and felt are regarded by us as of far greater importance than those which are invisible and intangible. Since air belongs to this latter class of objects, we fail to realise the evil wrought by the impure air that we breathe. We would think twice before eating the leavings of another man’s food, or drinking out of a cup polluted by another man’s lips. Even those who have not the least sense of shame or repugnance would never eat another man’s vomit, or drink the water which has been spat out by him; even those who are dying of hunger and thirst would refuse to do it. But, alas, how few of us realise that the air we inhale is so often the impure and poisonous air which has been exhaled by others, and which is surely no less objectionable than a man’s vomit! How strange that men should sit and sleep together for hours in closed rooms, and go on inhaling the deadly air exhaled by themselves and their companions! How fortunate for man that air should be so light and diffusive, and capable of penetrating the smallest holes! Even when the [Pg 17] doors and windows are closed, there is generally some little space between the walls and the roof, through which some air from outside manages to get in, so that the inmates of the room have not to breathe exclusively poisoned air. The air that we exhale mixes with the air outside, and is rendered pure again by an automatic process that is always going on in Nature. Now we are able to understand why so many men and women should be weak and diseased. There can be absolutely no doubt that impure air is the root-cause of disease in ninety-nine cases out of every hundred. It follows that the best way of avoiding disease is to live and work in the open air. No doctor can compete with fresh air in this matter. Consumption is caused by the decay of the lungs, due to the inhaling of impure air, just as a steam engine which is filled with bad coal gets out of order. Hence doctors say that the easiest and the most effective treatment for a consumptive patient is to keep him in fresh air for all the 24 hours of the day. It is, of course, essential to know how we can keep the air pure. In fact, every child should be taught the value of fresh air, as soon as it is able to understand anything. If my readers would take the trouble to learn the simple facts about the air and would put their knowledge into practice, [Pg 18] while teaching their children also to do the same. I shall feel immensely gratified. Our latrines are perhaps most responsible for rendering the air impure. Very few people realise the serious harm done by dirty latrines. Even dogs and cats make with their claws something like a pit wherein to deposit their fæces, and then cover it up with some earth. Where there are no lavatories of the modern approved types, we should also do likewise. There should be kept ashes or dry earth in a tin can or an earthen vessel inside the latrine, and whoever goes into the latrine should, on coming out, cover the fæces well with the ash or the earth, as the case may be. If this is done there would be no bad smell, and the flies too will not settle on it and transmit the filth. Anybody whose sense of smell has not been wholly blunted, or who has not grown thoroughly accustomed to foul smells will know how noxious is the smell that emanates from all filthy matter which is allowed to lie open to the weather. Our gorge rises at the very thought of fæces being mixed with our food, but we go on inhaling the air which has been polluted by such foul smell, forgetting the fact that the one is just as bad as the other, except that, while the former is visible, the latter is not. We should see that our latrines are kept thoroughly neat and clean. [Pg 19] We abhor the idea of our cleaning the latrines ourselves, but what we should really abhor is the idea of making use of dirty latrines. What is the harm in ourselves removing the filth which has been expelled from inside our own body, and which we are not ashamed to have removed by others? There is absolutely no reason why we should not ourselves learn the work of scavenging and teach it to our children as well. The filthy matter should be removed, and thrown into a pit two feet deep, and then covered up with a thick layer of earth. If we go to some open place, we should dig a small pit with our hands or feet, and then cover it up, after the bowels have been evacuated. We also make the air impure by making water at all places indiscriminately. This dirty habit should be given up altogether. If there is no place specially set apart for the purpose, we should go to some dry ground away from the house, and should also cover up the urine with earth. The filth should not be cast into very deep pits, for, in that case, it would be beyond the reach of sun’s heat, and would also pollute the water flowing underneath the earth. The habit of spitting indiscriminately on the verandahs, court yards, and such like places is also very bad. The spittle, especially of consumptives, [Pg 20] is very dangerous. The poisonous germs in it rise into the air, and, being inhaled by others, lead to a spread of the disease. We should keep a spittoon inside the house, and if we have to spit when out on the road we should spit where there is dry dust, so that the spittle may be absorbed into the dust and cause no harm. Doctors hold that the consumptive should spit into a spittoon with some disinfectant in it: for, even if he spits on dry ground, the germs in his spittle manage to rise and spread into the air along with the dust. But, in any case, there can be no doubt that the habit of spitting wherever we please is dirty as well as dangerous. Some people throw where they like cooked food and other articles, which decay and render the air impure. If all such rubbish be put underground, the air would not be made impure, and good manure, too could be obtained. In fact, no kind of decaying matter should be allowed to lie exposed to the air. It is so easy for us to take this necessary precaution, if only we are in earnest about it. Now we have seen how our own bad habits render the air impure, and what we can do to keep it pure. Next we shall consider how to inhale the air. As already mentioned in the last chapter, the air is to be inhaled through the nose, and not [Pg 21] through the mouth. There are, however, very few persons who know how to breathe correctly. Many people are in the pernicious habit of inhaling through the mouth. If very cold air is inhaled through the mouth, we catch cold and sore throat. Further, if we inhale through the mouth, the particles of dust in the air go into the lungs and cause great mischief. In London, for instance, in November, the smoke which issues from the chimneys of great factories mixes with the dense fog, producing a kind of yellow mixture. This contains tiny particles of soot, which can be detected in the spittle of a man who inhales through the mouth. To escape this, many women (who have not learnt to breathe through the nose alone) put on a special kind of veil over their faces, which act as sieves. If these veils are closely examined, particles of dust can be detected in them. But God has given to all of us a sieve of this kind inside the nose. The air which is inhaled through the nostrils is sifted before it reaches the lungs, and is also warmed in the process. So all men should learn to breathe through the nose alone. And this is not at all difficult, if we remember to keep our mouth firmly shut at all times, except when we are talking. Those who have got into the habit of keeping their mouth open should sleep with a bandage round the mouth, [Pg 22] which would force them to breathe through the nose. They should also take some twenty long respirations in the open air, both in the morning and in the evening. In fact, all men can practise this simple exercise and see for themselves how rapidly their chest deepens. If the chest be measured at the beginning of the practice, and again after an interval of two months, it will be seen how much it has expanded in this short period. After learning how to inhale the air, we should cultivate the habit of breathing fresh air, day in and day out. We are generally in the most pernicious habit of keeping confined to the house or the office throughout the day, and sleeping in narrow rooms at night, with all doors and windows shut. As far as possible, we should remain in the open air at all times. We should at least sleep on the verandah or in the open air. Those who cannot do this should at least keep the doors and windows of the room fully open at all times. The air is our food for all the twenty-four hours of the day. Why, then, should we be afraid of it? It is a most foolish idea that we catch cold by inhaling the cool breeze of the morning. Of course, those people who have spoiled their lungs by the evil habit of sleeping within closed doors are likely to catch cold, if they change their habit all on a [Pg 23] sudden. But even they should not be afraid of cold, for this cold can be speedily got rid of. Now-a-days, in Europe, the houses for consumptives are being built in such a way that they may get fresh air at all times. We know what terrible havoc is wrought in India by epidemics. We should remember that these epidemics are due to our habit of defiling the air, and of inhaling this poisonous air. We should understand that even the most delicate people will be benefitted by systematically inhaling fresh air. If we cultivate the habit of keeping the air pure and of breathing only fresh air, we can save ourselves from many a terrible disease. Sleeping with the face uncovered is as essential as sleeping in fresh air. Many of our people are in the habit of sleeping with the face covered, which means that they have to inhale the poisonous air which has been exhaled by themselves. Fortunately however, some of the air from outside does find its way through the interstices of the cloth, else they should die of suffocation. But the small quantity of air that gains entrance in this way is altogether inadequate. If we are suffering from cold, we may cover the head with a piece of cloth, or put on a night-cap, but the nose should be kept exposed under all circumstances. Air and light are so intimately connected with each other that it is as well to speak a few words [Pg 24] here on the value of light. Light is as indispensable to life as air itself. Hence it is that Hell is represented as completely dark. Where light cannot penetrate, the air can never be pure. If we enter a dark cellar, we can distinctly perceive the smell of the foul air. The fact that we cannot see in the dark shows that God has intended us to live and move in the light. And Nature has given us just as much darkness as we require in the night. Yet, many people are in the habit of sitting or sleeping in underground cellars, devoid of air and light, even in the hottest summer! Those who thus deprive themselves of air and light are always weak and haggard. Now-a-days, there are many doctors in Europe who cure their patients by means of air-bath and sun-bath alone. Thousands of diseased persons have been cured by mere exposure to the air and to the sunlight. We should keep all doors and windows in our houses always open, in order to allow the free entrance of air and light. Some readers may ask why, if air and light are so indispensable, those who live and work in cellars are not visibly affected. Those who have thought well over the matter would never put this question. Our aim should be to attain the maximum of health by all legitimate means; we should not be content merely to live anyhow. It has been [Pg 25] indubitably established that insufficient air and light give rise to disease. Dwellers in towns are, as a rule, more delicate than those in the country, for they get less air and light than the latter. Air and light, then, are absolutely indispensable to health, and every one should remember all that we have said on the matter, and act up to it to the best of his ability. WATER As has been already pointed out, air is the most indispensable to our subsistence, while water comes next in order. Man cannot live for more than a few minutes without air, but he can live for a few days without water. And in the absence of other food, he can subsist on water alone for many days. There is more than 70% of water in the composition of our food-stuffs, as in that of the human body. Even though water is so indispensable, we take hardly any pains to keep it pure. Epidemics are as much the outcome of our indifference to the quality of the water we drink, as of the air we breathe. The drinking of dirty water very often produces also the disease of the stone. Water may be impure in either of two ways,—by issuing from dirty places, or by being defiled by us. [Pg 26] Where the water issues from dirty places, we should not drink it at all; nor do we generally drink it. But we do not shrink from drinking the water which has been defiled by ourselves. River-water, for instance, is regarded as quite good for drinking, although we throw into it all sorts of rubbish, and also use it for washing purposes. We should make it a rule never to drink the water in which people bathe. The upper portion of a river should be set apart for drinking water, the lower being reserved for bathing and washing purposes. Where there is no such arrangement, it is a good practice to dig in the sand, and take drinking water therefrom. This water is very pure, since it has been filtered by passage through the sand. It is generally risky to drink well-water, for unless it is well protected, the dirty water at the top would trickle down into the well, and render the water impure. Further, birds and insects often fall into the water and die; sometimes birds build their nests inside the wells; and the dirt from the feet of those who draw water from the well is also washed down into the water. For all these reasons, we should be particularly careful in drinking well-water. Water kept in tubs is also very often impure. If it should be pure, the tubs should be washed clean at frequent intervals, and should be kept covered; we should also see that the tank or [Pg 27] well from which the water is taken is kept in good condition. Very few people, however, take such precautions to keep the water pure. Hence the best way of removing the impurities of the water is to boil it well, and, after cooling it, filter it carefully into another vessel through a thick and clean piece of cloth. Our duty, however, does not end with this. We should realise that we owe a duty to our fellowmen in this matter. We should see to it that we do absolutely nothing to defile the water which is used for drinking by the public. We should scrupulously refrain from bathing or washing in the water which is reserved for drinking; we should never answer the calls of nature near the banks of a river, nor cremate the dead bodies there and throw the ashes after cremation into the water. In spite of all the care that we may take, we find it so difficult to keep water perfectly pure. It may have, for instance, salt dissolved in it, or bits of grass and other decaying matter. Rain water is, of course, the purest, but, before it reaches us, it generally becomes impure by the absorption of the floating matter in the atmosphere. Perfectly pure water has a most beneficial effect on the system; hence doctors administer distilled water to their patients. Those who are suffering from constipation are appreciably benefitted by the use of distilled water. [Pg 28] Many people do not know that water is of two kinds, soft and hard. Hard water is water in which some kind of salt has been dissolved. Hence, soap does not readily lather in it, and food cannot be easily boiled in it. Its taste is brackish, while soft water tastes sweet. It is much safer to drink soft water, although some people hold that hard water is better by virtue of the presence of nutritious matter dissolved therein. Rain water is the best kind of soft water, and is therefore, the best for drinking purposes. Hard water, if boiled and kept over the fire for some half an hour, is rendered soft. Then it may be filtered and drunk. The question is often asked, “When should one drink water, and how much?” The only safe answer to this is this: one should drink water only when one feels thirsty, and even then only just enough to quench the thirst. There is no harm in drinking water during the meals or immediately afterwards. Of course, we should not wash the food down with water. If the food refuses to go down of itself, it means that either it has not been well prepared or the stomach is not in need of it. Ordinarily, there is no need to drink water; and indeed, there should be none. As already mentioned, there is a large percentage of water in our ordinary articles of food, and we also add water in [Pg 29] cooking them. Why then should we feel thirsty? Those people whose diet is free from such articles as chillies and onions which create an artificial thirst, have rarely any need to drink water. Those who feel unaccountably thirsty must be suffering from some disease or other. We may be tempted to drink any kind of water that we come across, simply because we see some people doing it with impunity. The reply to this has already been given in connection with air. Our blood has in itself the power of destroying many of the poisonous elements that enter into it, but it has to be renewed and purified, just as the sharp edge of a sword has to be mended when it has been once employed in action. Hence, if we go on drinking impure water, we should not be surprised to find our blood thoroughly poisoned in the end. FOOD It is impossible to lay down hard and fast rules in the matter of food. What sort of food should we eat, how much of it should be eaten, and at what times,—these are questions on which doctors differ a great deal. The ways of men are so diverse, that the very same food shows different effects on different individuals. [Pg 30] Although, however, it is impossible to say conclusively what sort of food we should eat, it is the clear duty of every individual to bestow serious thought on the matter. Needless to say, the body cannot subsist without food. We undergo all sorts of sufferings and privations for the sake of food. But, at the same time, it is indisputable that 99.9% of men and women in the world eat merely to please the palate. They never pause to think of the after-effects at the time of eating. Many people take purgatives and digestive pills or powders in order to be able to eat thoroughly well. Then there are some people who, after eating to the utmost of their capacity, vomit out all that they have eaten, and proceed to eat the same stuffs once more! Some people, indeed, eat so sumptuously that, for two or three days together, they do not feel hungry at all. In some cases, men have even been known to have died of over-eating. I say all this from my own experience. When I think of my old days, I am tempted to laugh at many things, and cannot help being ashamed of some things. In those days I used to have tea in the morning, breakfast two or three hours afterwards, dinner at one o’clock, tea again at 3 p.m., and supper between 6 and 7! My condition at that time was most pitiable. There was a great deal of superfluous fat on my body, and bottles of [Pg 31] medicine were always at hand. In order to be able to eat well, I used to take purgatives very often, as well as some tonic or other. In those days, I had not a third of my present capacity for work, in spite of the fact that I was then in the prime of youth. Such a life is surely pitiable, and if we consider the matter seriously, we must also admit it to be mean, sinful and thoroughly contemptible. Man is not born to eat, nor should he live to eat. His true function is to know and serve his Maker; but, since the body is essential to this service, we have perforce to eat. Even atheists will admit that we should eat merely to preserve our health, and not more than is needed for this purpose. Turn to the birds and beasts, and what do you find? They never eat merely to please the palate, they never go on eating till their inside is full to overflowing. On the other hand, they eat only to appease their hunger, and even then only just as much as will appease their hunger. They take the food provided by Nature, and do not cook their food. Can it be that man alone is created to worship the palate? Can it be that he alone is destined to be eternally suffering from disease? Those animals that live a natural life of freedom never once die of hunger. Among them there are no distinctions of rich and poor,—of those who eat many times a day, and those who do not get even one [Pg 32] meal in the day. These abnormalities are found only among us human beings,—and yet we regard ourselves as superior to the animal creation! Surely those who spend their days in the worship of their stomach are worse than the birds and beasts. A calm reflection will show that all sins like lying, cheating and stealing are ultimately due to our subjection to the palate. He who is able to control the palate, will easily be able to control the other senses. If we tell lies, or commit theft or adultery, we are looked down upon by society, but, strangely enough, no odium attaches to those who slavishly pander to the palate! It would seem as though this were not a question of morality at all! The fact is that even the best of us are slaves to the palate. No one has yet adequately emphasised the numberless evils that arise from our habit of pandering to the palate. All civilised people would boycott the company of liars, thieves, and adulterers; but they go on eating beyond all limits, and never regard it as a sin at all. Pandering to the palate is not regarded by us as a sin, since all of us are guilty of it, just as dacoity is not regarded as a crime in a village of dacoits; but what is worse, we pride ourselves on it! On occasions of marriage and other festivities, we regard it as a sacred duty to worship the palate; even in times of funeral, we are not ashamed of doing it. [Pg 33] Has a guest come? We must gorge him with sweetmeats. If, from time to time, we do not give feasts to our friends and relations, or do not partake of the feasts given by them, we must become objects of contempt. If, having invited our friends to eat with us, we fail to cram them with rich stuffs, we must be regarded as miserly. On holidays, of course, we must have specially rich food prepared! Indeed, what is really a great sin has come to be looked upon as a sign of wisdom! We have sedulously cultivated such false notions in the matter of eating that we never realise our slavishness and our beastliness. How can we save ourselves from this terrible state? Let us view the question from another standpoint. We find it invariably the case in the world that Nature herself has provided for all creatures, whether man or beast, or bird or insect, just enough food for their sustenance. This is an eternal law of Nature. In the kingdom of Nature, none goes to sleep, none forgets to do his duty, and none shows a tendency to laziness. All the work is done to perfection, and punctually to the minute. If we remember to order our lives strictly in accordance with the immutable and eternal laws of Nature, we shall find that there are no more deaths by starvation anywhere over the wide world. Since Nature always provides just enough food to feed all created beings, it follows [Pg 34] that he who takes to himself more than his normal share of food, is depriving another of his legitimate share. Is it not a fact, that, in the kitchens of emperors and kings, of all rich men, in general, much more food is prepared than is required to feed them and all their dependents? That is to say, they snatch so much food from the share of the poor. Is it, then, any wonder that the poor should die of starvation? If this is true (and this fact has been admitted by the most thoughtful men) it must necessarily follow that all the food that we eat beyond our immediate need is food filched from the stomachs of the poor. And to the extent to which we eat merely with a view to pleasing the palate must our health necessarily suffer. After this preliminary discussion, we can proceed to consider what kind of food is best for us. Before, however, we decide the question of the ideal food for us, we have to consider what kinds of food are injurious to health, and to be avoided. Under the term “food”, we include all the things that are taken into the body through the mouth,—including wine, bhang and opium, tobacco, tea, coffee and cocoa, spices and condiments. I am convinced that all these articles have to be completely eschewed, having been led to this conviction partly from my own experience, and partly from the experiences of others. [Pg 35] Wine, bhang and opium have been condemned by all the religions of the world, although the number of total abstainers is so limited. Drink has brought about the ruin of whole families. The drunkard forfeits his sanity; he has even been known to forget the distinction between mother, wife and daughter. His life becomes a mere burden to him. Even men of sound sense become helpless automatons when they take to drink; even when not actually under its influence, their minds are too impotent to do any work. Some people say that wine is harmless when used as medicine, but even European doctors have begun to give up this view in many cases. Some partisans of drink argue that, if wine can be used as medicine with impunity, it can also be used as drink. But many poisons are employed as medicines; do we ever dream of employing them as food? It is quite possible that, in some diseases, wine may do some good, but even then, no sensible, or thoughtful man should consent to use it even as medicine, under any circumstances. As for opium, it is no less injurious than wine, and is to be equally eschewed. Have we not seen a mighty nation like the Chinese falling under the deadly spell of opium, and rendering itself incapable of maintaining its independence? Have we not seen the jagirdars of our own land forfeiting their jagirs under the same fatal influence? [Pg 36] So powerful is the spell that has been woven over the minds of men by tobacco that it will take an age to break it. Young and old have equally come under this fatal spell. Even the best men do not shrink from the use of tobacco. Its use, indeed, has become a matter of course with us, and is spreading wider and wider every day. Very few people are aware of the many tricks employed by the cigarette-manufacturers to bring us more and more under its influence. They sprinkle opium or some perfumed acid on the tobacco, so that we may find it all the more difficult to extricate ourselves from its clutches. They spend thousands of pounds in advertisements. Many European firms dealing in cigars keep their own presses, have their own cinemas, institute lotteries, and give away prizes, and, in short, spend money like water to achieve their end. Even women have now begun to smoke. And poems have been composed on tobacco, extolling it as the great friend of the poor! The evils of smoking are too numerous to mention. The habitual smoker becomes such a bond slave to it that he knows no sense of shame or compunction; he proceeds to emit the foul fumes even in the houses of strangers! It is also a matter of common experience that smokers are often tempted to commit all sorts of crimes. Children [Pg 37] steal money from their parents’ purses; and even the prisoners in gaols manage to steal cigarettes and keep them carefully concealed. The smoker will get on without food, but he cannot dispense with his smoke! Soldiers on the field of battle have been known to lose all capacity for fighting for failure of the indispensable cigarette at the critical moment. The late Count Leo Tolstoi of Russia tells us the following story. A certain man once took it into his head, for some reason, to murder his wife. He actually drew the knife and was about to do the deed, when he felt some compunction, and gave it up. Then he sat down to smoke and his wits being turned under the influence of tobacco, he rose once more and actually committed the murder. Tolstoi held the view that the poison of tobacco is more subtle and irresistible, and hence far more dangerous, than that of wine. Then the money that is spent on cigars and cigarettes by individuals is frightfully large. I have myself come across instances of cigars consuming as much as Rs. 75 a month for one man! Smoking also leads to an appreciable reduction of digestive powers. The smoker feels no appetite for food, and in order to give it some flavour, spices and condiments have to be freely used. His breath stinks, and, in some cases, blisters are formed on [Pg 38] his face, and the gums and teeth turn black in colour. Many also fall a prey to terrible diseases. The fumes of tobacco befoul the air around, and public health suffers in consequence. I cannot understand how those who condemn drink can have the temerity to defend smoking. The man who does not eschew tobacco in all its forms can never be perfectly healthy, nor can he be a man of pure and blameless character. I must say that tea, coffee and cocoa are equally injurious to health, although I know that very few are likely to agree with me. There is a kind of poison in all of them; and, in the case of tea and coffee, if milk and sugar were not added, there would be absolutely no nutritious element in them. By means of repeated and varied experiments it has been established that there is nothing at all in these articles which is capable of improving the blood. Until a few years ago, we used to drink tea and coffee only on special occasions, but to-day they have become universally indispensable. Things have come to such a pass that even sickly persons often use them as substitutes for nourishing food! Fortunately for us, the costliness of cocoa has prevented its spread to the same extent as tea and coffee, although, in the homes of the rich, it is quite liberally used. [Pg 39] That all these three articles are poisonous can be seen from the fact that those who once take to them can never afterwards get on without them. In the old days, I myself used to feel a distinct sense of weariness or langour if I did not get my tea punctually at the usual hour. Once some 400 women and children had gathered together at a certain celebration. The executive committee had resolved against providing tea to the visitors. The women, however, that had assembled there, were in the habit of taking tea at 4 o’clock every evening. The authorities were informed that, if these women were not given their usual tea, they would be too ill to move about, and, needless to say, they had to cancel their original resolution! But some slight delay in the preparation of the tea led to a regular uproar, and the commotion subsided only after the women had had their cup of tea! I can vouch for the authenticity of this incident. In another instance, a certain woman had lost all her digestive powers under the influence of tea, and had become a prey to chronic headaches; but from the moment that she gave up tea her health began steadily to improve. A doctor of the Battersea Municipality in England has declared, after careful investigation, that the brain-tissues of thousands of women in his district have been diseased from excessive use of tea. I have myself [Pg 40] come across many instances of health being ruined by tea. Coffee does some good against Kapha (phlegm) and Vatha (‘wind’), but at the same time it weakens the body by destroying the vital fluid, and by making the blood as thin as water. To those people who advocate coffee on the ground that it is beneficial against “phlegm” and “wind”, we would recommend the juice of ginger as even better for the purpose. And, on the other hand, let us remember that the evil effects of coffee are too serious to be counter-balanced by its good. When the blood and the vital fluid are poisoned by a stuff, can there be any hesitation in giving it up altogether? Cocoa is fully as harmful as coffee, and it contains a poison which deadens the perceptions of the skin. Those people who recognise the validity of moral considerations in these matters should remember that tea, coffee and cocoa are prepared mostly by labourers under indenture, which is only a fine name for slavery. If we saw with our own eyes the oppressive treatment that is meted out to the labourers in cocoa plantations, we should never again make use of the stuff. Indeed, if we enquire minutely into the methods of preparation of all our articles of food, we shall have to give up 90% of them! A harmless and healthy substitute for coffee (tea [Pg 41] or cocoa) can be prepared as follows. Even habitual coffee-drinkers will be unable to perceive any difference in taste between coffee and this substitute. Good and well-sifted wheat is put into a frying-pan over the fire and well fried, until it has turned completely red, and begun to grow dark in colour. Then it is powdered just like coffee. A spoon of the powder is then put into a cup, and boiling water poured on to it. Preferably keep the thing over the fire for a minute, and add milk and sugar, if necessary, and you get a delicious drink, which is much cheaper and healthier than coffee. Those who want to save themselves the trouble of preparing this powder may get their supply from the Satyagraha Ashram, Ahmedabad. From the point of view of diet, the whole mankind may be divided into three broad divisions. (1) The first class, which is the largest, consists of those who, whether by preference or out of necessity, live on an exclusive vegetable diet. Under this division come the best part of India, a large portion of Europe, and China and Japan. The staple diet of the Italians is macaroni, of the Irish potato, of the Scotch oatmeal, and of the Chinese and Japanese rice. (2) The second class consists of those who live on a mixed diet. Under this class come most of the people of England, the [Pg 42] richer classes of China and Japan, the richer Mussalmans of India, as well as those rich Hindus who have no religious scruples about taking meat. (3) To the third class belong the uncivilised peoples of the frigid zones, who live on an exclusive meat diet. These are not very numerous, and they also introduce a vegetable element into their diet, wherever they come in contact with the civilised races of Europe. Man, then, can live on three kinds of diet; but it is our duty to consider which of these is the healthiest for us. An examination of the structure of the human body leads to the conclusion that man is intended by Nature to live on a vegetable diet. There is the closest affinity between the organs of the human body and those of the fruit-eating animals. The monkey, for instance, is so similar to man in shape and structure, and it is a fruit-eating animal. Its teeth and stomach are just like the teeth and stomach of man. From this we may infer that man is intended to live on roots and fruits, and not on meat. Scientists have found out by experiments that fruits have in them all the elements that are required for man’s sustenance. The plantain, the orange, the date, the grape, the apple, the almond, the walnut, the groundnut, the cocoanut,—all these fruits contain a large percentage of nutritious [Pg 43] elements. These scientists even hold that there is no need for man to cook his food. They argue that he should be able to subsist very well on food cooked by the Sun’s warmth, even as all the lower animals are able to do; and they say that the most nutritious elements in the food are destroyed in the process of cooking, and that those things that cannot be eaten uncooked could not have been intended for our food by Nature. If this view be correct, it follows that we are at present wasting a lot of our precious time in the cooking of our food. If we could live on uncooked food alone, we should be saving so much time and energy, as well as money, all of which may be utilised for more useful purposes. Some people will doubtless say that it is idle and foolish to speculate on the possibility of men taking to uncooked food, since there is absolutely no hope of their ever doing it. But we are not considering at present what people will or will not do, but only what they ought to do. It is only when we know what the ideal kind of diet is that we shall be able more and more to approximate our actual to the ideal. When we say that a fruit-diet is the best, we do not, of course, expect all men to take to it straightway. We only mean that, if they should take to this diet, it would be the best thing for them. [Pg 44] There are many men in England who have tried a pure fruit-diet, and who have recorded the results of their experience. They were people who took to this diet, not out of religious scruples, but simply out of considerations of health. A German doctor has written a bulky volume on the subject, and established the value of a fruit-diet by many arguments and evidences. He has cured many diseases by a fruit-diet combined with open-air life. He goes so far as to say that the people of any country can find all the elements of nutrition in the fruits of their own land. It may not be out of place to record my own experience in this connection. For the last six months I have been living exclusively on fruits—rejecting even milk and curd. My present dietary consists of plantain, groundnut and olive oil, with some sour fruit like the lime. I cannot say that my experiment has been altogether a success, but a period of six months is all too short to arrive at any definite conclusions on such a vital matter as a complete change of diet. This, however, I can say, that, during this period, I have been able to keep well where others have been attacked by disease, and my physical as well as mental powers are now greater than before. I may not be able to lift heavy loads, but I can now do hard labour for a much longer time without fatigue. I can also do [Pg 45] more mental work, and with better persistence and resoluteness. I have tried a fruit-diet on many sickly people, invariably with great advantage. I shall describe these experiences in the section on diseases. Here I will only say that my own experience, as well as my study of the subject, has confirmed me in the conviction that a fruit-diet is the best for us. As I have already confessed, I do not think for a moment that people will take to a fruit-diet as soon as they read this. It may even be that all that I have written has no effect at all on a single reader, but I believe it to be my bounden duty to set down what I hold to be the right thing to the best of my light. If however, anybody does wish to try a fruit-diet, he should proceed rather cautiously in order to obtain the best results. He should carefully go through all the chapters of this book, and fully grasp the fundamental principles, before he proceeds to do anything in practice. My request to my readers is that they should reserve their final judgments until they have read through all that I have got to say. A vegetable diet is the best after a fruit-diet. Under this term we include all kinds of pot-herbs and cereals, as well as milk. Vegetables are not as nutritious as fruits, since they lose part of their [Pg 46] efficacy in the process of cooking. We cannot, however, eat uncooked vegetables. We will now proceed to consider which vegetables are the best for us. Wheat is the best of all the cereals. Man can live on wheat alone, for in it we have in due proportion all the elements of nutrition. Many kinds of edibles can be made of wheat, and they can all be easily digested. The ready-made foods for children that are sold by chemists are also made partly of wheat. Millet and maize belong to the same genus, and cakes and loaves can also be made out of them, but they are inferior to wheat in their food-value. We will now consider the best form in which wheat may be taken. The white “mill flour” that is sold in our bazars is quite useless; it contains no nutriment at all. An English doctor tells us that a dog which was fed solely on this flour died, while other dogs which were fed on better flour remained quite healthy. There is a great demand for loaves made of this flour, since men eat merely to satisfy their palate, and are rarely moved by considerations of health. These loaves are devoid of taste and nutriment, as well as of softness. They become so hard that they cannot be broken by the hand. The best form of flour is that which is made of well-sifted wheat in the grind-mill at home. This flour should be used [Pg 47] without further sifting. Loaves made of it are quite sweet to the taste, as well as quite soft. It also lasts for a longer time than the “mill flour”, since it is far more nutritious, and may be used in smaller quantities. The loaf sold in the bazars is thoroughly useless. It may be quite white and attractive in appearance, but it is invariably adulterated. The worst of it is that it is made by fermentation. Many persons have testified from experience that fermented dough is harmful to health. Further, these loaves being made by besmearing the oven with fat, they are objectionable to Hindu as well as Mussalman sentiment. To fill the stomach with these bazar loaves instead of preparing good loaves at home is at best a sign of indolence. Another and an easier way of taking wheat is this. Wheat is ground into coarse grain, which is then well cooked and mixed with milk and sugar. This gives a very delicious and healthy kind of food. Rice is quite useless as a food. Indeed, it is doubtful if men can subsist upon mere rice, to the exclusion of such nutritious articles as dhall, ghee and milk. This is not the case with wheat, for man can retain his strength by living on mere wheat boiled in water. We eat the pot-herbs mainly for their taste. As [Pg 48] they have laxative powers, they help to purify the blood up to a limit. Yet they are but varieties of grass, and very hard to digest. Those who partake too much of them have flabby bodies; they suffer very often from indigestion, and go about in search of digestive pills and powders. Hence, if we take them at all, we should do so in moderation. All the many varieties of pulse are very heavy, and hard of digestion. Their merit is that those who eat them do not suffer from hunger for a long time; but they also lead to indigestion in most cases. Those who do hard labour may be able to digest them, and derive some good out of them. But we who lead a sedentary life should be very chary of eating them. Dr. Haig, a celebrated writer in England, tells us, on the basis of repeated experiments, that the pulses are injurious to health, since they generate a kind of acid in the system, which leads to several diseases, and a premature old age. His arguments need not be given here, but my own experience goes to confirm his view. Those, however, who are unable or unwilling to eschew the pulses altogether, should use them with great caution. Almost everywhere in India, the spices and condiments are freely used, as nowhere else in the whole world. Even the African negroes dislike the taste of our masala, and refuse to eat food [Pg 49] mixed with it. And if the Whites eat masala, their stomach gets out of order, and pimples also appear on their faces, as I have found from my own experience. The fact is that masala is by no means savoury in itself, but we have so long been accustomed to its use that its flavour appeals to us. But, as has been already explained, it is wrong to eat anything for its mere taste. How comes it, then, that masala is so freely eaten by us? Admittedly, in order to help the digestion, and to be able to eat more. Pepper, mustard, coriander and other condiments have the power of artificially helping the digestion, and generating a sort of artificial hunger. But it would be wrong to to infer from this that all the food has been thoroughly digested, and assimilated into the system. Those who take too much of masala are often found to suffer from anaemia, and even from diarrhea. I know a man who even died in the prime of youth out of too much eating of pepper. Hence it is quite necessary to eschew all condiments altogether. What has been said of masala applies also to salt. Most people would be scandalised at this suggestion, but it is a fact established by experience. There is a school in England who even hold the view that salt is more harmful than most condiments. As there is enough of salt in the composition of the vegetables we use, we need not [Pg 50] put any extra salt into them. Nature herself has provided just as much salt as is required for the upkeep of our health. All the extra salt that we use is quite superfluous; all of it goes out of the body again in the form of perspiration, or in other ways, and no portion of it seems to have any useful function to perform in the body. One writer even holds that salt poisons the blood. He says that those who use no salt at all have their blood so pure that they are not affected even by snake-bite. We do not know if this is a fact or not, but this much we know from experience, that, in several diseases like piles and asthama, the disuse of salt at once produces appreciably beneficial results. And, on the other hand, I have not come across a single instance of a man being any the worse for not using salt. I myself left off the use of salt two years ago, and I have not only not suffered by it, but have even been benefitted in some respects. I have not now to drink as much water as before, and am more brisk and energetic. The reason for my disuse of salt was a very strange one: for it was occasioned by the illness of somebody else! The person whose illness led to it did not get worse after that, but remained in the same condition; and it is my faith that, if only the diseased person himself had given up the use of salt, he would have recovered completely. [Pg 51] Those who give up salt will also have to give up vegetables and dhall. This is a very hard thing to do, as I have found from many tests. I am convinced that vegetables and dhall cannot be properly digested without salt. This does not, of course, mean that salt improves the digestion, but it only appears to do so, just as pepper does, although ultimately it leads to evil consequences. Of course, the man who entirely gives up the use of salt may feel out of sorts for a few days; but, if he keeps up his spirits, he is bound to be immensely benefitted in the long run. I make bold to regard even milk as one of the articles to be eschewed! This I do on the strength of my own experience which, however, need not be described here in detail. The popular idea of the value of milk is a pure superstition, but it is so deep-rooted that it is futile to think of removing it. As I have said more than once, I do not cherish the hope that my readers will accept all my views; I do not even believe that all those who accept them in theory will adopt them in practice. Nevertheless, I think it my duty to speak out what I believe to be the truth, leaving my readers to form their own judgments. Many doctors hold the view that milk gives rise to a kind of fever, and many books have been written in support of this view. The disease bearing germs that live in the air rapidly gain an [Pg 52] entrance into the milk, and render it poisonous, so that it is very difficult to keep milk in a state of perfect purity. In Africa elaborate rules have been laid down for the conduct of the dairies, saying how the milk should be boiled and preserved, how the vessels should be kept clean, and so on. When so much pains have to be taken in this matter, it is certainly to be considered how far it is worth while to employ milk as an article of food. Moreover, the purity or otherwise of the milk depends upon the cow’s food, and the state of its health. Doctors have testified to the fact that those who drink the milk of consumptive cows fall a prey to consumption themselves. It is very rare to come across a cow that is perfectly healthy. That is to say, perfectly pure milk is very hard to obtain, since it is tainted at its very source. Everybody knows that a child that sucks the breast of its mother contracts any disease that she might be suffering from. And often when a little child is ill, medicine is administered to its mother, so that its effect might reach the child through the milk of her breast. Just in the same way, the health of the man who drinks the milk of a cow will be the same as that of the cow itself. When the use of milk is fraught with so much danger, would it not be the part of wisdom [Pg 53] to eschew it altogether, especially when there are excellent substitutes? Olive oil, for instance serves this purpose to some extent; and sweet almond is a most efficient substitute. The almond is first soaked in hot water, and its husk removed. Then it is well crushed, and mixed thoroughly well with water. This gives a drink which contains all the good properties of milk, and is at the same time free from its evil effects. Now let us consider this question from the point of view of Natural law. The calf drinks its mother’s milk only until its teeth have grown; and it begins to eat as soon as it has its teeth. Clearly, this is also what man is intended to do. Nature does not intend us to go on drinking milk after we have ceased to be infants. We should learn to live on fruits like the apple and the almond, or on wheat roti, after we have our teeth. Although this is not the place to consider the saving in money that might be effected by giving up milk, it is certainly a point to be kept in mind. Nor is there any need for any of the articles produced from milk. The sourness of lime is quite a good substitute for that of buttermilk; and as for ghee, thousands of Indians manage with oil even now. A careful examination of the structure of the human body shows that meat is not the natural food of man. Dr. Haig and Dr. Kingsford have [Pg 54] very clearly demonstrated the evil effects of meat on the body of man. They have shown that meat generates just the same kind of acid in the body as the pulses. It leads to the decay of the teeth, as well as to rheumatism; it also gives rise to evil passions like anger, which, as we have already seen, are but forms of disease. To sum up, then, we find that those who live on fruits alone are very rare, but it is quite easy to live on a combination of fruits, wheat and olive oil, and it is also eminently conducive to sound health. The plantain comes easy first among the fruits; but the date, the grape, the plum and the orange, to name only a few, are all quite nourishing, and may be taken along with the roti. The roti does not suffer in taste by being besmeared with olive oil. This diet dispenses with salt, pepper, milk and sugar, and is quite simple and cheap. It is, of course, foolish to eat sugar for its own sake. Too much sweetmeat weakens the teeth, and injures the health. Excellent edibles can be made of wheat and the fruits, and a combination of health and taste secured. The next question to consider is how much food should be taken, and how many times a day. But, as this is a subject of vital importance, we will devote a separate chapter to it. ";

	    var michijusDemoText = "健三が遠い所から帰って来て駒込の奥に世帯を持ったのは東京を出てから何年目になるだろう。彼は故郷の土を踏む珍らしさのうちに一種の淋し味さえ感じた。 彼の身体には新らしく後に見捨てた遠い国の臭がまだ付着していた。彼はそれを忌んだ。一日も早くその臭を振い落さなければならないと思った。そうしてその臭のうちに潜んでいる彼の誇りと満足にはかえって気が付かなかった。 彼はこうした気分を有った人にありがちな落付のない態度で、千駄木から追分へ出る通りを日に二返ずつ規則のように往来した。 ある日小雨が降った。その時彼は外套も雨具も着けずに、ただ傘を差しただけで、何時もの通りを本郷の方へ例刻に歩いて行った。すると車屋の少しさきで思い懸けない人にはたりと出会った。その人は根津権現の裏門の坂を上って、彼と反対に北へ向いて歩いて来たものと見えて、健三が行手を何気なく眺めた時、十間位先から既に彼の視線に入ったのである。そうして思わず彼の眼をわきへ外させたのである。 彼は知らん顔をしてその人の傍を通り抜けようとした。けれども彼にはもう一遍この男の眼鼻立を確かめる必要があった。それで御互が二、三間の距離に近づいた頃また眸をその人の方角に向けた。すると先方ではもう疾くに彼の姿を凝と見詰めていた。 往来は静であった。二人の間にはただ細い雨の糸が絶間なく落ちているだけなので、御互が御互の顔を認めるには何の困難もなかった。健三はすぐ眼をそらしてまた真正面を向いたまま歩き出した。けれども相手は道端に立ち留まったなり、少しも足を運ぶ気色なく、じっと彼の通り過ぎるのを見送っていた。健三はその男の顔が彼の歩調につれて、少しずつ動いて回るのに気が着いた位であった。 彼はこの男に何年会わなかったろう。彼がこの男と縁を切ったのは、彼がまだ廿歳になるかならない昔の事であった。それから今日までに十五、六年の月日が経っているが、その間彼らはついぞ一度も顔を合せた事がなかったのである。 彼の位地も境遇もその時分から見るとまるで変っていた。黒い髭を生して山高帽を被った今の姿と坊主頭の昔の面影とを比べて見ると、自分でさえ隔世の感が起らないとも限らなかった。しかしそれにしては相手の方があまりに変らな過ぎた。彼はどう勘定しても六十五、六であるべきはずのその人の髪の毛が、何故今でも元の通り黒いのだろうと思って、心のうちで怪しんだ。帽子なしで外出する昔ながらの癖を今でも押通しているその人の特色も、彼には異な気分を与える媒介となった。 彼は固よりその人に出会う事を好まなかった。万一出会ってもその人が自分より立派な服装でもしていてくれれば好いと思っていた。しかし今目前見たその人は、あまり裕福な境遇にいるとは誰が見ても決して思えなかった。帽子を被らないのは当人の自由としても、羽織なり着物なりについて判断したところ、どうしても中流以下の活計を営んでいる町家の年寄としか受取れなかった。彼はその人の差していた洋傘が、重そうな毛繻子であった事にまで気が付いていた。 その日彼は家へ帰っても途中で会った男の事を忘れ得なかった。折々は道端へ立ち止まって凝と彼を見送っていたその人の眼付に悩まされた。しかし細君には何にも打ち明けなかった。機嫌のよくない時は、いくら話したい事があっても、細君に話さないのが彼の癖であった。細君も黙っている夫に対しては、用事の外決して口を利かない女であった。 二 次の日健三はまた同じ時刻に同じ所を通った。その次の日も通った。けれども帽子を被らない男はもうどこからも出て来なかった。彼は器械のようにまた義務のように何時もの道を往ったり来たりした。 こうした無事の日が五日続いた後、六日目の朝になって帽子を被らない男は突然また根津権現の坂の蔭から現われて健三を脅やかした。それがこの前とほぼ同じ場所で、時間も殆どこの前と違わなかった。 その時健三は相手の自分に近付くのを意識しつつ、何時もの通り器械のようにまた義務のように歩こうとした。けれども先方の態度は正反対であった。何人をも不安にしなければやまないほどな注意を双眼に集めて彼を凝視した。隙さえあれば彼に近付こうとするその人の心が曇よりした眸のうちにありありと読まれた。出来るだけ容赦なくその傍を通り抜けた健三の胸には変な予覚が起った。 「とてもこれだけでは済むまい」 しかしその日家へ帰った時も、彼はついに帽子を被らない男の事を細君に話さずにしまった。 彼と細君と結婚したのは今から七、八年前で、もうその時分にはこの男との関係がとくの昔に切れていたし、その上結婚地が故郷の東京でなかったので、細君の方ではじかにその人を知るはずがなかった。しかし噂としてだけならあるいは健三自身の口から既に話していたかも知れず、また彼の親類のものから聞いて知っていないとも限らなかった。それはいずれにしても健三にとって問題にはならなかった。 ただこの事件に関して今でも時々彼の胸に浮んでくる結婚後の事実が一つあった。五、六年前彼がまだ地方にいる頃、ある日女文字で書いた厚い封書が突然彼の勤め先の机の上へ置かれた。その時彼は変な顔をしてその手紙を読んだ。しかしいくら読んでも読んでも読み切れなかった。半紙廿枚ばかりへ隙間なく細字で書いたものの、五分の一ほど眼を通した後、彼はついにそれを細君の手に渡してしまった。 その時の彼には自分宛でこんな長い手紙をかいた女の素性を細君に説明する必要があった。それからその女に関聯して、是非ともこの帽子を被らない男を引合に出す必要もあった。健三はそうした必要にせまられた過去の自分を記憶している。しかし機嫌買な彼がどの位綿密な程度で細君に説明してやったか、その点になると彼はもう忘れていた。細君は女の事だからまだ判然覚えているだろうが、今の彼にはそんな事を改めて彼女に問い訊して見る気も起らなかった。彼はこの長い手紙を書いた女と、この帽子を被らない男とを一所に並べて考えるのが大嫌だった。それは彼の不幸な過去を遠くから呼び起す媒介となるからであった。 幸い彼の目下の状態はそんな事に屈托している余裕を彼に与えなかった。彼は家へ帰って衣服を着換えると、すぐ自分の書斎へ這入った。彼は始終その六畳敷の狭い畳の上に自分のする事が山のように積んであるような気持でいるのである。けれども実際からいうと、仕事をするよりも、しなければならないという刺戟の方が、遥かに強く彼を支配していた。自然彼はいらいらしなければならなかった。 彼が遠い所から持って来た書物の箱をこの六畳の中で開けた時、彼は山のような洋書の裡に胡坐をかいて、一週間も二週間も暮らしていた。そうして何でも手に触れるものを片端から取り上げては二、三頁ずつ読んだ。それがため肝心の書斎の整理は何時まで経っても片付かなかった。しまいにこの体たらくを見るに見かねた或友人が来て、順序にも冊数にも頓着なく、あるだけの書物をさっさと書棚の上に並べてしまった。彼を知っている多数の人は彼を神経衰弱だと評した。彼自身はそれを自分の性質だと信じていた。 三 健三は実際その日その日の仕事に追われていた。家へ帰ってからも気楽に使える時間は少しもなかった。その上彼は自分の読みたいものを読んだり、書きたい事を書いたり、考えたい問題を考えたりしたかった。それで彼の心は殆んど余裕というものを知らなかった。彼は始終机の前にこびり着いていた。 娯楽の場所へも滅多に足を踏み込めない位忙がしがっている彼が、ある時友達から謡の稽古を勧められて、体よくそれを断わったが、彼は心のうちで、他人にはどうしてそんな暇があるのだろうと驚ろいた。そうして自分の時間に対する態度が、あたかも守銭奴のそれに似通っている事には、まるで気がつかなかった。 自然の勢い彼は社交を避けなければならなかった。人間をも避けなければならなかった。彼の頭と活字との交渉が複雑になればなるほど、人としての彼は孤独に陥らなければならなかった。彼は朧気にその淋しさを感ずる場合さえあった。けれども一方ではまた心の底に異様の熱塊があるという自信を持っていた。だから索寞たる曠野の方角へ向けて生活の路を歩いて行きながら、それがかえって本来だとばかり心得ていた。温かい人間の血を枯らしに行くのだとは決して思わなかった。 彼は親類から変人扱いにされていた。しかしそれは彼に取って大した苦痛にもならなかった。 「教育が違うんだから仕方がない」 彼の腹の中には常にこういう答弁があった。 「やっぱり手前味噌よ」 これは何時でも細君の解釈であった。 気の毒な事に健三はこうした細君の批評を超越する事が出来なかった。そういわれる度に気不味い顔をした。ある時は自分を理解しない細君を心から忌々しく思った。ある時は叱り付けた。またある時は頭ごなしに遣り込めた。すると彼の癇癪が細君の耳に空威張をする人の言葉のように響いた。細君は「手前味噌」の四字を「大風呂敷」の四字に訂正するに過ぎなかった。 彼には一人の腹違の姉と一人の兄があるぎりであった。親類といったところでこの二軒より外に持たない彼は、不幸にしてその二軒ともとあまり親しく往来をしていなかった。自分の姉や兄と疎遠になるという変な事実は、彼に取っても余り気持の好いものではなかった。しかし親類づきあいよりも自分の仕事の方が彼には大事に見えた。それから東京へ帰って以後既に三、四回彼らと顔を合せたという記憶も、彼には多少の言訳になった。もし帽子を被らない男が突然彼の行手を遮らなかったなら、彼は何時もの通り千駄木の町を毎日二返規則正しく往来するだけで、当分外の方角へは足を向けずにしまったろう。もしその間に身体の楽に出来る日曜が来たなら、ぐたりと疲れ切った四肢を畳の上に横たえて半日の安息を貪るに過ぎなかったろう。 しかし次の日曜が来たとき、彼はふと途中で二度会った男の事を思い出した。そうして急に思い立ったように姉の宅へ出掛けた。姉の宅は四ッ谷の津の守坂の横で、大通りから一町ばかり奥へ引込んだ所にあった。彼女の夫というのは健三の従兄にあたる男だから、つまり姉にも従兄であった。しかし年齢は同年か一つ違で、健三から見ると双方とも、一廻りも上であった。この夫がもと四ッ谷の区役所へ勤めた縁故で、彼が其所をやめた今日でも、まだ馴染の多い土地を離れるのが厭だといって、姉は今の勤先に不便なのも構わず、やっぱり元の古ぼけた家に住んでいるのである。 四 この姉は喘息持であった。年が年中ぜえぜえいっていた。それでも生れ付が非常な癇性なので、よほど苦しくないと決して凝としていなかった。何か用を拵えて狭い家の中を始終ぐるぐる廻って歩かないと承知しなかった。その落付のないがさつな態度が健三の眼には如何にも気の毒に見えた。 姉はまた非常に饒舌る事の好な女であった。そうしてその喋舌り方に少しも品位というものがなかった。彼女と対坐する健三はきっと苦い顔をして黙らなければならなかった。 「これが己の姉なんだからなあ」 彼女と話をした後の健三の胸には何時でもこういう述懐が起った。 その日健三は例の如く襷を掛けて戸棚の中を掻きまわしているこの姉を見出した。 「まあ珍らしく能く来てくれたこと。さあ御敷きなさい」 姉は健三に座蒲団を勧めて縁側へ手を洗いに行った。 健三はその留守に座敷のなかを見廻わした。欄間には彼が子供の時から見覚えのある古ぼけた額が懸っていた。その落款に書いてある筒井憲という名は、たしか旗本の書家か何かで、大変字が上手なんだと、十五、六の昔此所の主人から教えられた事を思い出した。彼はその主人をその頃は兄さん兄さんと呼んで始終遊びに行ったものである。そうして年からいえば叔父甥ほどの相違があるのに、二人して能く座敷の中で相撲をとっては姉から怒られたり、屋根へ登って無花果をいで食って、その皮を隣の庭へ投げたため、尻を持ち込まれたりした。主人が箱入りのコンパスを買って遣るといって彼を騙したなり何時まで経っても買ってくれなかったのを非常に恨めしく思った事もあった。姉と喧嘩をして、もう向うから謝罪って来ても勘忍してやらないと覚悟を極めたが、いくら待っていても、姉が詫まらないので、仕方なしにこちらからのこのこ出掛けて行ったくせに、手持無沙汰なので、向うで御這入りというまで、黙って門口に立っていた滑稽もあった。…… 古い額を眺めた健三は、子供の時の自分に明らかな記憶の探照燈を向けた。そうしてそれほど世話になった姉夫婦に、今は大した好意を有つ事が出来にくくなった自分を不快に感じた。 「近頃は身体の具合はどうです。あんまり非道く起る事もありませんか」 彼は自分の前に坐った姉の顔を見ながらこう訊ねた。 「ええ有難う。御蔭さまで陽気が好いもんだから、まあどうかこうか家の事だけは遣ってるんだけれども、——でもやっぱり年が年だからね。とても昔しのようにがせいに働く事は出来ないのさ。昔健ちゃんの遊びに来てくれた時分にゃ、随分尻ッ端折りで、それこそ御釜の御尻まで洗ったもんだが、今じゃとてもそんな元気はありゃしない。だけど御蔭様でこう遣って毎日牛乳も飲んでるし……」 健三は些少ながら月々いくらかの小遣を姉に遣る事を忘れなかったのである。 「少し痩せたようですね」 「なにこりゃ私の持前だから仕方がない。昔から肥った事のない女なんだから。やッぱり癇が強いもんだからね。癇で肥る事が出来ないんだよ」 姉は肉のない細い腕を捲って健三の前に出して見せた。大きな落ち込んだ彼女の眼の下を薄黒い半円形の暈が、怠そうな皮で物憂げに染めていた。健三は黙ってそのぱさぱさした手の平を見詰めた。 「でも健ちゃんは立派になって本当に結構だ。御前さんが外国へ行く時なんか、もう二度と生きて会う事は六ずかしかろうと思ってたのに、それでもよくまあ達者で帰って来られたのね。御父さんや御母さんが生きて御出だったらさぞ御喜びだろう」 姉の眼にはいつか涙が溜っていた。姉は健三の子供の時分、「今に姉さんに御金が出来たら、健ちゃんに何でも好なものを買って上げるよ」と口癖のようにいっていた。そうかと思うと、「こんな偏窟じゃこの子はとても物にゃならない」ともいった。健三は姉の昔の言葉やら語気やらを思い浮べて、心の中で苦笑した。 五 そんな古い記憶を喚び起こすにつけても、久しく会わなかった姉の老けた様子が一層健三の眼についた。 「時に姉さんはいくつでしたかね」 「もう御婆さんさ。取って一だもの御前さん」 姉は黄色い疎らな歯を出して笑って見せた。実際五十一とは健三にも意外であった。 「すると私とは一廻以上違うんだね。私ゃまた精々違って十か十一だと思っていた」 「どうして一廻どころか。健ちゃんとは十六違うんだよ、姉さんは。良人が羊の三碧で姉さんが四緑なんだから。健ちゃんは慥か七赤だったね」 「何だか知らないが、とにかく三十六ですよ」 「繰って見て御覧、きっと七赤だから」 健三はどうして自分の星を繰るのか、それさえ知らなかった。年齢の話はそれぎりやめてしまった。 「今日は御留守なんですか」と比田の事を訊いて見た。 「昨夕も宿直でね。なに自分の分だけなら月に三度か四度で済むんだけれども、他に頼まれるもんだからね。それに一晩でも余計泊りさえすればやっぱりいくらかになるだろう、それでつい他の分まで引受ける気にもなるのさ。この頃じゃあっちへ寐るのとこっちへ帰るのと、まあ半々位なものだろう。ことによると、向へ泊る方がかえって多いかも知れないよ」 健三は黙って障子の傍に据えてある比田の机を眺めた。硯箱や状袋や巻紙がきちりと行儀よく並んでいる傍に、簿記用の帳面が赤い脊皮をこちらへ向けて、二、三冊立て懸けてあった。それから綺麗に光った小さい算盤もその下に置いてあった。 噂によると比田はこの頃変な女に関係をつけて、それを自分の勤め先のつい近くに囲っているという評番であった。宿直だ宿直だといって宅へ帰らないのは、あるいはそのせいじゃなかろうかと健三には思えた。 「比田さんは近頃どうです。大分年を取ったから元とは違って真面目になったでしょう」 「なにやッぱり相変らずさ。ありゃ一人で遊ぶために生れて来た男なんだから仕方がないよ。やれ寄席だ、やれ芝居だ、やれ相撲だって、御金さえありゃ年が年中飛んで歩いてるんだからね。でも奇体なもんで、年のせいだか何だか知らないが、昔に比べると、少しは優しくなったようだよ。もとは健ちゃんも知ってる通りの始末で、随分烈しかったもんだがね。蹴ったり、敲いたり、髪の毛を持って座敷中引摺廻したり……」 「その代り姉さんも負けてる方じゃなかったんだからな」 「なに妾ゃ手出しなんかした事あ、ついの一度だってありゃしない」 健三は勝気な姉の昔を考え出してつい可笑しくなった。二人の立ち廻りは今姉の自白するように受身のものばかりでは決してなかった。ことに口は姉の方が比田に比べると十倍も達者だった。それにしてもこの利かぬ気の姉が、夫に騙されて、彼が宅へ帰らない以上、きっと会社へ泊っているに違いないと信じ切っているのが妙に不憫に思われて来た。 「久しぶりに何か奢りましょうか」と姉の顔を眺めながらいった。 「ありがと、今御鮨をそういったから、珍らしくもあるまいけれども、食べてって御くれ」 姉は客の顔さえ見れば、時間に関係なく、何か食わせなければ承知しない女であった。健三は仕方がないから尻を落付けてゆっくり腹の中に持って来た話を姉に切り出す気になった。 六 近頃の健三は頭を余計遣い過ぎるせいか、どうも胃の具合が好くなかった。時々思い出したように運動して見ると、胸も腹もかえって重くなるだけであった。彼は要心して三度の食事以外にはなるべく物を口へ入れないように心掛ていた。それでも姉の悪強には敵わなかった。 「海苔巻なら身体に障りゃしないよ。折角姉さんが健ちゃんに御馳走しようと思って取ったんだから、是非食べて御くれな。厭かい」 健三は仕方なしに旨くもない海苔巻を頬張って、好い加減烟草で荒らされた口のうちをもぐもぐさせた。 姉が余り饒舌るので、彼は何時までも自分のいいたい事がいえなかった。訊きたい問題を持っていながら、こう受身な会話ばかりしているのが、彼には段々むず痒くなって来た。しかし姉にはそれが一向通じないらしかった。 他に物を食わせる事の好きなのと同時に、物を遣る事の好きな彼女は、健三がこの前賞めた古ぼけた達磨の掛物を彼に遣ろうかといい出した。 「あんなものあ、宅にあったって仕方がないんだから、持って御出でよ。なに比田だって要りゃしないやね、汚ない達磨なんか」 健三は貰うとも貰わないともいわずにただ苦笑していた。すると姉は何か秘密話でもするように急に調子を低くした。 「実は健ちゃん、御前さんが帰って来たら、話そう話そうと思って、つい今日まで黙ってたんだがね。健ちゃんも帰りたてでさぞ忙がしかろうし、それに姉さんが出掛けて行くにしたところで、御住さんがいちゃ、少し話し悪い事だしね。そうかって、手紙を書こうにも御存じの無筆だろう……」 姉の前置は長たらしくもあり、また滑稽でもあった。小さい時分いくら手習をさせても記憶が悪くって、どんなに平易しい字も、とうとう頭へ這入らずじまいに、五十の今日まで生きて来た女だと思うと、健三にはわが姉ながら気の毒でもありまたうら恥ずかしくもあった。 「それで姉さんの話ってえな、一体どんな話なんです。実は私も今日は少し姉さんに話があって来たんだが」 「そうかいそれじゃ御前さんの方のから先へ聴くのが順だったね。何故早く話さなかったの」 「だって話せないんだもの」 「そんなに遠慮しないでもいいやね。姉弟の間じゃないか、御前さん」 姉は自分の多弁が相手の口を塞いでいるのだという明白な事実には毫も気が付いていなかった。 「まあ姉さんの方から先へ片付けましょう。何ですか、あなたの話っていうのは」 「実は健ちゃんにはまことに気の毒で、いい悪いんだけれども、あたしも段々年を取って身体は弱くなるし、それに良人があの通りの男で、自分一人さえ好けりゃ女房なんかどうなったって、己の知った事じゃないって顔をしているんだから。——尤も月々の取高が少ない上に、交際もあるんだから、仕方がないといえばそれまでだけれどもね……」 姉のいう事は女だけに随分曲りくねっていた。なかなか容易な事で目的地へ達しそうになかったけれども、その主意は健三によく解った。つまり月々遣る小遣をもう少し増してくれというのだろうと思った。今でさえそれをよく夫から借りられてしまうという話を耳にしている彼には、この請求が憐れでもあり、また腹立たしくもあった。 「どうか姉さんを助けると思ってね。姉さんだってこの身体じゃどうせ長い事もあるまいから」 これが姉の口から出た最後の言葉であった。健三はそれでも厭だとはいいかねた。 七 彼はこれから宅へ帰って今夜中に片付けなければならない明日の仕事を有っていた。時間の価値というものを少しも認めないこの姉と対坐して、何時までも、ベんべんと喋舌っているのは、彼にとって多少の苦痛に違なかった。彼は好加減に帰ろうとした。そうして帰る間際になってやっと帽子を被らない男の事をいい出した。 「実はこの間島田に会ったんですがね」 「へえどこで」 姉は吃驚したような声を出した。姉は無教育な東京ものによく見るわざとらしい仰山な表情をしたがる女であった。 「太田の原の傍です」 「じゃ御前さんのじき近所じゃないか。どうしたい、何か言葉でも掛けたかい」 「掛けるって、別に言葉の掛けようもないんだから」 「そうさね。健ちゃんの方から何とかいわなきゃ、向で口なんぞ利けた義理でもないんだから」 姉の言葉は出来るだけ健三の意を迎えるような調子であった。彼女は健三に「どんな服装をしていたい」と訊き足した後で、「じゃやッぱり楽でもないんだね」といった。其所には多少の同情も籠っているように見えた。しかし男の昔を話し出した時にはさもさも悪らしそうな語気を用い始めた。 「なんぼ因業だって、あんな因業な人ったらありゃしないよ。今日が期限だから、是が非でも取って行くって、いくら言訳をいっても、坐り込んで動かないんだもの。しまいにこっちも腹が立ったから、御気の毒さま、御金はありませんが、品物で好ければ、御鍋でも御釜でも持ってって下さいっていったらね、じゃ釜を持ってくっていうんだよ。あきれるじゃないか」 「釜を持って行くったって、重くってとても持てやしないでしょう」 「ところがあの業突張の事だから、どんな事をして持ってかないとも限らないのさ。そらその日の御飯をあたしに炊かせまいと思って、そういう意地の悪い事をする人なんだからね。どうせ先へ寄って好い事あないはずだあね」 健三の耳にはこの話がただの滑稽としては聞こえなかった。その人と姉との間に起ったこんな交渉のなかに引絡まっている古い自分の影法師は、彼に取って可笑しいというよりもむしろ悲しいものであった。 「私ゃ島田に二度会ったんですよ、姉さん。これから先また何時会うか分らないんだ」 「いいから知らん顔をして御出でよ。何度会ったって構わないじゃないか」 「しかしわざわざ彼所いらを通って、私の宅でも探しているんだか、また用があって通りがかりに偶然出ッくわしたんだか、それが分らないんでね」 この疑問は姉にも解けなかった。彼女はただ健三に都合の好さそうな言葉を無意味に使った。それが健三には空御世辞のごとく響いた。 「こちらへはその後まるで来ないんですか」 「ああこの二、三年はまるっきり来ないよ」 「その前は？」 「その前はね、ちょくちょくってほどでもないが、それでも時々は来たのさ。それがまた可笑しいんだよ。来ると何時でも十一時頃でね。鰻飯かなにか食べさせないと決して帰らないんだからね。三度の御まんまを一かたけでも好いから他の家で食べようっていうのがつまりあの人の腹なんだよ。そのくせ服装なんかかなりなものを着ているんだがね。……」 姉のいう事は脱線しがちであったけれども、それを聴いている健三には、やはり金銭上の問題で、自分が東京を去ったあとも、なお多少の交際が二人の間に持続されていたのだという見当はついた。しかしそれ以上何も知る事は出来なかった。目下の島田については全く分らなかった。 ";

	    var getObamaDemoText = function() {
	        return obamaDemoText;
	    }

	    var getGahndiDemoText = function() {
	        return gahndiDemoText;
	    }

	    var getMichikusaDemoText = function() {
	        return michijusDemoText;
	    }


	    demoTextFactory.getObamaText = getObamaDemoText;
	    demoTextFactory.getGahndiText = getGahndiDemoText;
	    demoTextFactory.getMichikiusaText = getMichikusaDemoText;

	    return demoTextFactory;
	})

/***/ },
/* 9 */
/***/ function(module, exports) {

	angular.module('app').factory('toastrService',
	       function () {
	           var toastrServiceFactory = {};

	           var toastSuccess = function (message, title, position) {
	               var p = "toast-top-center";
	               if (position.toLowerCase() === "top-center") {
	                   p = "toast-top-center";
	               } else if (position.toLowerCase() === "top-left") {
	                   p = "toast-top-left";
	               } else if (position.toLowerCase() === "top-right") {
	                   p = "toast-top-left";
	               } else if (position.toLowerCase() === "top-full") {
	                   p = "toast-top-full-width";
	               } else if (position.toLowerCase() === "bottom-left") {
	                   p = "toast-bottom-left";
	               } else if (position.toLowerCase() === "bottom-right") {
	                   p = "toast-bottom-right";
	               } else if (position.toLowerCase() === "bottom-center") {
	                   p = "toast-bottom-center";
	               } else if (position.toLowerCase() === "bottom-full") {
	                   p = "toast-bottom-full-width";
	               }
	               toastr.options = {
	                   "closeButton": true,
	                   "debug": false,
	                   "newestOnTop": false,
	                   "progressBar": false,
	                   "positionClass": p,
	                   "preventDuplicates": true,
	                   "onclick": null,
	                   "showDuration": "300",
	                   "hideDuration": "1000",
	                   "timeOut": "5000",
	                   "extendedTimeOut": "1000",
	                   "showEasing": "swing",
	                   "hideEasing": "linear",
	                   "showMethod": "fadeIn",
	                   "hideMethod": "fadeOut"
	               }
	               toastr.success(message, title);
	           }

	           var toastInfo = function (message, title, position) {
	               var p = "toast-top-center";
	               if (position.toLowerCase() === "top-center") {
	                   p = "toast-top-center";
	               } else if (position.toLowerCase() === "top-left") {
	                   p = "toast-top-left";
	               } else if (position.toLowerCase() === "top-right") {
	                   p = "toast-top-left";
	               } else if (position.toLowerCase() === "top-full") {
	                   p = "toast-top-full-width";
	               } else if (position.toLowerCase() === "bottom-left") {
	                   p = "toast-bottom-left";
	               } else if (position.toLowerCase() === "bottom-right") {
	                   p = "toast-bottom-right";
	               } else if (position.toLowerCase() === "bottom-center") {
	                   p = "toast-bottom-center";
	               } else if (position.toLowerCase() === "bottom-full") {
	                   p = "toast-bottom-full-width";
	               }
	               toastr.options = {
	                   "closeButton": true,
	                   "debug": false,
	                   "newestOnTop": false,
	                   "progressBar": false,
	                   "positionClass": p,
	                   "preventDuplicates": true,
	                   "onclick": null,
	                   "showDuration": "300",
	                   "hideDuration": "1000",
	                   "timeOut": "5000",
	                   "extendedTimeOut": "1000",
	                   "showEasing": "swing",
	                   "hideEasing": "linear",
	                   "showMethod": "fadeIn",
	                   "hideMethod": "fadeOut"
	               }
	               toastr.info(message, title);
	           }

	           var toastWarning = function (message, title, position) {
	               var p = "toast-top-center";
	               if (position.toLowerCase() === "top-center") {
	                   p = "toast-top-center";
	               } else if (position.toLowerCase() === "top-left") {
	                   p = "toast-top-left";
	               } else if (position.toLowerCase() === "top-right") {
	                   p = "toast-top-left";
	               } else if (position.toLowerCase() === "top-full") {
	                   p = "toast-top-full-width";
	               } else if (position.toLowerCase() === "bottom-left") {
	                   p = "toast-bottom-left";
	               } else if (position.toLowerCase() === "bottom-right") {
	                   p = "toast-bottom-right";
	               } else if (position.toLowerCase() === "bottom-center") {
	                   p = "toast-bottom-center";
	               } else if (position.toLowerCase() === "bottom-full") {
	                   p = "toast-bottom-full-width";
	               }
	               toastr.options = {
	                   "closeButton": true,
	                   "debug": false,
	                   "newestOnTop": false,
	                   "progressBar": false,
	                   "positionClass": p,
	                   "preventDuplicates": true,
	                   "onclick": null,
	                   "showDuration": "300",
	                   "hideDuration": "1000",
	                   "timeOut": "5000",
	                   "extendedTimeOut": "1000",
	                   "showEasing": "swing",
	                   "hideEasing": "linear",
	                   "showMethod": "fadeIn",
	                   "hideMethod": "fadeOut"
	               }
	               toastr.warning(message, title);
	           }

	           var toastError = function (message, title, position) {
	               var p = "toast-top-center";
	               if (position.toLowerCase() === "top-center") {
	                   p = "toast-top-center";
	               } else if (position.toLowerCase() === "top-left") {
	                   p = "toast-top-left";
	               } else if (position.toLowerCase() === "top-right") {
	                   p = "toast-top-left";
	               } else if (position.toLowerCase() === "top-full") {
	                   p = "toast-top-full-width";
	               } else if (position.toLowerCase() === "bottom-left") {
	                   p = "toast-bottom-left";
	               } else if (position.toLowerCase() === "bottom-right") {
	                   p = "toast-bottom-right";
	               } else if (position.toLowerCase() === "bottom-center") {
	                   p = "toast-bottom-center";
	               } else if (position.toLowerCase() === "bottom-full") {
	                   p = "toast-bottom-full-width";
	               }
	               toastr.options = {
	                   "closeButton": true,
	                   "debug": false,
	                   "newestOnTop": false,
	                   "progressBar": false,
	                   "positionClass": p,
	                   "preventDuplicates": true,
	                   "onclick": null,
	                   "showDuration": "300",
	                   "hideDuration": "1000",
	                   "timeOut": "5000",
	                   "extendedTimeOut": "1000",
	                   "showEasing": "swing",
	                   "hideEasing": "linear",
	                   "showMethod": "fadeIn",
	                   "hideMethod": "fadeOut"
	               }
	               toastr.error(message, title);
	           }


	           toastrServiceFactory.success = toastSuccess;
	           toastrServiceFactory.info = toastInfo;
	           toastrServiceFactory.warning = toastWarning;
	           toastrServiceFactory.error = toastError;
	           


	           return toastrServiceFactory;
	           //}]);
	       });

/***/ }
]);