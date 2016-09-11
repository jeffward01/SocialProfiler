'use strict'
app.controller('homeController',
[
    '$scope', 'toastrService', function ($scope, toastrService) {

        $scope.PageTitle = "Social Profiler";
        $scope.emotionalRangeViewAll = false;
        $scope.opennessViewAll = false;
        $scope.conscientiousnessViewAll = false;
        $scope.introVersionExtroViewAll = false;
        $scope.aggreeabilitynessViewAll = false;
        $scope.expandConsumerNeeds = false;

        $scope.toggleConsumerNeeds = function() {
            $scope.expandConsumerNeeds = !$scope.expandConsumerNeeds;
        }
        $scope.teggleEmotionalRange = function () {
            $scope.emotionalRangeViewAll = !$scope.emotionalRangeViewAll;
        }
       
        $scope.toggleOpenness = function() {
            $scope.opennessViewAll = !$scope.opennessViewAll;
        }

        $scope.toggleConscientiousness = function() {
            $scope.conscientiousnessViewAll = !$scope.conscientiousnessViewAll;
        }

        $scope.toggleIntroExtra = function() {
            $scope.introVersionExtroViewAll = !$scope.introVersionExtroViewAll;
        }

        $scope.toggleAgreeability = function() {
            $scope.aggreeabilitynessViewAll = !$scope.aggreeabilitynessViewAll;
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